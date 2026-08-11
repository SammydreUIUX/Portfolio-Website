'use client';

import Link from 'next/link';

const FIGMA_MAKE_URL = 'https://www.figma.com/make/LF3Jc1mdRKunaKHgqgnqBL/Design-System-Documentation-Website?t=gMfx3DtkH9kRWGf5-1';

const SW_BG = '#FAFAF8';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

export default function AIDesignSystemArticle() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SW_BG, color: SW_INK }}>
      <article className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <div className="mb-10">
            <Link href="/design-lab" className="inline-flex items-center hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Design Lab
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="sw-label border px-3 py-1" style={{ borderColor: SW_LINE, color: SW_GRAY }}>Design Lab &middot; Article</span>
              <span className="sw-label" style={{ color: SW_GRAY }}>6 min read</span>
            </div>
            <h1 className="sw-display text-5xl lg:text-6xl mb-6">
              Can AI Build a Production-Ready Design System?
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: SW_GRAY }}>
              I challenged Figma Make to generate an enterprise design system inspired by Linear, then spent an
              afternoon figuring out exactly where it held up, and where it didn&apos;t.
            </p>
          </div>

          {/* Open live prototype */}
          <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 border p-6" style={{ borderColor: SW_LINE }}>
            <div className="flex-1">
              <p className="font-semibold mb-1">The AI-generated design system</p>
              <p className="text-sm" style={{ color: SW_GRAY }}>Explore the actual output from Figma Make, unedited, as generated.</p>
            </div>
            <a
              href={FIGMA_MAKE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sw-btn sw-btn-primary whitespace-nowrap"
            >
              Open Live Prototype
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Body */}
          <div className="space-y-10 text-lg leading-relaxed">
            <p>
              This wasn&apos;t about proving AI can replace designers. I don&apos;t think it can, not yet, maybe not ever in
              the way people fear. I wanted something more specific and more useful to me: a real answer to where the
              line currently sits. Where does AI actually reason like a designer, and where is it just very convincingly
              pattern-matching?
            </p>

            <section>
              <h2 className="text-2xl font-medium mb-4">Why I ran this experiment</h2>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                Every few weeks there&apos;s a new demo of an AI tool generating a full interface in seconds, and every
                time, the discourse splits into two camps: &ldquo;designers are obsolete&rdquo; and &ldquo;this is a
                toy.&rdquo; Neither felt true to me, and neither was based on anything I&apos;d actually tried myself.
              </p>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                So I picked the hardest version of the problem I could think of: not a landing page, not a single screen,
                but a <em>design system</em>{', '}
                the kind of foundational, opinionated, detail-obsessive work that takes senior designers weeks to
                get right, even at companies with unlimited resources. If AI could hold its own here, that would tell me
                something real.
              </p>
              <p style={{ color: SW_GRAY }}>
                I want to be upfront: this is one designer&apos;s experiment, not a benchmark. No user testing, no client,
                no rigorous methodology. Just me, a prompt, and a few hours of honest observation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">The prompt I gave Figma Make</h2>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                I tried to write the kind of brief I&apos;d actually hand a design intern: specific enough to be
                useful, open enough to see how the tool would fill in the gaps:
              </p>
              <blockquote className="border-l-4 pl-6 py-2 my-6 italic" style={{ borderColor: SW_INK, color: SW_INK }}>
                &ldquo;Design an enterprise B2B SaaS design system inspired by Linear&apos;s visual language: minimal,
                high-contrast, precise typography, restrained use of color, purposeful motion. Include color tokens for
                light and dark mode, a type scale, a spacing scale, and core components: buttons, inputs, tables, modals,
                navigation, a command palette, status badges, and empty states. The system should feel consistent,
                accessible, and built for a complex internal tool used by teams every day, not a marketing site.&rdquo;
              </blockquote>
              <p style={{ color: SW_GRAY }}>
                That last line mattered to me. Linear&apos;s whole design philosophy is downstream of it being a tool
                people live inside for eight hours a day. I wanted to see if the AI understood that distinction or just
                borrowed the aesthetic.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">What AI generated</h2>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                What came back was, honestly, more than I expected in the time it took. A token file. A full component
                set, not just a hero screen. Buttons in multiple states and variants. A data table. A settings layout. A
                command palette, Linear&apos;s signature interaction, recreated with reasonable fidelity. Dark
                mode that wasn&apos;t just an inverted color filter.
              </p>
              <p style={{ color: SW_GRAY }}>
                It also generated a rough page composition: a dashboard-style layout combining several of the components
                together, which is usually where a system reveals whether its parts were designed to work{' '}
                <em>together</em>{' '}
                or just designed to exist independently. That&apos;s normally the first place things fall apart. So
                that&apos;s where I looked first.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">What impressed me</h2>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                The token discipline was better than I expected. Color, spacing, and type were mostly pulled from a
                defined scale rather than invented per-component, which is the single most common way AI-generated UI
                falls apart. It understood, at least structurally, that a design system is a set of <em>rules</em>, not
                just a set of screens.
              </p>
              <p style={{ color: SW_GRAY }}>
                The restraint was also real. It didn&apos;t over-decorate. Borders were thin, shadows were subtle, color
                was mostly grayscale with a single accent, all correctly identified as core to Linear&apos;s
                language rather than incidental. And it moved fast enough that by the time I&apos;d normally still be
                setting up frames, I already had something to react to and critique. That shift, from blank canvas
                to critique mode, is genuinely valuable, independent of how good the output is.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">Where AI fell short</h2>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                The cracks showed up exactly where I expected: in the parts that require <em>judgment</em>, not pattern
                recognition.
              </p>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                Contrast was the first issue. Several text and icon combinations technically met the aesthetic but failed
                accessibility contrast ratios, the kind of thing that looks fine on a bright monitor in a demo and
                fails immediately in a real audit. The system had opinions about how things should look, but no real model
                of why those choices needed to hold up under constraints.
              </p>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                The density problem was next. Linear&apos;s interfaces work because every pixel of spacing in a dense
                table is a deliberate decision about scan-ability. The AI&apos;s table component was visually clean in
                isolation, but once populated with realistic data, the hierarchy fell apart: everything competed
                for the same visual weight.
              </p>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                And the component set had quiet redundancies: two button variants that served the same purpose with no
                clear rule for when to use which, empty states that were visually polished but interchangeable rather
                than tailored to their specific context. Nothing was <em>wrong</em>, exactly. It was all just slightly
                unreasoned: correct-looking answers without the underlying logic a designer would need to defend
                them in a critique.
              </p>
              <p style={{ color: SW_GRAY }}>
                Motion and interaction were the most obviously missing piece. Everything was static. Linear&apos;s feel
                comes as much from <em>how</em>{' '}
                things happen (the command palette&apos;s timing, the way a status updates) as from how they
                look at rest. AI gave me the frames. It didn&apos;t give me the feel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">How I refined the design</h2>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                Once I had something to react to, my job became editing rather than generating, which, it turns
                out, is a completely different skill than I expected it to be.
              </p>
              <p style={{ color: SW_GRAY }}>
                I rebuilt the token architecture so spacing and type actually cascaded from a single source instead of
                being close-enough approximations. I fixed the contrast failures by hand, one by one, because that&apos;s
                not something you can prompt your way out of; it requires actually checking. I redesigned the
                table component around real, messy data instead of the clean placeholder rows it had been generated
                against, which changed almost every spacing decision. I killed the redundant button variant and wrote
                down the rule for when to use the one that remained, because a system without that rule isn&apos;t really
                a system. And I added the interaction detail (the timing, the hover states, the small motion cues)
                that make an interface feel considered rather than assembled. None of this was glamorous work. It
                was the same unglamorous editing work design systems always require. AI just moved up my starting point.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">Final thoughts</h2>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                Figma Make didn&apos;t build a production-ready design system. But it built a very credible first draft
                of one, faster than I could have sketched the same scope by hand, and that&apos;s a genuinely
                different capability than what existed even a year ago.
              </p>
              <p className="mb-4" style={{ color: SW_GRAY }}>
                What it&apos;s good at is pattern replication with real structural discipline: tokens, consistency,
                restraint, breadth. What it can&apos;t do yet is reason about constraints it can&apos;t see in a prompt:
                accessibility failures, real data density, the specific rule a component needs to earn its place
                in a system. That&apos;s still design judgment. That&apos;s still the job.
              </p>
              <p style={{ color: SW_GRAY }}>
                The honest takeaway isn&apos;t &ldquo;AI replaces design systems work.&rdquo; It&apos;s that AI is now a
                legitimate first draft: a faster blank canvas, not a finished decision. Which, for a discipline
                that spends so much of its time starting from nothing, might be exactly the right kind of help.
              </p>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" style={{ borderColor: SW_LINE }}>
            <Link href="/design-lab" className="inline-flex items-center hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Design Lab
            </Link>
            <a
              href={FIGMA_MAKE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sw-btn sw-btn-secondary"
            >
              Open Live Prototype
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
