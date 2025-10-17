import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - ITSS',
  description: 'Get in touch with the ITSS team for inquiries, quotes, or support.',
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-headline font-bold md:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Contact Form</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
            <div className="space-y-8">
                <h2 className="text-3xl font-headline font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                    Alternatively, you can reach us through the following channels. We look forward to connecting with you!
                </p>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Email</h3>
                            <p className="text-muted-foreground">General Inquiries & Sales</p>
                            <a href="mailto:contact@itss.com" className="text-primary hover:underline">
                                contact@itss.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Phone</h3>
                            <p className="text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
                            <a href="tel:+1234567890" className="text-primary hover:underline">
                                (123) 456-7890
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Office</h3>
                            <p className="text-muted-foreground">123 Tech Avenue</p>
                            <p className="text-primary">Innovation City, TX 12345</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
