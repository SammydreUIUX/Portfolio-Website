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
  externalLink: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
  camera: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
  layers: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  compass: 'M12 21a9 9 0 100-18 9 9 0 000 18z M16 8l-2 6-6 2 2-6 6-2z',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  users: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8zm6 3.87V20h-6v-1.13a4 4 0 013-3.87',
  image: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  building: 'M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7M9 9v.01M9 12v.01M9 15v.01',
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="sw-label mb-3 text-center" style={{ color: SW_GRAY }}>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Browser chrome for real recreated screens                          */
/* ------------------------------------------------------------------ */
function BrowserFrame({ children, url, label }: { children: React.ReactNode; url: string; label?: string }) {
  return (
    <div>
      <div className="overflow-hidden border" style={{ borderColor: SW_LINE }}>
        <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: SW_LINE, backgroundColor: SW_BG }}>
          <span className="h-2.5 w-2.5 rounded-full border" style={{ borderColor: SW_LINE }} />
          <span className="h-2.5 w-2.5 rounded-full border" style={{ borderColor: SW_LINE }} />
          <span className="h-2.5 w-2.5 rounded-full border" style={{ borderColor: SW_LINE }} />
          <div className="ml-4 flex-1 truncate border px-4 py-1.5 text-xs" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD, color: SW_GRAY }}>
            {url}
          </div>
        </div>
        <div style={{ backgroundColor: SW_CARD }}>{children}</div>
      </div>
      {label && <p className="sw-label mt-4 text-center" style={{ color: SW_GRAY }}>{label}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Horizontal flow diagram (journeys, process, structure)             */
/* ------------------------------------------------------------------ */
function Flow({ steps }: { steps: { title: string; sub?: string }[] }) {
  return (
    <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-start lg:gap-0">
      {steps.map((step, i) => (
        <React.Fragment key={step.title}>
          <div className="flex-1 border p-4 text-center" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
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
/*  Business need → user need → design response mapping                */
/* ------------------------------------------------------------------ */
function NeedsRow({ business, user, design }: { business: string; user: string; design: string }) {
  return (
    <div className="grid grid-cols-1 gap-px lg:grid-cols-3" style={{ backgroundColor: SW_LINE }}>
      <div className="p-5" style={{ backgroundColor: SW_CARD }}>
        <p className="sw-label mb-1.5" style={{ color: SW_GRAY }}>Business Need</p>
        <p style={{ color: SW_INK }}>{business}</p>
      </div>
      <div className="p-5" style={{ backgroundColor: SW_CARD }}>
        <p className="sw-label mb-1.5" style={{ color: SW_GRAY }}>User Need</p>
        <p className="sw-serif italic" style={{ color: SW_INK }}>&ldquo;{user}&rdquo;</p>
      </div>
      <div className="p-5" style={{ backgroundColor: SW_CARD }}>
        <p className="sw-label mb-1.5" style={{ color: SW_GRAY }}>Design Response</p>
        <p style={{ color: SW_INK }}>{design}</p>
      </div>
    </div>
  );
}

/* ==================================================================== */
/*  MAIN PAGE                                                            */
/* ==================================================================== */
export default function KinitechCaseStudy() {
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
            <img
              src="/images/kinitech/kinitech-logo.png"
              alt="Kinitech Engineering Inc. logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          <p className="sw-label mb-6" style={{ color: SW_GRAY }}>Kinitech Engineering Inc.</p>
          <h1 className="sw-display text-4xl md:text-6xl mb-8">
            From a Basic Website to a Credible B2B Experience
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: SW_GRAY }}>
            Kinitech had engineering expertise, but its digital presence wasn&apos;t communicating it. I redesigned
            the experience around clearer services, stronger credibility, project proof, and intentional paths to
            inquiry.
          </p>

          <div className="mb-14">
            <a href="https://kinitech.ca/" target="_blank" rel="noopener noreferrer" className="sw-btn sw-btn-primary">
              Visit Kinitech.ca
              <Icon path={ICONS.externalLink} className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-10 text-sm">
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Role</span>
              <span className="font-medium">Product Designer &amp; Front-End Developer</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Client</span>
              <span className="font-medium">Kinitech Engineering Inc.</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Platform</span>
              <span className="font-medium">Responsive Web</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Scope</span>
              <span className="font-medium">UX Strategy · IA · UI · SEO Structure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero browser mockup: real final homepage */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <BrowserFrame url="kinitech.ca" label="Final Homepage">
            <img
              src="/images/kinitech/after-homepage.jpg"
              alt="Kinitech Engineering final homepage: Engineering the Future of Infrastructure"
              className="w-full h-auto"
            />
          </BrowserFrame>
        </div>
      </section>

      {/* ============================= THE PROBLEM ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-6">The Company Had Expertise. The Site Didn&apos;t Show It.</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center mb-16" style={{ color: SW_GRAY }}>
            Kinitech&apos;s original site was a single page with limited information. A visitor couldn&apos;t quickly
            tell what Kinitech does, who they&apos;d worked with, or how to start a project.
          </p>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: SW_LINE }}>
            {[
              { icon: ICONS.layers, title: 'Limited Architecture', body: 'One page, minimal information, made it impossible to see the full scope of what Kinitech does.' },
              { icon: ICONS.compass, title: 'Unclear Services', body: 'Capabilities, industries, and delivery process were never actually explained.' },
              { icon: ICONS.image, title: 'No Project Proof', body: 'No case-study experience, despite completed work being the strongest credibility signal available.' },
              { icon: ICONS.camera, title: 'Generic Visuals', body: 'Stock imagery and template presentation that didn’t reflect real engineering expertise.' },
              { icon: ICONS.shield, title: 'Weak Trust Signals', body: 'Leadership, certifications, and outcomes were missing or hard to find.' },
              { icon: ICONS.search, title: 'Limited Search Visibility', body: 'One page with thin content meant almost nothing for search discovery.' },
            ].map((p, i) => (
              <div key={i} className="flex flex-col gap-3 p-6" style={{ backgroundColor: SW_CARD }}>
                <div className="flex h-9 w-9 items-center justify-center border" style={{ borderColor: SW_LINE }}>
                  <Icon path={p.icon} className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-medium">{p.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: SW_GRAY }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= THE APPROACH ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>The Approach</SectionEyebrow>
          <p className="text-center text-sm mb-3" style={{ color: SW_GRAY }}>Instead of &ldquo;make the website look modern,&rdquo; the brief became:</p>
          <h2 className="sw-serif italic text-2xl md:text-3xl text-center leading-snug mb-12 max-w-2xl mx-auto">
            How might we help prospective clients understand Kinitech, trust them, and confidently take the next
            step?
          </h2>
          <div className="mb-16">
            <Flow
              steps={[
                { title: 'Understand', sub: 'What does Kinitech do?' },
                { title: 'Trust', sub: 'Why should I consider them?' },
                { title: 'Act', sub: 'How do I start a conversation?' },
              ]}
            />
          </div>
          <p className="text-center text-sm max-w-xl mx-auto mb-8" style={{ color: SW_GRAY }}>
            No invented personas. Every decision below traces to a real business goal and a real client-side need.
          </p>
          <div className="space-y-px" style={{ backgroundColor: SW_LINE }}>
            <NeedsRow
              business="Communicate engineering capabilities."
              user="I need to know if this company has the expertise my project requires."
              design="A Services architecture with clear categories, benefits, deliverables, and process per discipline."
            />
            <NeedsRow
              business="Build credibility."
              user="I need evidence this company has relevant experience."
              design="A project structure showing the challenge, the solution, and the outcome."
            />
            <NeedsRow
              business="Generate inquiries."
              user="I need an obvious way to start a conversation."
              design="Consistent inquiry CTAs and a lightweight quote-request flow."
            />
          </div>
        </div>
      </section>

      {/* ============================= INFORMATION ARCHITECTURE ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-4xl mx-auto">
          <SectionEyebrow>Information Architecture</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-16">One Page, Five Destinations</h2>

          <div className="grid gap-8 md:grid-cols-2 items-start mb-16">
            <div className="border p-6" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
              <p className="sw-label mb-4 text-center" style={{ color: SW_GRAY }}>Before</p>
              <div className="overflow-hidden border" style={{ borderColor: SW_LINE }}>
                <img
                  src="/images/kinitech/before-homepage.jpg"
                  alt="Original Kinitech homepage: a single long scrolling page"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Weak hierarchy', 'No project proof', 'Weak inquiry path', 'No SEO structure'].map((t) => (
                  <span key={t} className="sw-label border px-2.5 py-1" style={{ borderColor: SW_LINE, color: SW_GRAY, fontSize: '0.6rem' }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="border p-6" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
              <p className="sw-label mb-4 text-center" style={{ color: SW_GRAY }}>After</p>
              <div className="overflow-hidden border" style={{ borderColor: SW_LINE }}>
                <img
                  src="/images/kinitech/after-homepage.jpg"
                  alt="Final Kinitech homepage with dedicated navigation"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Home', 'Services', 'Projects', 'About', 'Contact'].map((t) => (
                  <span key={t} className="sw-label border px-2.5 py-1" style={{ borderColor: SW_LINE, color: SW_GRAY, fontSize: '0.6rem' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-px" style={{ backgroundColor: SW_LINE }}>
            {[
              { page: 'Home', role: 'Orient visitors, communicate the core value proposition.' },
              { page: 'About', role: 'Build trust through story, mission, and leadership.' },
              { page: 'Services', role: 'Explain capabilities in a way that’s easy to evaluate.' },
              { page: 'Projects', role: 'Provide evidence of engineering experience.' },
              { page: 'Contact', role: 'Convert interest into an inquiry.' },
            ].map((r) => (
              <div key={r.page} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 p-4" style={{ backgroundColor: SW_CARD }}>
                <p className="font-medium sm:col-span-1">{r.page}</p>
                <p className="sm:col-span-3" style={{ color: SW_GRAY }}>{r.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm max-w-xl mx-auto" style={{ color: SW_GRAY }}>
            Not just added pages: each destination was given a specific job in the client&apos;s decision journey.
          </p>
        </div>
      </section>

      {/* ============================= KEY DECISIONS ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-6xl mx-auto">
          <SectionEyebrow>Key Decisions</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-4">From Framework to Screens</h2>
          <p className="text-center text-sm mb-10" style={{ color: SW_GRAY }}>
            The site was designed to support one decision journey end to end.
          </p>
          <div className="mb-16">
            <Flow
              steps={[
                { title: 'Land', sub: '“Who is this?”' },
                { title: 'Understand', sub: '“Can they help?”' },
                { title: 'Evaluate', sub: '“Are they relevant?”' },
                { title: 'Trust', sub: '“Can I trust them?”' },
                { title: 'Inquire', sub: '“How do I start?”' },
              ]}
            />
          </div>

          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 mb-4" style={{ backgroundColor: SW_LINE }}>
            {[
              { icon: ICONS.layers, title: 'Service Discovery', body: 'One structure (Overview, Benefits, Deliverables, Process, CTA) repeated across all five disciplines: Structural Assessment, Seismic & Wind Load, Shop Drawing Review, Site Inspections, Schedule B/C-B Letters. Understand one, understand all.' },
              { icon: ICONS.building, title: 'Trust as a System', body: 'Client logos, leadership credentials, and company history distributed through the experience, not confined to one About page.' },
              { icon: ICONS.image, title: 'Project Structure', body: 'Every project follows Overview → Challenge → Solution → Outcome → Contact, so visitors see how Kinitech solves problems, not just what they built.' },
              { icon: ICONS.compass, title: 'Engineering Process', body: 'A visible five-step process (Consultation, Assessment, Planning, Execution, Completion) that reduces uncertainty before the first call.' },
              { icon: ICONS.users, title: 'Inquiry Design', body: 'A persistent “Request a Quote” action in the navigation, opening a lightweight form instead of a new page. No dead ends on any high-intent page.' },
            ].map((d, i) => (
              <div key={i} className="flex flex-col gap-3 p-6" style={{ backgroundColor: SW_CARD }}>
                <div className="flex h-9 w-9 items-center justify-center border" style={{ borderColor: SW_LINE }}>
                  <Icon path={d.icon} className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-medium">{d.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: SW_GRAY }}>{d.body}</p>
              </div>
            ))}
            <div className="p-6 flex flex-col items-center justify-center text-center gap-3" style={{ backgroundColor: SW_CARD }}>
              <p className="sw-label" style={{ color: SW_GRAY }}>Real Clients on the Homepage</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {[
                  { src: '/images/kinitech/clients/onni-group.png', alt: 'Onni Group' },
                  { src: '/images/kinitech/clients/west-fraser.png', alt: 'West Fraser' },
                  { src: '/images/kinitech/clients/prism.png', alt: 'Prism' },
                  { src: '/images/kinitech/clients/architect57.png', alt: 'Architect57' },
                  { src: '/images/kinitech/clients/khalsa-school.png', alt: 'Khalsa School' },
                ].map((c) => (
                  <img key={c.alt} src={c.src} alt={c.alt} className="h-5 w-auto object-contain grayscale opacity-70" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14">
            <p className="sw-label mb-3 text-center" style={{ color: SW_GRAY }}>Real Shipped Flow</p>
            <p className="text-center max-w-xl mx-auto mb-8" style={{ color: SW_INK }}>
              &ldquo;Request a Quote&rdquo; opens the same short form from anywhere on the site: Full Name, Email,
              Phone (optional), Project Type, Project Details. One step removed from the highest-intent action on
              the site.
            </p>
            <BrowserFrame url="kinitech.ca/services" label="Real Quote Request Modal">
              <img
                src="/images/kinitech/quote-modal-services.jpg"
                alt="Real Kinitech Request a Quote modal open over the Services page, with Full Name, Email, Phone, Project Type, and Project Details fields"
                className="w-full h-auto"
              />
            </BrowserFrame>
          </div>
        </div>
      </section>

      {/* ============================= EXECUTION ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>Execution</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-14">The Details That Hold It Together</h2>

          <div className="mb-4">
            <p className="sw-label mb-3" style={{ color: SW_GRAY }}>Responsive</p>

            <div className="mb-4">
              <p className="sw-label mb-2" style={{ color: SW_GRAY, fontSize: '0.65rem' }}>Desktop</p>
              <BrowserFrame url="kinitech.ca/projects">
                <img
                  src="/images/kinitech/responsive-desktop.jpg"
                  alt="Kinitech Projects page on desktop"
                  className="w-full h-auto"
                />
              </BrowserFrame>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <div className="col-span-3">
                <p className="sw-label mb-2" style={{ color: SW_GRAY, fontSize: '0.65rem' }}>Tablet</p>
                <div className="overflow-hidden border" style={{ borderColor: SW_LINE }}>
                  <img
                    src="/images/kinitech/responsive-tablet.jpg"
                    alt="Kinitech Projects page on tablet"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <p className="sw-label mb-2" style={{ color: SW_GRAY, fontSize: '0.65rem' }}>Mobile</p>
                <div className="overflow-hidden border" style={{ borderColor: SW_LINE }}>
                  <div className="flex justify-center py-1.5" style={{ backgroundColor: SW_CARD }}>
                    <span className="h-1 w-6" style={{ backgroundColor: SW_LINE }} />
                  </div>
                  <img
                    src="/images/kinitech/responsive-mobile.jpg"
                    alt="Kinitech Projects page on mobile"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mt-10">
            <div>
              <p className="sw-label mb-3" style={{ color: SW_GRAY }}>Design System</p>
              <div className="flex flex-wrap gap-2">
                {['Navigation', 'Buttons', 'Service Cards', 'Project Cards', 'CTA Sections', 'Form Inputs', 'Type Scale', 'Color Tokens'].map((c) => (
                  <span key={c} className="border px-3 py-1.5 text-xs" style={{ borderColor: SW_LINE, color: SW_GRAY }}>{c}</span>
                ))}
              </div>
              <p className="text-sm mt-3" style={{ color: SW_GRAY }}>
                A compact, token-based component set (surface and outline color roles, one type scale) kept the
                expanding site consistent.
              </p>
            </div>
            <div>
              <p className="sw-label mb-3" style={{ color: SW_GRAY }}>SEO Structure</p>
              <div className="space-y-1.5">
                {[
                  ['Home', 'Kinitech Engineering Inc. | Engineering the Future of Infrastructure'],
                  ['Services', 'Services | Kinitech Engineering Inc.'],
                  ['Projects', 'Projects | Kinitech Engineering'],
                ].map(([page, title]) => (
                  <div key={page} className="text-xs">
                    <span className="font-medium">{page}:</span>{' '}
                    <span className="font-mono" style={{ color: SW_GRAY }}>{title}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm mt-3" style={{ color: SW_GRAY }}>
                Five destinations, five descriptive titles: a structural foundation for discoverability, not a
                ranking claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= OUTCOME ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>Outcome</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-16">What Changed, What&apos;s Next to Prove</h2>
          <div className="grid gap-8 md:grid-cols-2 mb-14">
            <div className="border p-6" style={{ borderColor: SW_LINE }}>
              <p className="mb-4 text-center font-bold" style={{ color: SW_GRAY }}>BEFORE</p>
              <ul className="space-y-2.5 text-sm">
                {['Single-page experience', 'No service breakdown', 'No project showcase', 'Weak trust signals', 'Weak inquiry pathway', 'No SEO structure'].map((s) => (
                  <li key={s} className="flex items-center gap-3" style={{ color: SW_GRAY }}>
                    <span className="h-1 w-1 flex-shrink-0" style={{ backgroundColor: SW_GRAY }} />{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 p-6" style={{ borderColor: SW_INK }}>
              <p className="mb-4 text-center font-bold">AFTER</p>
              <ul className="space-y-2.5 text-sm">
                {['Five-page architecture', 'Structured service discovery', 'Project & success-story experience', 'Distributed trust signals', 'Intentional inquiry pathways', 'Responsive, SEO-conscious structure'].map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="h-1 w-1 flex-shrink-0" style={{ backgroundColor: SW_INK }} />{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="sw-label mb-3 text-center" style={{ color: SW_GRAY }}>What I Would Measure, With Analytics</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {['Contact form completion', 'Service-page engagement', 'Project-page engagement', 'Homepage → service navigation', 'Organic search traffic', 'Mobile engagement', 'Inquiry volume'].map((s) => (
              <span key={s} className="border px-3 py-1.5 text-xs" style={{ borderColor: SW_LINE, color: SW_GRAY }}>{s}</span>
            ))}
          </div>
          <p className="text-xs italic text-center" style={{ color: SW_GRAY }}>
            Future measurement criteria, no analytics-based results are claimed here.
          </p>
        </div>
      </section>

      {/* ============================= REFLECTION ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>Reflection</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-10">The Product Was Information</h2>
          <p className="text-lg leading-relaxed mb-16" style={{ color: SW_INK }}>
            Kinitech reinforced that Product Design doesn&apos;t always mean a complex application. Sometimes the
            product problem is information: helping a visitor understand a business, evaluate its capabilities,
            trust it, and confidently decide what to do next. The shift here was treating the website as a
            decision journey rather than a collection of pages, and letting every screen answer one question in
            that journey.
          </p>

          <div className="grid gap-px sm:grid-cols-2 mb-16" style={{ backgroundColor: SW_LINE }}>
            {[
              { title: 'Structure before screens', body: 'Information architecture solved the fundamental problem before visual design began.' },
              { title: 'Trust must be designed', body: 'For B2B engineering services, credibility is part of the user experience, not an add-on.' },
              { title: 'Every page needs a job', body: 'Each destination supports one specific stage of the client’s decision process.' },
              { title: 'Business and user goals align', body: 'Helping visitors understand Kinitech more clearly also drives Kinitech’s lead generation.' },
            ].map((t) => (
              <div key={t.title} className="p-6" style={{ backgroundColor: SW_CARD }}>
                <h4 className="font-medium mb-2">{t.title}</h4>
                <p className="text-sm" style={{ color: SW_GRAY }}>{t.body}</p>
              </div>
            ))}
          </div>

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
