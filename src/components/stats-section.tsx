
"use client";

import { useEffect, useState, useRef } from "react";
import { FadeInOnScroll } from "./fade-in-on-scroll";

const stats = [
  { label: "Projets Livrés", value: 120, suffix: "+" },
  { label: "Clients Satisfaits", value: 85, suffix: "+" },
  { label: "Experts Techniques", value: 15, suffix: "" },
  { label: "Années d'Expérience", value: 9, suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countRef.current) {
          countRef.current = true;
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={elementRef} className="text-3xl md:text-5xl font-bold text-primary font-headline">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-12 border-y bg-background/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-muted-foreground font-medium uppercase tracking-wider text-xs md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
