'use client';

import Link from 'next/link';
import { useState } from 'react';

const SW_BG = '#FAFAF8';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

export default function DesignLab() {
  const [selectedImage, setSelectedImage] = useState<{ title: string; category: string; description: string; image: string } | null>(null);

  const uiDesigns = [
    { title: 'BAANDI Creative Platform', category: 'UI/UX Design', description: 'Creative platform connecting artists and music lovers with immersive experiences.', image: '/images/dribbble-post.jpg' },
    { title: 'ZenPay Global Payroll', category: 'Product Design', description: 'Comprehensive payroll solution for global teams with advanced compliance features.', image: '/images/zenPay.jpg' },
    { title: 'LEX Legal Services', category: 'Web Design', description: 'Professional law firm website with modern design and client-focused experience.', image: '/images/lex-landing.jpg' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: SW_BG, color: SW_INK }}>
      {/* Hero Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="sw-label mb-6" style={{ color: SW_GRAY }}>03 / Design Lab</p>
          <h1 className="sw-display text-6xl lg:text-8xl mb-8">Design Lab</h1>
          <p className="text-xl max-w-3xl" style={{ color: SW_GRAY }}>
            A research publication of UI explorations and the small interaction details that make digital
            products feel alive, the work that doesn&apos;t always fit inside a full case study.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="sw-display text-4xl lg:text-5xl mb-12">Articles</h2>

          <Link href="/design-lab/ai-design-system" className="group grid grid-cols-1 md:grid-cols-12 gap-10 items-center pb-12 border-b" style={{ borderColor: SW_LINE }}>
            <div className="md:col-span-5">
              <div className="relative h-56 md:h-64 overflow-hidden" style={{ backgroundColor: SW_INK }}>
                <div className="absolute inset-0 opacity-[0.15]" style={{
                  backgroundImage: `linear-gradient(${SW_BG} 1px, transparent 1px), linear-gradient(90deg, ${SW_BG} 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                }} />
                <p className="absolute bottom-6 left-6 sw-serif text-2xl italic" style={{ color: SW_BG }}>Fig. 01</p>
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="sw-label mb-4" style={{ color: SW_GRAY }}>Research &middot; Jul 2026 &middot; 6 min read</p>
              <h3 className="text-3xl font-medium mb-4 tracking-tight group-hover:opacity-60 transition-opacity duration-300">
                Can AI Build a Production-Ready Design System?
              </h3>
              <p className="leading-relaxed mb-6 max-w-xl" style={{ color: SW_GRAY }}>
                I challenged Figma Make to generate an enterprise design system inspired by Linear, then spent
                an afternoon figuring out exactly where it held up, and where it didn&apos;t.
              </p>
              <span className="inline-flex items-center gap-2 font-medium">
                <span className="border-b border-current pb-0.5">Read Article</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* UI Designs Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="sw-display text-4xl lg:text-5xl mb-6">UI Designs</h2>
          <p className="text-lg max-w-2xl mb-16" style={{ color: SW_GRAY }}>
            Additional projects and collaborations that showcase my diverse skills
            in product design and fullstack development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: SW_LINE }}>
            {uiDesigns.map((project, index) => (
              <div key={index} style={{ backgroundColor: SW_BG }}>
                {/* Project Image */}
                <div
                  className="relative h-56 overflow-hidden cursor-pointer group/image"
                  onClick={() => setSelectedImage(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/image: transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="bg-white p-3">
                      <svg className="w-5 h-5" fill="none" stroke={SW_INK} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="sw-label mb-3" style={{ color: SW_GRAY }}>{project.category}</p>
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: SW_GRAY }}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro Interactions Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="sw-display text-4xl lg:text-5xl mb-16">Micro Interactions</h2>

          {/* Main Interaction Process Video */}
          <div className="mb-16">
            <div className="mx-auto max-w-4xl border" style={{ borderColor: SW_LINE }}>
              <div className="relative aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1114935097?autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&controls=0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Design Interaction Process"
                  className="w-full h-full"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-medium mb-4">
                  Inside Out 2: Interaction Design Concept
                </h3>
                <p className="leading-relaxed mb-6" style={{ color: SW_GRAY }}>
                  A creative interaction design concept inspired by the beloved characters from Inside Out 2.
                  This experimental project explores how emotional storytelling can enhance user interfaces,
                  using familiar characters to create more empathetic and engaging digital experiences.
                  The design demonstrates innovative ways to incorporate personality and emotional depth into user interactions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Interaction Design', 'Character-Based UI', 'Emotional Design', 'Creative Concept', 'Storytelling'].map((tag, idx) => (
                    <span key={idx} className="sw-label border px-3 py-1.5" style={{ borderColor: SW_LINE, color: SW_INK }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 text-center border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="sw-display text-4xl lg:text-5xl mb-6">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: SW_GRAY }}>
            Ready to discuss your next project? I&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="sw-btn sw-btn-primary inline-flex">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke={SW_INK} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div
              className="relative max-w-full max-h-full bg-black border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-center">
                  <p className="sw-label mb-2 text-white/70">{selectedImage.category}</p>
                  <h3 className="text-2xl font-medium text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sw-label text-gray-400">
              Click anywhere outside to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
