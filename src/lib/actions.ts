
"use server";

import { z } from "zod";
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/contact-email-template';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères."),
  email: z.string().email("Adresse e-mail invalide."),
  subject: z.string().optional(),
  message: z.string().min(10, "Le message doit comporter au moins 10 caractères."),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const subjectFromDisplay = formData.get("subject-display");
  const subjectFromHidden = formData.get("subject");

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: subjectFromDisplay || subjectFromHidden,
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "La validation a échoué. Veuillez vérifier vos entrées.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'ITSS Website <onboarding@resend.dev>',
      to: ['innovatechsolutionservice@gmail.com'],
      subject: subject || 'Nouveau message depuis le site ITSS',
      reply_to: email,
      react: ContactEmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        message: "Une erreur s'est produite lors de l'envoi de l'e-mail. Veuillez réessayer.",
        success: false,
      };
    }

    return {
      message: "Merci pour votre message ! Nous vous répondrons sous peu.",
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      message: "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
      success: false,
    };
  }
}
