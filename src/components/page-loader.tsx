"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const Loader = () => {
    const logo = PlaceHolderImages.find(p => p.id === 'itss-logo');
    return (
        <div className="flex items-center justify-center h-full w-full">
            {logo && (
                <Image
                    src={logo.imageUrl}
                    alt="ITSS Logo"
                    width={128}
                    height={128}
                    className="animate-pulse"
                    priority
                />
            )}
        </div>
    );
}

export const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <Loader />
      </div>
      <div className={cn("transition-opacity duration-300", loading ? "opacity-0" : "opacity-100")}>
        {children}
      </div>
    </>
  );
};
