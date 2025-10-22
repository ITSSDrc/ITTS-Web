
import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Nouveau message depuis le formulaire de contact</h1>
    <p>
      Vous avez reçu un nouveau message de <strong>{name}</strong> ({email}).
    </p>
    <h2>Message :</h2>
    <p>{message}</p>
  </div>
);
