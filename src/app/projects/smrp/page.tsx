'use client';

import React from 'react';
import Link from 'next/link';

const SW_BG = '#FAFAF8';
const SW_CARD = '#FFFFFF';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

const SITE_URL = 'https://smrp-website-sable.vercel.app';
const SITE_HOST = 'smrp-website-sable.vercel.app';

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
  text: 'M4 6h16M4 12h16M4 18h7',
  image: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  phone: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  card: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  edit: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  layers: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  menu: 'M4 6h16M4 10h16M4 14h10M4 18h10',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
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
/*  Horizontal flow diagram (process, booking lifecycle)               */
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
/*  Before / after screenshot pair                                     */
/* ------------------------------------------------------------------ */
function BeforeAfter({ title, before, after, note }: {
  title: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  note: string;
}) {
  return (
    <div>
      <p className="font-medium text-center mb-6">{title}</p>
      <div className="grid gap-6 md:grid-cols-2 items-start">
        {[{ tag: 'Before', ...before }, { tag: 'After', ...after }].map((shot) => (
          <div key={shot.tag} className="border p-4" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
            <p className="sw-label mb-3 text-center" style={{ color: SW_GRAY }}>{shot.tag}</p>
            <div className="overflow-hidden border" style={{ borderColor: SW_LINE }}>
              <img src={shot.src} alt={shot.alt} className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center text-sm max-w-2xl mx-auto" style={{ color: SW_GRAY }}>{note}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Numbered step in the booking journey                               */
/* ------------------------------------------------------------------ */
function StepHeading({ n, title }: { n: number; title: string }) {
  return (
    <div className="text-center mb-4">
      <p className="sw-label mb-2" style={{ color: SW_GRAY }}>Step {String(n).padStart(2, '0')}</p>
      <h3 className="sw-display text-2xl md:text-3xl">{title}</h3>
    </div>
  );
}

function JourneyStep({ n, title, body, src, alt, url, flip = false, narrow = false }: {
  n: number;
  title: string;
  body: string;
  src: string;
  alt: string;
  url: string;
  flip?: boolean;
  narrow?: boolean;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-5 items-center">
      <div className={`lg:col-span-2 ${flip ? 'lg:order-2' : ''}`}>
        <p className="sw-label mb-2" style={{ color: SW_GRAY }}>Step {String(n).padStart(2, '0')}</p>
        <h3 className="sw-display text-2xl md:text-3xl mb-4">{title}</h3>
        <p className="leading-relaxed" style={{ color: SW_GRAY }}>{body}</p>
      </div>
      <div className={`lg:col-span-3 ${flip ? 'lg:order-1' : ''} ${narrow ? 'max-w-lg w-full mx-auto' : ''}`}>
        <BrowserFrame url={url}>
          <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
        </BrowserFrame>
      </div>
    </div>
  );
}

/* ==================================================================== */
/*  MAIN PAGE                                                            */
/* ==================================================================== */
export default function SmrpCaseStudy() {
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

          <div className="mx-auto mb-10 inline-flex items-center justify-center border px-6 py-2" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
            <img
              src="/images/smrp/smrp-logo.jpg"
              alt="SMRP Resort logo: a kayaker in front of a rising sun over a blue and green river wave"
              className="h-24 w-auto object-contain"
            />
          </div>

          <p className="sw-label mb-6" style={{ color: SW_GRAY }}>SMRP Resort &middot; San Miguel River Park</p>
          <h1 className="sw-display text-4xl md:text-6xl mb-8">
            From Phone-Call Bookings to Online Booking and Payment
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: SW_GRAY }}>
            Guests at a riverside glamping and adventure resort in Catanduanes, Philippines, had to call or message
            to book, and nothing could be paid online. I led the design of a new website and booking platform: live
            availability, PayMongo checkout with GCash, Maya, QR Ph and cards, and inventory rules that can&apos;t
            double-book.
          </p>

          <div className="mb-14">
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="sw-btn sw-btn-primary">
              Visit the Live Site
              <Icon path={ICONS.externalLink} className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-10 text-sm">
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Role</span>
              <span className="font-medium">Product Designer</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Client</span>
              <span className="font-medium">Leo Torrente, Owner (Freelance)</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Timeline</span>
              <span className="font-medium">Sep to Oct 2026 · 44 commits</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="sw-label mb-1" style={{ color: SW_GRAY }}>Built With</span>
              <span className="font-medium">Next.js · Payload CMS · PayMongo · Claude Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero browser mockup: real final homepage */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <BrowserFrame url={SITE_HOST} label="Final Homepage">
            <img
              src="/images/smrp/new-home.jpg"
              alt="SMRP Resort homepage: Your River Escape Awaits, with a date and guest search over a photo of kayakers on the river"
              className="w-full h-auto"
            />
          </BrowserFrame>
        </div>
      </section>

      {/* ============================= MY ROLE ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>My Role</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-8">Design Lead on an AI-Assisted Build</h2>
          <p className="text-lg leading-relaxed text-center" style={{ color: SW_INK }}>
            I owned the product and design decisions, art direction, content, photo selection and editing, quality
            review and client communication. The platform was built with AI-assisted development in Claude Code, with
            me directing the implementation. The project started on 3 September 2026; the main build and iteration
            ran from late September to 9 October.
          </p>
        </div>
      </section>

      {/* ============================= THE PROBLEM ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <SectionEyebrow>The Challenge</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-6">A Real Resort Behind a Placeholder Site</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center mb-16" style={{ color: SW_GRAY }}>
            The old WordPress site wasn&apos;t helping the resort sell. Its booking form came from a template plugin,
            so guests still called or messaged to book, and the resort couldn&apos;t take payment online.
          </p>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 mb-16" style={{ backgroundColor: SW_LINE }}>
            {[
              { icon: ICONS.text, title: 'Placeholder Copy', body: 'The homepage, restaurant and menu headers, and even the footer were still in lorem-style filler text.' },
              { icon: ICONS.image, title: 'Generic Imagery', body: 'Every dish on the menu used the same restaurant logo, and the footer’s Instagram grid showed stock photos of other resorts.' },
              { icon: ICONS.phone, title: 'Booking by Phone', body: 'Guests had to call or message to reserve a room or an adventure.' },
              { icon: ICONS.card, title: 'No Online Payment', body: 'Nothing could be paid in advance, so every reservation depended on a follow-up conversation.' },
              { icon: ICONS.layers, title: 'Brochures as Pages', body: 'Room pages were the printed brochure dropped in as an image, so rates and details couldn’t be read, searched or updated.' },
              { icon: ICONS.edit, title: 'Developer-Dependent', body: 'Staff needed to change rooms, menu, prices and photos themselves, without calling a developer.' },
            ].map((p) => (
              <div key={p.title} className="flex flex-col gap-3 p-6" style={{ backgroundColor: SW_CARD }}>
                <div className="flex h-9 w-9 items-center justify-center border" style={{ borderColor: SW_LINE }}>
                  <Icon path={p.icon} className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-medium">{p.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: SW_GRAY }}>{p.body}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <BeforeAfter
              title="Homepage"
              before={{ src: '/images/smrp/old-home.jpg', alt: 'Old SMRP homepage: Welcome to SMRP, with a lorem ipsum subtitle' }}
              after={{ src: '/images/smrp/new-home.jpg', alt: 'New SMRP homepage: Your River Escape Awaits' }}
              note="Same river, same kayakers. The old headline was followed by Latin filler; the new one says where you are and what you can do there."
            />
          </div>
        </div>
      </section>

      {/* ============================= THE APPROACH ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>My Approach</SectionEyebrow>
          <p className="text-center text-sm mb-3" style={{ color: SW_GRAY }}>The brief I worked from:</p>
          <h2 className="sw-serif italic text-2xl md:text-3xl text-center leading-snug mb-12 max-w-2xl mx-auto">
            Show the real resort, let guests book and pay without a phone call, and give staff full control of the
            content.
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-10" style={{ color: SW_GRAY }}>
            I started from what a guest needs to decide: what the rooms look like, what they cost on their dates,
            and whether they&apos;re free. Then I worked out what staff need to keep that information correct. That
            set the order of the build.
          </p>
          <div className="mb-16">
            <Flow
              steps={[
                { title: 'Content Model', sub: 'Every area editable in Payload CMS' },
                { title: 'Visual System', sub: 'Palette, type, components, real photos' },
                { title: 'Booking & Payment', sub: 'Inventory, holds, PayMongo' },
                { title: 'Client Iteration', sub: 'New logo, retired rooms, legibility' },
              ]}
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="sw-label mb-3" style={{ color: SW_GRAY }}>Visual Direction</p>
              <p className="mb-4" style={{ color: SW_INK }}>
                I restyled the site away from the editorial template it started from: a navy and sky-blue palette that
                echoes the river, Playfair Display headings with Plus Jakarta Sans body text, and solid pill buttons. A
                river-themed loading animation and a parallax hero give the homepage a sense of place.
              </p>
              <p style={{ color: SW_GRAY }}>
                Because rooms, adventures and food each work differently, &ldquo;Book now&rdquo; opens a short
                choice (Accommodations, Adventures or Order Food) so nobody lands in the wrong flow.
              </p>
            </div>
            <BrowserFrame url={SITE_HOST} label="The Book Now Menu">
              <img
                src="/images/smrp/new-book-menu.jpg"
                alt="The Book now dropdown open, offering Accommodations, Adventures and Order Food"
                className="w-full h-auto"
                loading="lazy"
              />
            </BrowserFrame>
          </div>
        </div>
      </section>

      {/* ============================= BOOKING SYSTEM ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>Booking &amp; Payment</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-6">From a Phone Call to a Paid Booking</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center mb-6" style={{ color: SW_GRAY }}>
            This was the heart of the project. Before, every reservation started with a call or a message and nothing
            was paid in advance. Now a guest can find a free room, see the exact price, and pay with a card, GCash,
            Maya or QR Ph in one sitting.
          </p>
          <p className="text-center max-w-2xl mx-auto mb-20" style={{ color: SW_GRAY }}>
            A double-booked room hurts a small resort more than having no online booking at all, so every step below
            was designed around one rule: a booking that looks confirmed has to be.
          </p>

          <div className="space-y-24">
            <JourneyStep
              n={1}
              title="Search by Date"
              body="The search on the homepage takes dates and guests first. Results mark every room Available, Booked out or “Max N guests”, so a guest learns about a mismatch before filling in anything."
              src="/images/smrp/new-home.jpg"
              alt="Homepage search bar with check-in, check-out and guest fields over the river hero"
              url={SITE_HOST}
            />
            <JourneyStep
              n={2}
              title="Compare the Room, Price Included"
              body="Every room page shows the full weekday, weekend and holiday rates, the extra-guest fee, check-in times and what’s included. Online bookings are charged at the weekday rate and any difference is settled at the front desk, which keeps checkout to one clear price without hiding the full rate table."
              src="/images/smrp/new-room-rates.jpg"
              alt="Family Dome page: weekday, weekend and holiday rates, inclusions, and the Check Availability form"
              url={`${SITE_HOST}/accommodations/family-dome`}
              flip
            />
            <JourneyStep
              n={3}
              title="See What’s Free"
              body="The room calendar crosses out past and booked-out nights. Behind it is real inventory: each room has a “units available” count (the Junior Cabin has two, the others one), a night is booked out only when every unit is taken, and check-out day stays free for the next guest."
              src="/images/smrp/new-availability.jpg"
              alt="Family Dome availability calendar for October 2026, with past and booked-out nights crossed out"
              url={`${SITE_HOST}/accommodations/family-dome`}
              narrow
            />
            <JourneyStep
              n={4}
              title="Book With a Live Total"
              body="The booking form sits beside the room details and updates the total as dates change (here, 1 night × ₱1,800), so the guest knows exactly what they’ll pay before they leave the page."
              src="/images/smrp/booking-form.jpg"
              alt="Family Dome page with the booking form filled in, showing 1 night × ₱1,800 above the Book Now button"
              url={`${SITE_HOST}/accommodations/family-dome`}
              flip
            />

            <div>
              <StepHeading n={5} title="Stopped Before Checkout, Not At It" />
              <p className="text-center max-w-2xl mx-auto mb-10" style={{ color: SW_GRAY }}>
                Problems surface in the form, in plain language, instead of after a guest has paid. The guest count is
                capped at the room’s maximum, and clashing dates are named one by one with the button disabled.
              </p>
              <div className="grid gap-8 md:grid-cols-2 items-start">
                <BrowserFrame url={`${SITE_HOST}/accommodations/family-dome`} label="Guest Count Capped at 7">
                  <img src="/images/smrp/booking-guest-cap.jpg" alt="Family Dome booking form with the guest field showing: value must be less than or equal to 7" className="w-full h-auto" loading="lazy" />
                </BrowserFrame>
                <BrowserFrame url={`${SITE_HOST}/accommodations/family-dome`} label="Booked-Out Nights Named">
                  <img src="/images/smrp/booking-fully-booked.jpg" alt="Family Dome booking form showing: Fully booked on Oct 22 to Oct 27, please choose different dates, with the button reading Unavailable for these dates" className="w-full h-auto" loading="lazy" />
                </BrowserFrame>
              </div>
            </div>

            <div>
              <StepHeading n={6} title="Pay the Way Guests Already Pay" />
              <p className="text-center max-w-2xl mx-auto mb-10" style={{ color: SW_GRAY }}>
                Payment hands off to PayMongo checkout with the booking and total carried over. Alongside cards it
                accepts the local options GCash, Maya and QR Ph, so guests don&apos;t need a credit card to book.
              </p>
              <div className="grid gap-8 md:grid-cols-2 items-start">
                <BrowserFrame url="checkout.paymongo.com" label="Booking and Total Carried Over">
                  <img src="/images/smrp/paymongo-details.jpg" alt="PayMongo checkout for Family Dome (8 nights), ₱14,400, with customer information fields" className="w-full h-auto" loading="lazy" />
                </BrowserFrame>
                <BrowserFrame url="checkout.paymongo.com" label="Card, GCash, Maya or QR Ph">
                  <img src="/images/smrp/paymongo-checkout.jpg" alt="PayMongo payment methods: QR Ph, card, GCash and Maya" className="w-full h-auto" loading="lazy" />
                </BrowserFrame>
              </div>
            </div>

            <div>
              <StepHeading n={7} title="Hold, Then Confirm or Release" />
              <p className="text-center max-w-2xl mx-auto mb-10" style={{ color: SW_GRAY }}>
                The part guests never see, and the part that took the most thought.
              </p>
              <div className="mb-12">
                <Flow
                  steps={[
                    { title: 'Save & Re-check', sub: 'Availability checked again right after saving' },
                    { title: 'Hold 60 Minutes', sub: 'Room held while the guest pays' },
                    { title: 'Ask PayMongo', sub: 'Each expired hold is checked' },
                    { title: 'Confirm or Release', sub: 'Paid: confirmed. Unpaid: link closed, room freed' },
                  ]}
                />
              </div>
              <div className="grid gap-px md:grid-cols-2" style={{ backgroundColor: SW_LINE }}>
                {[
                  { title: 'Overbooking Protection', body: 'Availability is checked again right after a booking is saved, so two guests paying at the same moment can’t both get the last room. Bookings staff add by hand follow the same rule.' },
                  { title: 'Why Not Just a Timer?', body: 'PayMongo checkout links don’t expire on their own. Releasing a hold on a timer alone could cancel a booking that had just been paid, so the system asks PayMongo about each expired hold before deciding.' },
                  { title: 'Paid Holds Are Confirmed', body: 'If the guest paid, even at the last minute, the booking is confirmed and the room stays theirs.' },
                  { title: 'Unpaid Holds Are Released', body: 'If not, the payment link is closed so it can’t be paid later, and the room goes back on sale.' },
                ].map((r) => (
                  <div key={r.title} className="p-6" style={{ backgroundColor: SW_CARD }}>
                    <h4 className="font-medium mb-2">{r.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: SW_GRAY }}>{r.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 grid gap-10 lg:grid-cols-5 items-center">
            <div className="lg:col-span-2">
              <p className="sw-label mb-3" style={{ color: SW_GRAY }}>Adventures Book the Same Way</p>
              <p className="mb-4" style={{ color: SW_INK }}>
                Kayak, river tubing, stand-up paddle board and ATV run on the same booking and payment flow, with
                package options and a live total: SUP for 1 hour (₱300) or 2 hours (₱600) per board, tubing at ₱250
                per tube.
              </p>
              <p style={{ color: SW_GRAY }}>
                Practical details (times, minimum age, start and end points, gear, guides) sit next to the form, so
                guests can decide without asking first.
              </p>
            </div>
            <div className="lg:col-span-3">
              <BrowserFrame url={`${SITE_HOST}/adventures/river-tubing`} label="Book This Adventure">
                <img src="/images/smrp/adventure-booking.jpg" alt="River tubing details beside the Book This Adventure form: package, date, quantity and a 1 × ₱250 total" className="w-full h-auto" loading="lazy" />
              </BrowserFrame>
            </div>
          </div>

          <div className="mt-24">
            <BeforeAfter
              title="Room Page"
              before={{ src: '/images/smrp/old-room-calendar.jpg', alt: 'Old Deluxe Yurt page with a template booking calendar and truncated details' }}
              after={{ src: '/images/smrp/new-room-rates.jpg', alt: 'New Family Dome page with weekday, weekend and holiday rates, inclusions and a Check Availability form' }}
              note="The 5 rooms (Family, Deluxe and Superior Domes; Junior and Couple’s Cabins) were rebuilt from the official brochures, with photo galleries, full rate tables and amenities as real text, and booking built into every page."
            />
          </div>
        </div>
      </section>

      {/* ============================= KEY DECISIONS ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <SectionEyebrow>Key Design Decisions</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-16">Five Calls, and What Each One Cost</h2>

          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 mb-20" style={{ backgroundColor: SW_LINE }}>
            {[
              { icon: ICONS.edit, title: 'Everything Editable, Not Some of It', body: 'Modelling every content type up front took longer than hard-coding pages. I took that trade on purpose: prices, menus and offerings change, and every hard-coded value becomes a call to a developer.' },
              { icon: ICONS.star, title: 'Only Real Reviews', body: 'The reviews section shows only reviews staff approve. I chose not to publish AI-generated testimonials, because fake reviews would mislead the guests the resort wants to welcome. The cost is a thin section at launch, so it invites real reviews instead.' },
              { icon: ICONS.shield, title: 'Protect the Client’s Logo', body: 'The new logo’s blue lettering disappears on navy. Rather than recolour it, I set it on a white card on dark backgrounds, through one shared logo component. The favicon uses the sun-and-kayaker emblem, which stays readable when small.' },
              { icon: ICONS.image, title: 'Show Adventure Photos Whole', body: 'Cropping mixed-shape photos to fill a frame cut off the people kayaking. The carousel shows each photo whole on a blurred fill: less edge-to-edge, but honest. It supports swipe, arrows, keyboard and thumbnails.' },
              { icon: ICONS.menu, title: 'A Menu Built for Its Photos', body: 'Photo cards for dishes with pictures from the restaurant’s product shoot, dotted-leader price lists for the rest, and a sticky category bar so a guest on a phone never loses their place.' },
            ].map((d) => (
              <div key={d.title} className="flex flex-col gap-3 p-6" style={{ backgroundColor: SW_CARD }}>
                <div className="flex h-9 w-9 items-center justify-center border" style={{ borderColor: SW_LINE }}>
                  <Icon path={d.icon} className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-medium">{d.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: SW_GRAY }}>{d.body}</p>
              </div>
            ))}
            <div className="p-6 flex flex-col items-center justify-center text-center gap-3" style={{ backgroundColor: SW_CARD }}>
              <p className="sw-label" style={{ color: SW_GRAY }}>Logo on Navy</p>
              <img src="/images/smrp/new-logo-on-navy.jpg" alt="The SMRP Resort logo on a white card against the navy footer" className="w-full h-auto border" style={{ borderColor: SW_LINE }} loading="lazy" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-20">
            <BeforeAfter
              title="Restaurant Menu"
              before={{ src: '/images/smrp/old-menu-items.jpg', alt: 'Old menu: every dish card shows the same Leo’s Grill logo image' }}
              after={{ src: '/images/smrp/new-menu.jpg', alt: 'New menu: silog breakfast plates photographed individually, with descriptions, prices and Add buttons under a sticky category bar' }}
              note="Before, every dish shared one placeholder logo. After, each dish has its own photo, a one-line description, and an Add button for ordering to a room, a table or for pickup."
            />
            <BeforeAfter
              title="Footer"
              before={{ src: '/images/smrp/old-footer.jpg', alt: 'Old footer with lorem ipsum text, stock Instagram photos of other resorts and a 2023 copyright' }}
              after={{ src: '/images/smrp/new-footer.jpg', alt: 'New footer with a river-wave edge, grouped links, click-to-call, text, email and directions' }}
              note="Filler text and other resorts’ photos replaced with grouped links and every way to reach the resort: click-to-call, text (SMS), email and Google Maps directions."
            />
          </div>
        </div>
      </section>

      {/* ============================= BEYOND ROOMS ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>Beyond Rooms</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-6">Adventures, Food and Everything Else</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center mb-14" style={{ color: SW_GRAY }}>
            Rooms are only part of a stay. The same booking and payment foundation runs the rest of the resort.
          </p>

          <div className="mb-14">
            <BrowserFrame url={`${SITE_HOST}/adventures/river-tubing`} label="Adventure Photo Carousel">
              <img
                src="/images/smrp/new-adventure.jpg"
                alt="River tubing adventure page: a group photo shown whole on a blurred fill, with thumbnails below"
                className="w-full h-auto"
                loading="lazy"
              />
            </BrowserFrame>
          </div>

          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 mb-14" style={{ backgroundColor: SW_LINE }}>
            {[
              { title: 'Zip Line, Coming Soon', body: 'Listed on the adventures page as “Coming Soon”, so guests know it’s on the way without being able to book it early.' },
              { title: 'Food Ordering', body: 'Guests add dishes from the menu and order to their dome or cabin, to their table, or for pickup. Room service carries a 10% charge, shown up front on every room page.' },
              { title: 'Table Reservations', body: 'A short “Reserve a Table” form (party size, date, time and contact details) that staff confirm by email or phone.' },
              { title: 'Events & Tickets', body: 'Events the resort hosts, with tickets managed from the CMS.' },
              { title: 'Tour Packages', body: 'Bundled packages listed alongside accommodations.' },
              { title: 'Real About & Amenities', body: 'An owner spotlight on the About page and a real Amenities page, using resort photos I enhanced myself in place of stock imagery.' },
            ].map((f) => (
              <div key={f.title} className="p-6" style={{ backgroundColor: SW_CARD }}>
                <h4 className="font-medium mb-2">{f.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: SW_GRAY }}>{f.body}</p>
              </div>
            ))}
          </div>

          <BrowserFrame url={`${SITE_HOST}/restaurant`} label="Restaurant Landing Page">
            <img
              src="/images/smrp/new-restaurant.jpg"
              alt="Restaurant page: Welcome to our Restaurant, with Order Food Online and Reservation buttons"
              className="w-full h-auto"
              loading="lazy"
            />
          </BrowserFrame>
        </div>
      </section>

      {/* ============================= CMS ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>Staff Control</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-6">A CMS the Resort Runs Itself</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-center mb-14" style={{ color: SW_GRAY }}>
            Rooms, adventures, menu items, amenities, reviews, contact details, the homepage hero and even the
            property rules are all edited in Payload CMS. No developer needed for a price change.
          </p>
          <div className="mb-10">
            <BrowserFrame url={`${SITE_HOST}/admin`} label="CMS Collections">
              <img
                src="/images/smrp/cms-dashboard.jpg"
                alt="Payload CMS dashboard listing collections: Accommodations, Bookings, Adventures, Menu Items, Food Orders, Reviews and more"
                className="w-full h-auto"
                loading="lazy"
              />
            </BrowserFrame>
          </div>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <BrowserFrame url={`${SITE_HOST}/admin/globals/site-settings`} label="Property Rules, Edited by Staff">
              <img
                src="/images/smrp/cms-property-rules.jpg"
                alt="Site Settings in the CMS: property rules such as check-in and pool hours, each an editable field"
                className="w-full h-auto"
                loading="lazy"
              />
            </BrowserFrame>
            <BrowserFrame url={`${SITE_HOST}/admin/collections/accommodations`} label="Retired Yurts, Kept on Record">
              <img
                src="/images/smrp/cms-accommodations.jpg"
                alt="Accommodations collection in the CMS: five current rooms plus three retired yurts kept for booking history"
                className="w-full h-auto"
                loading="lazy"
              />
            </BrowserFrame>
          </div>
        </div>
      </section>

      {/* ============================= CLIENT FEEDBACK ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>Responding to Client Feedback</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-14">Changes Without Breaking History</h2>
          <div className="grid gap-px md:grid-cols-3" style={{ backgroundColor: SW_LINE }}>
            {[
              { icon: ICONS.layers, title: 'Retired the Yurts', body: 'When the resort stopped offering yurts, I unpublished them rather than deleting them, so existing booking records stay intact.' },
              { icon: ICONS.shield, title: 'New Logo, Everywhere', body: 'Swapped in the client’s new SMRP Resort logo through the shared logo component, made a favicon from its emblem, and updated the contact details.' },
              { icon: ICONS.eye, title: 'Legible Heroes', body: 'Reworked hero images and overlays for legibility. On the Accommodations hero, white text stays above 8:1 contrast.' },
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

      {/* ============================= OUTCOME ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE, backgroundColor: SW_CARD }}>
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow>Outcome &amp; Next Steps</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-16">Live, With the Last Steps in View</h2>
          <div className="grid gap-8 md:grid-cols-2 mb-10">
            <div className="border-2 p-6" style={{ borderColor: SW_INK }}>
              <p className="mb-4 text-center font-bold">SHIPPED</p>
              <ul className="space-y-2.5 text-sm">
                {['Live at smrp-website-sable.vercel.app', 'Real content and real resort photos', 'Room and adventure booking with PayMongo checkout', 'Inventory rules and overbooking protection', 'Food ordering and table reservations', 'Every content area editable by staff'].map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="h-1 w-1 flex-shrink-0" style={{ backgroundColor: SW_INK }} />{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border p-6" style={{ borderColor: SW_LINE }}>
              <p className="mb-4 text-center font-bold" style={{ color: SW_GRAY }}>STILL TO DO</p>
              <ul className="space-y-2.5 text-sm">
                {['PayMongo live keys, pending the client’s verification (test mode today)', 'Connecting the custom domain', 'Booking confirmation emails'].map((s) => (
                  <li key={s} className="flex items-center gap-3" style={{ color: SW_GRAY }}>
                    <span className="h-1 w-1 flex-shrink-0" style={{ backgroundColor: SW_GRAY }} />{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs italic text-center" style={{ color: SW_GRAY }}>
            No booking or revenue results are claimed here: payments are still in test mode.
          </p>
        </div>
      </section>

      {/* ============================= REFLECTION ============================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>What I Learned</SectionEyebrow>
          <h2 className="sw-display text-3xl md:text-4xl text-center mb-10">The Edge Cases Were the Product</h2>
          <p className="text-lg leading-relaxed mb-16" style={{ color: SW_INK }}>
            The booking system was more product work than the page designs. A shared last room, a checkout link that
            never expires, a retired room type with past bookings attached: those decided whether the platform could
            be trusted. Directing AI-assisted development made that even clearer. The quality of the result followed
            the precision of my decisions and the care of my review, not the speed of the implementation.
          </p>

          <div className="grid gap-px sm:grid-cols-2 mb-16" style={{ backgroundColor: SW_LINE }}>
            {[
              { title: 'Rules before code', body: 'Every booking edge case needed a plain-language rule first. The rule was the design.' },
              { title: 'Direction is the craft', body: 'With AI doing the implementation, clear specs and careful review are what make the work good.' },
              { title: 'Honesty is a design choice', body: 'Real photos over stock, real reviews over generated ones, and an open list of what isn’t finished.' },
              { title: 'Design for whoever maintains it', body: 'The staff who update prices every season are users too. The CMS got the same care as the site.' },
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
