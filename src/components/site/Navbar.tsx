'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/Button'; // fixed path (was '../ui/Button')

import { cn } from '@/lib/utils';
import { NAV_ITEMS, SITE } from '@/content/site';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  const delta = 10;          // ← increased → less sensitive
  const topThreshold = 150;  // ← increased → stays visible longer at top

  // Optional: you can also animate opacity or scale if you want
  const opacity = useTransform(scrollY, [0, topThreshold], [1, 0.95]);

  useMotionValueEvent(scrollY, 'change', (current) => {
    if (current <= topThreshold) {
      setHidden(false);
      setLastScrollY(current);
      return;
    }

    const direction = current > lastScrollY ? 'down' : 'up';

    if (Math.abs(current - lastScrollY) < delta) return;

    setHidden(direction === 'down');
    setLastScrollY(current);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur',
        'supports-[backdrop-filter]:bg-background/60 transition-all duration-300',
        hidden && 'pointer-events-none' // optional: disable interaction when hidden
      )}
      style={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
        // or use: opacity, if you prefer fade instead of slide
      }}
      transition={{
        y: { type: 'spring', damping: 30, stiffness: 300 },
        opacity: { duration: 0.25 },
      }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-3 focus:text-sm focus:ring-2 focus:ring-primary"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label={`Go to ${SITE.name} home`}>
          <Image
            src="/images/logo.svg"
            alt={`${SITE.name} logo – IT Services & Digital Solutions`}
            width={140}
            height={48}
            className="object-contain"
            priority
          />
          <div className="hidden sm:block">
            <p className="font-semibold tracking-tight">{SITE.name}</p>
            <p className="text-xs text-muted-foreground">IT Services & Digital Solutions</p>
          </div>
        </Link>

        {/* Desktop Nav – fixed duplicate div */}
        <div className="hidden md:flex md:items-center md:gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isActive && 'bg-accent font-medium text-accent-foreground'
                      )}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild className="ml-2">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[380px]">
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-accent text-accent-foreground'
                          : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <Button asChild size="lg" className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}