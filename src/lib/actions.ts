
"use server";

import { z } from "zod";
import * as React from 'react';
import nodemailer from "nodemailer";

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

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO_EMAIL,
      subject: subject || 'Nouveau message depuis le site ITSS',
      replyTo: email,
      html: `<h1>Nouveau message de ${name} (${email})</h1><p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    return {
      message: "Merci pour votre message ! Nous vous répondrons sous peu.",
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      message: "Une erreur est survenue lors de l'envoi de l'e-mail. Veuillez réessayer.",
      success: false,
    };
  }
}
