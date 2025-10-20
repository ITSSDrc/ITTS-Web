
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";


const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'blog-hero');
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <>
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-20"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Le Blog ITSS</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Nos analyses, tutoriels et réflexions sur les technologies qui façonnent l'avenir de Bunia et de la RDC.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.slice(0, visiblePosts).map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden group">
                <CardHeader className="p-0">
                  {post.image && (
                    <Link href={`/blog/${post.id}`} className="block aspect-video overflow-hidden">
                      <Image
                        src={post.image.imageUrl}
                        alt={post.image.description}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={post.image.imageHint}
                      />
                    </Link>
                  )}
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-4">
                        <Badge variant="outline" className="text-primary border-primary">{post.category}</Badge>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                    <h2 className="text-2xl font-headline font-semibold mb-4">
                        <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="mt-6">
                    <Button variant="link" className="p-0 text-lg" asChild>
                      <Link href={`/blog/${post.id}`}>Lire la suite <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
           {visiblePosts < blogPosts.length && (
            <div className="text-center mt-20">
                <Button size="lg" variant="outline" onClick={loadMorePosts}>
                  Charger plus d'articles
                </Button>
              </div>
            )}
        </div>
      </section>
    </>
  );
}
