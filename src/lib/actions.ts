"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères."),
  email: z.string().email("Adresse e-mail invalide."),
  message: z.string().min(10, "Le message doit comporter au moins 10 caractères."),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "La validation a échoué. Veuillez vérifier vos entrées.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  // Ici, vous enverriez normalement un e-mail, enregistreriez dans une base de données, etc.
  // Pour cet exemple, nous allons simplement le journaliser dans la console.
  console.log("Formulaire de contact soumis avec succès :");
  console.log(validatedFields.data);

  return {
    message: "Merci pour votre message ! Nous vous répondrons sous peu.",
    success: true,
  };
}
