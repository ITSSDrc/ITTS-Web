
"use client";

import { useState } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { Button } from './ui/button';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setHasCopied(true);
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="not-prose relative my-6 rounded-lg bg-secondary text-sm">
        <div className="flex items-center justify-between px-4 py-2 border-b">
            <span className="text-muted-foreground">{language}</span>
             <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={copyToClipboard}
             >
                {hasCopied ? <Check className="h-4 w-4 text-accent" /> : <Clipboard className="h-4 w-4" />}
                <span className="sr-only">Copier</span>
            </Button>
        </div>
      <pre className="overflow-x-auto p-4">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
