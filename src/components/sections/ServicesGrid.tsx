'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '@/content/services';
import { Code2, Globe, Smartphone, BarChart3, Megaphone, Settings, Workflow } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const ICONS = {
  Code2,
  Globe,
  Smartphone,
  BarChart3,
  Megaphone,
  Settings,
  Workflow,
} as const;

// Fallback image if no image is provided in data
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80';

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const [activeTab, setActiveTab] = useState(0);
  const items = compact ? SERVICES.slice(0, 4) : SERVICES;

  // Early return / guard if no services (edge case protection)
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        No services available
      </div>
    );
  }
  const activeService = items[activeTab];
  // Dynamic icon with safe fallback
  const IconComponent = ICONS[activeService.icon] || Code2;

  // Dynamic image – prefers service.image → fallback
  const serviceImage = activeService.image || FALLBACK_IMAGE;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cactus-600 uppercase tracking-widest text-sm font-medium mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cactus-700 tracking-tight">
            Everything you need to grow
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            End-to-end digital solutions — from strategy to execution, all under one roof.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {items.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(idx)}
              className={cn(
                'relative px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 overflow-hidden group',
                activeTab === idx
                  ? 'text-white shadow-lg shadow-cactus-500/30'
                  : 'text-cactus-700 bg-white border border-slate-200 hover:border-cactus-300'
              )}
            >
              {activeTab === idx && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-gradient-to-r from-cactus-500 to-cactus-600"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Left: Content – all dynamic */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cactus-100 ring-2 ring-cactus-200">
                  <IconComponent className="text-cactus-700" size={28} aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold text-cactus-700">
                  {activeService.title}
                </h3>
              </div>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {activeService.shortDescription}
              </p>

              <ul className="space-y-4">
                {activeService.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-cactus-500 flex-none" />
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Dynamic Image */}
            <div className="order-1 md:order-2 relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border-4 border-cactus-600 shadow-2xl shadow-cactus-600/20">
              <Image
                src={serviceImage}
                alt={`${activeService.title} illustration`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={activeTab < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}