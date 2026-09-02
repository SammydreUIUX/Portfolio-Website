'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ChatBox from './components/ChatBox';

const SW_BG = '#FAFAF8';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

type SelectedWorkItem = {
  year: string;
  category: string;
  title: string;
  description: string;
  href: string;
  image: string;
  coverType?: 'wordmark';
};

const selectedWork: SelectedWorkItem[] = [
  {
    year: '2026',
    category: 'B2B / Product Design',
    title: 'Kinitech Engineering',
    description: 'A real client engagement: restructuring a structural engineering firm’s single-page website into a five-destination experience built around service clarity, credibility, and inquiry.',
    href: '/projects/kinitech',
    image: '/images/kinitech/kinitech-logo.png',
    coverType: 'wordmark',
  },
  {
    year: '2024',
    category: 'Public Safety',
    title: 'ZoneAid',
    description: 'A safety-focused mobile app that revolutionizes emergency response through real-time tracking, offline functionality, and family monitoring systems.',
    href: '/projects/zoneaid',
    image: '/images/zoneaid/Overview.jpg',
  },
  {
    year: '2021',
    category: 'Telecom Research',
    title: 'Airtel ODU',
    description: 'Market-entry research for a new connectivity device in Nigeria: validating real demand among Lagos churches and businesses through targeted outreach before a national rollout.',
    href: '/projects/airtel',
    image: '/images/960x0.webp',
  },
  {
    year: '2026',
    category: 'Fintech',
    title: 'PayPal Transaction Assistant',
    description: 'An AI-powered assistant that explains payment status in plain language, predicts completion time, and reduces anxiety without compromising security.',
    href: '/projects/paypal-transaction-assistant',
    image: '/images/paypal-transaction-assistant/preview.png',
  },
  {
    year: '2026',
    category: 'SaaS / Billing',
    title: 'Fintra',
    description: 'A concept product exploring how billing, subscriptions, and payment recovery can become more transparent for SaaS administrators managing growing teams.',
    href: '/projects/fintra',
    image: '/images/fintra/preview.png',
  },
  {
    year: '2025',
    category: 'Productivity',
    title: 'Google Calendar',
    description: 'An AI-powered scheduling redesign with a smart assistant, focus mode, and enhanced accessibility for everyday planning.',
    href: '/projects/google-calendar',
    image: '/images/google-calendar/calendar-preview.png',
  },
];

