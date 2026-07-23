'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Brand tokens (Fintra — concept SaaS billing product)               */
/* ------------------------------------------------------------------ */
const FT_PRIMARY = '#4F46E5';
const FT_DARK = '#1E1B4B';
const FT_LIGHT = '#818CF8';
const FT_BG = '#F8FAFC';
const FT_TEXT = '#0F172A';
const FT_SUBTEXT = '#64748B';
const FT_BORDER = '#E2E8F0';
const FT_GREEN = '#15803D';
const FT_GREEN_BG = '#EAF7EE';
const FT_AMBER = '#B45309';
const FT_AMBER_BG = '#FDF3E3';
const FT_RED = '#B91C1C';
const FT_RED_BG = '#FBEAE8';

/* ------------------------------------------------------------------ */
/*  Icons                                                               */
/* ------------------------------------------------------------------ */
function Icon({ path, className = 'w-5 h-5', style }: { path: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );
}
const ICONS = {
  arrowLeft: 'M10 19l-7-7m0 0l7-7m-7 7h18',
  arrowRight: 'M17 8l4 4m0 0l-4 4m4-4H3',
  check: 'M5 13l4 4L19 7',
  checkCircle: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  chevronDown: 'M19 9l-7 7-7-7',
  plus: 'M12 4v16m8-8H4',
  minus: 'M20 12H4',
  alert: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
  users: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8zm6 3.87V20h-6v-1.13a4 4 0 013-3.87',
  card: 'M3 10h18M7 15h1m4 0h5M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z',
  download: 'M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  filter: 'M3 4h18M6 8h12M9 12h6M11 16h2',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  bell: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  chart: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  x: 'M6 18L18 6M6 6l12 12',
  building: 'M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7M9 9v.01M9 12v.01M9 15v.01',
};

/* ------------------------------------------------------------------ */
/*  Fintra monogram                                                     */
/* ------------------------------------------------------------------ */
function FintraMark({ size = 'lg' }: { size?: 'md' | 'lg' }) {
  const dims = size === 'lg' ? 'h-20 w-20 text-3xl rounded-3xl' : 'h-10 w-10 text-base rounded-xl';
  return (
    <div
      className={`flex ${dims} items-center justify-center font-bold text-white shadow-xl`}
      style={{ background: `linear-gradient(135deg, ${FT_LIGHT}, ${FT_DARK})` }}
    >
      F
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Browser chrome for full web-app screens                            */
/* ------------------------------------------------------------------ */
function BrowserFrame({ children, url, label }: { children: React.ReactNode; url: string; label?: string }) {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border shadow-2xl" style={{ borderColor: FT_BORDER }}>
        <div className="flex items-center gap-2 border-b bg-gray-50 px-4 py-3" style={{ borderColor: FT_BORDER }}>
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <div className="ml-4 flex-1 truncate rounded-full border bg-white px-4 py-1.5 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>
            {url}
          </div>
        </div>
        <div className="bg-white">{children}</div>
      </div>
      {label && <p className="mt-4 text-center text-sm font-medium text-gray-500">{label}</p>}
    </div>
  );
}

function FloatCard({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div>
      <div className="flex items-center justify-center rounded-2xl p-10" style={{ background: '#0F172A0D' }}>
        <div className="w-full max-w-sm rounded-2xl border bg-white p-6 shadow-2xl" style={{ borderColor: FT_BORDER }}>
          {children}
        </div>
      </div>
      {label && <p className="mt-4 text-center text-sm font-medium text-gray-500">{label}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Status chip                                                        */
/* ------------------------------------------------------------------ */
type Status = 'active' | 'past_due' | 'trial' | 'canceled';
const STATUS_COPY: Record<Status, { label: string; color: string; bg: string }> = {
  active: { label: 'Active', color: FT_GREEN, bg: FT_GREEN_BG },
  past_due: { label: 'Past Due', color: FT_RED, bg: FT_RED_BG },
  trial: { label: 'Trial', color: FT_AMBER, bg: FT_AMBER_BG },
  canceled: { label: 'Canceled', color: FT_SUBTEXT, bg: '#F1F5F9' },
};
function StatusChip({ status }: { status: Status }) {
  const c = STATUS_COPY[status];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: c.bg, color: c.color }}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.color }} />
      {c.label}
    </span>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest" style={{ color: FT_PRIMARY }}>
      {children}
    </p>
  );
}

