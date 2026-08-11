'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Design tokens (Fintra, concept SaaS billing product)               */
/* ------------------------------------------------------------------ */
const FT_PRIMARY = '#111111';
const FT_DARK = '#111111';
const FT_LIGHT = 'rgba(255,255,255,0.62)';
const FT_BG = '#FAFAF8';
const FT_TEXT = '#111111';
const FT_SUBTEXT = '#6E6E6B';
const FT_BORDER = '#E4E3DE';
const FT_GREEN = '#0B7A3B';
const FT_GREEN_BG = '#EAF2EC';
const FT_RED = '#B91C1C';
const FT_RED_BG = '#F7EAEA';

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
  plus: 'M12 4v16m8-8H4',
  minus: 'M20 12H4',
  alert: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
  users: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8zm6 3.87V20h-6v-1.13a4 4 0 013-3.87',
  card: 'M3 10h18M7 15h1m4 0h5M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z',
  download: 'M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  filter: 'M3 4h18M6 8h12M9 12h6M11 16h2',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  chart: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
};

/* ------------------------------------------------------------------ */
/*  Fintra monogram                                                     */
/* ------------------------------------------------------------------ */
function FintraMark({ size = 'lg' }: { size?: 'md' | 'lg' }) {
  const dims = size === 'lg' ? 'h-20 w-20 text-3xl' : 'h-10 w-10 text-base';
  return (
    <div
      className={`flex ${dims} items-center justify-center border font-bold text-white`}
      style={{ background: FT_TEXT, borderColor: FT_TEXT }}
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
      <div className="overflow-hidden border" style={{ borderColor: FT_BORDER }}>
        <div className="flex items-center gap-2 border-b bg-gray-50 px-4 py-3" style={{ borderColor: FT_BORDER }}>
          <span className="h-3 w-3 rounded-full border" style={{ borderColor: FT_BORDER }} />
          <span className="h-3 w-3 rounded-full border" style={{ borderColor: FT_BORDER }} />
          <span className="h-3 w-3 rounded-full border" style={{ borderColor: FT_BORDER }} />
          <div className="ml-4 flex-1 truncate border bg-white px-4 py-1.5 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>
            {url}
          </div>
        </div>
        <div className="bg-white">{children}</div>
      </div>
      {label && <p className="sw-label mt-4 text-center" style={{ color: FT_SUBTEXT }}>{label}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Status chip                                                        */
/* ------------------------------------------------------------------ */
type Status = 'active' | 'past_due' | 'trial' | 'canceled';
const STATUS_COPY: Record<Status, { label: string; color: string; bg: string; filled: boolean }> = {
  active: { label: 'Active', color: FT_GREEN, bg: FT_GREEN_BG, filled: true },
  past_due: { label: 'Past Due', color: FT_RED, bg: FT_RED_BG, filled: true },
  trial: { label: 'Trial', color: FT_TEXT, bg: 'transparent', filled: false },
  canceled: { label: 'Canceled', color: FT_SUBTEXT, bg: 'transparent', filled: false },
};
function StatusChip({ status }: { status: Status }) {
  const c = STATUS_COPY[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 border px-3 py-1 text-xs font-semibold"
      style={{ background: c.filled ? c.bg : 'transparent', color: c.color, borderColor: c.filled ? 'transparent' : FT_BORDER }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.color }} />
      {c.label}
    </span>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="sw-label mb-3 text-center" style={{ color: FT_SUBTEXT }}>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Issue / Fix label pair                                             */
/* ------------------------------------------------------------------ */
function IssueFix({ issue, fix }: { issue: string; fix: string }) {
  return (
    <div className="space-y-4">
      <div>
        <p className="sw-label mb-1.5" style={{ color: FT_SUBTEXT }}>The issue</p>
        <p style={{ color: FT_TEXT }}>{issue}</p>
      </div>
      <div>
        <p className="sw-label mb-1.5" style={{ color: FT_SUBTEXT }}>The fix</p>
        <p style={{ color: FT_TEXT }}>{fix}</p>
      </div>
    </div>
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
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8" style={{ background: FT_BG }}>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-on-scroll fade-in">
            <Link href="/#featured-work" className="inline-flex items-center text-gray-500 transition-colors hover:text-gray-900">
              <Icon path={ICONS.arrowLeft} className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
          </div>

          <div className="mb-8 flex items-center justify-center animate-on-scroll scale-in stagger-1">
            <FintraMark size="lg" />
          </div>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="sw-label border px-3 py-1" style={{ color: FT_SUBTEXT, borderColor: FT_BORDER }}>
              Concept Product
            </span>
            <span className="sw-label border px-3 py-1" style={{ color: FT_SUBTEXT, borderColor: FT_BORDER }}>
              Not Affiliated With Any Company
            </span>
          </div>

          <h1 className="mb-4 animate-on-scroll slide-up stagger-2 sw-display text-4xl lg:text-5xl" style={{ color: FT_DARK }}>
            Fintra
          </h1>
          <p className="mx-auto mb-10 max-w-2xl animate-on-scroll slide-up stagger-3 text-xl md:text-2xl" style={{ color: FT_SUBTEXT }}>
            Fintra is the billing screen inside a SaaS product, the page where a team admin manages who has
            access and what it costs. This concept makes that screen transparent instead of confusing.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm animate-on-scroll fade-in stagger-4">
            <div className="flex flex-col items-center">
              <span className="sw-label" style={{ color: FT_SUBTEXT }}>Role</span>
              <span className="font-semibold" style={{ color: FT_TEXT }}>Lead Designer, Experience Research &amp; UI Design</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label" style={{ color: FT_SUBTEXT }}>Scope</span>
              <span className="font-semibold" style={{ color: FT_TEXT }}>Billing, subscriptions, payment recovery</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label" style={{ color: FT_SUBTEXT }}>Status</span>
              <span className="font-semibold" style={{ color: FT_TEXT }}>Concept, unshipped</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= THE PROBLEM ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: FT_BORDER }}>
        <div className="mx-auto max-w-4xl">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="sw-display animate-on-scroll slide-up mb-8 text-center text-4xl" style={{ color: FT_DARK }}>
            The bill was never the problem. Not knowing was.
          </h2>
          <p className="animate-on-scroll fade-in mb-6 text-lg leading-relaxed" style={{ color: FT_TEXT }}>
            I&apos;ve managed software subscriptions for a small team before. The number on the invoice was never
            confusing. What actually created stress was not knowing when it would change, or what to do when a card
            failed and the whole team suddenly lost access.
          </p>
          <p className="animate-on-scroll fade-in mb-16 text-lg leading-relaxed" style={{ color: FT_TEXT }}>
            Admins don&apos;t get anxious about spending money. They get anxious about surprises: a seat added with no
            warning, an invoice nobody can read quickly, a payment failure that locks people out before anyone even
            knows there&apos;s a problem.
          </p>

          <div className="grid animate-on-scroll fade-in gap-4 sm:grid-cols-2">
            {[
              { icon: ICONS.alert, title: 'Unexpected charges', body: 'Adding a teammate silently changes the bill with no warning.' },
              { icon: ICONS.users, title: 'Unclear seat pricing', body: 'Admins can’t tell what the next seat will actually cost.' },
              { icon: ICONS.shield, title: 'Account lockouts', body: 'A failed card silently locks the whole team out.' },
              { icon: ICONS.chart, title: 'Confusing invoices', body: 'Layouts built for accountants, not busy administrators.' },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-4 border p-5" style={{ borderColor: FT_BORDER }}>
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border" style={{ borderColor: FT_BORDER }}>
                  <Icon path={p.icon} className="h-4.5 w-4.5" style={{ color: FT_PRIMARY }} />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold" style={{ color: FT_TEXT }}>{p.title}</h4>
                  <p className="text-sm" style={{ color: FT_SUBTEXT }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 1: LIVE SEAT MANAGEMENT ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: FT_BORDER, background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <h3 className="sw-display mb-5 text-2xl" style={{ color: FT_DARK }}>1. Live Seat Management</h3>
              <p className="mb-5 text-sm" style={{ color: FT_SUBTEXT }}>A &quot;seat&quot; is just one paid spot for a teammate. Add a person, add a seat, and the bill changes.</p>
              <IssueFix
                issue="Adding a teammate changed the bill immediately, with no visibility into the new cost until an invoice arrived days later."
                fix="A live calculator that updates instantly as seats change: current seats, new seats, the monthly difference, and the exact charge for the days left in the billing cycle, all before anything is confirmed."
              />
              <p className="mt-4 text-sm font-medium" style={{ color: FT_TEXT }}>Try it: adjust the seat count on the right.</p>
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <BrowserFrame url="app.fintra.io/billing/seats" label="Screen 01 &middot; Live Seat Management (interactive)">
                <div className="p-6">
                  <p className="mb-1 text-sm font-semibold" style={{ color: FT_TEXT }}>Manage Seats</p>
                  <p className="mb-5 text-xs" style={{ color: FT_SUBTEXT }}>Changes apply immediately. You&apos;ll only pay the prorated difference today.</p>

                  <div className="mb-5 flex items-center justify-between border p-4" style={{ borderColor: FT_BORDER }}>
                    <div>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>Seats on your plan</p>
                      <p className="text-2xl font-bold" style={{ color: FT_TEXT }}>{seats}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSeats((s) => Math.max(1, s - 1))}
                        className="flex h-9 w-9 items-center justify-center border text-lg font-bold"
                        style={{ borderColor: FT_BORDER, color: FT_TEXT }}
                        aria-label="Decrease seats"
                      >
                        <Icon path={ICONS.minus} className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setSeats((s) => s + 1)}
                        className="flex h-9 w-9 items-center justify-center text-lg font-bold text-white"
                        style={{ background: FT_PRIMARY }}
                        aria-label="Increase seats"
                      >
                        <Icon path={ICONS.plus} className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-5 space-y-2 p-4 text-sm" style={{ background: FT_BG }}>
                    <div className="flex justify-between"><span style={{ color: FT_SUBTEXT }}>Base plan seats</span><span style={{ color: FT_TEXT }}>{baseSeats}</span></div>
                    <div className="flex justify-between"><span style={{ color: FT_SUBTEXT }}>New seats</span><span style={{ color: FT_TEXT }}>{seats}</span></div>
                    <div className="flex justify-between"><span style={{ color: FT_SUBTEXT }}>Monthly difference</span><span style={{ color: FT_TEXT }}>${monthlyDiff.toFixed(2)}</span></div>
                    <div className="flex justify-between border-t pt-2 font-semibold" style={{ borderColor: FT_BORDER }}>
                      <span style={{ color: FT_TEXT }}>Prorated charge today ({daysLeftInCycle} of {cycleDays} days left)</span>
                      <span style={{ color: FT_TEXT }}>${prorated.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mb-4 border p-4 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>
                    Next invoice on Aug 1 will reflect <strong style={{ color: FT_TEXT }}>{seats} seats</strong> at ${perSeat}/seat: ${(seats * perSeat).toFixed(2)}/mo.
                  </div>

                  <button className="sw-btn sw-btn-primary w-full">
                    Confirm {seats} Seats
                  </button>
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 2: BILLING DASHBOARD ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: FT_BORDER }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-on-scroll scale-in">
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
                    <div className="border p-3" style={{ borderColor: FT_BORDER }}>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>Next payment</p>
                      <p className="font-bold" style={{ color: FT_TEXT }}>$288.00</p>
                    </div>
                    <div className="border p-3" style={{ borderColor: FT_BORDER }}>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>Seats used</p>
                      <p className="font-bold" style={{ color: FT_TEXT }}>24 / 24</p>
                    </div>
                    <div className="border p-3" style={{ borderColor: FT_BORDER }}>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>Payment method</p>
                      <p className="font-bold" style={{ color: FT_TEXT }}>Visa &bull;&bull;4482</p>
                    </div>
                  </div>
                  <div className="mb-3 flex items-center justify-between border p-4" style={{ borderColor: FT_BORDER }}>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: FT_TEXT }}>Upcoming invoice</p>
                      <p className="text-xs" style={{ color: FT_SUBTEXT }}>24 seats &middot; Aug 1, 2026</p>
                    </div>
                    <span className="font-bold" style={{ color: FT_TEXT }}>$288.00</span>
                  </div>
                  <div className="border p-4" style={{ borderColor: FT_BORDER }}>
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
            <div className="animate-on-scroll slide-right">
              <h3 className="sw-display mb-5 text-2xl" style={{ color: FT_DARK }}>2. Billing Dashboard</h3>
              <IssueFix
                issue="Plan, payment method, next invoice, and usage were scattered across different settings pages, so a simple question took several clicks to answer."
                fix="One dashboard: current plan, next payment, payment method, and recent charges, all visible without digging through menus."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 3: INVOICE HISTORY ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: FT_BORDER, background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <h3 className="sw-display mb-5 text-2xl" style={{ color: FT_DARK }}>3. Invoice History</h3>
              <IssueFix
                issue="Invoices lived as PDFs buried in a menu, with no way to search, filter, or export them for finance."
                fix="A searchable ledger with filters, one-click receipt downloads, and CSV export built in."
              />
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <BrowserFrame url="app.fintra.io/billing/invoices" label="Screen 03 &middot; Invoice History">
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 border px-3 py-2" style={{ borderColor: FT_BORDER }}>
                      <Icon path={ICONS.search} className="h-4 w-4" style={{ color: FT_SUBTEXT }} />
                      <span className="text-xs" style={{ color: FT_SUBTEXT }}>Search invoices&hellip;</span>
                    </div>
                    <button className="flex items-center gap-1 border px-3 py-2 text-xs font-medium" style={{ borderColor: FT_BORDER, color: FT_TEXT }}>
                      <Icon path={ICONS.filter} className="h-3.5 w-3.5" /> Filter
                    </button>
                    <button className="flex items-center gap-1 border px-3 py-2 text-xs font-medium" style={{ borderColor: FT_BORDER, color: FT_TEXT }}>
                      <Icon path={ICONS.download} className="h-3.5 w-3.5" /> Export CSV
                    </button>
                  </div>
                  <div className="overflow-hidden border" style={{ borderColor: FT_BORDER }}>
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

      {/* ============================= FEATURE 4: PAYMENT FAILURE RECOVERY ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: FT_BORDER }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-on-scroll scale-in">
              <BrowserFrame url="app.fintra.io/billing" label="Screen 04 &middot; Failed Payment Banner + Grace Period">
                <div className="p-6">
                  <div className="mb-4 flex items-start gap-3 border p-4" style={{ borderColor: FT_BORDER, background: FT_RED_BG }}>
                    <Icon path={ICONS.alert} className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: FT_RED }} />
                    <div className="flex-1">
                      <p className="text-sm font-bold" style={{ color: FT_RED }}>Your last payment didn&apos;t go through</p>
                      <p className="mt-1 text-xs" style={{ color: FT_TEXT }}>
                        Your team keeps full access for the next <strong>7 days</strong> while you update your payment method.
                        We&apos;ll automatically retry on Jul 29.
                      </p>
                      <button className="sw-btn sw-btn-primary mt-3 px-4 py-2 text-xs">Update Payment Method</button>
                    </div>
                  </div>
                  <div className="border p-4 text-xs" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>
                    Grace period: <strong style={{ color: FT_TEXT }}>6 days remaining</strong> &middot; Next automatic retry: Jul 29, 2026
                  </div>
                </div>
              </BrowserFrame>
            </div>
            <div className="animate-on-scroll slide-right">
              <h3 className="sw-display mb-5 text-2xl" style={{ color: FT_DARK }}>4. Payment Failure Recovery</h3>
              <IssueFix
                issue="A failed card locked the whole team out immediately, with no warning and no path to fix it without contacting support."
                fix="A visible grace period with automatic retries, so a failed card is a heads-up, not a lockout."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 5: FIRST-TIME BILLING SETUP ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: FT_BORDER, background: FT_BG }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <h3 className="sw-display mb-5 text-2xl" style={{ color: FT_DARK }}>5. First-Time Billing Setup</h3>
              <IssueFix
                issue="New admins were dropped into a bare settings page with no context for what each choice meant."
                fix="A short guided setup that explains plan choice, payment method, seat pricing, and billing cycle in plain language, one step at a time."
              />
              <p className="mt-4 text-sm font-medium" style={{ color: FT_TEXT }}>Click through the wizard on the right.</p>
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <BrowserFrame url="app.fintra.io/setup" label="Screen 05 &middot; First-Time Billing Setup Wizard (interactive)">
                <div className="p-6">
                  <div className="mb-5 flex items-center gap-2">
                    {wizardSteps.map((_, i) => (
                      <div key={i} className="h-1.5 flex-1" style={{ background: i <= wizardStep ? FT_PRIMARY : FT_BORDER }} />
                    ))}
                  </div>
                  <p className="sw-label mb-1" style={{ color: FT_SUBTEXT }}>Step {wizardStep + 1} of {wizardSteps.length}</p>
                  <h4 className="mb-4 text-lg font-bold" style={{ color: FT_TEXT }}>{wizardSteps[wizardStep]}</h4>

                  <div className="mb-6 border p-5 text-sm" style={{ borderColor: FT_BORDER, background: FT_BG, color: FT_SUBTEXT }}>
                    {wizardStep === 0 && 'Choose the plan that fits your team size today. You can change this anytime.'}
                    {wizardStep === 1 && 'Add a card or bank account. We’ll never charge you until your trial ends.'}
                    {wizardStep === 2 && `Seats cost $${perSeat} each. You’ll always see the total before confirming any change.`}
                    {wizardStep === 3 && 'Choose monthly or annual billing. Annual saves 15%.'}
                    {wizardStep === 4 && 'You’re all set. Your first invoice will arrive on your renewal date, not before.'}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setWizardStep((s) => Math.max(0, s - 1))}
                      disabled={wizardStep === 0}
                      className="sw-btn sw-btn-secondary px-4 py-2 text-sm disabled:opacity-40"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setWizardStep((s) => Math.min(wizardSteps.length - 1, s + 1))}
                      disabled={wizardStep === wizardSteps.length - 1}
                      className="sw-btn sw-btn-primary px-5 py-2 text-sm disabled:opacity-40"
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

      {/* ============================= BEFORE VS AFTER ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: FT_BORDER }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Before and After</SectionEyebrow>
          <h2 className="sw-display animate-on-scroll slide-up mb-16 text-center text-4xl" style={{ color: FT_DARK }}>
            Same Failed Card, Different Outcome
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="animate-on-scroll slide-left border p-6" style={{ borderColor: FT_BORDER }}>
              <p className="mb-4 text-center font-bold" style={{ color: FT_SUBTEXT }}>BEFORE</p>
              <ol className="space-y-3 text-sm">
                {['Payment fails', 'Account locks', 'Support ticket', 'Frustration'].map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border text-xs font-bold" style={{ borderColor: FT_BORDER, color: FT_SUBTEXT }}>{i + 1}</span>
                    <span style={{ color: FT_SUBTEXT }}>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="animate-on-scroll slide-right border-2 p-6" style={{ borderColor: FT_TEXT }}>
              <p className="mb-4 text-center font-bold" style={{ color: FT_TEXT }}>AFTER</p>
              <ol className="space-y-3 text-sm">
                {['Payment fails', 'Grace period begins, no lockout', 'Email reminder sent', 'Admin updates card', 'Payment retries automatically'].map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-xs font-bold text-white" style={{ background: FT_TEXT }}>{i + 1}</span>
                    <span style={{ color: FT_TEXT }}>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <p className="animate-on-scroll fade-in mt-8 text-center text-sm" style={{ color: FT_SUBTEXT }}>
            No new payment processor, no new fraud logic. Just enough warning and enough time to fix it before anyone
            loses access.
          </p>
        </div>
      </section>

      {/* ============================= OUTCOMES ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8 text-white" style={{ borderColor: FT_BORDER, background: FT_DARK }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="sw-label mb-3 text-center" style={{ color: FT_LIGHT }}>Projected Outcomes</p>
          <h2 className="sw-display animate-on-scroll slide-up mb-6 text-4xl text-white">What I would expect to see</h2>
          <p className="animate-on-scroll fade-in mb-12 text-lg leading-relaxed" style={{ color: FT_LIGHT }}>
            The two behaviors that showed up most were repeated invoice-hunting and support tickets that only needed
            an explanation. Those are exactly what this is built to intercept. These are estimates for a concept, not
            measured results.
          </p>
          <div className="grid animate-on-scroll fade-in gap-8 sm:grid-cols-3">
            {[
              { stat: '42%', label: 'fewer billing support tickets' },
              { stat: '63%', label: 'faster recovery from failed payments' },
              { stat: '31%', label: 'faster average billing task completion' },
            ].map((m, i) => (
              <div key={i}>
                <p className="sw-display mb-2 text-4xl text-white">{m.stat}</p>
                <p className="text-sm" style={{ color: FT_LIGHT }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= REFLECTION ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: FT_BORDER, background: FT_BG }}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Reflection</SectionEyebrow>
          <h2 className="sw-display animate-on-scroll slide-up mb-8 text-4xl" style={{ color: FT_DARK }}>
            Trust is a billing feature
          </h2>
          <p className="animate-on-scroll fade-in mb-12 text-lg leading-relaxed" style={{ color: FT_SUBTEXT }}>
            The biggest lesson for me was that billing doesn&apos;t earn trust by being cheap. It earns trust by being
            predictable. None of this required new pricing logic or a new payment processor. It just required showing
            the cost before asking for confirmation, and giving people a warning before cutting off their access.
          </p>
          <Link href="/#featured-work" className="sw-btn sw-btn-primary inline-flex">
            <Icon path={ICONS.arrowLeft} className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
