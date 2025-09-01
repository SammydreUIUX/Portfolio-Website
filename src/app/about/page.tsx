'use client';

import { useState } from 'react';

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
      category: 'Companies Worked With', 
      items: ['AIRTEL', 'STARLING', 'ZONEAID', 'INSPORHEALM'] 
    },
  ];

  const testimonials = [
    {
      quote: "Transformed product experience and increased conversions by 40%",
      author: "Product Manager",
      company: "Tech Startup"
    },
    {
      quote: "Delivered exceptional designs with a professional research-driven approach",
      author: "Design Director", 
      company: "Digital Agency"
    },
    {
      quote: "Outstanding collaboration and innovative solutions to complex UX challenges",
      author: "Engineering Lead",
      company: "Enterprise Software"
    }
  ];

  // Photography portfolio data - using your actual uploaded images
  const photographyImages = [
    {
      id: 1,
      src: '/images/photography/photo1.JPG',
      title: 'Artistic Portrait',
      camera: 'Professional Camera',
      description: 'Capturing personality and emotion in natural lighting',
      settings: 'f/2.8 • 1/200s • ISO 200'
    },
    {
      id: 2,
      src: '/images/photography/photo2.JPG',
      title: 'Creative Composition',
      camera: 'Professional Camera',
      description: 'Exploring angles and perspectives in photography',
      settings: 'f/4.0 • 1/125s • ISO 400'
    },
    {
      id: 3,
      src: '/images/photography/photo3.jpg',
      title: 'Environmental Scene',
      camera: 'Professional Camera',
      description: 'Capturing the essence of place and moment',
      settings: 'f/5.6 • 1/250s • ISO 100'
    },
    {
      id: 4,
      src: '/images/photography/photo4.JPG',
      title: 'Visual Storytelling',
      camera: 'Professional Camera',
      description: 'Every frame tells a unique story',
      settings: 'f/3.5 • 1/160s • ISO 320'
    },
    {
      id: 5,
      src: '/images/photography/photo5.jpg',
      title: 'Light & Shadow',
      camera: 'Professional Camera',
      description: 'Playing with natural light and shadow patterns',
      settings: 'f/2.2 • 1/300s • ISO 160'
    },
    {
      id: 6,
      src: '/images/photography/photo6.JPG',
      title: 'Moment Captured',
      camera: 'Professional Camera',
      description: 'Preserving fleeting moments in time',
      settings: 'f/4.5 • 1/180s • ISO 250'
    },
    {
      id: 7,
      src: '/images/photography/photo7.JPG',
      title: 'Artistic Expression',
      camera: 'Professional Camera',
      description: 'Photography as a form of creative expression',
      settings: 'f/3.2 • 1/220s • ISO 200'
    }
  ];

  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [stackOrder, setStackOrder] = useState(photographyImages.map((_, index) => index));
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = (index: number) => {
    if (isAnimating) return; // Prevent clicks during animation
    
    if (selectedCard === index) {
      // If clicking the selected card, slide it to back
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
      // Select the new card and bring to front
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
    <div className="min-h-screen text-white" style={{backgroundColor: '#131313'}}>
      {/* Hero Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-righteous">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Product Designer with 5+ years in product design and 9+ years in visual design, 
              based in Vancouver 🇨🇦, crafting inclusive, human-centered digital experiences that make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 rounded-3xl" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}></div>
                
                {/* Profile image container */}
                <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden" style={{
                  backgroundColor: '#1a1a1a',
                  boxShadow: '20px 20px 40px rgba(0,0,0,0.3), -20px -20px 40px rgba(255,255,255,0.02)'
                }}>
                  {/* Profile Image */}
                  <img 
                    src="/images/samuel.jfif" 
                    alt="Samuel Funmilayo - Product Designer" 
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: 'center center'
                    }}
                  />
                  
                  {/* Overlay with gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Name and title overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-lg">Samuel Funmilayo</h3>
                    <p className="text-gray-200 drop-shadow-md">Product Designer & UX Specialist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-righteous">My Story</h2>
                <div className="w-16 h-1 bg-blue-400 mb-8"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in creating <span className="text-blue-400 font-medium">inclusive, user-centered digital experiences</span> that transform how people interact with technology. 
                  With over 5 years in product design and 9 years in visual design, I bring a unique perspective to every project.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My approach combines <span className="text-purple-400 font-medium">thorough user research</span> with innovative design solutions to solve complex problems. 
                  I believe great design should be accessible, intuitive, and meaningful for all users.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Based in Vancouver, I've had the privilege of working with companies like <span className="text-green-400 font-medium">AIRTEL, STARLING, ZONEAID, and INSPORHEALM</span>, 
                  helping them create digital products that make a real impact in people's lives.
                </p>
              </div>
              
              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 rounded-2xl" style={{backgroundColor: '#1a1a1a', border: '1px solid #333'}}>
                  <div className="text-2xl font-bold text-blue-400 mb-2">5+</div>
                  <div className="text-sm text-gray-400">Years Product Design</div>
                </div>
                <div className="text-center p-4 rounded-2xl" style={{backgroundColor: '#1a1a1a', border: '1px solid #333'}}>
                  <div className="text-2xl font-bold text-purple-400 mb-2">9+</div>
                  <div className="text-sm text-gray-400">Years Visual Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12" style={{backgroundColor: '#0f0f0f'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-righteous">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My comprehensive toolkit for creating exceptional user experiences and digital products that solve real problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const colors = [
                { bg: 'rgba(59, 130, 246, 0.1)', border: '#3B82F6', accent: '#60A5FA' },
                { bg: 'rgba(168, 85, 247, 0.1)', border: '#A855F7', accent: '#C084FC' },
                { bg: 'rgba(34, 197, 94, 0.1)', border: '#22C55E', accent: '#4ADE80' }
              ];
              const color = colors[index % colors.length];
              
              return (
                <div 
                  key={skillGroup.category} 
                  className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 group"
                  style={{
                    backgroundColor: color.bg,
                    border: `1px solid ${color.border}20`,
                    boxShadow: '10px 10px 20px rgba(0,0,0,0.3), -10px -10px 20px rgba(255,255,255,0.02)'
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {skillGroup.category}
                    </h3>
                    <div className="w-12 h-1 rounded-full" style={{backgroundColor: color.accent}}></div>
                  </div>
                  
                  <div className="space-y-3">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="flex items-center group-hover:translate-x-1 transition-transform duration-200">
                        <div 
                          className="w-2 h-2 rounded-full mr-4 flex-shrink-0"
                          style={{backgroundColor: color.accent}}
                        ></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-righteous">
              What People Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Feedback from clients and collaborators I've worked with throughout my design journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const colors = ['#3B82F6', '#A855F7', '#22C55E'];
              const accentColor = colors[index % colors.length];
              
              return (
                <div 
                  key={index} 
                  className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
                  style={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333',
                    boxShadow: '15px 15px 30px rgba(0,0,0,0.3), -15px -15px 30px rgba(255,255,255,0.02)'
                  }}
                >
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <svg 
                        className="w-8 h-8 mr-3" 
                        fill={accentColor} 
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-2c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                      <div className="w-12 h-1 rounded-full" style={{backgroundColor: accentColor}}></div>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg italic group-hover:text-white transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="border-t border-gray-700 pt-6">
                    <p className="text-white font-semibold mb-1">{testimonial.author}</p>
                    <p className="text-sm" style={{color: accentColor}}>{testimonial.company}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photography Portfolio Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12" style={{backgroundColor: '#0f0f0f'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-righteous">
              Photography Portfolio
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Beyond design, I'm passionate about capturing moments and stories through photography. 
              Click the cards to explore my work with both professional cameras and mobile photography.
            </p>
          </div>

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
                    className={`absolute inset-0 cursor-pointer transition-all duration-500 ease-out ${
                      isSelected && isTopCard ? 'hover:scale-105' : ''
                    }`}
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
                    {/* Single card with overlay details */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{
                      boxShadow: isSelected && isTopCard 
                        ? '0 25px 50px rgba(0,0,0,0.5), 0 15px 25px rgba(0,0,0,0.4)'
                        : '0 20px 40px rgba(0,0,0,0.4), 0 10px 20px rgba(0,0,0,0.3)'
                    }}>
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        isSelected && isTopCard 
                          ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent' 
                          : 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                      }`}></div>
                      
                      {/* Basic info - always visible */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg drop-shadow-lg">{image.title}</h3>
                        <p className="text-gray-200 text-sm drop-shadow-md">{image.camera}</p>
                      </div>
                      
                      {/* Detailed info - only visible when selected */}
                      <div className={`absolute inset-x-4 bottom-20 transition-all duration-300 transform ${
                        isSelected && isTopCard 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4 pointer-events-none'
                      }`}>
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                          <p className="text-gray-200 text-sm leading-relaxed mb-3">{image.description}</p>
                          <div className="border-t border-white/20 pt-3">
                            <p className="text-gray-300 text-xs font-mono">{image.settings}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Click indicator */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {isSelected && isTopCard ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                        </svg>
                      </div>
                      
                      {/* Selected card indicator */}
                      {isSelected && isTopCard && (
                        <div className="absolute top-4 left-4 w-8 h-8 bg-blue-400/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructions & CTA */}
          <div className="text-center mt-12 space-y-6">
            <p className="text-gray-400 text-sm">
              Click any card to see details • Click again to slide it to the back
            </p>
            
            {/* Photography CTA */}
            <div className="pt-4">
              <a 
                href="https://www.instagram.com/dre_fotoz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @dre_fotoz on Instagram
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12" style={{backgroundColor: '#0f0f0f'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-righteous">
              My Journey
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Key milestones and experiences that shaped my design career.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#1a1a1a', border: '3px solid #3B82F6'}}>
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                </div>
                <div className="ml-8">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-white">Product Designer</h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-400/20 text-blue-400 border border-blue-400/30">Current</span>
                  </div>
                  <p className="text-gray-400 mb-3">5+ years • Vancouver, Canada</p>
                  <p className="text-gray-300 leading-relaxed">Creating inclusive digital experiences and leading design initiatives for innovative tech companies.</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#1a1a1a', border: '3px solid #A855F7'}}>
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-white mb-2">Visual Designer</h3>
                  <p className="text-gray-400 mb-3">9+ years • Multiple Industries</p>
                  <p className="text-gray-300 leading-relaxed">Built strong foundation in visual design, branding, and creative problem-solving across diverse projects.</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#1a1a1a', border: '3px solid #22C55E'}}>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-white mb-2">Design Career Began</h3>
                  <p className="text-gray-400 mb-3">Starting Point • Creative Journey</p>
                  <p className="text-gray-300 leading-relaxed">Discovered passion for design and began developing skills in creative problem-solving and visual communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-righteous">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always excited to collaborate on meaningful projects that make a difference. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:hello@samuelfunmilayo.com" 
              className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              Get In Touch
            </a>
            <a 
              href="https://linkedin.com/in/samuel-funmilayo-0a9a11217" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}