'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DesignLab() {
  const [selectedImage, setSelectedImage] = useState<{ title: string; category: string; description: string; image: string } | null>(null);

  const uiDesigns = [
    {
      title: 'BAANDI Creative Platform',
      category: 'UI/UX Design',
      description: 'Creative platform connecting artists and music lovers with immersive experiences.',
      image: '/images/dribbble-post.jpg'
    },
    {
      title: 'ZenPay Global Payroll',
      category: 'Product Design',
      description: 'Comprehensive payroll solution for global teams with advanced compliance features.',
      image: '/images/zenPay.jpg'
    },
    {
      title: 'LEX Legal Services',
      category: 'Web Design',
      description: 'Professional law firm website with modern design and client-focused experience.',
      image: '/images/lex-landing.jpg'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#131313' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#131313' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-righteous text-white mb-6">
              Design Lab
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-futura">
              A showcase of UI explorations and the small interaction details that make digital
              products feel alive &mdash; the work that doesn&apos;t always fit inside a full case study.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-righteous text-white mb-4">
              Articles
            </h2>
            <p className="text-lg text-gray-300 font-futura max-w-2xl mx-auto">
              Notes, experiments, and honest takes on design tools, written for other designers.
            </p>
          </div>

          <Link
            href="/design-lab/ai-design-system"
            className="group block max-w-3xl mx-auto rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-futura text-gray-400">
              <span className="px-3 py-1 rounded-full border border-gray-700 text-gray-300">Article</span>
              <span>&middot;</span>
              <span>6 min read</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-righteous text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              Can AI Build a Production-Ready Design System?
            </h3>
            <p className="text-gray-300 font-futura leading-relaxed mb-6">
              I challenged Figma Make to generate an enterprise design system inspired by Linear &mdash; then spent
              an afternoon figuring out exactly where it held up, and where it didn&apos;t.
            </p>
            <span className="inline-flex items-center text-white font-futura font-semibold">
              Read Article
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* UI Designs Section */}
      <section className="py-20" style={{ backgroundColor: '#131313' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-righteous text-white mb-4">
              UI Designs
            </h2>
            <p className="text-lg text-gray-300 font-futura max-w-2xl mx-auto">
              Additional projects and collaborations that showcase my diverse skills
              in product design and fullstack development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiDesigns.map((project, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Project Image */}
                <div
                  className="relative h-48 overflow-hidden cursor-pointer group/image"
                  onClick={() => setSelectedImage(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>

                  {/* Click overlay with expand icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover/image:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-white/10 text-green-300 text-xs font-futura font-medium px-2 py-1 rounded-full border border-green-500/30">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-righteous text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 font-futura text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro Interactions Section */}
      <section className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-righteous text-white mb-4">
              Micro Interactions
            </h2>
            <p className="text-lg text-gray-300 font-futura max-w-2xl mx-auto">
              Thoughtful details that enhance user experience through delightful animations and interactions.
            </p>
          </div>

          {/* Main Interaction Process Video */}
          <div className="mb-16">
            <div
              className="group relative rounded-2xl overflow-hidden mx-auto max-w-4xl transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Video Embed */}
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

              {/* Video Content */}
              <div className="p-8">
                <h3 className="text-2xl font-righteous text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  Inside Out 2: Interaction Design Concept
                </h3>
                <p className="text-gray-300 font-futura text-base leading-relaxed mb-4">
                  A creative interaction design concept inspired by the beloved characters from Inside Out 2.
                  This experimental project explores how emotional storytelling can enhance user interfaces,
                  using familiar characters to create more empathetic and engaging digital experiences.
                  The design demonstrates innovative ways to incorporate personality and emotional depth into user interactions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Interaction Design', 'Character-Based UI', 'Emotional Design', 'Creative Concept', 'Storytelling'].map((tag, idx) => (
                    <span key={idx} className="px-3 py-2 bg-blue-500/10 text-blue-300 font-futura rounded-lg text-sm border border-blue-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo Showcase */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-3xl"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                   backdropFilter: 'blur(20px)',
                   border: '1px solid rgba(255, 255, 255, 0.15)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                 }}>
              <h3 className="text-2xl font-righteous text-white mb-4">
                See It In Action
              </h3>
              <p className="text-gray-300 font-futura mb-6 max-w-md mx-auto">
                Every interaction on this page demonstrates thoughtful micro-animations designed to enhance user experience.
              </p>
              <div className="flex justify-center gap-4">
                {['🎯', '✨', '🎨', '⚡'].map((emoji, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#131313' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-righteous text-white mb-4">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="text-lg text-gray-300 font-futura mb-8 max-w-2xl mx-auto">
            Ready to discuss your next project? I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-futura font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            style={{
              background: 'rgba(59, 130, 246, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div
              className="relative max-w-full max-h-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain"
              />

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-center">
                  <div className="mb-2">
                    <span className="inline-block bg-white/20 text-green-300 text-sm font-futura font-medium px-3 py-1 rounded-full border border-green-500/30">
                      {selectedImage.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-righteous text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300 font-futura max-w-2xl mx-auto">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 font-futura text-sm">
              Click anywhere outside to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
