import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token: rawToken } = await params;
    const token = rawToken?.trim();

    if (!token) {
      return NextResponse.json({ error: 'Token manquant' }, { status: 400 });
    }

    if (!supabase) {
      console.error('❌ Supabase non initialisé');
      return NextResponse.json({ error: 'Configuration Supabase manquante' }, { status: 500 });
    }

    console.log(`🔍 Recherche invitation pour token: ${token}`);

    // Requête avec jointures explicites
    const { data: invitation, error } = await supabase
      .from('invitations')
      .select(`
        *,
        event:events!invitations_event_id_fkey (*),
        guest:guests!invitations_guest_id_fkey (*)
      `)
      .eq('token', token)
      .maybeSingle();

    if (error) {
      console.error('❌ Erreur Supabase:', error);
      return NextResponse.json({ error: 'Erreur serveur lors de la recherche' }, { status: 500 });
    }

    if (!invitation) {
      console.warn(`⚠️ Invitation non trouvée pour le token: [${token}]`);
      
      // Vérifier si le token existe dans la table guests
      const { data: guest, error: guestError } = await supabase
        .from('guests')
        .select('*')
        .eq('qr_code_data', token)
        .maybeSingle();
      
      if (guestError) {
        console.error('❌ Erreur recherche guest:', guestError);
      }
      
      if (guest) {
        console.log(`✅ Invité trouvé dans guests avec token: ${token}`);
        // Créer une invitation manquante si nécessaire
        const { data: newInvitation, error: createError } = await supabase
          .from('invitations')
          .insert({
            event_id: guest.event_id,
            guest_id: guest.id,
            token: token,
            status: 'pending',
            sent_at: new Date().toISOString(),
          })
          .select()
          .single();
        
        if (createError) {
          console.error('❌ Erreur création invitation:', createError);
        } else {
          console.log('✅ Invitation créée automatiquement');
          return NextResponse.json({
            ...newInvitation,
            event: await supabase.from('events').select('*').eq('id', guest.event_id).single(),
            guest: guest,
          });
        }
      }
      
      return NextResponse.json({ error: 'Invitation non trouvée' }, { status: 404 });
    }

    console.log(`✅ Invitation trouvée pour ${invitation.guest?.first_name} ${invitation.guest?.last_name}`);

    // Marquer comme vue si ce n'est pas déjà fait
    if (invitation.status === 'pending') {
      await supabase
        .from('invitations')
        .update({ 
          viewed_at: new Date().toISOString(),
          status: 'viewed' 
        })
        .eq('token', token);
      console.log('👁️ Invitation marquée comme vue');
    }

    return NextResponse.json(invitation);
    
  } catch (error) {
    console.error('❌ Erreur inattendue:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token: rawToken } = await params;
    const token = rawToken?.trim();
    const { status } = await request.json();

    if (!['confirmed', 'declined'].includes(status)) {
      return NextResponse.json({ error: 'Statut invalide' }, { status: 400 });
    }

    if (!supabase) {
      return NextResponse.json({ error: 'Configuration Supabase manquante' }, { status: 500 });
    }

    console.log(`📝 Mise à jour invitation ${token} -> ${status}`);

    // Récupérer l'invitation
    const { data: invitation, error: fetchError } = await supabase
      .from('invitations')
      .select('id, guest_id')
      .eq('token', token)
      .maybeSingle();

    if (fetchError || !invitation) {
      console.warn(`⚠️ Invitation non trouvée pour le token: ${token}`);
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
      console.error('❌ Update error:', { invError, guestError });
      return NextResponse.json({ error: 'Erreur de mise à jour' }, { status: 500 });
    }

    console.log(`✅ Invitation ${status} avec succès`);
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('❌ Erreur inattendue:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}