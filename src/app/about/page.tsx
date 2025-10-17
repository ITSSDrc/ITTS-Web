import Image from "next/image";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - ITSS',
  description: 'Learn about the history, mission, and the talented team behind ITSS.',
};

const teamMembers = [
  { name: "Alice Johnson", role: "CEO & Founder", imageId: "team-member-1", initials: "AJ" },
  { name: "Bob Williams", role: "Chief Technology Officer", imageId: "team-member-2", initials: "BW" },
  { name: "Charlie Brown", role: "Lead Cloud Architect", imageId: "team-member-3", initials: "CB" },
  { name: "Diana Prince", role: "Head of Cybersecurity", imageId: "team-member-4", initials: "DP" },
];

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-us-hero');
  const teamImages = PlaceHolderImages.filter(p => p.id.startsWith('team-member'));

  return (
    <>
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-secondary">
        {aboutHeroImage && (
          <Image
            src={aboutHeroImage.imageUrl}
            alt={aboutHeroImage.description}
            fill
            className="object-cover"
            data-ai-hint={aboutHeroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl font-headline font-bold md:text-5xl">About ITSS</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            A team of passionate technologists dedicated to your success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline font-bold text-primary">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2015, ITSS started with a simple yet powerful idea: to make enterprise-level technology solutions accessible to businesses of all sizes. Our founders, a group of seasoned IT professionals, saw a gap in the market for a service provider that was not just a vendor, but a true technology partner.
              </p>
              <p className="mt-4 text-muted-foreground">
                Over the years, we've grown from a small startup into a leading provider of IT services, but our core values remain unchanged. We are driven by a passion for technology, a commitment to our clients' success, and a culture of continuous learning and innovation.
              </p>
            </div>
            <div className="order-1 md:order-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Our Core Values</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Innovation</h3>
                            <p className="text-sm text-muted-foreground">We constantly explore new technologies to deliver cutting-edge solutions.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Partnership</h3>
                            <p className="text-sm text-muted-foreground">We work with you, not just for you, to achieve shared goals.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Integrity</h3>
                            <p className="text-sm text-muted-foreground">We believe in transparent and honest communication in all our dealings.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold md:text-4xl">Meet the Team</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              The experts behind our success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const memberImage = teamImages.find(img => img.id === member.imageId);
              return (
                <div key={member.name} className="text-center">
                  <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary/10">
                    {memberImage && <AvatarImage src={memberImage.imageUrl} alt={`Photo of ${member.name}`} data-ai-hint={memberImage.imageHint} />}
                    <AvatarFallback className="text-3xl">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}
