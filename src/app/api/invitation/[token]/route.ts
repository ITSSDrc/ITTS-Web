
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

/**
 * GET /api/invitation/[token]
 * Récupère les détails de l'invitation.
 * Note: params est une Promise dans Next.js 15
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  if (!token) {
    return NextResponse.json({ error: 'Token manquant' }, { status: 400 });
  }

  // 1. Récupérer l'invitation avec les relations vers l'événement et l'invité
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

  // 2. Mettre à jour Viewed At si c'est la première fois que la carte est ouverte
  if (!invitation.viewed_at) {
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

/**
 * POST /api/invitation/[token]
 * Met à jour le statut de présence (confirmé ou décliné)
 */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const { status } = await request.json(); // attendu: 'confirmed' ou 'declined'

  if (!['confirmed', 'declined'].includes(status)) {
    return NextResponse.json({ error: 'Statut invalide' }, { status: 400 });
  }

  // 1. Vérifier que l'invitation existe
  const { data: invitation, error: fetchError } = await supabase
    .from('invitations')
    .select('id, guest_id')
    .eq('token', token)
    .single();

  if (fetchError || !invitation) {
    return NextResponse.json({ error: 'Invitation non trouvée' }, { status: 404 });
  }

  // 2. Mettre à jour le statut de l'invitation
  const { error: invError } = await supabase
    .from('invitations')
    .update({ status })
    .eq('token', token);

  // 3. Mettre à jour le statut de l'invité dans la table guests
  const { error: guestError } = await supabase
    .from('guests')
    .update({ status: status === 'confirmed' ? 'attending' : 'not_attending' })
    .eq('id', invitation.guest_id);

  if (invError || guestError) {
    console.error('Update error:', { invError, guestError });
    return NextResponse.json({ error: 'Erreur de mise à jour' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
