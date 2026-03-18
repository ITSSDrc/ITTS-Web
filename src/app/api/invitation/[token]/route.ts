
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  if (!token) {
    return NextResponse.json({ error: 'Token manquant' }, { status: 400 });
  }

  if (!supabase) {
    return NextResponse.json({ error: 'Configuration Supabase manquante' }, { status: 500 });
  }

  // Jointure des trois tables : invitations, events, guests
  const { data: invitation, error } = await supabase
    .from('invitations')
    .select(`
      *,
      event:events (*),
      guest:guests (*)
    `)
    .eq('token', token)
    .maybeSingle();

  if (error || !invitation) {
    console.error('Supabase error or invitation not found:', error);
    return NextResponse.json({ error: 'Invitation non trouvée' }, { status: 404 });
  }

  // Marquer comme vue si ce n'est pas déjà fait
  if (invitation.status === 'pending') {
    await supabase
      .from('invitations')
      .update({ 
        viewed_at: new Date().toISOString(),
        status: 'viewed' 
      })
      .eq('token', token);
  }

  return NextResponse.json(invitation);
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const { status } = await request.json(); // 'confirmed' ou 'declined'

  if (!['confirmed', 'declined'].includes(status)) {
    return NextResponse.json({ error: 'Statut invalide' }, { status: 400 });
  }

  if (!supabase) {
    return NextResponse.json({ error: 'Configuration Supabase manquante' }, { status: 500 });
  }

  // Récupérer l'invitation pour avoir les IDs
  const { data: invitation, error: fetchError } = await supabase
    .from('invitations')
    .select('id, guest_id')
    .eq('token', token)
    .single();

  if (fetchError || !invitation) {
    return NextResponse.json({ error: 'Invitation non trouvée' }, { status: 404 });
  }

  const now = new Date().toISOString();
  
  // Mise à jour de l'invitation
  const invitationUpdates: any = { status };
  if (status === 'confirmed') invitationUpdates.confirmed_at = now;
  if (status === 'declined') invitationUpdates.declined_at = now;

  const { error: invError } = await supabase
    .from('invitations')
    .update(invitationUpdates)
    .eq('token', token);

  // Mise à jour du statut du guest
  const guestStatus = status === 'confirmed' ? 'confirmed' : 'cancelled';
  const { error: guestError } = await supabase
    .from('guests')
    .update({ status: guestStatus })
    .eq('id', invitation.guest_id);

  if (invError || guestError) {
    console.error('Update error:', { invError, guestError });
    return NextResponse.json({ error: 'Erreur de mise à jour' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
