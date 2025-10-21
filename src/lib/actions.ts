"use server";

import { z } from "zod";

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
  
  // Here you would normally send an email, save to a database, etc.
  // For this example, we'll just log it to the console.
  console.log("Formulaire de contact soumis avec succès :");
  console.log(validatedFields.data);

  return {
    message: "Merci pour votre message ! Nous vous répondrons sous peu.",
    success: true,
  };
}
