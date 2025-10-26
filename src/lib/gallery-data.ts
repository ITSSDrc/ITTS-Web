
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
    ].filter(Boolean) as GalleryImage[]
  },
];