const capabilities = [
  { n: '01', title: 'UX Strategy', description: 'Framing ambiguous problems into a clear, sequenced plan before a single screen is drawn.' },
  { n: '02', title: 'Research', description: 'Grounding decisions in real user behavior, not assumption or internal opinion.' },
  { n: '03', title: 'Design Systems', description: 'Building the rules and components that let a product scale without losing coherence.' },
  { n: '04', title: 'Enterprise UX', description: 'Designing for complexity, permissions, and edge cases, not just the happy path.' },
  { n: '05', title: 'AI Workflows', description: 'Figma AI, Google Stitch, Claude Code, Claude, and ChatGPT, used to prototype faster and refine sharper.' },
  { n: '06', title: 'Interaction Design', description: 'The small, precise details (timing, hierarchy, feedback) that make an interface feel considered.' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-in');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const containerRef = useReveal();

  return (
    <div ref={containerRef} style={{ backgroundColor: SW_BG, color: SW_INK }}>
      {/* ============================= HERO ============================= */}
      <section className="px-6 sm:px-8 lg:px-12 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="max-w-7xl mx-auto">
          <p className="sw-label mb-8 reveal" style={{ color: SW_GRAY }}>Product Designer &middot; Vancouver, Canada</p>

          <h1 className="sw-display text-[15vw] sm:text-[11vw] lg:text-[8.5vw] mb-16 reveal">
            Samuel<br />Funmilayo
          </h1>

          <div className="reveal">
            <p className="text-2xl md:text-3xl leading-snug max-w-2xl" style={{ color: SW_INK }}>
              I untangle hard problems into digital experiences that work.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= SELECTED WORK ============================= */}
      <section className="px-6 sm:px-8 lg:px-12 py-24 lg:py-32 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-20 reveal">
            <h2 className="sw-display text-4xl md:text-5xl">Selected Work</h2>
            <p className="sw-label hidden sm:block" style={{ color: SW_GRAY }}>N&deg; 01&ndash;06</p>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {selectedWork.map((project, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <div key={project.title} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div className={`lg:col-span-7 reveal-img reveal ${imageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Link href={project.href} className="block group">
                      <div className="relative h-72 md:h-96 overflow-hidden">
                        {project.coverType === 'wordmark' ? (
                          <div className="relative flex h-full w-full items-center justify-center" style={{ backgroundColor: SW_INK }}>
                            <div className="absolute inset-0 opacity-[0.15]" style={{
                              backgroundImage: `linear-gradient(${SW_BG} 1px, transparent 1px), linear-gradient(90deg, ${SW_BG} 1px, transparent 1px)`,
                              backgroundSize: '32px 32px',
                            }} />
                            <img
                              src={project.image}
                              alt={project.title}
                              className="relative h-16 md:h-20 w-auto object-contain transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                              style={{ filter: 'brightness(0) invert(1)' }}
                            />
                          </div>
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.02]"
                          />
                        )}
                      </div>
                    </Link>
                  </div>

                  <div className={`lg:col-span-5 reveal ${imageFirst ? 'lg:order-2' : 'lg:order-1'}`}>
                    <p className="sw-label mb-4" style={{ color: SW_GRAY }}>
                      {project.year} &middot; {project.category}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-medium mb-5 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="leading-relaxed mb-8 max-w-md" style={{ color: SW_GRAY }}>
                      {project.description}
                    </p>
                    <Link href={project.href} className="group inline-flex items-center gap-2 font-medium">
                      <span className="border-b border-current pb-0.5">View Case Study</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================= PHILOSOPHY ============================= */}
      <section className="px-6 sm:px-8 lg:px-12 py-24 lg:py-32 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="sw-quote text-4xl md:text-6xl mb-16 reveal">
            Design is not decoration.<br />It is infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-4xl mx-auto reveal">
            <p className="leading-relaxed" style={{ color: SW_GRAY }}>
              I think in systems, not screens. A good interface is downstream of a clear set of rules.
              Once those rules are right, the screens follow.
            </p>
            <p className="leading-relaxed" style={{ color: SW_GRAY }}>
              Restraint is a discipline. Every element on a page has to earn its place, or it doesn&apos;t
              belong there. Whitespace is not empty; it&apos;s doing work.
            </p>
            <p className="leading-relaxed" style={{ color: SW_GRAY }}>
              I design for the version of the product that still makes sense in three years, not just the
              version that demos well tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= CAPABILITIES ============================= */}
      <section className="px-6 sm:px-8 lg:px-12 py-24 lg:py-32 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="sw-display text-4xl md:text-5xl mb-20 reveal">Capabilities</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px reveal" style={{ backgroundColor: SW_LINE }}>
            {capabilities.map((cap) => (
              <div key={cap.n} className="p-10" style={{ backgroundColor: SW_BG }}>
                <p className="sw-label mb-8" style={{ color: SW_GRAY }}>{cap.n}</p>
                <h3 className="text-xl font-medium mb-4">{cap.title}</h3>
                <p className="leading-relaxed" style={{ color: SW_GRAY }}>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= DESIGN LAB PREVIEW ============================= */}
      <section className="px-6 sm:px-8 lg:px-12 py-24 lg:py-32 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-16 reveal">
            <h2 className="sw-display text-4xl md:text-5xl">From the Design Lab</h2>
            <Link href="/design-lab" className="sw-label hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>
              View All &rarr;
            </Link>
          </div>

          <Link href="/design-lab/ai-design-system" className="group grid grid-cols-1 md:grid-cols-12 gap-10 items-center reveal">
            <div className="md:col-span-5">
              <div className="relative h-56 md:h-72 overflow-hidden" style={{ backgroundColor: SW_INK }}>
                <div className="absolute inset-0 opacity-[0.15]" style={{
                  backgroundImage: `linear-gradient(${SW_BG} 1px, transparent 1px), linear-gradient(90deg, ${SW_BG} 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                }} />
                <p className="absolute bottom-6 left-6 sw-serif text-2xl italic" style={{ color: SW_BG }}>Fig. 01</p>
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="sw-label mb-4" style={{ color: SW_GRAY }}>Design Lab &middot; 6 min read</p>
              <h3 className="text-3xl font-medium mb-4 tracking-tight">
                Can AI Build a Production-Ready Design System?
              </h3>
              <p className="leading-relaxed mb-6 max-w-xl" style={{ color: SW_GRAY }}>
                I challenged Figma Make to generate an enterprise design system inspired by Linear,
                then spent an afternoon figuring out exactly where it held up, and where it didn&apos;t.
              </p>
              <span className="inline-flex items-center gap-2 font-medium">
                <span className="border-b border-current pb-0.5">Read Article</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ============================= SAY HELLO ============================= */}
      <section id="contact" className="px-6 sm:px-8 lg:px-12 py-32 lg:py-44 border-t text-center" style={{ borderColor: SW_LINE }}>
        <div className="max-w-5xl mx-auto reveal">
          <p className="sw-label mb-8" style={{ color: SW_GRAY }}>Get In Touch</p>
          <Link href="/contact" className="group inline-block">
            <h2 className="sw-display text-[16vw] sm:text-[11vw] lg:text-[8vw] leading-none group-hover:opacity-60 transition-opacity duration-500">
              Say Hello
            </h2>
          </Link>
          <p className="sw-label mt-10" style={{ color: SW_GRAY }}>contact@samuelfunmilayo.space</p>
        </div>
      </section>

      <ChatBox />
    </div>
  );
}
