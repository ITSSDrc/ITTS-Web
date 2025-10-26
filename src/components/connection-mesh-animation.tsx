
'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ConnectionMeshAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[];
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 200, // Increased interaction radius
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    const handleMouseOut = () => {
        mouse.x = null;
        mouse.y = null;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      vx: number; // velocity x
      vy: number; // velocity y

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = 1.5; // Slightly larger particles
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 40) + 5; // Increased density range
        this.color = color;
        this.vx = (Math.random() - 0.5) * 0.5; // Initial random velocity
        this.vy = (Math.random() - 0.5) * 0.5; // Initial random velocity
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Interaction with mouse
        if (mouse.x !== null && mouse.y !== null) {
            let dx_mouse = mouse.x - this.x;
            let dy_mouse = mouse.y - this.y;
            let distance_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

            if (distance_mouse < mouse.radius) {
                let force = (mouse.radius - distance_mouse) / mouse.radius;
                this.x -= (dx_mouse / distance_mouse) * force * this.density * 0.1;
                this.y -= (dy_mouse / distance_mouse) * force * this.density * 0.1;
            } else {
                 // Return to base position
                this.returnToBase();
            }
        } else {
             // Return to base position if mouse is out
            this.returnToBase();
        }
        
        // Add constant subtle movement
        this.x += this.vx;
        this.y += this.vy;

        // Wall bouncing
        if (this.x > canvas.width || this.x < 0) {
            this.vx *= -1;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.vy *= -1;
        }
      }

      returnToBase() {
        let dx_base = this.x - this.baseX;
        let dy_base = this.y - this.baseY;
        let distance_base = Math.sqrt(dx_base*dx_base + dy_base*dy_base);
        if (distance_base > 1) {
            this.x -= dx_base * 0.05;
            this.y -= dy_base * 0.05;
        } else {
            this.x = this.baseX;
            this.y = this.baseY;
        }
      }
    }

    const init = () => {
      particles = [];
      const isDark = theme === 'dark';
      const particleColor = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
      const numberOfParticles = (canvas.height * canvas.width) / 9000; // Adjusted density
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y, particleColor));
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const connect = () => {
      if (!ctx) return;
      let opacityValue = 1;
      const isDark = theme === 'dark';
      const lineColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = Math.sqrt(
            Math.pow(particles[a].x - particles[b].x, 2) +
            Math.pow(particles[a].y - particles[b].y, 2)
          );

          if (distance < 140) { // Increased connection distance
            opacityValue = 1 - (distance / 140);
            ctx.strokeStyle = lineColor.replace(/, [0-9.]+\)/, `, ${opacityValue})`);
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    });

    resizeObserver.observe(canvas);

    // Initial setup
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      resizeObserver.unobserve(canvas);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />;
}
