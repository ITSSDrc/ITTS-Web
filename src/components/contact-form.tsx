"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { useSearchParams } from "next/navigation";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Envoyer le message
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject') || '';

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Succès !",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Erreur",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <input type="hidden" name="subject" value={subject} />
      <div>
        <Label htmlFor="name">Nom</Label>
        <Input id="name" name="name" type="text" placeholder="Votre Nom" required />
        {state.errors?.name && (
          <p className="text-sm font-medium text-destructive mt-2">
            {state.errors.name[0]}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
        {state.errors?.email && (
          <p className="text-sm font-medium text-destructive mt-2">
            {state.errors.email[0]}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="subject-display">Sujet</Label>
        <Input id="subject-display" name="subject-display" type="text" placeholder="Sujet de votre message" defaultValue={subject} required />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Comment pouvons-nous vous aider ?"
          rows={5}
          required
        />
        {state.errors?.message && (
          <p className="text-sm font-medium text-destructive mt-2">
            {state.errors.message[0]}
          </p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
