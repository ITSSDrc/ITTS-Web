
"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

type GalleryImage = {
  src: string;
  alt: string;
  hint: string;
};

interface ImageGalleryProps {
  gallery: GalleryImage[];
}

export function ImageGallery({ gallery }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {gallery.map((img, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div className="overflow-hidden rounded-lg group aspect-square cursor-zoom-in">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={img.hint}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-2 sm:p-4">
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
