"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { recommendSolution } from "@/ai/flows/solution-recommender-flow";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function SolutionRecommender() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ recommendation: string; suggestedServices: string[] } | null>(null);

  async function handleSearch() {
    if (!description.trim()) return;
    setLoading(true);
    try {
      const res = await recommendSolution({ description });
      setResult(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-md shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="h-24 w-24 text-primary" />
        </div>
        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl md:text-3xl font-headline font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Trouvez votre solution idéale
          </CardTitle>
          <CardDescription className="text-lg">
            Décrivez brièvement votre défi technique, et notre IA vous recommandera les services ITSS les plus adaptés.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <div className="space-y-4">
            <Textarea 
              placeholder="Ex: Je souhaite digitaliser la gestion de mes stocks pour ma boutique à Bunia..."
              className="min-h-[120px] text-lg bg-background/50"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button 
                onClick={handleSearch} 
                disabled={loading || !description.trim()} 
                className="w-full md:w-auto text-lg py-6 px-8 rounded-full"
            >
              {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5" />}
              {loading ? "Analyse en cours..." : "Obtenir une recommandation"}
            </Button>
          </div>

          {result && (
            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Notre Recommandation
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                "{result.recommendation}"
              </p>
              <div className="space-y-4">
                <p className="font-semibold text-sm uppercase tracking-widest text-primary">Services Suggérés :</p>
                <div className="flex flex-wrap gap-2">
                  {result.suggestedServices.map(service => (
                    <Badge key={service} variant="secondary" className="px-4 py-1 text-sm bg-background border">
                        {service}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button asChild variant="link" className="group text-lg">
                    <Link href="/contact">
                        Discuter de ce projet <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