/* ==================================================================== */
/*  MAIN PAGE                                                            */
/* ==================================================================== */
export default function FintraCaseStudy() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [seats, setSeats] = useState(24);
  const baseSeats = 20;
  const perSeat = 12;
  const daysLeftInCycle = 18;
  const cycleDays = 30;
  const prorated = Math.max(0, seats - baseSeats) * perSeat * (daysLeftInCycle / cycleDays);
  const monthlyDiff = Math.max(0, seats - baseSeats) * perSeat;

  const [wizardStep, setWizardStep] = useState(0);
  const wizardSteps = ['Choose plan', 'Add payment method', 'Seat pricing', 'Billing cycle', 'Complete'];

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('animate-in');
      });
    }, observerOptions);
    const els = document.querySelectorAll('.animate-on-scroll');
    els.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ color: FT_TEXT }}>
      <style jsx global>{`
        .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .animate-on-scroll.animate-in { opacity: 1; transform: translateY(0); }
        .slide-up { transform: translateY(50px); transition: all 0.6s ease-out; }
        .slide-up.animate-in { transform: translateY(0); }
        .fade-in { opacity: 0; transition: opacity 0.8s ease-out; }
        .fade-in.animate-in { opacity: 1; }
        .scale-in { transform: scale(0.9); opacity: 0; transition: all 0.6s ease-out; }
        .scale-in.animate-in { transform: scale(1); opacity: 1; }
        .slide-left { transform: translateX(-50px); opacity: 0; transition: all 0.7s ease-out; }
        .slide-left.animate-in { transform: translateX(0); opacity: 1; }
        .slide-right { transform: translateX(50px); opacity: 0; transition: all 0.7s ease-out; }
        .slide-right.animate-in { transform: translateX(0); opacity: 1; }
        .stagger-1 { transition-delay: 0.1s; } .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; } .stagger-4 { transition-delay: 0.4s; } .stagger-5 { transition-delay: 0.5s; }
      `}</style>

      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8" style={{ background: `linear-gradient(180deg, ${FT_BG} 0%, #FFFFFF 100%)` }}>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-on-scroll fade-in">
            <Link href="/projects" className="inline-flex items-center text-gray-500 transition-colors hover:text-gray-900">
              <Icon path={ICONS.arrowLeft} className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
          </div>

          <div className="mb-8 flex items-center justify-center animate-on-scroll scale-in stagger-1">
            <FintraMark size="lg" />
          </div>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border px-3 py-1 text-sm font-medium" style={{ background: '#EEF2FF', color: FT_DARK, borderColor: '#C7D2FE' }}>
              Concept Product
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
              Not Affiliated With Any Company
            </span>
          </div>

          <h1 className="mb-4 animate-on-scroll slide-up stagger-2 text-4xl font-bold lg:text-5xl" style={{ color: FT_DARK }}>
            Fintra
          </h1>
          <p className="mx-auto mb-3 max-w-2xl animate-on-scroll slide-up stagger-2 text-xl font-semibold md:text-2xl" style={{ color: FT_TEXT }}>
            Reimagining SaaS Billing for Growing Teams
          </p>
          <p className="mx-auto mb-10 max-w-2xl animate-on-scroll slide-up stagger-3" style={{ color: FT_SUBTEXT }}>
            Fintra is a concept product built from patterns observed across modern SaaS billing experiences and recurring
            administrator complaints — exploring how billing, subscriptions, and payment recovery can become more transparent
            for teams that are scaling fast.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm animate-on-scroll fade-in stagger-4">
            <div className="flex flex-col items-center">
              <span style={{ color: FT_SUBTEXT }}>Role</span>
              <span className="font-semibold" style={{ color: FT_TEXT }}>Product Designer</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: FT_SUBTEXT }}>Timeline</span>
              <span className="font-semibold" style={{ color: FT_TEXT }}>3 weeks</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: FT_SUBTEXT }}>Platform</span>
              <span className="font-semibold" style={{ color: FT_TEXT }}>Web Application</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: FT_SUBTEXT }}>Tools</span>
              <span className="font-semibold" style={{ color: FT_TEXT }}>Figma, FigJam, Claude, ChatGPT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PROJECT OVERVIEW ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="animate-on-scroll slide-left space-y-6">
              <SectionEyebrow>Project Overview</SectionEyebrow>
              <h2 className="text-3xl font-bold" style={{ color: FT_DARK }}>Simplifying subscription management for modern SaaS teams</h2>
              <p className="leading-relaxed" style={{ color: FT_SUBTEXT }}>
                Growing SaaS companies rely on administrators to manage billing for entire teams. Rather than focusing on
                collaboration features — the usual portfolio subject — this case study explores one overlooked but
                business-critical experience: <strong style={{ color: FT_TEXT }}>billing.</strong>
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Understand exactly what you’re paying for',
                  'Confidently add or remove seats',
                  'Recover from failed payments without support',
                  'Access invoices in seconds, not menus',
                  'Never see a surprise charge',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full" style={{ background: FT_PRIMARY }} />
                    <span style={{ color: FT_TEXT }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll slide-right relative">
              <div className="rounded-2xl border p-8 shadow-xl" style={{ borderColor: FT_BORDER }}>
                <h3 className="mb-6 text-center text-xl font-bold" style={{ color: FT_DARK }}>Why Billing?</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-xl p-5" style={{ background: FT_RED_BG }}>
                    <p className="text-xs font-bold uppercase tracking-wide" style={{ color: FT_RED }}>Usually Skipped</p>
                    <p className="mt-2 text-sm" style={{ color: FT_TEXT }}>Collaboration features, dashboards, onboarding flows</p>
                  </div>
                  <div className="rounded-xl p-5" style={{ background: FT_GREEN_BG }}>
                    <p className="text-xs font-bold uppercase tracking-wide" style={{ color: FT_GREEN }}>Rarely Explored</p>
                    <p className="mt-2 text-sm" style={{ color: FT_TEXT }}>Billing, payment recovery, admin trust</p>
                  </div>
                </div>
                <p className="mt-6 text-center text-sm italic" style={{ color: FT_SUBTEXT }}>
                  The moments users hope they never have to experience are often the highest-impact design opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= BACKGROUND + CHALLENGE ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Background</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-10 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            As Teams Scale, Billing Gets Harder to Trust
          </h2>
          <div className="animate-on-scroll fade-in mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              'Seat counts constantly change',
              'Invoices become difficult to understand',
              'Payment failures create account disruptions',
              'Support tickets increase',
              'Administrators lose confidence in pricing',
            ].map((t, i) => (
              <div key={i} className="rounded-xl border bg-white p-5 text-sm" style={{ borderColor: FT_BORDER, color: FT_TEXT }}>
                {t}
              </div>
            ))}
          </div>

          <div className="animate-on-scroll scale-in rounded-2xl border p-8" style={{ borderColor: FT_BORDER, background: 'white' }}>
            <SectionEyebrow>The Challenge</SectionEyebrow>
            <h3 className="mb-6 text-center text-2xl font-bold" style={{ color: FT_DARK }}>
              Create a billing experience that helps administrators&hellip;
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                'Understand exactly what they’re paying for',
                'Confidently add or remove seats',
                'Recover from failed payments',
                'Access invoices quickly',
                'Avoid surprise charges',
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl p-4" style={{ background: FT_BG }}>
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full" style={{ background: FT_PRIMARY }} />
                  <span className="text-sm" style={{ color: FT_TEXT }}>{t}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm" style={{ color: FT_SUBTEXT }}>&hellip;while reducing support volume.</p>
          </div>
        </div>
      </section>

      {/* ============================= THE PROBLEM ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-12 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            Recurring Complaints Across SaaS Billing
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ICONS.alert, title: 'Unexpected charges', body: 'Adding a teammate silently changes the bill with no warning.' },
              { icon: ICONS.users, title: 'Unclear seat pricing', body: 'Admins can’t tell what the next seat will actually cost.' },
              { icon: ICONS.chart, title: 'Confusing invoices', body: 'Layouts built for accountants, not busy administrators.' },
              { icon: ICONS.filter, title: 'Hidden proration', body: 'Mid-cycle changes produce charges nobody can explain.' },
              { icon: ICONS.shield, title: 'Account lockouts', body: 'A failed card silently locks the whole team out.' },
              { icon: ICONS.card, title: 'Difficult recovery', body: 'Fixing a failed payment often requires contacting support.' },
            ].map((p, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${(i % 5) + 1} rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg`} style={{ borderColor: FT_BORDER }}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: '#EEF2FF' }}>
                  <Icon path={p.icon} className="h-5 w-5" style={{ color: FT_PRIMARY }} />
                </div>
                <h4 className="mb-2 font-semibold" style={{ color: FT_TEXT }}>{p.title}</h4>
                <p className="text-sm" style={{ color: FT_SUBTEXT }}>{p.body}</p>
              </div>
            ))}
          </div>
          <p className="animate-on-scroll fade-in mt-8 text-center text-sm" style={{ color: FT_SUBTEXT }}>
            Support teams reported that billing questions represented a significant share of administrative tickets.
          </p>
        </div>
      </section>

      {/* ============================= RESEARCH ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Research</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-6 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            Understanding How Admins Manage Billing
          </h2>
          <p className="animate-on-scroll fade-in mx-auto mb-12 max-w-3xl text-center" style={{ color: FT_SUBTEXT }}>
            <strong style={{ color: FT_TEXT }}>Goal:</strong> understand how administrators manage SaaS billing and identify
            the moments that create confusion. As a concept project, research was grounded using real, publicly observable
            patterns rather than a live user base.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: 'Comparative Analysis', d: 'Billing experiences across leading SaaS products' },
              { t: 'Community Discussions', d: 'Recurring billing complaints in public forums and reviews' },
              { t: 'Support Documentation', d: 'Help-center articles revealing common billing confusion' },
              { t: 'Simulated Interviews', d: 'Composite administrator personas grounded in common patterns' },
            ].map((r, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${i + 1} rounded-2xl border bg-white p-6`} style={{ borderColor: FT_BORDER }}>
                <h4 className="mb-2 font-bold" style={{ color: FT_PRIMARY }}>{r.t}</h4>
                <p className="text-sm" style={{ color: FT_SUBTEXT }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= PERSONAS ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Personas</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            Three Administrators, Three Levels of Scale
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { name: 'Sarah', role: 'Operations Manager', size: '18 employees', quote: 'I never know how much adding another employee will cost.', color: FT_PRIMARY },
              { name: 'Daniel', role: 'Startup Founder', size: '7 employees', quote: 'Our payment failed while I was traveling. Everyone suddenly lost access.', color: FT_RED },
              { name: 'Maya', role: 'Finance Manager', size: '120 employees', quote: 'I spend too much time explaining invoices to accounting.', color: FT_GREEN },
            ].map((p, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${i + 1} overflow-hidden rounded-2xl border bg-white shadow-xl`} style={{ borderColor: FT_BORDER }}>
                <div className="p-6 text-white" style={{ background: `linear-gradient(135deg, ${p.color}, ${FT_DARK})` }}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-xl font-bold">{p.name[0]}</div>
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-white/80">{p.role}</p>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-sm" style={{ color: FT_SUBTEXT }}><strong style={{ color: FT_TEXT }}>Company size:</strong> {p.size}</p>
                  <div className="rounded-xl border-l-4 p-4" style={{ background: FT_BG, borderColor: p.color }}>
                    <p className="text-sm italic" style={{ color: FT_TEXT }}>&ldquo;{p.quote}&rdquo;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= JOURNEY MAP ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Journey Map</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-12 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            Where Growth Turns Into Friction
          </h2>
          <div className="animate-on-scroll fade-in overflow-x-auto">
            <div className="flex min-w-[900px] items-stretch gap-2">
              {[
                { stage: 'Create Account', emotion: '🙂', tone: FT_GREEN },
                { stage: 'Choose Plan', emotion: '🙂', tone: FT_GREEN },
                { stage: 'Invite Team', emotion: '😊', tone: FT_GREEN },
                { stage: 'Need More Seats', emotion: '😐', tone: FT_AMBER },
                { stage: 'Unexpected Charge', emotion: '😕', tone: FT_AMBER },
                { stage: 'Payment Failure', emotion: '😬', tone: FT_RED },
                { stage: 'Account Restricted', emotion: '😡', tone: FT_RED },
                { stage: 'Contact Support', emotion: '😩', tone: FT_RED },
                { stage: 'Wait', emotion: '😑', tone: FT_RED },
                { stage: 'Resolve', emotion: '😌', tone: FT_GREEN },
              ].map((s, i, arr) => (
                <div key={i} className="flex flex-1 items-center">
                  <div className="flex flex-1 flex-col items-center rounded-xl border bg-white p-4 text-center" style={{ borderColor: FT_BORDER }}>
                    <span className="mb-2 text-2xl">{s.emotion}</span>
                    <span className="text-xs font-semibold" style={{ color: FT_TEXT }}>{s.stage}</span>
                    <span className="mt-2 h-1 w-8 rounded-full" style={{ background: s.tone }} />
                  </div>
                  {i < arr.length - 1 && <Icon path={ICONS.arrowRight} className="mx-1 h-4 w-4 flex-shrink-0" style={{ color: FT_SUBTEXT }} />}
                </div>
              ))}
            </div>
          </div>
          <p className="animate-on-scroll fade-in mt-6 text-center text-sm" style={{ color: FT_SUBTEXT }}>
            The biggest friction consistently occurred <strong>after teams began growing</strong> — exactly where Fintra intervenes.
          </p>
        </div>
      </section>

      {/* ============================= KEY INSIGHTS ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Key Insights</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-12 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            What the Research Revealed
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { n: '1', t: 'Admins fear hidden costs more than higher prices.', d: 'Transparency matters more than discounts.' },
              { n: '2', t: 'Seat changes feel unpredictable.', d: 'People want immediate cost feedback before confirming changes.' },
              { n: '3', t: 'Failed payments should never feel like punishment.', d: 'Users expect warnings before losing access.' },
              { n: '4', t: 'Invoices are built for accountants, not admins.', d: 'Busy administrators need a faster, plainer summary.' },
            ].map((k, i) => (
              <div key={i} className={`animate-on-scroll slide-${i % 2 === 0 ? 'left' : 'right'} flex gap-5 rounded-2xl border bg-white p-6`} style={{ borderColor: FT_BORDER }}>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white" style={{ background: FT_PRIMARY }}>{k.n}</div>
                <div>
                  <p className="font-semibold" style={{ color: FT_TEXT }}>{k.t}</p>
                  <p className="mt-1 text-sm" style={{ color: FT_SUBTEXT }}>{k.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= DESIGN PRINCIPLES ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Design Principles</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-12 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            Four Rules Every Screen Follows
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: 'Transparency', d: 'Every pricing change is visible before confirmation.' },
              { t: 'Recovery', d: 'Mistakes are recoverable without contacting support.' },
              { t: 'Confidence', d: 'Every billing action feels predictable.' },
              { t: 'Clarity', d: 'Financial jargon is reduced to plain language.' },
            ].map((p, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${i + 1} rounded-2xl border bg-white p-6 text-center`} style={{ borderColor: FT_BORDER }}>
                <h4 className="mb-2 text-lg font-bold" style={{ color: FT_PRIMARY }}>{p.t}</h4>
                <p className="text-sm" style={{ color: FT_SUBTEXT }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= COMPETITIVE AUDIT ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Competitive Audit</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-6 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            How Other SaaS Products Handle Billing
          </h2>
          <p className="animate-on-scroll fade-in mx-auto mb-12 max-w-3xl text-center" style={{ color: FT_SUBTEXT }}>
            A review of five widely used B2B products, focused specifically on their billing and subscription-management flows.
          </p>
          <div className="animate-on-scroll fade-in overflow-x-auto rounded-2xl border" style={{ borderColor: FT_BORDER }}>
            <table className="w-full min-w-[800px] border-collapse text-sm">
              <thead>
                <tr style={{ background: FT_BG }}>
                  {['Product', 'What Works Well', 'Where Friction Remains'].map((h) => (
                    <th key={h} className="p-4 text-left font-bold" style={{ color: FT_DARK }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { p: 'Stripe (Billing)', good: 'Extremely clear line-item invoices; strong developer-facing docs', bad: 'End-user admin console feels built for engineers, not admins' },
                  { p: 'Notion', good: 'Simple per-seat pricing display', bad: 'Adding guests vs. members creates confusing cost surprises' },
                  { p: 'Slack', good: 'Clear active-vs-billed user reconciliation at renewal', bad: 'Downgrade path is buried several menus deep' },
                  { p: 'Asana', good: 'Transparent seat-tier breakpoints', bad: 'Failed payment messaging is easy to miss in-product' },
                  { p: 'Linear', good: 'Minimal, uncluttered billing page', bad: 'No proration preview before confirming a seat change' },
                ].map((row, i) => (
                  <tr key={i} className="border-t" style={{ borderColor: FT_BORDER }}>
                    <td className="p-4 font-semibold" style={{ color: FT_TEXT }}>{row.p}</td>
                    <td className="p-4" style={{ color: FT_GREEN }}>{row.good}</td>
                    <td className="p-4" style={{ color: FT_RED }}>{row.bad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="animate-on-scroll fade-in mt-6 text-center text-sm" style={{ color: FT_SUBTEXT }}>
            The common gap: almost none of them show a <strong>live cost preview</strong> before a seat or plan change is confirmed. Fintra makes that the default.
          </p>
        </div>
      </section>

      {/* ============================= SOLUTION INTRO ============================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>The Solution</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up text-4xl font-bold" style={{ color: FT_DARK }}>Five Systems, One Predictable Bill</h2>
        </div>
      </section>

      {/* ============================= SOLUTION 1: LIVE SEAT MANAGEMENT ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-on-scroll slide-left">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: FT_PRIMARY }}>01 &middot; Seat Management with Live Cost Preview</p>
              <h3 className="mb-2 text-2xl font-bold" style={{ color: FT_DARK }}>Problem</h3>
              <p className="mb-4 text-sm" style={{ color: FT_SUBTEXT }}>Adding teammates immediately changed billing without enough visibility.</p>
              <h3 className="mb-2 text-2xl font-bold" style={{ color: FT_DARK }}>Solution</h3>
              <p className="mb-4" style={{ color: FT_SUBTEXT }}>A live pricing calculator updates instantly as administrators change seat counts &mdash; current seats, new seats, monthly difference, prorated amount, and next invoice preview, all before confirming.</p>
              <p className="text-sm font-medium" style={{ color: FT_TEXT }}>Try it &mdash; adjust the seat count on the right.</p>
            </div>
            <div className="animate-on-scroll scale-in">
              <BrowserFrame url="app.fintra.io/billing/seats" label="Screen 01 &middot; Live Seat Management (interactive)">
                <div className="p-6">
                  <p className="mb-1 text-sm font-semibold" style={{ color: FT_TEXT }}>Manage Seats</p>
                  <p className="mb-5 text-xs" style={{ color: FT_SUBTEXT }}>Changes apply immediately. You&apos;ll only pay the prorated difference today.</p>

                  <div className="mb-5 flex items-center justify-between rounded-xl border p-4" style={{ borderColor: FT_BORDER }}>
                    <div>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>Seats on your plan</p>
                      <p className="text-2xl font-bold" style={{ color: FT_TEXT }}>{seats}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSeats((s) => Math.max(1, s - 1))}
                        className="flex h-9 w-9 items-center justify-center rounded-full border text-lg font-bold"
                        style={{ borderColor: FT_BORDER, color: FT_TEXT }}
                        aria-label="Decrease seats"
                      >
                        <Icon path={ICONS.minus} className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setSeats((s) => s + 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold text-white"
                        style={{ background: FT_PRIMARY }}
                        aria-label="Increase seats"
                      >
                        <Icon path={ICONS.plus} className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-5 space-y-2 rounded-xl p-4 text-sm" style={{ background: FT_BG }}>
                    <div className="flex justify-between"><span style={{ color: FT_SUBTEXT }}>Base plan seats</span><span style={{ color: FT_TEXT }}>{baseSeats}</span></div>
                    <div className="flex justify-between"><span style={{ color: FT_SUBTEXT }}>New seats</span><span style={{ color: FT_TEXT }}>{seats}</span></div>
                    <div className="flex justify-between"><span style={{ color: FT_SUBTEXT }}>Monthly difference</span><span style={{ color: FT_TEXT }}>${monthlyDiff.toFixed(2)}</span></div>
                    <div className="flex justify-between border-t pt-2 font-semibold" style={{ borderColor: FT_BORDER }}>
                      <span style={{ color: FT_TEXT }}>Prorated charge today ({daysLeftInCycle} days left)</span>
                      <span style={{ color: FT_PRIMARY }}>${prorated.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mb-4 rounded-xl border p-4 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>
                    Next invoice on Aug 1 will reflect <strong style={{ color: FT_TEXT }}>{seats} seats</strong> at ${perSeat}/seat &mdash; ${(seats * perSeat).toFixed(2)}/mo.
                  </div>

                  <button className="w-full rounded-full py-3 text-sm font-bold text-white shadow-md" style={{ background: FT_PRIMARY }}>
                    Confirm {seats} Seats
                  </button>
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= SOLUTION 2: BILLING DASHBOARD ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: FT_PRIMARY }}>02 &middot; Billing Dashboard</p>
              <h3 className="mb-4 text-2xl font-bold" style={{ color: FT_DARK }}>Everything Visible, Nothing Hidden</h3>
              <p className="mb-4" style={{ color: FT_SUBTEXT }}>
                A redesigned overview showing current plan, next payment, payment method, upcoming invoice, recent charges,
                and usage &mdash; all on a single screen, with no information buried behind a settings menu.
              </p>
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <BrowserFrame url="app.fintra.io/billing" label="Screen 02 &middot; Billing Dashboard">
                <div className="p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold" style={{ color: FT_TEXT }}>Growth Plan</p>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>Renews Aug 1, 2026</p>
                    </div>
                    <StatusChip status="active" />
                  </div>
                  <div className="mb-5 grid grid-cols-3 gap-3">
                    <div className="rounded-xl border p-3" style={{ borderColor: FT_BORDER }}>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>Next payment</p>
                      <p className="font-bold" style={{ color: FT_TEXT }}>$288.00</p>
                    </div>
                    <div className="rounded-xl border p-3" style={{ borderColor: FT_BORDER }}>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>Seats used</p>
                      <p className="font-bold" style={{ color: FT_TEXT }}>24 / 24</p>
                    </div>
                    <div className="rounded-xl border p-3" style={{ borderColor: FT_BORDER }}>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>Payment method</p>
                      <p className="font-bold" style={{ color: FT_TEXT }}>Visa &bull;&bull;4482</p>
                    </div>
                  </div>
                  <div className="mb-3 flex items-center justify-between rounded-xl border p-4" style={{ borderColor: FT_BORDER }}>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: FT_TEXT }}>Upcoming invoice</p>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>24 seats &middot; Aug 1, 2026</p>
                    </div>
                    <span className="font-bold" style={{ color: FT_TEXT }}>$288.00</span>
                  </div>
                  <div className="rounded-xl border p-4" style={{ borderColor: FT_BORDER }}>
                    <p className="mb-2 text-sm font-semibold" style={{ color: FT_TEXT }}>Recent charges</p>
                    {[['Jul 1, 2026', '$276.00'], ['Jun 1, 2026', '$264.00']].map(([d, a], i) => (
                      <div key={i} className="flex justify-between py-1 text-xs" style={{ color: FT_SUBTEXT }}>
                        <span>{d}</span><span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= SOLUTION 3: INVOICE HISTORY ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-on-scroll slide-left">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: FT_PRIMARY }}>03 &middot; Redesigned Invoice History</p>
              <h3 className="mb-4 text-2xl font-bold" style={{ color: FT_DARK }}>From Hidden PDFs to a Searchable Ledger</h3>
              <p className="mb-4" style={{ color: FT_SUBTEXT }}>
                Instead of PDFs buried in a menu, Fintra introduces search, filters, one-click receipt downloads, invoice
                status, tax breakdowns, payment method per invoice, and CSV export for finance teams.
              </p>
            </div>
            <div className="animate-on-scroll scale-in">
              <BrowserFrame url="app.fintra.io/billing/invoices" label="Screen 06 &middot; Invoice History">
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 rounded-lg border px-3 py-2" style={{ borderColor: FT_BORDER }}>
                      <Icon path={ICONS.search} className="h-4 w-4" style={{ color: FT_SUBTEXT }} />
                      <span className="text-xs" style={{ color: FT_SUBTEXT }}>Search invoices&hellip;</span>
                    </div>
                    <button className="flex items-center gap-1 rounded-lg border px-3 py-2 text-xs font-medium" style={{ borderColor: FT_BORDER, color: FT_TEXT }}>
                      <Icon path={ICONS.filter} className="h-3.5 w-3.5" /> Filter
                    </button>
                    <button className="flex items-center gap-1 rounded-lg border px-3 py-2 text-xs font-medium" style={{ borderColor: FT_BORDER, color: FT_TEXT }}>
                      <Icon path={ICONS.download} className="h-3.5 w-3.5" /> Export CSV
                    </button>
                  </div>
                  <div className="overflow-hidden rounded-xl border" style={{ borderColor: FT_BORDER }}>
                    <table className="w-full text-xs">
                      <thead>
                        <tr style={{ background: FT_BG }}>
                          {['Invoice', 'Date', 'Amount', 'Tax', 'Status', ''].map((h) => (
                            <th key={h} className="p-3 text-left font-semibold" style={{ color: FT_SUBTEXT }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['INV-1042', 'Jul 1, 2026', '$288.00', '$14.40', 'active'],
                          ['INV-1031', 'Jun 1, 2026', '$276.00', '$13.80', 'active'],
                          ['INV-1020', 'May 1, 2026', '$264.00', '$13.20', 'past_due'],
                        ].map((row, i) => (
                          <tr key={i} className="border-t" style={{ borderColor: FT_BORDER }}>
                            <td className="p-3 font-medium" style={{ color: FT_TEXT }}>{row[0]}</td>
                            <td className="p-3" style={{ color: FT_SUBTEXT }}>{row[1]}</td>
                            <td className="p-3" style={{ color: FT_TEXT }}>{row[2]}</td>
                            <td className="p-3" style={{ color: FT_SUBTEXT }}>{row[3]}</td>
                            <td className="p-3"><StatusChip status={row[4] as Status} /></td>
                            <td className="p-3"><Icon path={ICONS.download} className="h-4 w-4" style={{ color: FT_PRIMARY }} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= SOLUTION 4: PAYMENT FAILURE RECOVERY ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="animate-on-scroll fade-in mb-2 text-center text-sm font-bold uppercase tracking-wide" style={{ color: FT_PRIMARY }}>04 &middot; Payment Failure Recovery</p>
          <h3 className="animate-on-scroll slide-up mb-12 text-center text-2xl font-bold" style={{ color: FT_DARK }}>A Failed Card Should Never Feel Like Punishment</h3>

          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="animate-on-scroll slide-left rounded-2xl border p-6" style={{ borderColor: '#F3C6C0', background: FT_RED_BG }}>
              <h4 className="mb-4 font-bold" style={{ color: FT_RED }}>Old Experience</h4>
              <ol className="space-y-3 text-sm">
                {['Payment fails', 'Account locks', 'Support ticket', 'Frustration'].map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: FT_RED }}>{i + 1}</span>
                    <span style={{ color: FT_TEXT }}>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="animate-on-scroll slide-right rounded-2xl border p-6" style={{ borderColor: '#BFE3CC', background: FT_GREEN_BG }}>
              <h4 className="mb-4 font-bold" style={{ color: FT_GREEN }}>New Experience</h4>
              <ol className="space-y-3 text-sm">
                {['Payment fails', 'Large warning banner appears', '7-day grace period begins', 'Email reminder sent', 'Admin updates card', 'Payment retries automatically', 'No interruption'].map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: FT_GREEN }}>{i + 1}</span>
                    <span style={{ color: FT_TEXT }}>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="animate-on-scroll scale-in mx-auto max-w-2xl">
            <BrowserFrame url="app.fintra.io/billing" label="Screen 09 &middot; Failed Payment Banner + Grace Period">
              <div className="p-6">
                <div className="mb-4 flex items-start gap-3 rounded-xl border p-4" style={{ borderColor: '#F3C6C0', background: FT_RED_BG }}>
                  <Icon path={ICONS.alert} className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: FT_RED }} />
                  <div className="flex-1">
                    <p className="text-sm font-bold" style={{ color: FT_RED }}>Your last payment didn&apos;t go through</p>
                    <p className="mt-1 text-xs" style={{ color: FT_TEXT }}>
                      Your team keeps full access for the next <strong>7 days</strong> while you update your payment method.
                      We&apos;ll automatically retry on Jul 29.
                    </p>
                    <button className="mt-3 rounded-full px-4 py-2 text-xs font-bold text-white" style={{ background: FT_RED }}>Update Payment Method</button>
                  </div>
                </div>
                <div className="rounded-xl border p-4 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>
                  Grace period: <strong style={{ color: FT_TEXT }}>6 days remaining</strong> &middot; Next automatic retry: Jul 29, 2026
                </div>
              </div>
            </BrowserFrame>
          </div>
        </div>
      </section>

      {/* ============================= SOLUTION 5: FIRST-TIME BILLING SETUP ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: FT_PRIMARY }}>05 &middot; First-Time Billing Setup</p>
              <h3 className="mb-4 text-2xl font-bold" style={{ color: FT_DARK }}>Guided, Not Dropped Into a Settings Page</h3>
              <p className="mb-4" style={{ color: FT_SUBTEXT }}>
                New admins are guided through choosing a plan, adding a payment method, understanding seat pricing, and
                reviewing the billing cycle &mdash; with microcopy explaining every step instead of a bare form.
              </p>
              <p className="text-sm font-medium" style={{ color: FT_TEXT }}>Click through the wizard on the right.</p>
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <BrowserFrame url="app.fintra.io/setup" label="Screen 11 &middot; First-Time Billing Setup Wizard (interactive)">
                <div className="p-6">
                  <div className="mb-5 flex items-center gap-2">
                    {wizardSteps.map((_, i) => (
                      <div key={i} className="h-1.5 flex-1 rounded-full" style={{ background: i <= wizardStep ? FT_PRIMARY : FT_BORDER }} />
                    ))}
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide" style={{ color: FT_SUBTEXT }}>Step {wizardStep + 1} of {wizardSteps.length}</p>
                  <h4 className="mb-4 text-lg font-bold" style={{ color: FT_TEXT }}>{wizardSteps[wizardStep]}</h4>

                  <div className="mb-6 rounded-xl border p-5 text-sm" style={{ borderColor: FT_BORDER, background: FT_BG, color: FT_SUBTEXT }}>
                    {wizardStep === 0 && 'Choose the plan that fits your team size today — you can change this anytime.'}
                    {wizardStep === 1 && 'Add a card or bank account. We’ll never charge you until your trial ends.'}
                    {wizardStep === 2 && `Seats cost $${perSeat} each. You’ll always see the total before confirming any change.`}
                    {wizardStep === 3 && 'Choose monthly or annual billing — annual saves 15%.'}
                    {wizardStep === 4 && 'You’re all set. Your first invoice will arrive on your renewal date, not before.'}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setWizardStep((s) => Math.max(0, s - 1))}
                      disabled={wizardStep === 0}
                      className="rounded-full border px-4 py-2 text-sm font-semibold disabled:opacity-40"
                      style={{ borderColor: FT_BORDER, color: FT_TEXT }}
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setWizardStep((s) => Math.min(wizardSteps.length - 1, s + 1))}
                      disabled={wizardStep === wizardSteps.length - 1}
                      className="rounded-full px-5 py-2 text-sm font-bold text-white disabled:opacity-40"
                      style={{ background: FT_PRIMARY }}
                    >
                      {wizardStep === wizardSteps.length - 1 ? 'Done' : 'Continue'}
                    </button>
                  </div>
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= MORE SCREENS GALLERY ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Additional Screens</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-12 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            Rounding Out the Full Flow
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Subscription Overview */}
            <div className="animate-on-scroll scale-in stagger-1">
              <BrowserFrame url="app.fintra.io/billing/plan" label="Screen 02b &middot; Subscription Overview">
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-bold" style={{ color: FT_TEXT }}>Growth Plan</p>
                    <StatusChip status="active" />
                  </div>
                  <div className="space-y-2 text-xs" style={{ color: FT_SUBTEXT }}>
                    <div className="flex justify-between"><span>Seats included</span><span style={{ color: FT_TEXT }}>24</span></div>
                    <div className="flex justify-between"><span>Price per seat</span><span style={{ color: FT_TEXT }}>$12.00/mo</span></div>
                    <div className="flex justify-between"><span>Billing cycle</span><span style={{ color: FT_TEXT }}>Monthly</span></div>
                    <div className="flex justify-between"><span>Renewal date</span><span style={{ color: FT_TEXT }}>Aug 1, 2026</span></div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 rounded-full py-2 text-xs font-bold text-white" style={{ background: FT_PRIMARY }}>Upgrade Plan</button>
                    <button className="flex-1 rounded-full border py-2 text-xs font-semibold" style={{ borderColor: FT_BORDER, color: FT_TEXT }}>Downgrade</button>
                  </div>
                </div>
              </BrowserFrame>
            </div>

            {/* Payment Method Management */}
            <div className="animate-on-scroll scale-in stagger-2">
              <BrowserFrame url="app.fintra.io/billing/payment-methods" label="Screen 08 &middot; Payment Method Management">
                <div className="p-5">
                  <p className="mb-3 font-bold" style={{ color: FT_TEXT }}>Payment Methods</p>
                  {[{ brand: 'Visa', last4: '4482', def: true }, { brand: 'Mastercard', last4: '1190', def: false }].map((c, i) => (
                    <div key={i} className="mb-2 flex items-center justify-between rounded-xl border p-3" style={{ borderColor: FT_BORDER }}>
                      <div className="flex items-center gap-3">
                        <Icon path={ICONS.card} className="h-5 w-5" style={{ color: FT_PRIMARY }} />
                        <span className="text-sm" style={{ color: FT_TEXT }}>{c.brand} &bull;&bull;&bull;&bull; {c.last4}</span>
                      </div>
                      {c.def ? <span className="text-xs font-semibold" style={{ color: FT_GREEN }}>Default</span> : <button className="text-xs font-semibold" style={{ color: FT_PRIMARY }}>Set default</button>}
                    </div>
                  ))}
                  <button className="mt-2 w-full rounded-full border py-2 text-xs font-semibold" style={{ borderColor: FT_BORDER, color: FT_TEXT }}>+ Add Payment Method</button>
                </div>
              </BrowserFrame>
            </div>

            {/* Invoice Details */}
            <div className="animate-on-scroll scale-in stagger-3">
              <BrowserFrame url="app.fintra.io/billing/invoices/INV-1042" label="Screen 07 &middot; Invoice Details">
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-bold" style={{ color: FT_TEXT }}>Invoice INV-1042</p>
                    <StatusChip status="active" />
                  </div>
                  <div className="mb-3 space-y-1.5 text-xs" style={{ color: FT_SUBTEXT }}>
                    <div className="flex justify-between"><span>24 seats &times; $12.00</span><span style={{ color: FT_TEXT }}>$288.00</span></div>
                    <div className="flex justify-between"><span>Tax (5% VAT)</span><span style={{ color: FT_TEXT }}>$14.40</span></div>
                    <div className="flex justify-between border-t pt-1.5 font-semibold" style={{ borderColor: FT_BORDER }}><span style={{ color: FT_TEXT }}>Total</span><span style={{ color: FT_TEXT }}>$302.40</span></div>
                  </div>
                  <button className="flex w-full items-center justify-center gap-2 rounded-full py-2 text-xs font-bold text-white" style={{ background: FT_PRIMARY }}>
                    <Icon path={ICONS.download} className="h-3.5 w-3.5" /> Download Receipt
                  </button>
                </div>
              </BrowserFrame>
            </div>

            {/* Update Card Flow */}
            <div className="animate-on-scroll scale-in stagger-4">
              <BrowserFrame url="app.fintra.io/billing/update-card" label="Screen 10 &middot; Update Card Flow">
                <div className="p-5">
                  <p className="mb-3 font-bold" style={{ color: FT_TEXT }}>Update Payment Method</p>
                  <div className="mb-2 rounded-lg border p-2.5 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>Card number &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; ____</div>
                  <div className="mb-4 flex gap-2">
                    <div className="flex-1 rounded-lg border p-2.5 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>MM / YY</div>
                    <div className="flex-1 rounded-lg border p-2.5 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>CVC</div>
                  </div>
                  <button className="w-full rounded-full py-2.5 text-xs font-bold text-white" style={{ background: FT_PRIMARY }}>Save &amp; Retry Payment</button>
                  <p className="mt-2 text-center text-[11px]" style={{ color: FT_SUBTEXT }}>Your team keeps access while we retry.</p>
                </div>
              </BrowserFrame>
            </div>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {/* Upgrade Plan Modal */}
            <FloatCard label="Screen 04 &middot; Upgrade Plan Modal">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-bold" style={{ color: FT_TEXT }}>Upgrade to Scale Plan</p>
                <Icon path={ICONS.x} className="h-4 w-4" style={{ color: FT_SUBTEXT }} />
              </div>
              <p className="mb-4 text-xs" style={{ color: FT_SUBTEXT }}>You&apos;ll be charged a prorated amount today, then $18/seat/mo starting Aug 1.</p>
              <div className="mb-4 rounded-xl p-3 text-xs" style={{ background: FT_BG }}>
                <div className="flex justify-between"><span style={{ color: FT_SUBTEXT }}>Prorated charge today</span><span style={{ color: FT_TEXT }}>$86.40</span></div>
              </div>
              <button className="w-full rounded-full py-2.5 text-sm font-bold text-white" style={{ background: FT_PRIMARY }}>Confirm Upgrade</button>
            </FloatCard>

            {/* Downgrade Confirmation */}
            <FloatCard label="Screen 05 &middot; Downgrade Confirmation">
              <div className="mb-3 flex items-center gap-2">
                <Icon path={ICONS.alert} className="h-5 w-5" style={{ color: FT_AMBER }} />
                <p className="font-bold" style={{ color: FT_TEXT }}>Confirm Downgrade</p>
              </div>
              <p className="mb-4 text-xs" style={{ color: FT_SUBTEXT }}>
                Your new plan supports 15 seats. You currently have 24 active members &mdash; 9 will lose access on Aug 1
                unless you remove them first.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 rounded-full border py-2.5 text-sm font-semibold" style={{ borderColor: FT_BORDER, color: FT_TEXT }}>Cancel</button>
                <button className="flex-1 rounded-full py-2.5 text-sm font-bold text-white" style={{ background: FT_AMBER }}>Review Members</button>
              </div>
            </FloatCard>
          </div>
        </div>
      </section>

      {/* ============================= MINI DESIGN SYSTEM ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Screen 12 &middot; Mini Design System</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-12 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            Built From a Small, Reusable Component Set
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="animate-on-scroll scale-in rounded-2xl border bg-white p-5" style={{ borderColor: FT_BORDER }}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: FT_SUBTEXT }}>Pricing Card</p>
              <div className="rounded-xl border p-3" style={{ borderColor: FT_BORDER }}>
                <p className="text-sm font-bold" style={{ color: FT_TEXT }}>Growth</p>
                <p className="text-xs" style={{ color: FT_SUBTEXT }}>$12/seat/mo</p>
              </div>
            </div>
            <div className="animate-on-scroll scale-in rounded-2xl border bg-white p-5" style={{ borderColor: FT_BORDER }}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: FT_SUBTEXT }}>Status Banner</p>
              <div className="flex items-center gap-2 rounded-lg p-2 text-xs" style={{ background: FT_RED_BG, color: FT_RED }}>
                <Icon path={ICONS.alert} className="h-4 w-4" /> Payment failed
              </div>
            </div>
            <div className="animate-on-scroll scale-in rounded-2xl border bg-white p-5" style={{ borderColor: FT_BORDER }}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: FT_SUBTEXT }}>Primary Button</p>
              <button className="rounded-full px-4 py-2 text-xs font-bold text-white" style={{ background: FT_PRIMARY }}>Confirm Change</button>
            </div>
            <div className="animate-on-scroll scale-in rounded-2xl border bg-white p-5" style={{ borderColor: FT_BORDER }}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: FT_SUBTEXT }}>Billing Badge / Payment Status Chip</p>
              <div className="flex flex-wrap gap-2">
                <StatusChip status="active" /><StatusChip status="past_due" /><StatusChip status="trial" />
              </div>
            </div>
            <div className="animate-on-scroll scale-in rounded-2xl border bg-white p-5" style={{ borderColor: FT_BORDER }}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: FT_SUBTEXT }}>Form Field / Dropdown</p>
              <div className="mb-2 rounded-lg border p-2 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>Company name</div>
              <div className="flex items-center justify-between rounded-lg border p-2 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>
                Monthly billing <Icon path={ICONS.chevronDown} className="h-3.5 w-3.5" />
              </div>
            </div>
            <div className="animate-on-scroll scale-in rounded-2xl border bg-white p-5" style={{ borderColor: FT_BORDER }}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: FT_SUBTEXT }}>Notification / Success Toast</p>
              <div className="flex items-center gap-2 rounded-lg p-2 text-xs" style={{ background: FT_GREEN_BG, color: FT_GREEN }}>
                <Icon path={ICONS.checkCircle} className="h-4 w-4" /> Payment method updated
              </div>
            </div>
            <div className="animate-on-scroll scale-in rounded-2xl border bg-white p-5" style={{ borderColor: FT_BORDER }}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: FT_SUBTEXT }}>Empty State</p>
              <div className="flex flex-col items-center rounded-lg border border-dashed p-4 text-center" style={{ borderColor: FT_BORDER }}>
                <Icon path={ICONS.bell} className="mb-1 h-5 w-5" style={{ color: FT_SUBTEXT }} />
                <p className="text-[11px]" style={{ color: FT_SUBTEXT }}>No billing alerts right now</p>
              </div>
            </div>
            <div className="animate-on-scroll scale-in rounded-2xl border bg-white p-5 sm:col-span-2" style={{ borderColor: FT_BORDER }}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: FT_SUBTEXT }}>Usage Chart</p>
              <div className="flex h-16 items-end gap-1.5">
                {[40, 55, 48, 62, 70, 66, 80, 74, 90].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: FT_LIGHT }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= ACCESSIBILITY ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Accessibility</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-12 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            Billing Clarity Has to Work for Everyone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'High color contrast throughout',
              'Large, forgiving click targets',
              'Full keyboard navigation',
              'Screen-reader labels on every control',
              'Consistent iconography across screens',
              'Error messages written in plain language',
            ].map((t, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${(i % 5) + 1} flex items-start gap-3 rounded-2xl border bg-white p-5`} style={{ borderColor: FT_BORDER }}>
                <Icon path={ICONS.checkCircle} className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: FT_GREEN }} />
                <span className="text-sm" style={{ color: FT_TEXT }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= EDGE CASES ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Edge Cases</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-6 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            Designing for the Scenarios That Break Billing Systems
          </h2>
          <p className="animate-on-scroll fade-in mx-auto mb-12 max-w-3xl text-center" style={{ color: FT_SUBTEXT }}>
            A billing system is only as trustworthy as its handling of edge cases &mdash; the moments most billing UIs quietly ignore.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'Removing seats below active users', d: 'Fintra blocks the downgrade and routes the admin to remove specific members first, rather than silently revoking access.' },
              { t: 'Expired corporate cards', d: 'A 14-day advance warning fires before expiry, not after the first failed charge.' },
              { t: 'Duplicate subscriptions', d: 'Fintra detects a second active subscription on the same workspace and prompts to merge, preventing double billing.' },
              { t: 'Tax / VAT changes', d: 'Updating a billing region recalculates and previews tax before the next invoice is generated, never after.' },
              { t: 'Admin vs. finance permissions', d: 'Finance roles can view and export invoices without the ability to change seats or plans — and vice versa.' },
            ].map((e, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${(i % 5) + 1} rounded-2xl border bg-white p-6`} style={{ borderColor: FT_BORDER }}>
                <h4 className="mb-2 font-semibold" style={{ color: FT_TEXT }}>{e.t}</h4>
                <p className="text-sm" style={{ color: FT_SUBTEXT }}>{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= BUSINESS IMPACT ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Business Impact</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-12 text-center text-4xl font-bold" style={{ color: FT_DARK }}>
            Why This Isn&apos;t Just a UX Problem
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: ICONS.bell, t: 'Lower support costs', d: 'Self-serve transparency deflects the billing questions that make up a large share of admin tickets.' },
              { icon: ICONS.users, t: 'Improved subscription retention', d: 'Admins who trust their bill are far less likely to churn out of frustration or confusion.' },
              { icon: ICONS.card, t: 'Reduced involuntary churn', d: 'A grace period and automatic retries recover revenue that would otherwise be lost to a single failed card.' },
              { icon: ICONS.shield, t: 'Builds durable trust', d: 'Transparent billing becomes a quiet differentiator admins mention when recommending the product internally.' },
            ].map((b, i) => (
              <div key={i} className={`animate-on-scroll slide-${i % 2 === 0 ? 'left' : 'right'} flex gap-5 rounded-2xl border bg-white p-6`} style={{ borderColor: FT_BORDER }}>
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: '#EEF2FF' }}>
                  <Icon path={b.icon} className="h-5 w-5" style={{ color: FT_PRIMARY }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: FT_TEXT }}>{b.t}</p>
                  <p className="mt-1 text-sm" style={{ color: FT_SUBTEXT }}>{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= SUCCESS METRICS ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 text-white" style={{ background: `linear-gradient(160deg, ${FT_DARK}, #0B0A24)` }}>
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest" style={{ color: FT_LIGHT }}>Projected Outcomes</p>
          <h2 className="animate-on-scroll slide-up mb-4 text-center text-4xl font-bold text-white">Success Metrics</h2>
          <p className="animate-on-scroll fade-in mx-auto mb-16 max-w-2xl text-center" style={{ color: '#C7D2FE' }}>
            If launched, these are the outcomes Fintra would be measured against &mdash; projected estimates for this
            concept, not measured production results.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { stat: '-42%', label: 'Billing support tickets' },
              { stat: '-63%', label: 'Time to recover failed payments' },
              { stat: '+38%', label: 'Invoice download completion' },
              { stat: '-31%', label: 'Average billing task completion time' },
              { stat: '4.7/5', label: 'Admin satisfaction' },
            ].map((m, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${(i % 5) + 1} rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm`}>
                <p className="mb-2 text-3xl font-bold text-white">{m.stat}</p>
                <p className="text-xs" style={{ color: '#C7D2FE' }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= REFLECTION ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>Reflection</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-8 text-4xl font-bold" style={{ color: FT_DARK }}>
            The Highest-Impact Work Is Often the Least Visible
          </h2>
          <p className="animate-on-scroll fade-in mb-6 text-lg leading-relaxed" style={{ color: FT_SUBTEXT }}>
            This project reinforced that great product design isn&apos;t only about creating beautiful interfaces. Some of
            the highest-impact opportunities exist in moments users hope they never have to experience &mdash; billing
            confusion, payment failures, and account management. By designing for transparency rather than complexity,
            Fintra transforms billing from a support burden into a predictable, trustworthy experience.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
            style={{ background: FT_PRIMARY }}
          >
            <Icon path={ICONS.arrowLeft} className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
