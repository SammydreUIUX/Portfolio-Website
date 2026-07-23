'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Brand tokens (PayPal design language)                              */
/* ------------------------------------------------------------------ */
const PP_BLUE = '#0070BA';
const PP_DARK = '#003087';
const PP_LIGHT = '#009CDE';
const PP_BG = '#F5F7FA';
const PP_TEXT = '#1A1A1A';
const PP_SUBTEXT = '#6C7378';
const PP_BORDER = '#E4E7EB';
const PP_GREEN = '#0B7A3B';
const PP_AMBER = '#B45309';
const PP_RED = '#C0392B';

/* ------------------------------------------------------------------ */
/*  Small icon primitives                                              */
/* ------------------------------------------------------------------ */
function Icon({ path, className = 'w-5 h-5', style }: { path: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );
}
const ICONS = {
  check: 'M5 13l4 4L19 7',
  checkCircle: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  chevronDown: 'M19 9l-7 7-7-7',
  chevronRight: 'M9 5l7 7-7 7',
  arrowLeft: 'M10 19l-7-7m0 0l7-7m-7 7h18',
  arrowRight: 'M17 8l4 4m0 0l-4 4m4-4H3',
  sparkle: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  alertTriangle: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
  card: 'M3 10h18M7 15h1m4 0h5M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z',
  bank: 'M3 21h18M4 18h16M6 18v-7m4 7v-7m4 7v-7m4 7v-7M4 10l8-6 8 6M4 10h16',
  chat: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.06 0-2.077-.16-3.02-.457L3 21l1.593-4.264C3.583 15.44 3 13.775 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  question: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  refresh: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  inbox: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0l-2 5H6l-2-5m16 0h-3.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 006.586 13H3',
  eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  location: 'M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
};

