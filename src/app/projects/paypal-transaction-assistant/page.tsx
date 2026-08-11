'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Editorial tokens (matches sitewide black / white / grey system)    */
/* ------------------------------------------------------------------ */
const PP_INK = '#111111';
const PP_BG = '#FAFAF8';
const PP_TEXT = '#111111';
const PP_SUBTEXT = '#6E6E6B';
const PP_BORDER = '#E4E3DE';
const PP_GREEN = '#0B7A3B';
const PP_RED = '#B91C1C';

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
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  chevronDown: 'M19 9l-7 7-7-7',
  arrowLeft: 'M10 19l-7-7m0 0l7-7m-7 7h18',
  sparkle: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  alertTriangle: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
  inbox: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0l-2 5H6l-2-5m16 0h-3.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 006.586 13H3',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
};

/* ------------------------------------------------------------------ */
/*  AI avatar                                                          */
/* ------------------------------------------------------------------ */
function AIAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';
  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-7 h-7' : 'w-5 h-5';
  return (
    <div className={`${dims} rounded-full flex items-center justify-center flex-shrink-0`} style={{ background: PP_INK }}>
      <Icon path={ICONS.sparkle} className={`${iconSize} text-white`} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Phone chrome                                                       */
/* ------------------------------------------------------------------ */
function PhoneFrame({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="relative rounded-[2.5rem] bg-gray-900 p-3">
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

/* ------------------------------------------------------------------ */
/*  Confidence ring                                                    */
/* ------------------------------------------------------------------ */
function ConfidenceRing({ percent }: { percent: number }) {
  return (
    <div
      className="relative flex h-16 w-16 items-center justify-center rounded-full flex-shrink-0"
      style={{ background: `conic-gradient(${PP_INK} ${percent * 3.6}deg, ${PP_BORDER} 0deg)` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
        <span className="text-sm font-bold" style={{ color: PP_INK }}>{percent}%</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Risk meter                                                         */
/* ------------------------------------------------------------------ */
type RiskLevel = 'safe' | 'verification' | 'high';
const RISK_COPY: Record<RiskLevel, { label: string; color: string; explanation: string }> = {
  safe: {
    label: 'Safe',
    color: PP_GREEN,
    explanation: 'This payment matches your usual sending patterns. No extra checks are needed.',
  },
  verification: {
    label: 'Needs Verification',
    color: PP_TEXT,
    explanation: 'This payment is larger than usual, so we are confirming a few details before releasing funds. This is routine and keeps your money safe.',
  },
  high: {
    label: 'High Risk',
    color: PP_RED,
    explanation: 'We noticed unusual activity on this payment. We have paused it to protect your account while our security team reviews it.',
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
          style={{ width: `${((idx + 1) / order.length) * 100}%`, background: copy.color, opacity: 0.3 }}
        />
      </div>
      <div className="mb-3 flex justify-between text-[11px] font-medium" style={{ color: PP_SUBTEXT }}>
        <span>Safe</span>
        <span>Needs Verification</span>
        <span>High Risk</span>
      </div>
      <div className="rounded-xl border p-4" style={{ borderColor: PP_BORDER, background: PP_BG }}>
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
          style={{ background: status === 'upcoming' ? PP_BORDER : PP_INK }}
        />
      )}
      <div className="relative z-10 flex-shrink-0">
        {status === 'done' && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: PP_INK }}>
            <Icon path={ICONS.check} className="h-4 w-4 text-white" />
          </div>
        )}
        {status === 'active' && (
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full" style={{ background: PP_INK }}>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-30" style={{ background: PP_INK }} />
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
/*  Issue / Fix label pair                                             */
/* ------------------------------------------------------------------ */
function IssueFix({ issue, fix }: { issue: string; fix: string }) {
  return (
    <div className="space-y-4">
      <div>
        <p className="sw-label mb-1.5" style={{ color: PP_SUBTEXT }}>The issue</p>
        <p style={{ color: PP_TEXT }}>{issue}</p>
      </div>
      <div>
        <p className="sw-label mb-1.5" style={{ color: PP_SUBTEXT }}>The fix</p>
        <p style={{ color: PP_TEXT }}>{fix}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section label                                                      */
/* ------------------------------------------------------------------ */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="sw-label mb-3 text-center" style={{ color: PP_SUBTEXT }}>
      {children}
    </p>
  );
}

/* ==================================================================== */
/*  MAIN PAGE                                                            */
/* ==================================================================== */
export default function PayPalCaseStudy() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [showWhy, setShowWhy] = useState(false);
  const [riskDemo, setRiskDemo] = useState<RiskLevel>('verification');
  const [failureScenario, setFailureScenario] = useState<'declined' | 'insufficient' | 'expired'>('declined');

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

  const failureCopy = {
    declined: {
      title: 'Your card was declined',
      what: 'Chase Bank did not approve this $340.00 payment to Maria G.',
      why: 'Banks sometimes decline larger or unfamiliar charges automatically, even when your account is in good standing. This was not triggered by PayPal.',
      fix: 'Try again with a different payment method, or confirm with your bank that the charge is allowed.',
      actions: ['Use another payment method', 'Contact your bank', 'Retry tomorrow'],
    },
    insufficient: {
      title: 'Payment could not be completed',
      what: 'Your linked bank account did not have enough available balance to cover $340.00.',
      why: 'This happens when pending deposits have not cleared yet, or recent spending lowered your available balance.',
      fix: 'Add funds to your bank account, or pay with a card or PayPal balance instead.',
      actions: ['Use PayPal balance', 'Use another payment method', 'Retry once funds clear'],
    },
    expired: {
      title: 'Your card has expired',
      what: 'The Visa card ending in 4482 on your account expired last month.',
      why: 'We keep expired cards on file so your payment history stays intact, but they cannot be charged.',
      fix: 'Update your card details and this payment will go through immediately.',
      actions: ['Update billing details', 'Use another payment method'],
    },
  } as const;
  const fc = failureCopy[failureScenario];

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
      `}</style>

      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8" style={{ background: PP_BG }}>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-on-scroll fade-in">
            <Link href="/#featured-work" className="inline-flex items-center text-gray-500 transition-colors hover:text-gray-900">
              <Icon path={ICONS.arrowLeft} className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
          </div>

          <div className="mb-8 flex items-center justify-center animate-on-scroll scale-in stagger-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/paypal-transaction-assistant/paypal-logo-v3.png" alt="PayPal" className="h-12 w-auto" />
          </div>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border px-3 py-1 text-sm font-medium" style={{ background: '#FFFFFF', color: PP_INK, borderColor: PP_BORDER }}>
              Internal Redesign Proposal
            </span>
            <span className="rounded-full border px-3 py-1 text-sm font-medium" style={{ background: '#FFFFFF', color: PP_SUBTEXT, borderColor: PP_BORDER }}>
              Concept, Not Shipped
            </span>
          </div>

          <h1 className="sw-serif mb-6 animate-on-scroll slide-up stagger-2 text-4xl font-medium lg:text-5xl" style={{ color: PP_INK }}>
            The PayPal Transaction Assistant
          </h1>
          <p className="mx-auto mb-10 max-w-2xl animate-on-scroll slide-up stagger-3 text-xl md:text-2xl" style={{ color: PP_SUBTEXT }}>
            Replacing &quot;Pending&quot; with an actual answer. A redesign of one payment status screen, built to tell people what is happening before they have to ask.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm animate-on-scroll fade-in">
            <div className="flex flex-col items-center">
              <span style={{ color: PP_SUBTEXT }}>Role</span>
              <span className="font-semibold" style={{ color: PP_TEXT }}>Lead Designer, Research &amp; UX/UI Design</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: PP_SUBTEXT }}>Scope</span>
              <span className="font-semibold" style={{ color: PP_TEXT }}>One payment status screen, end to end</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: PP_SUBTEXT }}>Status</span>
              <span className="font-semibold" style={{ color: PP_INK }}>Concept, unshipped</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= THE PROBLEM ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: PP_BORDER }}>
        <div className="mx-auto max-w-4xl">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="sw-serif animate-on-scroll slide-up mb-8 text-center text-4xl font-medium" style={{ color: PP_INK }}>
            It was never really about speed
          </h2>
          <p className="animate-on-scroll fade-in mb-6 text-lg leading-relaxed" style={{ color: PP_TEXT }}>
            As a freelancer, I know this anxiety firsthand. When a payment sits on &quot;Pending,&quot; I&apos;m not
            bothered by the wait. I&apos;m bothered by not knowing whether my money is actually coming, or whether
            something is wrong.
          </p>
          <p className="animate-on-scroll fade-in mb-16 text-lg leading-relaxed" style={{ color: PP_TEXT }}>
            The word &quot;Pending&quot; has to carry the entire weight of &quot;is my money safe?&quot;, with nothing else to go on.
            A two-minute bank confirmation and a three-day fraud review look identical on screen.
          </p>

          <div className="grid animate-on-scroll fade-in gap-4 sm:grid-cols-2">
            {[
              { icon: ICONS.clock, title: 'No explanation', body: 'A payment sits on "Pending" with zero context for why.' },
              { icon: ICONS.shield, title: 'Unexpected holds', body: 'Funds get frozen with no warning, sometimes affecting rent or payroll.' },
              { icon: ICONS.alertTriangle, title: 'Dead-end failures', body: 'A failed payment says nothing about what happened or what to do next.' },
              { icon: ICONS.inbox, title: 'Support as a crutch', body: 'People contact support just to have someone explain a status screen.' },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-4 border p-5" style={{ borderColor: PP_BORDER }}>
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border" style={{ borderColor: PP_BORDER }}>
                  <Icon path={p.icon} className="h-4.5 w-4.5" style={{ color: PP_INK }} />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold" style={{ color: PP_TEXT }}>{p.title}</h4>
                  <p className="text-sm" style={{ color: PP_SUBTEXT }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 1: TRANSACTION CARD ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: PP_BORDER }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <h3 className="sw-serif mb-5 text-2xl font-medium" style={{ color: PP_INK }}>1. The AI Transaction Card</h3>
              <IssueFix
                issue="A bare Pending label gives the user nothing to work with. No timeframe, no reason, and no way to tell whether they need to act."
                fix="A card that replaces the single word with an actual answer: is this safe, when will it likely finish, and why. Tapping Why explains it in plain language, right there."
              />
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <PhoneFrame label="Transaction Detail, AI Card">
                <div className="p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT }} />
                    <p className="font-semibold" style={{ color: PP_TEXT }}>Transaction Details</p>
                  </div>
                  <div className="mb-5 text-center">
                    <p className="text-3xl font-bold" style={{ color: PP_TEXT }}>-$340.00</p>
                    <p className="text-sm" style={{ color: PP_SUBTEXT }}>To Maria G.</p>
                  </div>
                  <div className="rounded-2xl border p-5" style={{ borderColor: PP_BORDER }}>
                    <div className="mb-4 flex items-center gap-3">
                      <AIAvatar size="sm" />
                      <p className="text-sm font-semibold" style={{ color: PP_TEXT }}>Transaction Assistant</p>
                    </div>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: PP_INK }}>
                        <Icon path={ICONS.check} className="h-3.5 w-3.5 text-white" />
                      </div>
                      <p className="font-bold" style={{ color: PP_INK }}>Payment is safe</p>
                    </div>
                    <div className="mb-4 flex items-center justify-between rounded-xl p-3" style={{ background: PP_BG }}>
                      <div>
                        <p className="text-xs" style={{ color: PP_SUBTEXT }}>Estimated completion</p>
                        <p className="text-sm font-semibold" style={{ color: PP_TEXT }}>Today, 3:00 to 5:00 PM</p>
                      </div>
                      <ConfidenceRing percent={92} />
                    </div>
                    <p className="mb-3 text-sm leading-relaxed" style={{ color: PP_TEXT }}>
                      This payment is larger than your normal transactions. Our automated security system is verifying it. No action is required.
                    </p>
                    <button onClick={() => setShowWhy(!showWhy)} className="mb-1 flex w-full items-center justify-between text-left text-sm font-semibold" style={{ color: PP_INK }}>
                      Why is this pending?
                      <Icon path={ICONS.chevronDown} className={`h-4 w-4 transition-transform ${showWhy ? 'rotate-180' : ''}`} />
                    </button>
                    {showWhy && (
                      <div className="mt-3 flex gap-2 rounded-xl p-3" style={{ background: PP_BG }}>
                        <AIAvatar size="sm" />
                        <p className="text-sm leading-relaxed" style={{ color: PP_TEXT }}>
                          Your payment is larger than what you usually send, so our system is taking a closer look before releasing it. This is routine. It typically finishes within a few hours.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 2: TIMELINE ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: PP_BORDER, background: PP_BG }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-on-scroll scale-in">
              <PhoneFrame label="AI Transaction Timeline">
                <div className="p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT }} />
                    <p className="font-semibold" style={{ color: PP_TEXT }}>Payment Progress</p>
                  </div>
                  <div className="rounded-2xl border p-5" style={{ borderColor: PP_BORDER }}>
                    <TimelineStep status="done" title="Payment Sent" time="2:14 PM" description="Your payment left your account successfully." />
                    <TimelineStep status="done" title="Bank Approved" time="2:15 PM" description="Your bank confirmed the funds." />
                    <TimelineStep status="active" title="Fraud Screening" time="~20 min left" description="Our system is verifying this is really you." />
                    <TimelineStep status="upcoming" title="Security Review" time="Est. 1 to 2 hrs" description="A final automated check before release." />
                    <TimelineStep status="upcoming" title="Funds Available" time="By 5:00 PM" description="Maria will be able to use the funds." isLast />
                  </div>
                </div>
              </PhoneFrame>
            </div>
            <div className="animate-on-scroll slide-right">
              <h3 className="sw-serif mb-5 text-2xl font-medium" style={{ color: PP_INK }}>2. The AI Transaction Timeline</h3>
              <IssueFix
                issue="Behind Pending are several real steps happening in order, but the user only ever sees one frozen word the entire time."
                fix="A timeline showing what already happened, what is happening right now, and a real estimate for what comes next."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 3: FAILURE ASSISTANT ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: PP_BORDER }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 animate-on-scroll slide-left lg:order-1">
              <h3 className="sw-serif mb-5 text-2xl font-medium" style={{ color: PP_INK }}>3. Payment Failure Assistant</h3>
              <IssueFix
                issue="A failed payment just says Failed. It does not say why, or what the person is supposed to do about it."
                fix="The assistant explains what happened, why it happened, and gives one clear next step, tailored to the actual reason for the failure."
              />
              <p className="mt-4 text-sm" style={{ color: PP_SUBTEXT }}>Try switching the scenario on the phone.</p>
            </div>
            <div className="order-1 animate-on-scroll scale-in lg:order-2">
              <PhoneFrame label="Payment Failure Assistant, live demo">
                <div className="p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT }} />
                    <p className="font-semibold" style={{ color: PP_TEXT }}>Payment Status</p>
                  </div>
                  <div className="mb-4 flex gap-2">
                    {(['declined', 'insufficient', 'expired'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setFailureScenario(s)}
                        className="flex-1 rounded-full border px-2 py-1.5 text-[11px] font-semibold transition-colors"
                        style={{
                          borderColor: failureScenario === s ? PP_INK : PP_BORDER,
                          background: failureScenario === s ? PP_BG : 'white',
                          color: failureScenario === s ? PP_INK : PP_SUBTEXT,
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
                        <button key={i} className="w-full rounded-full border py-2.5 text-sm font-semibold" style={{ borderColor: PP_INK, color: PP_INK }}>
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 4: RISK METER ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: PP_BORDER, background: PP_BG }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-on-scroll scale-in">
              <PhoneFrame label="AI Risk Meter, live demo">
                <div className="p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Icon path={ICONS.arrowLeft} className="h-5 w-5" style={{ color: PP_TEXT }} />
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
            <div className="animate-on-scroll slide-right">
              <h3 className="sw-serif mb-5 text-2xl font-medium" style={{ color: PP_INK }}>4. AI Risk Meter</h3>
              <IssueFix
                issue="Fraud and security checks happen completely out of view, so any delay feels arbitrary or even alarming."
                fix="A simple three-state meter, Safe, Needs Verification, or High Risk, with one plain sentence. The fraud model itself is never exposed."
              />
              <div className="mt-4 flex flex-wrap gap-2">
                {(['safe', 'verification', 'high'] as RiskLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setRiskDemo(lvl)}
                    className="rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
                    style={{
                      borderColor: riskDemo === lvl ? PP_INK : PP_BORDER,
                      background: riskDemo === lvl ? '#FFFFFF' : PP_BG,
                      color: riskDemo === lvl ? PP_INK : PP_SUBTEXT,
                    }}
                  >
                    {RISK_COPY[lvl].label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= BEFORE VS AFTER ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: PP_BORDER }}>
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Before and After</SectionEyebrow>
          <h2 className="sw-serif animate-on-scroll slide-up mb-16 text-center text-4xl font-medium" style={{ color: PP_INK }}>
            Same Payment, Same Backend
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="animate-on-scroll slide-left">
              <p className="mb-4 text-center font-bold" style={{ color: PP_SUBTEXT }}>BEFORE</p>
              <div className="rounded-2xl border p-8 text-center" style={{ borderColor: PP_BORDER }}>
                <p className="mb-4 text-2xl font-bold" style={{ color: PP_TEXT }}>-$340.00</p>
                <div className="mb-4 inline-block rounded-full border px-4 py-1.5 text-sm font-semibold" style={{ borderColor: PP_BORDER, color: PP_SUBTEXT }}>
                  Pending
                </div>
                <p className="text-sm" style={{ color: PP_SUBTEXT }}>No further information available.</p>
              </div>
            </div>
            <div className="animate-on-scroll slide-right">
              <p className="mb-4 text-center font-bold" style={{ color: PP_INK }}>AFTER</p>
              <div className="rounded-2xl border p-8" style={{ borderColor: PP_INK }}>
                <p className="mb-4 text-center text-2xl font-bold" style={{ color: PP_TEXT }}>-$340.00</p>
                <div className="mb-3 flex items-center justify-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: PP_INK }}>
                    <Icon path={ICONS.check} className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="font-bold" style={{ color: PP_INK }}>Payment is safe</p>
                </div>
                <p className="text-center text-sm" style={{ color: PP_SUBTEXT }}>Estimated by 5:00 PM today, 92% confidence</p>
              </div>
            </div>
          </div>
          <p className="animate-on-scroll fade-in mt-8 text-center text-sm" style={{ color: PP_SUBTEXT }}>
            No new payment logic, no new fraud rules, no new visual style. Just a new explanation layer on top of the same trusted system.
          </p>
        </div>
      </section>

      {/* ============================= OUTCOMES ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: PP_BORDER, background: PP_BG }}>
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>Projected Outcomes</SectionEyebrow>
          <h2 className="sw-serif animate-on-scroll slide-up mb-6 text-4xl font-medium" style={{ color: PP_INK }}>
            What I would expect to see
          </h2>
          <p className="animate-on-scroll fade-in mb-12 text-lg leading-relaxed" style={{ color: PP_SUBTEXT }}>
            The two behaviors that showed up most in the research were repeated app opens to check a status, and support
            contacts that only needed an explanation. Those are exactly what this is built to intercept. These are
            estimates for a concept, not measured results.
          </p>
          <div className="grid animate-on-scroll fade-in gap-8 sm:grid-cols-3">
            {[
              { stat: '35%', label: 'fewer support tickets about payment status' },
              { stat: '25%', label: 'fewer abandoned transactions' },
              { stat: '30%', label: 'faster issue resolution' },
            ].map((m, i) => (
              <div key={i}>
                <p className="sw-serif mb-2 text-4xl font-medium" style={{ color: PP_INK }}>{m.stat}</p>
                <p className="text-sm" style={{ color: PP_SUBTEXT }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= REFLECTION ============================= */}
      <section className="border-t px-4 py-20 sm:px-6 lg:px-8" style={{ borderColor: PP_BORDER }}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Reflection</SectionEyebrow>
          <h2 className="sw-serif animate-on-scroll slide-up mb-8 text-4xl font-medium" style={{ color: PP_INK }}>
            Trust means explaining, not just securing
          </h2>
          <p className="animate-on-scroll fade-in mb-12 text-lg leading-relaxed" style={{ color: PP_SUBTEXT }}>
            The biggest lesson for me was that trust is not only about the security working correctly behind the scenes.
            It is about whether the product is willing to explain itself. None of this required new fraud logic or new
            payment rails. It just required PayPal to say more, at the moment the user needed it most.
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
