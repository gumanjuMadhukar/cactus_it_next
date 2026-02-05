'use client';

import { motion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE } from '@/content/site';
import Image from 'next/image';
import { useEffect } from 'react';

export function Hero() {
  // For floating elements - gentle random-ish motion
  const y1 = useMotionValue(0);
  const y2 = useMotionValue(0);
  const y3 = useMotionValue(0);
  const y4 = useMotionValue(0);

  // Spring physics for smooth floating
  const springConfig = { damping: 15, stiffness: 80 };

  // Animate infinite subtle float (different speeds/phases)
  useEffect(() => {
    const controls = [
      animate(y1, [0, -20, 0, -15, 0], { repeat: Infinity, duration: 12, ease: 'easeInOut' }),
      animate(y2, [0, -25, 0, -10, 0], { repeat: Infinity, duration: 14, ease: 'easeInOut', delay: 1.5 }),
      animate(y3, [0, -18, 0, -22, 0], { repeat: Infinity, duration: 16, ease: 'easeInOut', delay: 3 }),
      animate(y4, [0, -15, 0, -28, 0], { repeat: Infinity, duration: 18, ease: 'easeInOut', delay: 4.5 }),
    ];

    return () => controls.forEach((c) => c.stop());
  }, [y1, y2, y3, y4]);

  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-32 md:pt-24">
      {/* Premium background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cactus-400/10 blur-3xl" />
        <div className="absolute -bottom-32 left-20 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute right-10 top-40 h-64 w-64 rounded-full bg-purple-200/15 blur-3xl" />
      </div>

      {/* Floating premium tech illustrations (3–4 elements) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        {/* 1. Laptop / Web Development */}
        <motion.div
          style={{ y: useSpring(y1, springConfig), rotate: -3 }}
          className="absolute left-[8%] top-[15%] h-40 w-40 opacity-70 drop-shadow-2xl transition-transform hover:scale-110 hover:opacity-90"
          whileHover={{ scale: 1.15, rotate: 0 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400"
            alt="Laptop code floating"
            width={160}
            height={160}
            className="rounded-2xl object-cover shadow-2xl ring-1 ring-slate-200/50"
          />
        </motion.div>

        {/* 2. Mobile App */}
        <motion.div
          style={{ y: useSpring(y2, springConfig), rotate: 4 }}
          className="absolute right-[12%] top-[22%] h-36 w-28 opacity-75 drop-shadow-2xl transition-transform hover:scale-110 hover:opacity-90"
          whileHover={{ scale: 1.18, rotate: 0 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=300"
            alt="Mobile app interface floating"
            width={112}
            height={144}
            className="rounded-3xl object-cover shadow-2xl ring-1 ring-slate-200/50"
          />
        </motion.div>

        {/*3. Digital Marketing / Growth Graph */}
        <motion.div
          style={{ y: useSpring(y4, springConfig), rotate: 6 }}
          className="absolute right-[15%] bottom-[25%] h-32 w-40 opacity-70 drop-shadow-2xl transition-transform hover:scale-110 hover:opacity-90"
          whileHover={{ scale: 1.15, rotate: 0 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400"
            alt="Growth analytics chart floating"
            width={160}
            height={128}
            className="rounded-xl object-cover shadow-2xl ring-1 ring-slate-200/50"
          />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-6">
        <div className="mx-auto max-w-3xl text-center md:text-left">
          {/* Badge with entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-md backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-cactus-600" />
            End-To-End Digital & IT Services
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl"
          >
            {SITE.tagline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            We help startups, SMBs, and enterprises build reliable software, modern websites, mobile apps, and data-driven growth systems.
          </motion.p>

          {/* Trusted badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:justify-start"
          >
            <span className="font-semibold text-slate-900">Trusted delivery:</span>
            <span className="rounded-full bg-slate-100/80 px-4 py-1.5 text-sm backdrop-blur-sm">Fast iterations</span>
            <span className="rounded-full bg-slate-100/80 px-4 py-1.5 text-sm backdrop-blur-sm">Secure-by-default</span>
            <span className="rounded-full bg-slate-100/80 px-4 py-1.5 text-sm backdrop-blur-sm">Scalable architecture</span>
          </motion.div>

          {/* CTA hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 text-base text-slate-500"
          >
            Prefer email?{' '}
            <Link className="font-semibold text-cactus-600 hover:text-cactus-800 underline underline-offset-4" href="/contact">
              Get a free consultation
            </Link>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
}