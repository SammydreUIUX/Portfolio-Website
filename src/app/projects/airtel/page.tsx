'use client';

import React from 'react';
import Link from 'next/link';

const SW_BG = '#FAFAF8';
const SW_CARD = '#FFFFFF';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

/* ------------------------------------------------------------------ */
/*  Icon primitives                                                     */
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
  arrowRight: 'M14 5l7 7m0 0l-7 7m7-7H3',
  building: 'M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7M9 9v.01M9 12v.01M9 15v.01',
  church: 'M12 2v6m0 0L9 6m3 2l3-2M5 22V11l7-4 7 4v11M5 22h14M9 22v-6h6v6',
  plus: 'M12 4v16m8-8H4',
  minus: 'M20 12H4',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="sw-label mb-3 text-center" style={{ color: SW_GRAY }}>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Horizontal flow diagram                                            */
/* ------------------------------------------------------------------ */
function Flow({ steps }: { steps: { title: string; sub?: string }[] }) {
  return (
    <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-start lg:gap-0">
      {steps.map((step, i) => (
        <React.Fragment key={step.title}>
          <div className="flex-1 border p-5 text-center" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
            <p className="sw-label mb-1.5" style={{ color: SW_GRAY }}>{String(i + 1).padStart(2, '0')}</p>
            <p className="font-medium mb-1" style={{ color: SW_INK }}>{step.title}</p>
            {step.sub && <p className="text-sm" style={{ color: SW_GRAY }}>{step.sub}</p>}
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center justify-center px-1 py-1 lg:py-0">
              <Icon path={ICONS.arrowRight} className="h-4 w-4 rotate-90 lg:rotate-0" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Real outreach campaign card                                        */
/* ------------------------------------------------------------------ */
function CampaignCard({
  icon,
  segment,
  context,
  pitch,
  questions,
  offer,
  formFields,
}: {
  icon: string;
  segment: string;
  context: string;
  pitch: string;
  questions: string[];
  offer: string;
  formFields: string[];
}) {
  return (
    <div className="border" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
      <div className="flex items-center gap-3 border-b p-6" style={{ borderColor: SW_LINE }}>
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border" style={{ borderColor: SW_LINE }}>
          <Icon path={icon} className="h-4.5 w-4.5" />
        </div>
        <div>
          <p className="sw-label" style={{ color: SW_GRAY }}>Segment</p>
          <p className="font-medium">{segment}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="sw-label mb-2" style={{ color: SW_GRAY }}>The Angle</p>
        <p className="text-sm mb-5" style={{ color: SW_GRAY }}>{context}</p>

        <p className="sw-label mb-2" style={{ color: SW_GRAY }}>Real Outreach Script</p>
        <p className="text-sm leading-relaxed mb-5 sw-serif italic" style={{ color: SW_INK }}>
          &ldquo;{pitch}&rdquo;
        </p>

        <p className="sw-label mb-2" style={{ color: SW_GRAY }}>Qualifying Questions Asked</p>
        <ul className="mb-5 space-y-2">
          {questions.map((q) => (
            <li key={q} className="flex items-start gap-2 text-sm" style={{ color: SW_INK }}>
              <span className="mt-1.5 h-1 w-1 flex-shrink-0" style={{ backgroundColor: SW_INK }} />
              {q}
            </li>
          ))}
        </ul>

        <div className="mb-5 border p-4 text-sm" style={{ borderColor: SW_LINE, backgroundColor: SW_BG, color: SW_INK }}>
          {offer}
        </div>

        <p className="sw-label mb-2" style={{ color: SW_GRAY }}>Registration Form</p>
        <div className="flex flex-wrap gap-2">
          {formFields.map((f) => (
            <span key={f} className="border px-3 py-1.5 text-xs" style={{ borderColor: SW_LINE, color: SW_GRAY }}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SWOT quadrant                                                       */
/* ------------------------------------------------------------------ */
function SwotQuadrant({ icon, title, items }: { icon: string; title: string; items: string[] }) {
  return (
    <div className="p-6" style={{ backgroundColor: SW_CARD }}>
      <div className="mb-4 flex items-center gap-2">
        <Icon path={icon} className="h-4 w-4" />
        <h4 className="sw-label font-bold" style={{ color: SW_INK }}>{title}</h4>
      </div>
      <ul className="space-y-2 text-sm" style={{ color: SW_GRAY }}>
        {items.map((it) => (
          <li key={it}>&bull; {it}</li>
        ))}
      </ul>
    </div>
  );
}

/* ==================================================================== */
/*  MAIN PAGE                                                            */
/* ==================================================================== */
export default function AirtelCaseStudy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SW_BG, color: SW_INK }}>

      {/* ============================= HERO ============================= */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <Link href="/#featured-work" className="inline-flex items-center transition-colors hover:opacity-60" style={{ color: SW_GRAY }}>
              <Icon path={ICONS.arrowLeft} className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </div>

          <div className="mx-auto mb-10 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center border p-3" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
              <img src="/images/airtel/airtel-logo.png" alt="Airtel logo" className="h-full w-full object-contain" />
            </div>
          </div>

          <p className="sw-label mb-6" style={{ color: SW_GRAY }}>Airtel ODU &middot; Nigeria</p>
          <h1 className="sw-display text-4xl md:text-6xl mb-8">
            Proving Demand Before Scaling Nationally
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14" style={{ color: SW_GRAY }}>
            Airtel ODU was entering a Nigerian connectivity market already served by MTN, Glo, and Smile. Instead
            of a broad national launch, I helped design a Lagos pilot: two targeted outreach campaigns that
            tested whether real organizations, not hypothetical users, would actually say yes.
          </p>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-10 text-sm">
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Role</span>
              <span className="font-medium">Product Researcher</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Market</span>
              <span className="font-medium">Lagos &rarr; Nationwide</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Team</span>
              <span className="font-medium">8 members</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Duration</span>
              <span className="font-medium">8 months</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= THE PROBLEM ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-10">
            A Crowded Market Isn&apos;t an Empty One
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: SW_INK }}>
            Poor indoor signal and unreliable connectivity are common across Nigeria, in rural areas far from
            towers and in urban commercial hubs alike. That problem was already visible. What wasn&apos;t
            settled was whether Airtel could win share in a market where MTN, Glo, and Smile were already
            established, and where a new hardware device is an easy thing for a buyer to say no to.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: SW_INK }}>
            The research question wasn&apos;t &ldquo;does Nigeria need better connectivity.&rdquo; It was:
            which organizations feel this pain acutely enough, and specifically enough, that a free device with
            pay-as-you-go data would get a real yes instead of a polite maybe?
          </p>
        </div>
      </section>

      {/* ============================= GO-TO-MARKET APPROACH ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>Go-to-Market Approach</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-6">Validate in One City First</h2>
          <p className="text-center max-w-xl mx-auto mb-14" style={{ color: SW_GRAY }}>
            Rather than a single national campaign, the plan started narrow: prove real demand in Lagos with
            organizations that had an urgent, specific reason to need better connectivity, then use that as the
            evidence base for a national rollout.
          </p>
          <Flow
            steps={[
              { title: 'Lagos Pilot', sub: 'Target real organizations, not the general public' },
              { title: 'Segment Validation', sub: 'Two outreach campaigns, direct qualifying questions' },
              { title: 'National Rollout', sub: 'Scale what was proven to convert' },
            ]}
          />
        </div>
      </section>

      {/* ============================= RESEARCH METHOD ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>Research Method</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-10">Outreach, Not a Generic Survey</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: SW_INK }}>
            Instead of running one broad awareness survey, I helped design two segment-specific outreach
            campaigns: one for churches, one for businesses and institutions. Each opened with a short pitch
            written around that segment&apos;s actual pain point, followed by direct yes/no qualifying
            questions, then a short registration form to capture real interest, not hypothetical interest.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: SW_INK }}>
            The offer was the same for both: a free Airtel Smart Box, pay only for data used. That structure
            was deliberate. It removed the upfront cost objection before asking anyone to commit to anything
            more than a conversation.
          </p>
        </div>
      </section>

      {/* ============================= TWO CAMPAIGNS ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-6xl mx-auto">
          <SectionEyebrow>The Two Campaigns</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-16">Real Outreach, Two Segments</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <CampaignCard
              icon={ICONS.church}
              segment="Churches"
              context="COVID-19 pushed congregations online, and that habit didn't reverse. Churches returning to in-person gathering were keeping a live-stream option running alongside it, which made a dependable, real-time connection a requirement rather than a nice-to-have."
              pitch="COVID-19 made online church a habit that isn't going away. Churches gathering in person again are keeping an online option running alongside it, both for members who can't attend and for the evangelistic reach a live stream makes possible. That makes a reliable, real-time streaming connection essential."
              questions={[
                'Are you interested in streaming your church service online?',
                'Are you interested in reaching a global audience through an online service?',
                'Are you currently having connectivity challenges during church services?',
                'Are you willing to evangelize online?',
              ]}
              offer="Get an Airtel Smart Box free. Pay only for the data you use."
              formFields={['Church Name', 'Email Address', 'Phone Number', 'Address', 'Contact Person']}
            />
            <CampaignCard
              icon={ICONS.building}
              segment="Businesses & Institutions"
              context="Schools, hospitals, and business owners depend on connectivity for daily operations. Slow or unreliable internet directly costs work hours, and a new device only gets adopted if it doesn't strain an already fixed budget."
              pitch="The internet reshaped how business gets done, connecting companies to a global marketplace in real time. When connectivity slows, work slows with it, and the hours lost to a weak connection compound into a real cost to growth and output."
              questions={[
                'Are you a business, school, or hospital relying on daily connectivity?',
                'Do you need a connection you can actually depend on?',
                'Do you need a device that won’t strain your budget?',
                'Does your current setup support your operating budget?',
              ]}
              offer="Get a free Airtel Smart Box. Pay only for the data you use. Register now."
              formFields={['Business Name', 'Email Address', 'Phone Number', 'Address', 'Contact Person']}
            />
          </div>
        </div>
      </section>

      {/* ============================= WHAT THE OUTREACH SHOWED ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>What the Outreach Showed</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-10">Affordability Converted Attention Into Yes</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: SW_INK }}>
            Every organization that completed the qualifying conversation, in both segments, answered yes to
            needing internet they could depend on and afford. This is directional signal from a pilot outreach,
            not a statistically representative survey, but the pattern was consistent enough across both
            segments to be a real finding, not a coincidence.
          </p>
          <div className="border-l-4 p-5" style={{ borderColor: SW_INK, backgroundColor: SW_CARD }}>
            <p className="sw-serif italic text-lg" style={{ color: SW_INK }}>
              Signal wasn&apos;t the barrier. Every competitor already sells signal. The barrier was the upfront
              cost of trying a new device, and removing it is what turned interest into a completed
              registration.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= SWOT ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>Competitive Position</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-16">Airtel ODU SWOT</h2>

          <div className="grid gap-px sm:grid-cols-2 mb-14" style={{ backgroundColor: SW_LINE }}>
            <SwotQuadrant
              icon={ICONS.plus}
              title="Strengths"
              items={[
                'Airtel brand trust and existing customer base',
                'Free-device, pay-for-data model removes the upfront cost objection',
                'A clear device offering for a signal gap MTN, Glo, and Smile leave open indoors',
              ]}
            />
            <SwotQuadrant
              icon={ICONS.minus}
              title="Weaknesses"
              items={[
                'Data costs still apply after the free device, an ongoing cost some segments weigh carefully',
                'Coverage still depends on tower proximity like any carrier',
                'A new device category with no existing awareness to build on',
              ]}
            />
            <SwotQuadrant
              icon={ICONS.arrowRight}
              title="Opportunities"
              items={[
                'Segment-specific outreach (churches, schools, hospitals, SMBs) beyond a general consumer campaign',
                'Lagos pilot as a proof point for a structured national rollout',
                'Bundled offers for institutions with recurring connectivity needs',
              ]}
            />
            <SwotQuadrant
              icon={ICONS.shield}
              title="Threats"
              items={[
                'MTN’s larger market share and urban coverage',
                'Competitors could copy the free-device model once it proves out',
                'Segments with tight budgets remain price-sensitive to data costs over time',
              ]}
            />
          </div>

          <div className="space-y-px" style={{ backgroundColor: SW_LINE }}>
            {[
              { name: 'MTN', edge: 'Largest market share and strongest urban coverage.', gap: 'Weaker rural penetration and no equivalent indoor-signal device.' },
              { name: 'Glo', edge: 'Lowest data pricing in the market.', gap: 'Reliability reputation is weaker, less credible for mission-critical use like a live church service.' },
              { name: 'Smile', edge: 'Strong 4G/5G speeds in major cities.', gap: 'Limited rural and semi-urban reach, and premium pricing that excludes budget-conscious segments.' },
            ].map((c) => (
              <div key={c.name} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 p-5" style={{ backgroundColor: SW_CARD }}>
                <p className="font-medium sm:col-span-1">{c.name}</p>
                <p className="sm:col-span-3" style={{ color: SW_GRAY }}>
                  <span style={{ color: SW_INK }}>{c.edge}</span> {c.gap}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= REFLECTION ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>Reflection</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-10">Remove the Barrier, Not Just the Pain</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: SW_INK }}>
            Entering a market with entrenched competitors isn&apos;t won by explaining a problem everyone
            already knows about. Every carrier in Nigeria will tell you connectivity matters. What moved
            churches and businesses from interest to a completed registration was a specific, provable pain
            point paired with an offer that removed their actual objection: the upfront cost of trying something
            new.
          </p>
          <p className="text-lg leading-relaxed mb-16" style={{ color: SW_INK }}>
            Testing that in Lagos, with two real segments and a real form, before assuming it nationally, was
            the difference between a launch plan built on hope and one built on evidence.
          </p>
          <div className="text-center">
            <Link href="/#featured-work" className="sw-btn sw-btn-primary inline-flex">
              <Icon path={ICONS.arrowLeft} className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
