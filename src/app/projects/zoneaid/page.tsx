'use client';

import React from 'react';
import Link from 'next/link';

const SW_BG = '#FAFAF8';
const SW_CARD = '#FFFFFF';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

/* ------------------------------------------------------------------ */
/*  Small icon primitives                                              */
/* ------------------------------------------------------------------ */
function Icon({ path, className = 'w-5 h-5' }: { path: string; className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );
}
const ICONS = {
  arrowLeft: 'M10 19l-7-7m0 0l7-7m-7 7h18',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  alertTriangle: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  inbox: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0l-2 5H6l-2-5m16 0h-3.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 006.586 13H3',
  check: 'M5 13l4 4L19 7',
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="sw-label mb-3 text-center" style={{ color: SW_GRAY }}>
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
        <p className="sw-label mb-1.5" style={{ color: SW_GRAY }}>The issue</p>
        <p style={{ color: SW_INK }}>{issue}</p>
      </div>
      <div>
        <p className="sw-label mb-1.5" style={{ color: SW_GRAY }}>The fix</p>
        <p style={{ color: SW_INK }}>{fix}</p>
      </div>
    </div>
  );
}

export default function ZoneAidCaseStudy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SW_BG, color: SW_INK }}>
      {/* ============================= HERO ============================= */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Link href="/#featured-work" className="inline-flex items-center transition-colors" style={{ color: SW_GRAY }}>
              <Icon path={ICONS.arrowLeft} className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </div>
          <div className="mx-auto mb-8 flex items-center justify-center">
            <img
              src="/images/zoneaid/zoneaid-logo.png"
              alt="ZoneAid Logo"
              className="h-20 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className="hidden w-20 h-20 items-center justify-center" style={{ backgroundColor: SW_INK }}>
              <span className="font-bold text-lg" style={{ color: SW_BG }}>ZA</span>
            </div>
          </div>
          <p className="sw-serif text-3xl md:text-5xl mb-8 max-w-2xl mx-auto">
            Emergency Safety App: Built for the moments when seconds matter
          </p>

          <div className="mb-12">
            <a href="https://zoneaid.co/" target="_blank" rel="noopener noreferrer" className="sw-btn sw-btn-primary">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Try ZoneAid App
              <Icon path="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <div className="flex flex-col items-center">
              <span className="sw-label" style={{ color: SW_GRAY }}>Role</span>
              <span className="font-medium mt-1">Lead UI/UX Designer</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label" style={{ color: SW_GRAY }}>Duration</span>
              <span className="font-medium mt-1">6 months</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label" style={{ color: SW_GRAY }}>Team</span>
              <span className="font-medium mt-1">4 members</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label" style={{ color: SW_GRAY }}>Impact</span>
              <span className="font-medium mt-1 underline">40% faster response</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= THE PROBLEM ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-4xl mx-auto">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="sw-serif text-4xl text-center mb-8">Panic doesn&apos;t read menus</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: SW_INK }}>
            ZoneAid is an emergency response app: a way to get real help moving toward you within seconds of
            realizing something is wrong. This is the first version I designed and built, not a redesign of an
            existing product.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: SW_INK }}>
            In a real emergency, people don&apos;t have the composure to navigate menus. Hands shake, thinking
            narrows, and every extra tap is a tap not spent getting help. Most emergency apps are designed for
            someone calm enough to read five options and pick the right one.
          </p>
          <p className="text-lg leading-relaxed mb-16" style={{ color: SW_INK }}>
            I needed ZoneAid to work for the version of someone having the worst moment of their life: scared,
            rushed, and possibly unable to see clearly or use both hands.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ICONS.alertTriangle, title: 'Cluttered menus', body: 'Traditional emergency apps buried the SOS action behind categories and settings.' },
              { icon: ICONS.clock, title: 'No time to think', body: 'Every extra tap costs seconds that matter most in a real emergency.' },
              { icon: ICONS.shield, title: 'Fails when it’s needed', body: 'Apps that need a strong signal or a calm mind don’t work in a real crisis.' },
              { icon: ICONS.inbox, title: 'Silence after the tap', body: 'No confirmation that help is coming leaves people more anxious, not less.' },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-4 border p-5" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border" style={{ borderColor: SW_LINE }}>
                  <Icon path={p.icon} className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">{p.title}</h4>
                  <p className="text-sm" style={{ color: SW_GRAY }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 1: ONE-TAP SOS ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h3 className="sw-serif mb-5 text-2xl">1. One-Tap SOS</h3>
              <IssueFix
                issue="Traditional emergency apps required navigating menus and creating an account before help was even requested, costing precious seconds."
                fix="I designed one dominant SOS button that starts the emergency flow immediately. Category selection is optional and can happen after help is already on the way, cutting the flow from 5 actions to 2."
              />
            </div>
            <div className="order-1 lg:order-2 border" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
              <img
                src="/images/zoneaid/Overview.jpg"
                alt="ZoneAid main emergency screen with a single SOS button and recent emergencies list"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 2: VOICE NOTE ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h3 className="sw-serif mb-5 text-2xl">2. Voice Notes, When Typing Isn&apos;t an Option</h3>
              <IssueFix
                issue="Typing details during a crisis is slow, sometimes impossible: shaking hands, one free hand, or a screen someone can barely see."
                fix="A voice note option built directly into the help request, so someone can speak what&apos;s happening instead of typing it."
              />
            </div>
            <div className="order-1 lg:order-2 border" style={{ borderColor: SW_LINE, backgroundColor: SW_BG }}>
              <img
                src="/images/zoneaid/voice-note-feature.png"
                alt="ZoneAid Get Help screen showing the Add Voice Record option beneath emergency category selection"
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 3: LIVE STATUS ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="border" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
                <img src="/images/zoneaid/discover-1.jpg.png" alt="ZoneAid emergency category selection screen" className="w-full" />
              </div>
              <div className="border" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
                <img src="/images/zoneaid/discover-2.jpg.png" alt="ZoneAid live help status screen showing responder progress" className="w-full" />
              </div>
            </div>
            <div>
              <h3 className="sw-serif mb-5 text-2xl">3. Live Status, Not Silence</h3>
              <IssueFix
                issue="After tapping for help, the screen went quiet. No confirmation, no sense of whether anything was actually happening."
                fix="I built a live status screen: searching for help, responder found and en route, or automatic fallback, so the wait itself feels handled."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 4: OFFLINE ARCHITECTURE ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h3 className="sw-serif mb-5 text-2xl">4. Works When Everything Else Fails</h3>
              <IssueFix
                issue="A single point of failure: if the network dropped, the whole app stopped working."
                fix="I split the system into three layers: an Emergency Core that works fully offline, a Support layer for family alerts once connectivity returns, and a Maintenance layer for calm-moment setup."
              />
            </div>
            <div className="order-1 lg:order-2 border" style={{ borderColor: SW_LINE, backgroundColor: SW_BG }}>
              <img
                src="/images/zoneaid/information-architecture.png"
                alt="ZoneAid three-layer information architecture: Emergency Core, Support Layer, and Maintenance Layer"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FEATURE 5: BUILT FOR SHAKING HANDS ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-sm border" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
              <video className="aspect-[9/16] w-full object-cover" autoPlay muted loop playsInline>
                <source src="/images/zoneaid/prototype-demo.mp4" type="video/mp4" />
              </video>
              <p className="p-3 text-center text-xs" style={{ color: SW_GRAY }}>Prototype tested under simulated stress conditions</p>
            </div>
            <div>
              <h3 className="sw-serif mb-5 text-2xl">5. Built for Shaking Hands</h3>
              <IssueFix
                issue="Small buttons and low contrast are hard to use even when calm, and nearly impossible under stress or in a dim room."
                fix="I built a 120pt SOS button, pushed contrast beyond WCAG AAA, and tested one-handed thumb-reach placement across grip styles and emergency scenarios."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= BEFORE VS AFTER ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <SectionEyebrow>Before and After</SectionEyebrow>
          <h2 className="sw-serif text-4xl text-center mb-16">Same Emergency, Fewer Steps</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border p-6" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
              <p className="mb-4 text-center font-bold" style={{ color: SW_GRAY }}>BEFORE</p>
              <ol className="space-y-3 text-sm">
                {['Open app', 'Navigate menu', 'Create or verify account', 'Select emergency category', 'Confirm', 'Help requested'].map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border text-xs font-bold" style={{ borderColor: SW_LINE, color: SW_GRAY }}>{i + 1}</span>
                    <span style={{ color: SW_GRAY }}>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border-2 p-6" style={{ borderColor: SW_INK, backgroundColor: SW_CARD }}>
              <p className="mb-4 text-center font-bold">AFTER</p>
              <ol className="space-y-3 text-sm">
                {['Open app', 'Tap SOS, help requested automatically', 'Category and details added after, if needed'].map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-xs font-bold text-white" style={{ background: SW_INK }}>{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <p className="mt-8 text-center text-sm" style={{ color: SW_GRAY }}>
            I didn&apos;t build a new dispatch system or new emergency services. Just fewer steps between panic and help.
          </p>
        </div>
      </section>

      {/* ============================= IMPACT ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionEyebrow>Impact</SectionEyebrow>
          <h2 className="sw-serif text-4xl mb-12">What Changed</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { stat: '40%', label: 'faster emergency response time' },
              { stat: '98%', label: 'success rate in user testing' },
              { stat: '3s', label: 'average time to connect to help' },
            ].map((m, i) => (
              <div key={i}>
                <p className="sw-serif mb-2 text-4xl">{m.stat}</p>
                <p className="text-sm" style={{ color: SW_GRAY }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= REFLECTION ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-3xl mx-auto text-center">
          <SectionEyebrow>Reflection</SectionEyebrow>
          <h2 className="sw-serif text-4xl mb-8">Design for the worst day, not the demo</h2>
          <p className="text-lg leading-relaxed mb-12" style={{ color: SW_GRAY }}>
            I learned that designing for someone&apos;s worst moment is different from designing for a good day.
            Every extra tap, every unclear label, every silence after an action becomes a real cost when someone
            is scared and rushed. Designing for that state made the ordinary experience better too: fewer menus,
            clearer feedback, one action that always works.
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
