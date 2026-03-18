# ITSS DRC - Système d'Invitations

Ce projet inclut une plateforme de visualisation d'invitations électroniques intégrée à votre backend Supabase.

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

Assurez-vous que votre projet Supabase contient les tables suivantes :

1.  **events** : `id`, `title`, `date`, `location`, `image_url`, `description`.
2.  **guests** : `id`, `name`, `email`, `status`.
3.  **invitations** : `id`, `token` (unique), `event_id`, `guest_id`, `status`, `viewed_at`.

### ⚠️ Sécurité et Protection des Données

Comme les clés `NEXT_PUBLIC` sont visibles côté client, la sécurité repose sur le **Row Level Security (RLS)** de Supabase :

1.  Allez dans votre tableau de bord Supabase > **Authentication** > **Policies**.
2.  Activez le RLS pour les tables `invitations`, `events`, et `guests`.
3.  Créez une politique "Select" publique pour permettre la lecture des invitations uniquement via le token.
4.  **Ne partagez jamais** votre `SERVICE_ROLE_KEY`, elle donne un accès total sans restriction.

### Déploiement

Le projet est prêt pour Vercel. Les variables d'environnement Supabase doivent être configurées dans le tableau de bord Vercel.

```bash
# Tester en local
npm run dev
# Accéder à : http://localhost:9002/invitation/votre-token
```