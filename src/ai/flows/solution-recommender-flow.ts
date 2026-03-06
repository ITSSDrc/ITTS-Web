'use server';
/**
 * @fileOverview Un agent IA qui recommande des services ITSS en fonction des besoins du client.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SolutionInputSchema = z.object({
  description: z.string().describe('La description du problème ou du besoin du client.'),
});

const SolutionOutputSchema = z.object({
  recommendation: z.string().describe('Une recommandation personnalisée et encourageante.'),
  suggestedServices: z.array(z.string()).describe('Liste des services ITSS pertinents.'),
});

export async function recommendSolution(input: { description: string }) {
  return solutionRecommenderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solutionRecommenderPrompt',
  input: { schema: SolutionInputSchema },
  output: { schema: SolutionOutputSchema },
  prompt: `Tu es un conseiller expert en stratégie numérique chez ITSS DRC à Bunia. 
  Ton but est d'aider un client potentiel à identifier les services ITSS qui répondent le mieux à ses besoins.
  
  Services disponibles chez ITSS : 
  - Solutions Cloud (Migration, AWS, Azure, Google Cloud)
  - Logiciels sur Mesure (Web, Mobile, API)
  - Design UI/UX (Prototypage, Identité visuelle)
  - Cybersécurité (Audits, Protection de données)
  - Infrastructure & Réseau (Fibre, Wi-Fi, LAN/WAN)
  - Analyse de Données & BI (Tableaux de bord, ETL)
  - Conseil en IA & DevOps (Automatisation, Pipelines CI/CD)
  - Maintenance Matériel (Réparation PC, Serveurs)

  Analyse le besoin suivant : "{{{description}}}"
  
  Réponds en français de manière professionnelle et concise. Propose 1 à 3 services maximum.`,
});

const solutionRecommenderFlow = ai.defineFlow(
  {
    name: 'solutionRecommenderFlow',
    inputSchema: SolutionInputSchema,
    outputSchema: SolutionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) throw new Error("Erreur lors de la génération de la recommandation.");
    return output;
  }
);
