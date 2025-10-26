
import { PlaceHolderImages } from "@/lib/placeholder-images";

type GalleryImage = {
  src: string;
  alt: string;
  hint: string;
};

export const practicalActivities = [
  {
    id: 'team-upskilling',
    title: 'Séances de Formation Interne',
    description: "Nous croyons en l'amélioration continue. Notre équipe participe régulièrement à des ateliers et des formations pour rester à la pointe des dernières technologies et méthodologies.",
    gallery: [
      PlaceHolderImages.find(p => p.id === 'training-session-1'),
      PlaceHolderImages.find(p => p.id === 'training-session-2'),
      PlaceHolderImages.find(p => p.id === 'training-session-3'),
      PlaceHolderImages.find(p => p.id === 'training-session-4'),
      PlaceHolderImages.find(p => p.id === 'training-session-5'),
      PlaceHolderImages.find(p => p.id === 'training-session-6'),
      PlaceHolderImages.find(p => p.id === 'training-session-7'),
      PlaceHolderImages.find(p => p.id === 'training-session-8'),
      PlaceHolderImages.find(p => p.id === 'training-session-9'),
      PlaceHolderImages.find(p => p.id === 'training-session-10'),
    ].filter(Boolean) as GalleryImage[]
  },
  {
    id: 'network-deployment-event',
    title: 'Déploiement Réseau sur le Terrain',
    description: "Nos équipes techniques en action, déployant des infrastructures réseau robustes pour connecter les entreprises et les communautés.",
    gallery: [
      PlaceHolderImages.find(p => p.id === 'network-gallery-1'),
      PlaceHolderImages.find(p => p.id === 'network-gallery-2'),
      PlaceHolderImages.find(p => p.id === 'network-gallery-3'),
      PlaceHolderImages.find(p => p.id === 'network-gallery-4'),
    ].filter(Boolean) as GalleryImage[]
  },
  {
    id: 'client-project-presentation',
    title: 'Présentation de Projets Clients',
    description: "De la conception à la livraison, nous collaborons étroitement avec nos clients pour garantir que leur vision devienne une réalité.",
    gallery: [
      PlaceHolderImages.find(p => p.id === 'presentation-gallery-1'),
      PlaceHolderImages.find(p => p.id === 'presentation-gallery-2'),
      PlaceHolderImages.find(p => p.id === 'presentation-gallery-3'),
      PlaceHolderImages.find(p => p.id === 'presentation-gallery-4'),
    ].filter(Boolean) as GalleryImage[]
  }
];
