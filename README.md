# ITSS DRC - Système d'Invitations

Ce projet inclut désormais une plateforme de visualisation d'invitations électroniques intégrée à votre backend Supabase.

## Système d'Invitations

Le système permet d'afficher des cartes d'invitation personnalisées via des liens uniques générés par votre application Flutter.

### Comment accéder à une invitation ?

La route est dynamique : `/invitation/[token]`.

1. **Localement** : `http://localhost:9002/invitation/<token-unique>`
2. **Production** : `https://itssdrc.com/invitation/<token-unique>`

### Configuration Requise (Variables d'environnement)

Assurez-vous que les variables suivantes sont configurées dans Vercel :

- `NEXT_PUBLIC_SUPABASE_URL` : URL de votre projet Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` : Clé API anonyme de votre projet Supabase.

### Structure de la base de données (Supabase)

Pour que l'intégration fonctionne, vos tables doivent suivre cette structure :

- **events** : `id`, `title`, `date`, `location`, `image_url`, `description`.
- **guests** : `id`, `name`, `email`, `status` ('attending', 'not_attending', 'pending').
- **invitations** : `id`, `token` (unique string), `event_id`, `guest_id`, `status` ('sent', 'viewed', 'confirmed', 'declined'), `viewed_at`.

## Déploiement

Le projet est optimisé pour un déploiement sur Vercel. Les dépendances `@supabase/supabase-js` et `qrcode.react` seront installées automatiquement lors du build.
