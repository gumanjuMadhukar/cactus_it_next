'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,          // smooth stagger between cards
      delayChildren: 0.15,            // slight delay before first child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],     // smooth "spring-like" feel
    },
  },
};

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  darkBg?: boolean;
  id?: string;
}

export function MotionSection({
  children,
  className,
  darkBg = false,
  id,
}: MotionSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }} // triggers ~80px before fully in view
      variants={containerVariants}
      id={id}
      className={cn(
        'transition-colors duration-500',
        darkBg ? 'bg-slate-900 text-slate-100' : 'bg-white',
        className
      )}
    >
      {children}
    </motion.section>
  );
}

// Reusable for cards inside
export function MotionCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}