/* ------------------------------------------------------------------ */
/*  PayPal glyph (official brand mark)                                 */
/* ------------------------------------------------------------------ */
function PayPalLogo({ className = 'w-10 h-10', color = '#FFFFFF' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  AI avatar                                                          */
/* ------------------------------------------------------------------ */
function AIAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';
  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-7 h-7' : 'w-5 h-5';
  return (
    <div
      className={`${dims} rounded-full flex items-center justify-center shadow-md flex-shrink-0`}
      style={{ background: `linear-gradient(135deg, ${PP_LIGHT}, ${PP_DARK})` }}
    >
      <Icon path={ICONS.sparkle} className={`${iconSize} text-white`} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Phone / Browser chrome                                             */
/* ------------------------------------------------------------------ */
function PhoneFrame({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="relative rounded-[2.5rem] bg-gray-900 p-3 shadow-2xl">
        <div className="absolute left-1/2 top-3 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-gray-900" />
        <div className="relative flex h-[600px] flex-col overflow-hidden rounded-[2rem] bg-white">
          <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[11px] font-semibold" style={{ color: PP_TEXT }}>
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex items-end gap-0.5">
                <span className="h-1.5 w-1 rounded-sm bg-current" />
                <span className="h-2 w-1 rounded-sm bg-current" />
                <span className="h-2.5 w-1 rounded-sm bg-current" />
                <span className="h-3 w-1 rounded-sm bg-current" />
              </div>
              <div className="h-3 w-4 rounded-sm border border-current" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
      {label && <p className="mt-4 text-center text-sm font-medium text-gray-500">{label}</p>}
    </div>
  );
}

function BrowserFrame({ children, url, label }: { children: React.ReactNode; url: string; label?: string }) {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border shadow-2xl" style={{ borderColor: PP_BORDER }}>
        <div className="flex items-center gap-2 border-b bg-gray-50 px-4 py-3" style={{ borderColor: PP_BORDER }}>
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <div className="ml-4 flex-1 truncate rounded-full border bg-white px-4 py-1.5 text-xs" style={{ borderColor: PP_BORDER, color: PP_SUBTEXT }}>
            {url}
          </div>
        </div>
        <div className="bg-white">{children}</div>
      </div>
      {label && <p className="mt-4 text-center text-sm font-medium text-gray-500">{label}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Confidence ring                                                    */
/* ------------------------------------------------------------------ */
function ConfidenceRing({ percent }: { percent: number }) {
  return (
    <div
      className="relative flex h-16 w-16 items-center justify-center rounded-full flex-shrink-0"
      style={{ background: `conic-gradient(${PP_BLUE} ${percent * 3.6}deg, ${PP_BORDER} 0deg)` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
        <span className="text-sm font-bold" style={{ color: PP_DARK }}>{percent}%</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Risk meter                                                         */
/* ------------------------------------------------------------------ */
type RiskLevel = 'safe' | 'verification' | 'high';
const RISK_COPY: Record<RiskLevel, { label: string; color: string; bg: string; explanation: string }> = {
  safe: {
    label: 'Safe',
    color: PP_GREEN,
    bg: '#EAF7EE',
    explanation: 'This payment matches your usual sending patterns. No extra checks are needed.',
  },
  verification: {
    label: 'Needs Verification',
    color: PP_AMBER,
    bg: '#FDF3E3',
    explanation: 'This payment is larger than usual, so we’re confirming a few details before releasing funds. This is routine and keeps your money safe.',
  },
  high: {
    label: 'High Risk',
    color: PP_RED,
    bg: '#FBEAE8',
    explanation: 'We noticed unusual activity on this payment. We’ve paused it to protect your account while our security team reviews it.',
  },
};
function RiskMeter({ level }: { level: RiskLevel }) {
  const order: RiskLevel[] = ['safe', 'verification', 'high'];
  const idx = order.indexOf(level);
  const copy = RISK_COPY[level];
  return (
    <div>
      <div className="relative mb-2 h-2 w-full rounded-full" style={{ background: PP_BORDER }}>
        <div
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white shadow transition-all duration-500"
          style={{ left: `calc(${(idx / (order.length - 1)) * 100}% - 8px)`, background: copy.color }}
        />
        <div
          className="h-2 rounded-full transition-all duration-500"
          style={{ width: `${((idx + 1) / order.length) * 100}%`, background: copy.color, opacity: 0.35 }}
        />
      </div>
      <div className="mb-3 flex justify-between text-[11px] font-medium" style={{ color: PP_SUBTEXT }}>
        <span>Safe</span>
        <span>Needs Verification</span>
        <span>High Risk</span>
      </div>
      <div className="rounded-xl p-4" style={{ background: copy.bg }}>
        <p className="mb-1 text-sm font-bold" style={{ color: copy.color }}>{copy.label}</p>
        <p className="text-sm leading-relaxed" style={{ color: PP_TEXT }}>{copy.explanation}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Timeline step                                                      */
/* ------------------------------------------------------------------ */
type StepStatus = 'done' | 'active' | 'upcoming';
function TimelineStep({
  status, title, time, description, isLast = false,
}: { status: StepStatus; title: string; time: string; description: string; isLast?: boolean }) {
  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      {!isLast && (
        <div
          className="absolute left-[15px] top-8 h-full w-0.5"
          style={{ background: status === 'done' ? PP_GREEN : PP_BORDER }}
        />
      )}
      <div className="relative z-10 flex-shrink-0">
        {status === 'done' && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: PP_GREEN }}>
            <Icon path={ICONS.check} className="h-4 w-4 text-white" />
          </div>
        )}
        {status === 'active' && (
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full" style={{ background: PP_BLUE }}>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-40" style={{ background: PP_BLUE }} />
            <Icon path={ICONS.clock} className="h-4 w-4 text-white" />
          </div>
        )}
        {status === 'upcoming' && (
          <div className="h-8 w-8 rounded-full border-2" style={{ borderColor: PP_BORDER }} />
        )}
      </div>
      <div className="flex-1 pt-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-semibold" style={{ color: status === 'upcoming' ? PP_SUBTEXT : PP_TEXT }}>{title}</p>
          <span className="text-xs font-medium" style={{ color: PP_SUBTEXT }}>{time}</span>
        </div>
        <p className="mt-1 text-sm" style={{ color: PP_SUBTEXT }}>{description}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section heading helper                                             */
/* ------------------------------------------------------------------ */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest" style={{ color: PP_BLUE }}>
      {children}
    </p>
  );
}

/* ==================================================================== */
/*  MAIN PAGE                                                            */
/* ==================================================================== */
export default function PayPalCaseStudy() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [openWhy, setOpenWhy] = useState<number | null>(0);
  const [riskDemo, setRiskDemo] = useState<RiskLevel>('verification');
  const [failureScenario, setFailureScenario] = useState<'declined' | 'insufficient' | 'expired'>('declined');
  const [helpQuestion, setHelpQuestion] = useState<string | null>('Where is my money?');

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

  const whyQuestions = [
    {
      q: 'Why is my payment pending?',
      a: 'Your payment is larger than what you usually send, so our automated security system is taking a closer look before releasing the funds. This is a routine check — you don’t need to do anything. It typically finishes within a few hours.',
    },
    {
      q: 'Why was my card declined?',
      a: 'Your bank didn’t approve this specific charge. This is usually because of a temporary hold, an expired card on file, or your bank’s own fraud rules — it isn’t something PayPal blocked. Updating your card or trying a different payment method usually resolves it right away.',
    },
    {
      q: 'Why am I being asked to verify my identity?',
      a: 'We ask for extra verification when a payment doesn’t match your typical activity — for example, a new device, a new recipient, or a larger amount. It’s a one-time check that protects your account, and most people finish it in under two minutes.',
    },
  ];

  const failureCopy = {
    declined: {
      title: 'Your card was declined',
      what: 'Chase Bank didn’t approve this $340.00 payment to Maria G.',
      why: 'Banks sometimes decline larger or unfamiliar charges automatically, even when your account is in good standing. This wasn’t triggered by PayPal.',
      fix: 'Try again with a different payment method, or confirm with your bank that the charge is allowed.',
      actions: ['Use another payment method', 'Contact your bank', 'Retry tomorrow'],
    },
    insufficient: {
      title: 'Payment couldn’t be completed',
      what: 'Your linked bank account didn’t have enough available balance to cover $340.00.',
      why: 'This happens when pending deposits haven’t cleared yet, or recent spending has lowered your available balance.',
      fix: 'Add funds to your bank account, or pay with a card or PayPal balance instead.',
      actions: ['Use PayPal balance', 'Use another payment method', 'Retry once funds clear'],
    },
    expired: {
      title: 'Your card has expired',
      what: 'The Visa card ending in 4482 on your account expired last month.',
      why: 'We keep expired cards on file so your payment history stays intact, but they can’t be charged.',
      fix: 'Update your card details and this payment will go through immediately.',
      actions: ['Update billing details', 'Use another payment method'],
    },
  } as const;
  const fc = failureCopy[failureScenario];

  const helpAnswers: Record<string, string> = {
    'Where is my money?': 'Your $340.00 payment to Maria G. is with our automated security system right now — it hasn’t left your account, and it hasn’t been lost. You’ll see it move to "Completed" as soon as the check clears.',
    'Why is this delayed?': 'This payment is larger than what you usually send, which triggers an automatic review. Reviews like this usually finish within a few hours — most complete same-day.',
    'Do I need to do anything?': 'No action is needed right now. If we need more information from you, we’ll show a clear request here and send you a notification.',
    'How long will this take?': 'Based on similar payments, this review usually finishes within 3–5 hours. We’ll notify you the moment it’s done.',
  };

  return (
    <div className="min-h-screen bg-white" style={{ color: PP_TEXT }}>
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
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
      `}</style>

      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8" style={{ background: `linear-gradient(180deg, ${PP_BG} 0%, #FFFFFF 100%)` }}>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-on-scroll fade-in">
            <Link href="/projects" className="inline-flex items-center text-gray-500 transition-colors hover:text-gray-900">
              <Icon path={ICONS.arrowLeft} className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
          </div>

          <div className="mb-8 flex items-center justify-center gap-3 animate-on-scroll scale-in stagger-1">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl shadow-xl" style={{ background: `linear-gradient(135deg, ${PP_LIGHT}, ${PP_DARK})` }}>
              <PayPalLogo className="h-10 w-10" color="#FFFFFF" />
            </div>
          </div>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border px-3 py-1 text-sm font-medium" style={{ background: '#EAF2FF', color: PP_DARK, borderColor: '#C7DDFB' }}>
              Internal Redesign Proposal
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
              Concept &middot; Not Shipped
            </span>
          </div>

          <h1 className="mb-6 animate-on-scroll slide-up stagger-2 text-4xl font-bold lg:text-5xl" style={{ color: PP_DARK }}>
            The PayPal Transaction Assistant
          </h1>
          <p className="mx-auto mb-10 max-w-2xl animate-on-scroll slide-up stagger-3 text-xl md:text-2xl" style={{ color: PP_SUBTEXT }}>
            Replacing &quot;Pending&quot; with clarity. An AI-powered layer that explains every payment status in plain language &mdash; before the user has to ask.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm animate-on-scroll fade-in stagger-4">
            <div className="flex flex-col items-center">
              <span style={{ color: PP_SUBTEXT }}>Role</span>
              <span className="font-semibold" style={{ color: PP_TEXT }}>Senior Staff Product Designer</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: PP_SUBTEXT }}>Team</span>
              <span className="font-semibold" style={{ color: PP_TEXT }}>Design, Trust &amp; Safety, Support Ops, ML</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: PP_SUBTEXT }}>Scope</span>
              <span className="font-semibold" style={{ color: PP_TEXT }}>One end-to-end payment journey</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: PP_SUBTEXT }}>Projected Impact</span>
              <span className="font-semibold" style={{ color: PP_BLUE }}>-35% support tickets</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= EXECUTIVE SUMMARY ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="animate-on-scroll slide-left space-y-6">
              <SectionEyebrow>Executive Summary</SectionEyebrow>
              <h2 className="text-3xl font-bold" style={{ color: PP_DARK }}>A calmer way to move money</h2>
              <p className="leading-relaxed" style={{ color: PP_SUBTEXT }}>
                PayPal processes billions of transactions a year, and the vast majority complete without issue. But when a payment is delayed,
                held for review, or declined, users are left staring at a single word &mdash; <strong style={{ color: PP_TEXT }}>&quot;Pending&quot;</strong> &mdash;
                with no sense of why, how long, or what to do next.
              </p>
              <p className="leading-relaxed" style={{ color: PP_SUBTEXT }}>
                This proposal introduces an <strong style={{ color: PP_TEXT }}>AI Transaction Assistant</strong> embedded directly in the existing
                payment detail screen. It does not change how payments are processed, routed, or secured &mdash; it only changes what the user
                is told, and when. The security and fraud systems stay exactly as they are; we are designing the explanation layer on top of them.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Explain every status in plain, conversational language',
                  'Predict completion time using historical patterns',
                  'Let users ask "Why?" instead of contacting support',
                  'Preserve PayPal’s existing visual language and component system',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full" style={{ background: PP_BLUE }} />
                    <span style={{ color: PP_TEXT }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll slide-right relative">
              <div className="rounded-2xl border p-8 shadow-xl" style={{ borderColor: PP_BORDER }}>
                <h3 className="mb-6 text-center text-xl font-bold" style={{ color: PP_DARK }}>The Reframe</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-xl p-5" style={{ background: '#FBEAE8' }}>
                    <p className="text-xs font-bold uppercase tracking-wide" style={{ color: PP_RED }}>Old Belief</p>
                    <p className="mt-2 text-sm" style={{ color: PP_TEXT }}>The problem is how long payments take</p>
                  </div>
                  <div className="rounded-xl p-5" style={{ background: '#EAF7EE' }}>
                    <p className="text-xs font-bold uppercase tracking-wide" style={{ color: PP_GREEN }}>New Insight</p>
                    <p className="mt-2 text-sm" style={{ color: PP_TEXT }}>The problem is not knowing what&apos;s happening</p>
                  </div>
                </div>
                <p className="mt-6 text-center text-sm italic" style={{ color: PP_SUBTEXT }}>
                  &quot;How might we make every transaction feel transparent, predictable, and trustworthy &mdash; using AI?&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PROBLEM STATEMENT ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: PP_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Problem Statement</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            The Biggest Issue Isn&apos;t Waiting. It&apos;s Uncertainty.
          </h2>

          <div className="animate-on-scroll slide-up mb-12 rounded-r-lg border-l-4 p-8" style={{ background: '#FBEAE8', borderColor: PP_RED }}>
            <div className="flex items-start">
              <Icon path={ICONS.alertTriangle} className="mr-4 mt-1 h-8 w-8 flex-shrink-0" style={{ color: PP_RED } as React.CSSProperties} />
              <div>
                <h3 className="mb-3 text-2xl font-bold" style={{ color: PP_RED }}>&quot;Pending&quot; tells the user nothing</h3>
                <p className="text-lg leading-relaxed" style={{ color: PP_TEXT }}>
                  A single status word carries the entire emotional weight of &quot;is my money safe?&quot; Users cannot tell the difference between
                  a two-minute bank confirmation and a three-day fraud review &mdash; both look identical on screen.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ICONS.clock, title: 'Pending, no explanation', body: 'Users receive a "Pending" payment with almost no context for why it hasn’t completed.' },
              { icon: ICONS.shield, title: 'Unexpected holds', body: 'Funds are placed on hold with no warning, disrupting rent, payroll, and bill payments.' },
              { icon: ICONS.alertTriangle, title: 'Unexplained failures', body: 'Payment failures rarely say what actually happened or what to do about it.' },
              { icon: ICONS.question, title: 'Wait or act?', body: 'Users can’t tell if a status requires action from them or will resolve on its own.' },
              { icon: ICONS.chat, title: 'Generic error copy', body: 'Vague, technical error messages increase anxiety instead of resolving it.' },
              { icon: ICONS.inbox, title: 'Support as a fallback', body: 'Users contact support simply to have someone explain a status they don’t understand.' },
            ].map((p, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${(i % 5) + 1} rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg`} style={{ borderColor: PP_BORDER }}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: '#EAF2FF' }}>
                  <Icon path={p.icon} className="h-5 w-5" style={{ color: PP_BLUE } as React.CSSProperties} />
                </div>
                <h4 className="mb-2 font-semibold" style={{ color: PP_TEXT }}>{p.title}</h4>
                <p className="text-sm" style={{ color: PP_SUBTEXT }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= RESEARCH SUMMARY ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Research Summary</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-6 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            Grounding the Problem in Evidence
          </h2>
          <p className="animate-on-scroll fade-in mx-auto mb-12 max-w-3xl text-center" style={{ color: PP_SUBTEXT }}>
            Synthesized from three sources: recurring themes across public app store reviews and community forums, patterns in
            support-ticket categories shared by Support Ops, and a competitive audit of how Venmo, Cash App, Chase, and Klarna
            communicate payment status. Figures below are directional estimates for this concept, not measured production data.
          </p>

          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <div className="animate-on-scroll scale-in stagger-1 rounded-2xl border p-6" style={{ borderColor: PP_BORDER }}>
              <h4 className="mb-2 font-bold" style={{ color: PP_BLUE }}>Review Mining</h4>
              <p className="text-sm" style={{ color: PP_SUBTEXT }}>Recurring language across app store reviews mentioning &quot;pending,&quot; &quot;hold,&quot; and &quot;where is my money&quot; over a 12-month window.</p>
            </div>
            <div className="animate-on-scroll scale-in stagger-2 rounded-2xl border p-6" style={{ borderColor: PP_BORDER }}>
              <h4 className="mb-2 font-bold" style={{ color: PP_BLUE }}>Support Ticket Themes</h4>
              <p className="text-sm" style={{ color: PP_SUBTEXT }}>Categorical breakdown of contact reasons, isolating tickets that resolve with an explanation alone versus tickets requiring real intervention.</p>
            </div>
            <div className="animate-on-scroll scale-in stagger-3 rounded-2xl border p-6" style={{ borderColor: PP_BORDER }}>
              <h4 className="mb-2 font-bold" style={{ color: PP_BLUE }}>Competitive Audit</h4>
              <p className="text-sm" style={{ color: PP_SUBTEXT }}>Benchmarked how Venmo, Cash App, Chase, and Klarna narrate delays, holds, and declines in-product.</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: '~68%', label: 'of "pending" complaints express confusion, not impatience with speed' },
              { stat: '~1 in 3', label: 'support contacts about payment status resolve with an explanation alone' },
              { stat: '~4 min', label: 'average time users spend re-opening the app to re-check a pending payment' },
              { stat: 'Top ask', label: '"just tell me if I need to do something" across review themes' },
            ].map((s, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${i + 1} rounded-2xl p-6 text-center`} style={{ background: PP_BG }}>
                <p className="mb-1 text-3xl font-bold" style={{ color: PP_DARK }}>{s.stat}</p>
                <p className="text-sm" style={{ color: PP_SUBTEXT }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= PERSONA ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: PP_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Primary Persona</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            Meet Dara
          </h2>
          <div className="animate-on-scroll scale-in overflow-hidden rounded-3xl border bg-white shadow-xl md:grid md:grid-cols-5" style={{ borderColor: PP_BORDER }}>
            <div className="p-8 text-white md:col-span-2" style={{ background: `linear-gradient(160deg, ${PP_LIGHT}, ${PP_DARK})` }}>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold">D</div>
              <h3 className="text-2xl font-bold">Dara Ibekwe, 34</h3>
              <p className="mb-6 text-white/80">Freelance Graphic Designer</p>
              <div className="space-y-3 text-sm text-white/90">
                <p><strong>Uses PayPal to:</strong> invoice clients, receive project payments, pay contractors</p>
                <p><strong>Tech comfort:</strong> High &mdash; but not a &quot;power user&quot; of fintech products</p>
                <p><strong>Financial stakes:</strong> Freelance income is irregular; a delayed payment can mean a missed rent deadline</p>
              </div>
            </div>
            <div className="p-8 md:col-span-3">
              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: PP_BLUE }}>Goals</h4>
                  <ul className="space-y-1 text-sm" style={{ color: PP_TEXT }}>
                    <li>&bull; Know instantly if a payment is safe</li>
                    <li>&bull; Understand delays without contacting support</li>
                    <li>&bull; Plan around real completion estimates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: PP_RED }}>Frustrations</h4>
                  <ul className="space-y-1 text-sm" style={{ color: PP_TEXT }}>
                    <li>&bull; &quot;Pending&quot; with zero context</li>
                    <li>&bull; Re-opening the app repeatedly to check</li>
                    <li>&bull; Support wait times for simple questions</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border-l-4 p-5" style={{ background: '#EAF2FF', borderColor: PP_BLUE }}>
                <p className="italic" style={{ color: PP_TEXT }}>
                  &quot;I don&apos;t need my money instantly. I need to know if I should be worried or if I can just get back to work.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= JOURNEY MAP ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>User Journey Map</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            From First Doubt to Resolution
          </h2>

          <div className="animate-on-scroll fade-in overflow-x-auto rounded-2xl border" style={{ borderColor: PP_BORDER }}>
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead>
                <tr style={{ background: PP_BG }}>
                  {['Stage', 'User Action', 'Touchpoint', 'Emotion', 'Pain Point'].map((h) => (
                    <th key={h} className="p-4 text-left font-bold" style={{ color: PP_DARK }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: 'Send', action: 'Completes a payment for a client invoice', touch: 'Checkout confirmation', emotion: '🙂 Confident', pain: 'None yet' },
                  { stage: 'Wait', action: 'Sees status change to "Pending"', touch: 'Activity feed', emotion: '😐 Neutral', pain: 'No timeframe given' },
                  { stage: 'Notice', action: 'Refreshes the app repeatedly', touch: 'Push notification / app icon badge', emotion: '😟 Anxious', pain: 'No explanation of cause' },
                  { stage: 'Escalate', action: 'Searches help center, finds generic articles', touch: 'Help Center search', emotion: '😣 Frustrated', pain: 'Articles don’t match their case' },
                  { stage: 'Contact', action: 'Opens a support chat to ask "where is my money"', touch: 'Support chat', emotion: '😩 Stressed', pain: 'Long wait for a simple answer' },
                  { stage: 'Resolve', action: 'Payment completes, or agent explains the hold', touch: 'Resolution message', emotion: '😌 Relieved (delayed)', pain: 'Relief comes too late' },
                ].map((row, i) => (
                  <tr key={i} className="border-t" style={{ borderColor: PP_BORDER }}>
                    <td className="p-4 font-semibold" style={{ color: PP_TEXT }}>{row.stage}</td>
                    <td className="p-4" style={{ color: PP_SUBTEXT }}>{row.action}</td>
                    <td className="p-4" style={{ color: PP_SUBTEXT }}>{row.touch}</td>
                    <td className="p-4" style={{ color: PP_TEXT }}>{row.emotion}</td>
                    <td className="p-4" style={{ color: PP_RED }}>{row.pain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="animate-on-scroll fade-in mt-6 text-center text-sm" style={{ color: PP_SUBTEXT }}>
            The emotional low-point consistently occurs between <strong>Notice</strong> and <strong>Contact</strong> &mdash;
            exactly where an AI explanation layer can intercept the journey before it reaches support.
          </p>
        </div>
      </section>

      {/* ============================= OPPORTUNITY MAPPING ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: PP_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Opportunity Mapping</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            From &quot;How Might We&quot; to Feature
          </h2>
          <div className="grid gap-6">
            {[
              { hmw: 'How might we help users understand a status without reading a support article?', feature: 'AI Transaction Card + Plain-Language Explanations' },
              { hmw: 'How might we replace anxiety with a realistic timeframe?', feature: 'Smart Predictions + Estimated Completion' },
              { hmw: 'How might we make multi-stage processing visible instead of invisible?', feature: 'AI Transaction Timeline' },
              { hmw: 'How might we let users self-serve an answer to "why?"', feature: 'Explain This Status' },
              { hmw: 'How might we turn a failure into a next step instead of a dead end?', feature: 'Payment Failure Assistant' },
              { hmw: 'How might we show risk signals without exposing fraud logic?', feature: 'AI Risk Meter' },
              { hmw: 'How might we resolve simple questions before they become tickets?', feature: 'Help Before Support' },
            ].map((o, i) => (
              <div key={i} className={`animate-on-scroll slide-left stagger-${(i % 5) + 1} flex flex-col gap-4 rounded-2xl border bg-white p-6 md:flex-row md:items-center`} style={{ borderColor: PP_BORDER }}>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide" style={{ color: PP_SUBTEXT }}>Opportunity</p>
                  <p style={{ color: PP_TEXT }}>{o.hmw}</p>
                </div>
                <Icon path={ICONS.arrowRight} className="hidden h-5 w-5 flex-shrink-0 md:block" style={{ color: PP_BLUE } as React.CSSProperties} />
                <div className="flex-1 rounded-xl p-4" style={{ background: '#EAF2FF' }}>
                  <p className="text-xs font-bold uppercase tracking-wide" style={{ color: PP_BLUE }}>Designed Feature</p>
                  <p className="font-semibold" style={{ color: PP_DARK }}>{o.feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= INFORMATION ARCHITECTURE ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Information Architecture</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            Where the Assistant Lives
          </h2>
          <div className="animate-on-scroll fade-in rounded-2xl border p-8" style={{ borderColor: PP_BORDER, background: PP_BG }}>
            <div className="flex flex-col items-start">
              <div className="rounded-xl px-5 py-3 font-bold text-white" style={{ background: PP_DARK }}>PayPal App</div>
              <div className="ml-6 mt-4 border-l-2 pl-6" style={{ borderColor: PP_BORDER }}>
                <div className="rounded-xl border bg-white px-5 py-3 font-semibold" style={{ borderColor: PP_BORDER, color: PP_TEXT }}>Activity Feed</div>
                <div className="ml-6 mt-4 border-l-2 pl-6" style={{ borderColor: PP_BORDER }}>
                  <div className="rounded-xl border bg-white px-5 py-3 font-semibold" style={{ borderColor: PP_BORDER, color: PP_TEXT }}>Transaction Detail <span className="font-normal" style={{ color: PP_SUBTEXT }}>(existing screen)</span></div>
                  <div className="ml-6 mt-4 grid gap-3 border-l-2 pl-6 sm:grid-cols-2" style={{ borderColor: PP_BORDER }}>
                    {[
                      'AI Transaction Card (new)',
                      'AI Transaction Timeline (new)',
                      'Explain This Status (new, contextual)',
                      'AI Risk Meter (new, conditional)',
                      'Payment Failure Assistant (new, conditional)',
                      'Help Before Support (new, entry point to Support)',
                    ].map((n, i) => (
                      <div key={i} className="rounded-lg px-4 py-2 text-sm" style={{ background: '#EAF2FF', color: PP_DARK }}>{n}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm" style={{ color: PP_SUBTEXT }}>
              The assistant is additive: it introduces no new top-level navigation. Every new surface is reached from the existing
              Transaction Detail screen, so users never have to learn a new place to look.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= TASK FLOW ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: PP_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Task Flow</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            Before vs. After
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="animate-on-scroll slide-left rounded-2xl border p-6" style={{ borderColor: '#F3C6C0', background: '#FBEAE8' }}>
              <h3 className="mb-4 font-bold" style={{ color: PP_RED }}>Current Flow</h3>
              <ol className="space-y-4 text-sm">
                {['Payment shows "Pending"', 'User re-opens app to check', 'User searches Help Center', 'User contacts support', 'Agent explains status manually', 'Ticket resolved (often hours later)'].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: PP_RED }}>{i + 1}</span>
                    <span style={{ color: PP_TEXT }}>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="animate-on-scroll slide-right rounded-2xl border p-6" style={{ borderColor: '#BFE3CC', background: '#EAF7EE' }}>
              <h3 className="mb-4 font-bold" style={{ color: PP_GREEN }}>Assistant-Guided Flow</h3>
              <ol className="space-y-4 text-sm">
                {['Payment shows AI Transaction Card with status + ETA', 'User taps "Why?" if curious', 'AI explains in plain language, no jargon', 'User checks live timeline if still curious', 'If unresolved, "Help Before Support" answers directly', 'Support is contacted only if truly needed'].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: PP_GREEN }}>{i + 1}</span>
                    <span style={{ color: PP_TEXT }}>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= WIREFRAMES ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Wireframes</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-6 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            Structuring the Layout First
          </h2>
          <p className="animate-on-scroll fade-in mx-auto mb-16 max-w-2xl text-center" style={{ color: PP_SUBTEXT }}>
            Low-fidelity structure for the two highest-stakes screens, validated for content hierarchy before applying PayPal&apos;s visual system.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: 'Transaction Card — Wireframe', blocks: ['AI avatar + label', 'Status headline', 'ETA block', 'Confidence indicator', 'Reason text (2-3 lines)', '"Why?" link', 'Primary CTA button'] },
              { title: 'Timeline — Wireframe', blocks: ['Screen title', 'Step 1 — icon + label + time', 'Step 2 — icon + label + time', 'Step 3 (active) — icon + label + time', 'Step 4 — icon + label + time', 'Step 5 — icon + label + time'] },
            ].map((w, wi) => (
              <div key={wi} className={`animate-on-scroll scale-in stagger-${wi + 1} rounded-2xl border-2 border-dashed bg-gray-50 p-6`} style={{ borderColor: '#C4C9CE' }}>
                <p className="mb-4 text-center text-xs font-bold uppercase tracking-wide text-gray-500">{w.title}</p>
                <div className="space-y-3">
                  {w.blocks.map((b, bi) => (
                    <div key={bi} className="flex h-10 items-center rounded border-2 border-dashed border-gray-300 bg-white px-3 text-xs text-gray-500">
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= HIGH-FIDELITY MOBILE SCREENS ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: PP_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>High-Fidelity Screens &mdash; Mobile</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            The Feature Set in Detail
          </h2>

          {/* --- Feature 1: Transaction Card --- */}
          <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: PP_BLUE }}>Feature 01</p>
              <h3 className="mb-4 text-2xl font-bold" style={{ color: PP_DARK }}>AI Transaction Card</h3>
              <p className="mb-4" style={{ color: PP_SUBTEXT }}>
                Replaces the bare &quot;Pending&quot; label with a reassuring, information-rich card: current status, a confidence score,
                an estimated completion window, and a plain-language reason &mdash; all above the fold, all readable in under five seconds.
              </p>
              <ul className="space-y-2 text-sm" style={{ color: PP_TEXT }}>
                <li>&bull; Confidence ring communicates certainty without exposing the fraud model</li>
                <li>&bull; &quot;Need clarification?&quot; opens the AI conversation, no support ticket required</li>
              </ul>
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <PhoneFrame label="Transaction Detail &mdash; AI Card">
                <div className="p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT } as React.CSSProperties} />
                    <p className="font-semibold" style={{ color: PP_TEXT }}>Transaction Details</p>
                  </div>
                  <div className="mb-5 text-center">
                    <p className="text-3xl font-bold" style={{ color: PP_TEXT }}>-$340.00</p>
                    <p className="text-sm" style={{ color: PP_SUBTEXT }}>To Maria G.</p>
                  </div>
                  <div className="rounded-2xl border p-5 shadow-sm" style={{ borderColor: PP_BORDER }}>
                    <div className="mb-4 flex items-center gap-3">
                      <AIAvatar size="sm" />
                      <p className="text-sm font-semibold" style={{ color: PP_TEXT }}>Transaction Assistant</p>
                    </div>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: PP_GREEN }}>
                        <Icon path={ICONS.check} className="h-3.5 w-3.5 text-white" />
                      </div>
                      <p className="font-bold" style={{ color: PP_GREEN }}>Payment is safe</p>
                    </div>
                    <div className="mb-4 flex items-center justify-between rounded-xl p-3" style={{ background: PP_BG }}>
                      <div>
                        <p className="text-xs" style={{ color: PP_SUBTEXT }}>Estimated completion</p>
                        <p className="text-sm font-semibold" style={{ color: PP_TEXT }}>Today, 3:00 &ndash; 5:00 PM</p>
                      </div>
                      <ConfidenceRing percent={92} />
                    </div>
                    <p className="mb-4 text-sm leading-relaxed" style={{ color: PP_TEXT }}>
                      &quot;This payment is larger than your normal transactions. Our automated security system is verifying it.
                      No action is required.&quot;
                    </p>
                    <button className="mb-3 w-full text-left text-sm font-semibold" style={{ color: PP_BLUE }}>Why? &rarr;</button>
                    <button className="w-full rounded-full py-3 text-sm font-bold text-white shadow-md" style={{ background: PP_BLUE }}>
                      Need clarification?
                    </button>
                  </div>
                </div>
              </PhoneFrame>
            </div>
          </div>

          {/* --- Feature 2: Timeline --- */}
          <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-on-scroll scale-in">
              <PhoneFrame label="AI Transaction Timeline">
                <div className="p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT } as React.CSSProperties} />
                    <p className="font-semibold" style={{ color: PP_TEXT }}>Payment Progress</p>
                  </div>
                  <div className="rounded-2xl border p-5" style={{ borderColor: PP_BORDER }}>
                    <TimelineStep status="done" title="Payment Sent" time="2:14 PM" description="Your payment left your account successfully." />
                    <TimelineStep status="done" title="Bank Approved" time="2:15 PM" description="Your bank confirmed the funds." />
                    <TimelineStep status="active" title="Fraud Screening" time="~20 min left" description="Our system is verifying this is really you." />
                    <TimelineStep status="upcoming" title="Security Review" time="Est. 1&ndash;2 hrs" description="A final automated check before release." />
                    <TimelineStep status="upcoming" title="Funds Available" time="By 5:00 PM" description="Maria will be able to use the funds." isLast />
                  </div>
                </div>
              </PhoneFrame>
            </div>
            <div className="animate-on-scroll slide-right">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: PP_BLUE }}>Feature 02</p>
              <h3 className="mb-4 text-2xl font-bold" style={{ color: PP_DARK }}>AI Transaction Timeline</h3>
              <p className="mb-4" style={{ color: PP_SUBTEXT }}>
                Turns a single opaque status into a five-stage, checkpoint-based journey. Every stage shows what has already
                happened, what&apos;s happening now, and a realistic estimate for what&apos;s next.
              </p>
              <ul className="space-y-2 text-sm" style={{ color: PP_TEXT }}>
                <li>&bull; Completed steps build trust by showing progress already made</li>
                <li>&bull; The active step always carries a live, updating estimate</li>
                <li>&bull; Upcoming steps prevent surprises later in the process</li>
              </ul>
            </div>
          </div>

          {/* --- Feature 3: Explain This Status --- */}
          <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: PP_BLUE }}>Feature 03</p>
              <h3 className="mb-4 text-2xl font-bold" style={{ color: PP_DARK }}>Explain This Status</h3>
              <p className="mb-4" style={{ color: PP_SUBTEXT }}>
                Every status screen carries a persistent &quot;Why?&quot; entry point. Selecting it expands a conversational,
                jargon-free explanation in place &mdash; no navigation away from the transaction.
              </p>
              <p className="text-sm" style={{ color: PP_SUBTEXT }}>Try the interactive demo &mdash; tap a question on the phone.</p>
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <PhoneFrame label="Why? &mdash; interactive demo">
                <div className="p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT } as React.CSSProperties} />
                    <p className="font-semibold" style={{ color: PP_TEXT }}>Explain This Status</p>
                  </div>
                  <div className="space-y-3">
                    {whyQuestions.map((item, i) => (
                      <div key={i} className="overflow-hidden rounded-xl border" style={{ borderColor: PP_BORDER }}>
                        <button
                          onClick={() => setOpenWhy(openWhy === i ? null : i)}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold"
                          style={{ color: PP_TEXT }}
                        >
                          {item.q}
                          <Icon path={ICONS.chevronDown} className={`h-4 w-4 flex-shrink-0 transition-transform ${openWhy === i ? 'rotate-180' : ''}`} style={{ color: PP_BLUE } as React.CSSProperties} />
                        </button>
                        {openWhy === i && (
                          <div className="px-4 pb-4">
                            <div className="flex gap-2 rounded-xl p-3" style={{ background: PP_BG }}>
                              <AIAvatar size="sm" />
                              <p className="text-sm leading-relaxed" style={{ color: PP_TEXT }}>{item.a}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </PhoneFrame>
            </div>
          </div>

          {/* --- Feature 4: Payment Failure Assistant --- */}
          <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-on-scroll scale-in">
              <PhoneFrame label="Payment Failure Assistant &mdash; interactive demo">
                <div className="p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT } as React.CSSProperties} />
                    <p className="font-semibold" style={{ color: PP_TEXT }}>Payment Status</p>
                  </div>
                  <div className="mb-4 flex gap-2">
                    {(['declined', 'insufficient', 'expired'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setFailureScenario(s)}
                        className="flex-1 rounded-full border px-2 py-1.5 text-[11px] font-semibold transition-colors"
                        style={{
                          borderColor: failureScenario === s ? PP_BLUE : PP_BORDER,
                          background: failureScenario === s ? '#EAF2FF' : 'white',
                          color: failureScenario === s ? PP_BLUE : PP_SUBTEXT,
                        }}
                      >
                        {s === 'declined' ? 'Declined' : s === 'insufficient' ? 'Low Balance' : 'Expired Card'}
                      </button>
                    ))}
                  </div>
                  <div className="rounded-2xl border p-5" style={{ borderColor: PP_BORDER }}>
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: PP_RED }}>
                        <Icon path={ICONS.alertTriangle} className="h-3.5 w-3.5 text-white" />
                      </div>
                      <p className="font-bold" style={{ color: PP_RED }}>{fc.title}</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: PP_SUBTEXT }}>What happened</p>
                        <p style={{ color: PP_TEXT }}>{fc.what}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: PP_SUBTEXT }}>Why it happened</p>
                        <p style={{ color: PP_TEXT }}>{fc.why}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: PP_SUBTEXT }}>How to fix it</p>
                        <p style={{ color: PP_TEXT }}>{fc.fix}</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      {fc.actions.map((a, i) => (
                        <button key={i} className="w-full rounded-full border py-2.5 text-sm font-semibold" style={{ borderColor: PP_BLUE, color: PP_BLUE }}>
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </div>
            <div className="animate-on-scroll slide-right">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: PP_BLUE }}>Feature 04</p>
              <h3 className="mb-4 text-2xl font-bold" style={{ color: PP_DARK }}>Payment Failure Assistant</h3>
              <p className="mb-4" style={{ color: PP_SUBTEXT }}>
                A generic &quot;Payment Failed&quot; becomes a structured explanation: what happened, why, how to fix it, and a
                suggested next action &mdash; tailored to the specific failure reason.
              </p>
              <p className="text-sm" style={{ color: PP_SUBTEXT }}>Switch scenarios on the phone to see the assistant adapt its reasoning and suggested actions.</p>
            </div>
          </div>

          {/* --- Feature 5: Risk Meter --- */}
          <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: PP_BLUE }}>Feature 05</p>
              <h3 className="mb-4 text-2xl font-bold" style={{ color: PP_DARK }}>AI Risk Meter</h3>
              <p className="mb-4" style={{ color: PP_SUBTEXT }}>
                Instead of hidden fraud checks, users see one of three plain states &mdash; Safe, Needs Verification, or High Risk &mdash;
                each with a one-sentence explanation. Internal fraud scoring and rules are never exposed.
              </p>
              <div className="flex flex-wrap gap-2">
                {(['safe', 'verification', 'high'] as RiskLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setRiskDemo(lvl)}
                    className="rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
                    style={{
                      borderColor: riskDemo === lvl ? PP_BLUE : PP_BORDER,
                      background: riskDemo === lvl ? '#EAF2FF' : 'white',
                      color: riskDemo === lvl ? PP_BLUE : PP_SUBTEXT,
                    }}
                  >
                    {RISK_COPY[lvl].label}
                  </button>
                ))}
              </div>
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <PhoneFrame label="AI Risk Meter &mdash; interactive demo">
                <div className="p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT } as React.CSSProperties} />
                    <p className="font-semibold" style={{ color: PP_TEXT }}>Security Check</p>
                  </div>
                  <div className="rounded-2xl border p-5" style={{ borderColor: PP_BORDER }}>
                    <div className="mb-4 flex items-center gap-3">
                      <AIAvatar size="sm" />
                      <p className="text-sm font-semibold" style={{ color: PP_TEXT }}>Risk Assessment</p>
                    </div>
                    <RiskMeter level={riskDemo} />
                  </div>
                </div>
              </PhoneFrame>
            </div>
          </div>

          {/* --- Feature 6: Smart Predictions --- */}
          <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-on-scroll scale-in">
              <PhoneFrame label="Smart Predictions">
                <div className="p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT } as React.CSSProperties} />
                    <p className="font-semibold" style={{ color: PP_TEXT }}>Activity</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Maria G.', note: 'Payments from this sender usually clear within 2 hours.' },
                      { name: 'Bright Coffee Co.', note: 'This merchant typically confirms payments within 15 minutes.' },
                      { name: 'Security Review', note: 'This review usually finishes today.' },
                    ].map((p, i) => (
                      <div key={i} className="flex gap-3 rounded-xl border p-4" style={{ borderColor: PP_BORDER }}>
                        <AIAvatar size="sm" />
                        <div>
                          <p className="text-xs font-semibold" style={{ color: PP_SUBTEXT }}>{p.name}</p>
                          <p className="text-sm" style={{ color: PP_TEXT }}>{p.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </PhoneFrame>
            </div>
            <div className="animate-on-scroll slide-right">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: PP_BLUE }}>Feature 06</p>
              <h3 className="mb-4 text-2xl font-bold" style={{ color: PP_DARK }}>Smart Predictions</h3>
              <p className="mb-4" style={{ color: PP_SUBTEXT }}>
                Historical pattern-based predictions surface directly in the activity feed, so reassurance arrives before
                the user even opens a transaction &mdash; based on sender history, merchant history, and review-type averages.
              </p>
              <p className="text-sm" style={{ color: PP_SUBTEXT }}>
                Predictions are phrased as tendencies (&quot;usually,&quot; &quot;typically&quot;), never as guarantees.
              </p>
            </div>
          </div>

          {/* --- Feature 7: Help Before Support --- */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: PP_BLUE }}>Feature 07</p>
              <h3 className="mb-4 text-2xl font-bold" style={{ color: PP_DARK }}>Help Before Support</h3>
              <p className="mb-4" style={{ color: PP_SUBTEXT }}>
                Before a &quot;Contact Support&quot; button ever appears, the assistant attempts to answer the four questions that
                drive the majority of payment-status contacts. Support remains one tap away if the answer isn&apos;t enough.
              </p>
              <p className="text-sm" style={{ color: PP_SUBTEXT }}>Tap a question on the phone to see the assistant respond.</p>
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <PhoneFrame label="Help Before Support &mdash; interactive demo">
                <div className="flex h-full flex-col p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT } as React.CSSProperties} />
                    <p className="font-semibold" style={{ color: PP_TEXT }}>Get Help</p>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {Object.keys(helpAnswers).map((q) => (
                      <button
                        key={q}
                        onClick={() => setHelpQuestion(q)}
                        className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                        style={{
                          borderColor: helpQuestion === q ? PP_BLUE : PP_BORDER,
                          background: helpQuestion === q ? '#EAF2FF' : 'white',
                          color: helpQuestion === q ? PP_BLUE : PP_SUBTEXT,
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                  <div className="flex-1 rounded-xl p-4" style={{ background: PP_BG }}>
                    {helpQuestion && (
                      <div className="flex gap-2">
                        <AIAvatar size="sm" />
                        <p className="text-sm leading-relaxed" style={{ color: PP_TEXT }}>{helpAnswers[helpQuestion]}</p>
                      </div>
                    )}
                  </div>
                  <button className="mt-4 w-full rounded-full border py-3 text-sm font-semibold" style={{ borderColor: PP_BORDER, color: PP_SUBTEXT }}>
                    Still need help? Contact Support
                  </button>
                </div>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= AI CONVERSATION SCREEN ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>AI Conversation Screen</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            &quot;Need Clarification?&quot; in Action
          </h2>
          <div className="animate-on-scroll scale-in mx-auto max-w-md">
            <PhoneFrame label="AI Transaction Assistant &mdash; conversation">
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-3 border-b p-4" style={{ borderColor: PP_BORDER }}>
                  <AIAvatar size="sm" />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: PP_TEXT }}>Transaction Assistant</p>
                    <p className="text-xs" style={{ color: PP_SUBTEXT }}>Answers about this payment only</p>
                  </div>
                </div>
                <div className="flex-1 space-y-3 overflow-y-auto p-4">
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2 text-sm text-white" style={{ background: PP_BLUE }}>
                      Is my money safe?
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <AIAvatar size="sm" />
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm p-3 text-sm" style={{ background: PP_BG, color: PP_TEXT }}>
                      Yes &mdash; your $340.00 hasn&apos;t left your account and it isn&apos;t lost. It&apos;s going through a routine
                      security check because it&apos;s larger than your usual payments.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2 text-sm text-white" style={{ background: PP_BLUE }}>
                      How long will it take?
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <AIAvatar size="sm" />
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm p-3 text-sm" style={{ background: PP_BG, color: PP_TEXT }}>
                      Based on similar reviews, this usually finishes within 3&ndash;5 hours, likely by 5:00 PM today.
                      I&apos;ll notify you the moment it&apos;s done.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-t p-3" style={{ borderColor: PP_BORDER }}>
                  <div className="flex-1 rounded-full border px-4 py-2 text-sm" style={{ borderColor: PP_BORDER, color: PP_SUBTEXT }}>
                    Ask about this payment&hellip;
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: PP_BLUE }}>
                    <Icon path={ICONS.arrowRight} className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </div>
        </div>
      </section>

      {/* ============================= DESKTOP VERSION ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: PP_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Desktop Version</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            Consistent Across Breakpoints
          </h2>
          <div className="animate-on-scroll fade-in">
            <BrowserFrame url="paypal.com/myaccount/activity/details/340.00-maria-g" label="Transaction Detail &mdash; Desktop">
              <div className="grid grid-cols-5">
                <div className="col-span-2 border-r p-6" style={{ borderColor: PP_BORDER }}>
                  <p className="mb-4 text-sm font-bold" style={{ color: PP_TEXT }}>Activity</p>
                  {[
                    { name: 'Maria G.', amount: '-$340.00', active: true },
                    { name: 'Bright Coffee Co.', amount: '-$4.75', active: false },
                    { name: 'Payroll Deposit', amount: '+$1,200.00', active: false },
                  ].map((r, i) => (
                    <div key={i} className={`mb-2 flex items-center justify-between rounded-xl p-3 ${r.active ? '' : ''}`} style={{ background: r.active ? '#EAF2FF' : 'transparent' }}>
                      <span className="text-sm" style={{ color: PP_TEXT }}>{r.name}</span>
                      <span className="text-sm font-semibold" style={{ color: r.amount.startsWith('+') ? PP_GREEN : PP_TEXT }}>{r.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="col-span-3 p-8">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <p className="text-3xl font-bold" style={{ color: PP_TEXT }}>-$340.00</p>
                      <p className="text-sm" style={{ color: PP_SUBTEXT }}>To Maria G. &middot; Today, 2:14 PM</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full px-3 py-1" style={{ background: '#EAF7EE' }}>
                      <div className="h-2 w-2 rounded-full" style={{ background: PP_GREEN }} />
                      <span className="text-xs font-semibold" style={{ color: PP_GREEN }}>Safe</span>
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border p-5" style={{ borderColor: PP_BORDER }}>
                      <div className="mb-3 flex items-center gap-2">
                        <AIAvatar size="sm" />
                        <p className="text-sm font-semibold" style={{ color: PP_TEXT }}>Transaction Assistant</p>
                      </div>
                      <div className="mb-3 flex items-center justify-between rounded-xl p-3" style={{ background: PP_BG }}>
                        <div>
                          <p className="text-xs" style={{ color: PP_SUBTEXT }}>Estimated completion</p>
                          <p className="text-sm font-semibold" style={{ color: PP_TEXT }}>Today, 3:00 &ndash; 5:00 PM</p>
                        </div>
                        <ConfidenceRing percent={92} />
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: PP_TEXT }}>
                        This payment is larger than your normal transactions. Our automated security system is verifying it.
                      </p>
                    </div>
                    <div className="rounded-2xl border p-5" style={{ borderColor: PP_BORDER }}>
                      <p className="mb-3 text-sm font-semibold" style={{ color: PP_TEXT }}>Progress</p>
                      <TimelineStep status="done" title="Payment Sent" time="2:14 PM" description="" />
                      <TimelineStep status="done" title="Bank Approved" time="2:15 PM" description="" />
                      <TimelineStep status="active" title="Fraud Screening" time="~20 min" description="" isLast />
                    </div>
                  </div>
                </div>
              </div>
            </BrowserFrame>
          </div>
        </div>
      </section>

      {/* ============================= EMPTY & ERROR STATES ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Empty &amp; Error States</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            Reassurance Even When Nothing (or Something) Goes Wrong
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="animate-on-scroll slide-left">
              <PhoneFrame label="Empty State &mdash; no pending transactions">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: '#EAF7EE' }}>
                    <Icon path={ICONS.checkCircle} className="h-8 w-8" style={{ color: PP_GREEN } as React.CSSProperties} />
                  </div>
                  <p className="mb-2 font-bold" style={{ color: PP_TEXT }}>You&apos;re all caught up</p>
                  <p className="text-sm" style={{ color: PP_SUBTEXT }}>No pending transactions right now. Anything new will show up here with a live status.</p>
                </div>
              </PhoneFrame>
            </div>
            <div className="animate-on-scroll slide-right">
              <PhoneFrame label="Error State &mdash; couldn't load status">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: '#FDF3E3' }}>
                    <Icon path={ICONS.refresh} className="h-8 w-8" style={{ color: PP_AMBER } as React.CSSProperties} />
                  </div>
                  <p className="mb-2 font-bold" style={{ color: PP_TEXT }}>We couldn&apos;t refresh this status</p>
                  <p className="mb-5 text-sm" style={{ color: PP_SUBTEXT }}>
                    Your payment is safe &mdash; we just lost connection while checking for the latest update. Your money hasn&apos;t moved.
                  </p>
                  <button className="rounded-full px-6 py-2.5 text-sm font-bold text-white" style={{ background: PP_BLUE }}>Try Again</button>
                </div>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= BEFORE VS AFTER ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: PP_BG }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Before vs. After</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            Same System, Radically Different Feeling
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="animate-on-scroll slide-left">
              <p className="mb-4 text-center font-bold" style={{ color: PP_SUBTEXT }}>BEFORE</p>
              <div className="rounded-2xl border bg-white p-8 text-center shadow-sm" style={{ borderColor: PP_BORDER }}>
                <p className="mb-4 text-2xl font-bold" style={{ color: PP_TEXT }}>-$340.00</p>
                <div className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-semibold text-gray-500">
                  Pending
                </div>
                <p className="text-sm text-gray-400">No further information available.</p>
              </div>
            </div>
            <div className="animate-on-scroll slide-right">
              <p className="mb-4 text-center font-bold" style={{ color: PP_BLUE }}>AFTER</p>
              <div className="rounded-2xl border p-8 shadow-lg" style={{ borderColor: PP_BORDER }}>
                <p className="mb-4 text-center text-2xl font-bold" style={{ color: PP_TEXT }}>-$340.00</p>
                <div className="mb-3 flex items-center justify-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: PP_GREEN }}>
                    <Icon path={ICONS.check} className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="font-bold" style={{ color: PP_GREEN }}>Payment is safe</p>
                </div>
                <p className="text-center text-sm" style={{ color: PP_SUBTEXT }}>Estimated by 5:00 PM today &middot; 92% confidence</p>
              </div>
            </div>
          </div>
          <p className="animate-on-scroll fade-in mt-8 text-center text-sm" style={{ color: PP_SUBTEXT }}>
            No new payment logic, no new fraud rules, no new visual style &mdash; only a new explanation layer on top of the same trusted system.
          </p>
        </div>
      </section>

      {/* ============================= ACCESSIBILITY ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Accessibility Considerations</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-16 text-center text-4xl font-bold" style={{ color: PP_DARK }}>
            Trust Has to Be Legible to Everyone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ICONS.eye, title: 'Never color-only', body: 'Every risk state pairs color with an icon and a text label (Safe / Needs Verification / High Risk).' },
              { icon: ICONS.checkCircle, title: 'WCAG AA contrast', body: 'All text and interactive elements meet or exceed PayPal’s existing 4.5:1 contrast standard.' },
              { icon: ICONS.chat, title: 'Plain language target', body: 'Explanations are written at roughly a 6th-grade reading level, avoiding financial and technical jargon.' },
              { icon: ICONS.clock, title: 'Live regions for status', body: 'Status and timeline updates announce via aria-live regions for screen reader users, without interrupting focus.' },
              { icon: ICONS.card, title: '44px touch targets', body: 'All interactive controls, including "Why?" links and risk meter markers, meet minimum tap target sizing.' },
              { icon: ICONS.refresh, title: 'Reduced motion respected', body: 'Pulsing timeline indicators and transitions honor prefers-reduced-motion and degrade to static states.' },
            ].map((a, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${(i % 5) + 1} rounded-2xl border p-6`} style={{ borderColor: PP_BORDER }}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: '#EAF2FF' }}>
                  <Icon path={a.icon} className="h-5 w-5" style={{ color: PP_BLUE } as React.CSSProperties} />
                </div>
                <h4 className="mb-2 font-semibold" style={{ color: PP_TEXT }}>{a.title}</h4>
                <p className="text-sm" style={{ color: PP_SUBTEXT }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= SUCCESS METRICS ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 text-white" style={{ background: `linear-gradient(160deg, ${PP_DARK}, #001A47)` }}>
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-blue-300">Projected Outcomes</p>
          <h2 className="animate-on-scroll slide-up mb-4 text-center text-4xl font-bold text-white">
            Success Metrics &amp; KPI Improvements
          </h2>
          <p className="animate-on-scroll fade-in mx-auto mb-16 max-w-2xl text-center text-blue-100">
            These are projected outcomes for this concept, modeled on comparable in-product transparency launches at other
            fintech products &mdash; not measured results. They would be validated with a phased rollout and A/B testing.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: '35%', label: 'Reduction in payment-related support tickets' },
              { stat: '40%', label: 'Increase in self-reported user confidence' },
              { stat: '25%', label: 'Reduction in abandoned transactions' },
              { stat: '30%', label: 'Faster issue resolution time' },
            ].map((m, i) => (
              <div key={i} className={`animate-on-scroll scale-in stagger-${i + 1} rounded-2xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm`}>
                <p className="mb-2 text-4xl font-bold text-white">{m.stat}</p>
                <p className="text-sm text-blue-100">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= REFLECTION / CONCLUSION ============================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: PP_BG }}>
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>Conclusion</SectionEyebrow>
          <h2 className="animate-on-scroll slide-up mb-8 text-4xl font-bold" style={{ color: PP_DARK }}>
            Trust Is a Design Material
          </h2>
          <p className="animate-on-scroll fade-in mb-6 text-lg leading-relaxed" style={{ color: PP_SUBTEXT }}>
            PayPal&apos;s core promise has always been safety. This proposal argues that in 2026, safety isn&apos;t just about
            what happens behind the scenes &mdash; it&apos;s about what the product is willing to explain, in the moment a user
            needs it most. The AI Transaction Assistant doesn&apos;t replace a single existing safeguard. It gives users a
            window into the process that was always there, translated into language that reduces fear instead of feeding it.
          </p>
          <div className="animate-on-scroll scale-in mb-12 rounded-2xl border p-8" style={{ borderColor: PP_BORDER, background: 'white' }}>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: PP_BLUE }}>Recommended Next Step</p>
            <p style={{ color: PP_TEXT }}>
              Pilot the AI Transaction Card and Explain This Status features with a small cohort of flagged review-and-hold
              transactions, measure ticket deflection and CSAT, then expand to the full Transaction Timeline and Risk Meter.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
            style={{ background: PP_BLUE }}
          >
            <Icon path={ICONS.arrowLeft} className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
