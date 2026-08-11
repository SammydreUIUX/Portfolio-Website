'use client';

import { useState } from 'react';

const SW_BG = '#FAFAF8';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

export default function About() {
  const skills = [
    {
      category: 'Core Specialties',
      items: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems', 'Mobile Apps', 'Web Applications']
    },
    {
      category: 'Tools & Technologies',
      items: ['Figma', 'Photoshop', 'Illustrator', 'ProtoPie', 'Miro', 'Framer', 'Jira', 'JavaScript']
    },
    {
      category: 'AI-Augmented Design',
      items: ['Figma AI', 'Google Stitch', 'Claude Code', 'Claude', 'ChatGPT']
    },
    {
      category: 'Companies Worked With',
      items: ['AIRTEL', 'STARLING', 'ZONEAID', 'INSPORHEALM']
    },
  ];

  const testimonials = [
    { quote: "Transformed product experience and increased conversions by 40%", author: "Product Manager", company: "Tech Startup" },
    { quote: "Delivered exceptional designs with a professional research-driven approach", author: "Design Director", company: "Digital Agency" },
    { quote: "Outstanding collaboration and innovative solutions to complex UX challenges", author: "Engineering Lead", company: "Enterprise Software" }
  ];

  const photographyImages = [
    { id: 1, src: '/images/photography/photo1.JPG', title: 'Artistic Portrait', camera: 'Professional Camera', description: 'Capturing personality and emotion in natural lighting', settings: 'f/2.8 • 1/200s • ISO 200' },
    { id: 2, src: '/images/photography/photo2.JPG', title: 'Creative Composition', camera: 'Professional Camera', description: 'Exploring angles and perspectives in photography', settings: 'f/4.0 • 1/125s • ISO 400' },
    { id: 3, src: '/images/photography/photo3.jpg', title: 'Environmental Scene', camera: 'Professional Camera', description: 'Capturing the essence of place and moment', settings: 'f/5.6 • 1/250s • ISO 100' },
    { id: 4, src: '/images/photography/photo4.JPG', title: 'Visual Storytelling', camera: 'Professional Camera', description: 'Every frame tells a unique story', settings: 'f/3.5 • 1/160s • ISO 320' },
    { id: 5, src: '/images/photography/photo5.jpg', title: 'Light & Shadow', camera: 'Professional Camera', description: 'Playing with natural light and shadow patterns', settings: 'f/2.2 • 1/300s • ISO 160' },
    { id: 6, src: '/images/photography/photo6.JPG', title: 'Moment Captured', camera: 'Professional Camera', description: 'Preserving fleeting moments in time', settings: 'f/4.5 • 1/180s • ISO 250' },
    { id: 7, src: '/images/photography/photo7.JPG', title: 'Artistic Expression', camera: 'Professional Camera', description: 'Photography as a form of creative expression', settings: 'f/3.2 • 1/220s • ISO 200' }
  ];

  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [stackOrder, setStackOrder] = useState(photographyImages.map((_, index) => index));
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = (index: number) => {
    if (isAnimating) return;

    if (selectedCard === index) {
      setIsAnimating(true);
      setSelectedCard(null);

      setTimeout(() => {
        setStackOrder(prev => {
          const newOrder = [...prev];
          const cardIndex = newOrder.indexOf(index);
          newOrder.splice(cardIndex, 1);
          newOrder.unshift(index);
          return newOrder;
        });
        setIsAnimating(false);
      }, 300);
    } else {
      setSelectedCard(index);
      setStackOrder(prev => {
        const newOrder = [...prev];
        const cardIndex = newOrder.indexOf(index);
        newOrder.splice(cardIndex, 1);
        newOrder.push(index);
        return newOrder;
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: SW_BG, color: SW_INK }}>
      {/* Hero Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="sw-label mb-6" style={{ color: SW_GRAY }}>02 / About</p>
          <h1 className="sw-display text-6xl lg:text-8xl mb-10">About Me</h1>
          <p className="text-xl md:text-2xl max-w-4xl leading-relaxed mb-16" style={{ color: SW_GRAY }}>
            Product Designer with 5+ years in product design and 9+ years in visual design,
            based in Vancouver, crafting inclusive, human-centered digital experiences that make a difference.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-t pt-16" style={{ borderColor: SW_LINE }}>
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="relative h-96 lg:h-[560px] overflow-hidden">
                <img
                  src="/images/samuel.jfif"
                  alt="Samuel Funmilayo - Product Designer"
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold">Samuel Funmilayo</p>
                <p className="sw-label" style={{ color: SW_GRAY }}>Product Designer</p>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I specialize in creating <span style={{ fontWeight: 600 }}>inclusive, user-centered digital experiences</span> that
                  transform how people interact with technology. With over 5 years in product design and 9 years in visual
                  design, I bring a unique perspective to every project.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: SW_GRAY }}>
                  My approach combines <span style={{ color: SW_INK, fontWeight: 600 }}>thorough user research</span> with
                  innovative design solutions to solve complex problems. I believe great design should be accessible,
                  intuitive, and meaningful for all users.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: SW_GRAY }}>
                  Based in Vancouver, I&apos;ve had the privilege of working with companies like{' '}
                  <span style={{ color: SW_INK, fontWeight: 600 }}>AIRTEL, STARLING, ZONEAID, and INSPORHEALM</span>, helping
                  them create digital products that make a real impact in people&apos;s lives.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: SW_GRAY }}>
                  I also treat AI as a core part of my toolkit, not a shortcut, using{' '}
                  <span style={{ color: SW_INK, fontWeight: 600 }}>Figma AI, Google Stitch, Claude Code, Claude, and
                  ChatGPT</span> to prototype faster and refine products with sharper, more informed decisions.
                </p>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t" style={{ borderColor: SW_LINE }}>
                <div>
                  <div className="sw-serif text-4xl mb-1">5+</div>
                  <div className="sw-label" style={{ color: SW_GRAY }}>Years Product Design</div>
                </div>
                <div>
                  <div className="sw-serif text-4xl mb-1">9+</div>
                  <div className="sw-label" style={{ color: SW_GRAY }}>Years Visual Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-7xl mx-auto">
          <p className="sw-label mb-3" style={{ color: SW_GRAY }}>Capabilities</p>
          <h2 className="sw-display text-5xl lg:text-6xl mb-6">Skills &amp; Expertise</h2>
          <p className="text-lg max-w-3xl mb-16" style={{ color: SW_GRAY }}>
            My comprehensive toolkit for creating exceptional user experiences and digital products that solve real problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: SW_LINE }}>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-8" style={{ backgroundColor: SW_BG }}>
                <h3 className="text-lg font-bold mb-6 pb-4 border-b" style={{ borderColor: SW_LINE }}>
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 flex-shrink-0" style={{ backgroundColor: SW_INK }}></div>
                      <span style={{ color: SW_INK }}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-7xl mx-auto">
          <p className="sw-label mb-3" style={{ color: SW_GRAY }}>Feedback</p>
          <h2 className="sw-display text-5xl lg:text-6xl mb-6">What People Say</h2>
          <p className="text-lg max-w-3xl mb-16" style={{ color: SW_GRAY }}>
            Feedback from clients and collaborators I&apos;ve worked with throughout my design journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: SW_LINE }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8" style={{ backgroundColor: SW_BG }}>
                <p className="sw-serif text-4xl mb-4 italic">&ldquo;</p>
                <p className="text-lg leading-relaxed mb-8">{testimonial.quote}</p>
                <div className="pt-6 border-t" style={{ borderColor: SW_LINE }}>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="sw-label mt-1" style={{ color: SW_GRAY }}>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Portfolio Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-7xl mx-auto">
          <p className="sw-label mb-3" style={{ color: SW_GRAY }}>Beyond Design</p>
          <h2 className="sw-display text-5xl lg:text-6xl mb-6">Photography Portfolio</h2>
          <p className="text-lg max-w-3xl mb-16" style={{ color: SW_GRAY }}>
            Beyond design, I&apos;m passionate about capturing moments and stories through photography.
            Click the cards to explore my work with both professional cameras and mobile photography.
          </p>

          {/* Stacked Cards Container */}
          <div className="flex justify-center">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
              {stackOrder.map((imageIndex, stackIndex) => {
                const image = photographyImages[imageIndex];
                const isSelected = selectedCard === imageIndex;
                const isTopCard = stackIndex === stackOrder.length - 1;
                const zIndex = stackIndex;
                const rotation = (stackIndex - stackOrder.length / 2) * 1.5;
                const offset = stackIndex * 3;

                return (
                  <div
                    key={image.id}
                    className={`absolute inset-0 cursor-pointer transition-all duration-500 ease-out ${isSelected && isTopCard ? 'hover:scale-105' : ''}`}
                    style={{
                      zIndex: zIndex,
                      transform: isSelected && isTopCard
                        ? `rotate(0deg) translateY(-20px) scale(1.05)`
                        : `rotate(${rotation}deg) translateY(${offset}px)`,
                      transformOrigin: 'bottom center',
                      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => handleCardClick(imageIndex)}
                  >
                    <div className="relative w-full h-full overflow-hidden border" style={{
                      borderColor: SW_INK,
                      boxShadow: isSelected && isTopCard ? '10px 10px 0 rgba(17,17,17,0.15)' : '6px 6px 0 rgba(17,17,17,0.1)'
                    }}>
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />

                      <div className={`absolute inset-0 transition-all duration-300 ${isSelected && isTopCard ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent' : 'bg-gradient-to-t from-black/60 via-transparent to-transparent'}`}></div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg drop-shadow-lg">{image.title}</h3>
                        <p className="text-gray-200 text-sm drop-shadow-md">{image.camera}</p>
                      </div>

                      <div className={`absolute inset-x-4 bottom-20 transition-all duration-300 transform ${isSelected && isTopCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                        <div className="bg-black/50 p-4 border border-white/10">
                          <p className="text-gray-200 text-sm leading-relaxed mb-3">{image.description}</p>
                          <div className="border-t border-white/20 pt-3">
                            <p className="text-gray-300 text-xs font-mono">{image.settings}</p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 w-8 h-8 bg-black/40 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {isSelected && isTopCard ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                        </svg>
                      </div>

                      {isSelected && isTopCard && (
                        <div className="absolute top-4 left-4 w-3 h-3 bg-white"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructions & CTA */}
          <div className="text-center mt-12 space-y-6">
            <p className="sw-label" style={{ color: SW_GRAY }}>
              Click any card to see details &middot; Click again to slide it to the back
            </p>

            <div className="pt-4">
              <a
                href="https://www.instagram.com/dre_fotoz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="sw-btn sw-btn-primary inline-flex"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow @dre_fotoz on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-4xl mx-auto">
          <p className="sw-label mb-3" style={{ color: SW_GRAY }}>Journey</p>
          <h2 className="sw-display text-5xl lg:text-6xl mb-16">My Journey</h2>

          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px" style={{ backgroundColor: SW_LINE }}></div>

            <div className="space-y-14">
              {[
                { title: 'Product Designer', current: true, meta: '5+ years • Vancouver, Canada', body: 'Creating inclusive digital experiences and leading design initiatives for innovative tech companies.' },
                { title: 'Visual Designer', current: false, meta: '9+ years • Multiple Industries', body: 'Built strong foundation in visual design, branding, and creative problem-solving across diverse projects.' },
                { title: 'Design Career Began', current: false, meta: 'Starting Point • Creative Journey', body: 'Discovered passion for design and began developing skills in creative problem-solving and visual communication.' },
              ].map((item, i) => (
                <div key={i} className="relative flex items-start pl-10">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5" style={{ backgroundColor: item.current ? SW_INK : 'transparent', border: `1px solid ${SW_INK}` }}></div>
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      {item.current && (
                        <span className="sw-label" style={{ color: SW_GRAY }}>Current</span>
                      )}
                    </div>
                    <p className="sw-label mb-3" style={{ color: SW_GRAY }}>{item.meta}</p>
                    <p className="leading-relaxed max-w-2xl" style={{ color: SW_GRAY }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="sw-label mb-3" style={{ color: SW_GRAY }}>Let&apos;s Talk</p>
          <h2 className="sw-display text-5xl lg:text-6xl mb-6">Let&apos;s Create Something Amazing</h2>
          <p className="text-xl mb-12 leading-relaxed" style={{ color: SW_GRAY }}>
            I&apos;m always excited to collaborate on meaningful projects that make a difference.
            Let&apos;s discuss how we can bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sdamilare72@gmail.com" className="sw-btn sw-btn-primary">
              Get In Touch
            </a>
            <a
              href="https://linkedin.com/in/samuel-funmilayo-0a9a11217"
              target="_blank"
              rel="noopener noreferrer"
              className="sw-btn sw-btn-secondary"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
