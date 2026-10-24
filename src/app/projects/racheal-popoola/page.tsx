'use client';

import React from 'react';
import Link from 'next/link';

const SW_BG = '#FAFAF8';
const SW_CARD = '#FFFFFF';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

const SITE_URL = 'https://racheal-popoola-portfolio.vercel.app';
const SITE_HOST = 'racheal-popoola-portfolio.vercel.app';

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
  document: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  lock: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="sw-label mb-3 text-center" style={{ color: SW_GRAY }}>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Browser chrome for real screenshots                                */
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
/*  Horizontal flow diagram (gallery concept)                          */
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
/*  One numbered mentorship decision                                   */
/* ------------------------------------------------------------------ */
function Decision({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 p-6" style={{ backgroundColor: SW_CARD }}>
      <p className="sw-label sm:col-span-1 pt-1" style={{ color: SW_GRAY }}>{String(n).padStart(2, '0')}</p>
      <h4 className="font-medium sm:col-span-4">{title}</h4>
      <div className="sm:col-span-7 leading-relaxed" style={{ color: SW_GRAY }}>{children}</div>
    </div>
  );
}

/* ==================================================================== */
/*  MAIN PAGE                                                            */
/* ==================================================================== */
export default function RachealPopoolaMentorship() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SW_BG, color: SW_INK }}>

      {/* ============================= HERO ============================= */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <Link href="/#mentorship" className="inline-flex items-center transition-colors hover:opacity-60" style={{ color: SW_GRAY }}>
              <Icon path={ICONS.arrowLeft} className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </div>

          <p className="sw-label mb-6" style={{ color: SW_GRAY }}>Mentorship &middot; Racheal Popoola</p>
          <h1 className="sw-display text-4xl md:text-6xl mb-8">
            A Strategist&apos;s Portfolio That Shows the Thinking
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: SW_GRAY }}>
            I mentored Racheal Popoola, a brand storyteller and creative strategist, through creating a personal
            portfolio website. Racheal&apos;s best work is strategy and results, not visuals, so together we built a
            site that makes thinking and outcomes easy to see.
          </p>

          <div className="mb-14">
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="sw-btn sw-btn-primary">
              Visit Racheal&apos;s Portfolio
              <Icon path={ICONS.externalLink} className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-10 text-sm">
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>My Role</span>
              <span className="font-medium">Mentor</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Mentee</span>
              <span className="font-medium">Racheal Popoola</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>When</span>
              <span className="font-medium">October 2026</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Stack</span>
              <span className="font-medium">HTML · CSS · JavaScript · Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero browser mockup: Racheal's live homepage */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <BrowserFrame url={SITE_HOST} label="Racheal's Portfolio: The Entrance Hall">
            <img
              src="/images/racheal-popoola/hero.jpg"
              alt="Racheal Popoola's portfolio homepage: the name set large beside a framed Studio Faláyè prospectus, like a gallery entrance"
              className="w-full h-auto"
            />
          </BrowserFrame>
        </div>
      </section>

      {/* ============================= MENTEE & ROLE ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-px md:grid-cols-2" style={{ backgroundColor: SW_LINE }}>
          <div className="p-8" style={{ backgroundColor: SW_CARD }}>
            <p className="sw-label mb-3" style={{ color: SW_GRAY }}>The Mentee</p>
            <p className="leading-relaxed" style={{ color: SW_INK }}>
              Racheal Popoola is a brand storyteller and creative strategist with a B.Sc. in Mass Communication from
              the University of Lagos (2026), working across strategy, communications, marketing, content creation
              and videography.
            </p>
          </div>
          <div className="p-8" style={{ backgroundColor: SW_CARD }}>
            <p className="sw-label mb-3" style={{ color: SW_GRAY }}>My Role</p>
            <p className="leading-relaxed" style={{ color: SW_INK }}>
              I guided Racheal&apos;s positioning, the site&apos;s structure and the content decisions, gathered and
              shaped the material, and reviewed every iteration until launch. The work on show is Racheal&apos;s.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= THE CHALLENGE ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <SectionEyebrow>The Challenge</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-6">Great Work, Locked in Documents</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center mb-16" style={{ color: SW_GRAY }}>
            A typical portfolio is built for visual work. Racheal&apos;s strongest work is strategy, communications
            and results, and most of it lived in PDFs, slide decks and spreadsheets.
          </p>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-3" style={{ backgroundColor: SW_LINE }}>
            {[
              { icon: ICONS.document, title: 'Show the Thinking', body: 'The portfolio had to make strategy and outcomes visible, not just finished visuals.' },
              { icon: ICONS.eye, title: 'Clear at a Glance', body: 'A visitor had to grasp who Racheal is and what Racheal delivers within seconds.' },
              { icon: ICONS.lock, title: 'Protect the Client', body: 'Some of the strongest documents were confidential client material that couldn’t simply be shared.' },
            ].map((c) => (
              <div key={c.title} className="flex flex-col gap-3 p-6" style={{ backgroundColor: SW_CARD }}>
                <div className="flex h-9 w-9 items-center justify-center border" style={{ borderColor: SW_LINE }}>
                  <Icon path={c.icon} className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-medium">{c.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: SW_GRAY }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= THE CONCEPT ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>The Concept</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-6">A Gallery, Monochrome First</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12" style={{ color: SW_GRAY }}>
            We framed the site as a museum: work hung on walls with captions, so documents and results read as
            exhibits. Light mode only, set in Inter Tight, Instrument Serif and JetBrains Mono.
          </p>
          <div className="mb-14">
            <Flow
              steps={[
                { title: 'Entrance Hall', sub: 'The hero introduces Racheal' },
                { title: 'East Wing', sub: 'Brand projects' },
                { title: 'West Wing', sub: 'Personal projects' },
                { title: 'Wall Labels', sub: 'Captions on every piece' },
                { title: 'Framed Work', sub: 'Each piece hung like an exhibit' },
              ]}
            />
          </div>
          <BrowserFrame url={SITE_HOST} label="Two Wings: Brand and Personal Projects">
            <img
              src="/images/racheal-popoola/gallery-wings.jpg"
              alt="The two gallery wings, Brand projects and Personal projects, above the East wing with the La Maison Douillet case"
              className="w-full h-auto"
              loading="lazy"
            />
          </BrowserFrame>
        </div>
      </section>

      {/* ============================= MENTORSHIP DECISIONS ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>My Approach</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-6">Eight Decisions I Guided</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center mb-16" style={{ color: SW_GRAY }}>
            My job was to help Racheal make the right calls about what to show and how. These are the decisions
            that shaped the site.
          </p>

          <div className="space-y-px mb-20" style={{ backgroundColor: SW_LINE }}>
            <Decision n={1} title="Lead with outcomes">
              Results come first. For La Maison Douillet, Instagram grew from about 3,000 to 10,000+ followers. For the
              Studio Faláyè Academy launch, the target of 10 was exceeded and 45% converted.
            </Decision>
            <Decision n={2} title="Tell each case as a story">
              Every case study follows a visual map from Problem to Idea, Approach, Execution and Result. I wrote it
              with Racheal from the real brief, such as positioning La Maison Douillet as a thought leader that turns
              leads into paying clients.
            </Decision>
            <Decision n={3} title="Show the thinking, not just the results">
              A Strategy blog gives each document type a fitting format: three reports rewritten as web articles, two
              decks as slideshows, and a content-calendar spreadsheet rebuilt as an interactive board of 56 planned
              content slots across 6 channels.
            </Decision>
            <Decision n={4} title="Protect client work">
              Documents are read-only, rendered as images or rebuilt as web content. There are no download links,
              and the raw files are excluded from deployment.
            </Decision>
            <Decision n={5} title="Real proof over placeholders">
              Every placeholder was replaced with real work: Instagram and YouTube reels with real thumbnails, letters
              from the CEOs of La Maison Douillet and Rovust LLC, and a toolkit of the 14 tools Racheal uses.
            </Decision>
            <Decision n={6} title="Personal work counts">
              A West wing holds Racheal&apos;s mobile videography business, TNT Files, and personal content creation on
              YouTube and Instagram, alongside the client work.
            </Decision>
            <Decision n={7} title="Racheal’s own voice">
              The bio and About were rewritten from Racheal&apos;s own words: &ldquo;from a rough idea to something
              real&rdquo;.
            </Decision>
            <Decision n={8} title="Iterate in public">
              We worked in many short feedback rounds, each one redeployed live, so every review was of the real site.
            </Decision>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
              <BrowserFrame url={SITE_HOST} label="01 · Outcome First">
                <img
                  src="/images/racheal-popoola/case-map.jpg"
                  alt="La Maison Douillet case study opening with 3,000 → 10,000+ Instagram followers, above the map from Problem to Result"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </BrowserFrame>
              <BrowserFrame url={SITE_HOST} label="02 · The Case as a Story">
                <img
                  src="/images/racheal-popoola/case-story.jpg"
                  alt="The case map's five steps followed by the written problem, idea and approach"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </BrowserFrame>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
              <BrowserFrame url={SITE_HOST} label="03 · The Strategy Blog">
                <img
                  src="/images/racheal-popoola/strategy-blog.jpg"
                  alt="The Strategy blog: Strategy, on paper. Document cards for research, an audit and the 56-slot content calendar"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </BrowserFrame>
              <BrowserFrame url={SITE_HOST} label="03 · Spreadsheet Rebuilt as a Board">
                <img
                  src="/images/racheal-popoola/calendar-board.jpg"
                  alt="The interactive content calendar: 56 content slots across 6 channels, filterable by channel"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= WHAT WE SHIPPED ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>What We Shipped</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-16">Live, and Racheal&apos;s Own</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-5 items-center">
            <div className="md:col-span-3">
              <ul className="space-y-3 mb-10">
                {[
                  'A museum-style gallery with an entrance hall and two wings',
                  'Brand case studies told as maps from problem to result',
                  'A Strategy blog: 3 articles, 2 slideshows and an interactive 56-slot calendar board',
                  'Read-only client documents, with no downloads and no raw files deployed',
                  'Real reels, CEO letters and a 14-tool toolkit in place of placeholders',
                  'A West wing for videography and personal content',
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1 w-1 flex-shrink-0" style={{ backgroundColor: SW_INK }} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="sw-btn sw-btn-primary">
                Visit Racheal&apos;s Portfolio
                <Icon path={ICONS.externalLink} className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="md:col-span-2">
              <div className="max-w-[260px] mx-auto overflow-hidden border-4 rounded-[2rem]" style={{ borderColor: SW_INK }}>
                <img
                  src="/images/racheal-popoola/phone.jpg"
                  alt="Racheal Popoola's portfolio on a phone: the name, intro and See projects button"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="sw-label mt-4 text-center" style={{ color: SW_GRAY }}>On a Phone</p>
            </div>
          </div>

          <div className="text-center mt-20">
            <Link href="/#mentorship" className="sw-btn sw-btn-primary inline-flex">
              <Icon path={ICONS.arrowLeft} className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
