# ITSS DRC - Système d'Invitations

Ce projet inclut désormais une plateforme de visualisation d'invitations électroniques intégrée à votre backend Supabase.

## Système d'Invitations Premium

Le système permet d'afficher des cartes d'invitation personnalisées via des liens uniques générés par votre application Flutter.

### Format du lien pour Flutter

Pour que l'invitation s'ouvre correctement sur le site, votre application Flutter doit générer des URLs au format suivant :

```text
https://itssdrc.com/invitation/{token}
```

**Exemple en Dart :**
`String link = "https://itssdrc.com/invitation/${invitation.token}";`

### Configuration de la base de données (Supabase)

Pour que l'intégration fonctionne, assurez-vous que votre projet Supabase contient les tables suivantes :

1.  **events** :
    - `id` (uuid)
    - `title` (text)
    - `date` (timestamptz)
    - `location` (text)
    - `image_url` (text)
    - `description` (text)

2.  **guests** :
    - `id` (uuid)
    - `name` (text)
    - `email` (text)
    - `status` (text: 'pending', 'attending', 'not_attending')

3.  **invitations** :
    - `id` (uuid)
    - `token` (text, unique) <- **C'est cette valeur qui est utilisée dans l'URL**
    - `event_id` (uuid, FK events)
    - `guest_id` (uuid, FK guests)
    - `status` (text: 'sent', 'viewed', 'confirmed', 'declined')
    - `viewed_at` (timestamptz)

### Variables d'environnement

Assurez-vous que les variables suivantes sont configurées dans Vercel :

- `NEXT_PUBLIC_SUPABASE_URL` : URL de votre projet Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` : Clé API anonyme de votre projet Supabase.

## Déploiement

Le projet est optimisé pour Vercel. Les dépendances `@supabase/supabase-js` et `qrcode.react` sont incluses.
