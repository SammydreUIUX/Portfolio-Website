'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ChatBox from './components/ChatBox';

// Process Carousel Component
function ProcessCarousel({ processSteps }: { processSteps: any[] }) {
  // Optimize duplicates for better performance
  const duplicatedSteps = [...processSteps, ...processSteps];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Continuous moving carousel */}
      <div className="flex animate-scroll-left" style={{width: 'max-content'}}>
        {duplicatedSteps.map((step, index) => (
          <div key={index} className="flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-4 text-center group">
            <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-all duration-300 ease-out group-hover:rotate-3">
              <div className="p-4 rounded-2xl transition-all duration-300" style={{backgroundColor: '#131313', boxShadow: '5px 5px 10px rgba(0,0,0,0.5), -5px -5px 10px rgba(255,255,255,0.05)'}}>
                {step.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Tools Carousel Component
function ToolsCarousel({ tools }: { tools: any[] }) {
  // Optimize duplicates for better performance
  const duplicatedTools = [...tools, ...tools];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Continuous moving carousel */}
      <div className="flex animate-scroll-right" style={{width: 'max-content'}}>
        {duplicatedTools.map((tool, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-40 sm:w-48 mx-2 sm:mx-4 group relative rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105" 
            style={{backgroundColor: '#131313', boxShadow: '8px 8px 16px rgba(0,0,0,0.5), -8px -8px 16px rgba(255,255,255,0.05)'}}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" style={{backgroundColor: '#131313'}}></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#131313', border: '1px solid #333'}}>
                {tool.icon}
              </div>
              
              {/* Tool name */}
              <h3 className="text-base font-semibold text-white mb-2 transition-all duration-300">
                {tool.name}
              </h3>
              
              {/* Category */}
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {tool.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Testimonials Carousel Component
function TestimonialsCarousel({ testimonials }: { testimonials: any[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-8">
              <div className="text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold text-white" 
                     style={{
                       backgroundColor: '#131313', 
                       boxShadow: '8px 8px 16px rgba(0,0,0,0.5), -8px -8px 16px rgba(255,255,255,0.05)',
                       border: '2px solid #333'
                     }}>
                  {testimonial.avatar}
                </div>
                
                {/* Quote */}
                <blockquote className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 italic max-w-3xl mx-auto">
                  "{testimonial.testimonial}"
                </blockquote>
                
                {/* Author Info */}
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-colors duration-300 hover:bg-white/10"
        style={{backgroundColor: '#131313', border: '1px solid #333'}}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-colors duration-300 hover:bg-white/10"
        style={{backgroundColor: '#131313', border: '1px solid #333'}}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    
    const titles = [
      "Hello, I'm Samuel Funmilayo.",
      "Product Designer.",
      "UX Specialist.",
      "AI Enthusiast."
    ];
    const typingSpeed = isDeleting ? 30 : 60; // Faster when deleting
    const deletingSpeed = 30;
    const pauseTime = 1500; // Reduced pause time

    const typeText = () => {
      const currentFullText = titles[currentTitle];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setTimeout(() => {
            setCurrentText(currentFullText.slice(0, currentText.length + 1));
          }, typingSpeed);
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, deletingSpeed);
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitle, isLoaded]);
  const featuredProjects = [
    {
      id: 1,
      title: 'ZoneAid',
      subtitle: 'Emergency Safety App',
      description: 'Designed a comprehensive safety-focused mobile app that revolutionizes emergency response through real-time tracking, offline functionality, and family monitoring systems.',
      category: 'UI/UX Design',
      role: 'Lead UI/UX Designer',
      duration: '6 months',
      team: '4 members',
      keyFeatures: ['Emergency SOS', 'Real-time tracking', 'Offline mode', 'Family alerts'],
      impact: 'Reduced emergency response time by 40%',
      technologies: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 2,
      title: 'Starling',
      subtitle: 'Hospitality Booking Platform',
      description: 'Created an intuitive hospitality platform that transforms the hotel booking experience with seamless room previews, instant booking, and personalized guest support.',
      category: 'UI/UX Design',
      role: 'UI/UX Designer',
      duration: '4 months',
      team: '6 members',
      keyFeatures: ['Room previews', 'Instant booking', 'Guest support', 'Personalization'],
      impact: 'Increased booking conversion by 35%',
      technologies: ['Figma', 'Prototyping', 'User Testing', 'Mobile Design'],
      color: 'from-green-500 to-green-700'
    },
    {
      id: 3,
      title: 'Airtel ODU',
      subtitle: 'Telecom Research Project',
      description: 'Led comprehensive user research initiative to enhance customer experience in telecommunications through stakeholder interviews, usability testing, and journey mapping.',
      category: 'Product Research',
      role: 'Product Researcher',
      duration: '8 months',
      team: '8 members',
      keyFeatures: ['User research', 'Journey mapping', 'Stakeholder interviews', 'Usability testing'],
      impact: 'Improved customer satisfaction by 25%',
      technologies: ['Miro', 'Research', 'Data Analysis', 'Journey Mapping'],
      color: 'from-red-500 to-red-700'
    }
  ];

  const processSteps = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Empathize & Explore',
      description: 'Uncover goals, user needs, and insights through data and interviews.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Define with Clarity',
      description: 'Map user pain points and define what truly needs solving.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Imagine Bold Solutions',
      description: 'Explore bold ideas with quick sketches and brainstorming.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: 'Prototype & Validate',
      description: 'Build, test, refine designs based on feedback.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Design & Deliver',
      description: 'Craft polished UI, collaborate with devs for implementation.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Refine & Evolve',
      description: 'Improve post-launch through feedback, analytics, iteration.'
    }
  ];

  const tools = [
    {
      name: 'Figma',
      category: 'Design',
      color: 'from-purple-500 to-pink-500',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" fill="#1ABCFE"/>
          <path d="M4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0z" fill="#0ACF83"/>
          <path d="M12 0H8a4 4 0 0 0 0 8h4V0z" fill="#FF7262"/>
          <path d="M4 8a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#F24E1E"/>
          <path d="M4 16a4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4z" fill="#A259FF"/>
        </svg>
      )
    },
    {
      name: 'Miro',
      category: 'Collaboration',
      color: 'from-yellow-400 to-orange-500',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M17.5 0H6.5C2.9 0 0 2.9 0 6.5v11c0 3.6 2.9 6.5 6.5 6.5h11c3.6 0 6.5-2.9 6.5-6.5v-11C24 2.9 21.1 0 17.5 0z" fill="#FFD02F"/>
          <path d="M12 6l-2 6h4l-2-6z" fill="#fff"/>
          <path d="M8 12l2-6-4 8 2-2z" fill="#fff"/>
          <path d="M16 12l-2-6 4 8-2-2z" fill="#fff"/>
        </svg>
      )
    },
    {
      name: 'ProtoPie',
      category: 'Prototyping',
      color: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#5C7CFA"/>
          <path d="M8 10h8v4H8v-4z" fill="white"/>
          <circle cx="10" cy="8" r="1" fill="white"/>
          <circle cx="14" cy="8" r="1" fill="white"/>
          <path d="M10 15l2 2 2-2" stroke="white" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'Development',
      color: 'from-yellow-400 to-yellow-600',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#F7DF1E" rx="2"/>
          <path d="M7.5 18.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5V10H11v8.5c0 .5-.5 1-.5 1s-.5-.5-.5-1V10H7.5v8.5z" fill="#000"/>
          <path d="M14 16c-.5-1-1.5-1.5-2.5-1.5v1.5c.5 0 1 .5 1 1v1c0 .5-.5 1-1 1s-1-.5-1-1h-1.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5v-1c0-1-.5-2-2-2v-1.5c1 0 2 .5 2.5 1.5V16h-.5z" fill="#000"/>
        </svg>
      )
    },
    {
      name: 'React',
      category: 'Development',
      color: 'from-blue-400 to-blue-600',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M12 1c4.5 0 11 2.6 11 7s-6.5 7-11 7S1 12.4 1 8s6.5-7 11-7z" stroke="#61DAFB" strokeWidth="2" fill="none"/>
          <path d="M12 23c-4.5 0-11-2.6-11-7s6.5-7 11-7 11 2.6 11 7-6.5 7-11 7z" stroke="#61DAFB" strokeWidth="2" fill="none"/>
          <path d="M5.4 7c2.2-3.8 7-5.4 10.6-3.6s5.4 7 3.2 10.8-7 5.4-10.6 3.6S3.2 10.8 5.4 7z" stroke="#61DAFB" strokeWidth="2" fill="none"/>
          <path d="M18.6 7c-2.2-3.8-7-5.4-10.6-3.6S2.6 10.4 4.8 14.2s7 5.4 10.6 3.6 5.4-7 3.2-10.8z" stroke="#61DAFB" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      name: 'HTML',
      category: 'Development',
      color: 'from-orange-500 to-red-500',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#E34F26"/>
          <path d="M12 22.017l6.624-1.837L20.127 2.4H12v19.617z" fill="#EF652A"/>
          <path d="M12 9.778H8.531l-.232-2.718H12V4.41h-6.588l.698 8.01H12V9.778zm0 5.173l-.023.006-2.933-.79-.188-2.11H6.248l.33 4.171L12 17.351v-2.4z" fill="#EBEBEB"/>
          <path d="M11.977 9.778v2.642h2.706l-.326 3.426-2.38.804v2.4l5.379-1.493.744-8.157h-5.123z" fill="#fff"/>
        </svg>
      )
    },
    {
      name: 'CSS',
      category: 'Development',
      color: 'from-blue-500 to-blue-700',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" fill="#1572B6"/>
          <path d="M12 22.017L18.624 20.18 20.127 2.4H12v19.617z" fill="#33A9DC"/>
          <path d="M12 9.778h4.531l.232-2.718H12V4.41h6.588l-.698 8.01H12V9.778zm0 5.173v-2.4h2.706l-.326 3.426L12 17.351v2.4l5.379-1.493.744-8.157z" fill="#fff"/>
          <path d="M12.01 9.778H8.531l-.232-2.718h3.711V4.41H5.412l.698 8.01h5.9v-2.642zm-.01 5.173l-.023.006-2.933-.79-.188-2.11H6.248l.33 4.171L12 17.351v-2.4z" fill="#EBEBEB"/>
        </svg>
      )
    },
    {
      name: 'Sketch',
      category: 'Design',
      color: 'from-yellow-400 to-orange-400',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M6.5 2L2 9l10 13L22 9l-4.5-7h-11z" fill="#FDB300"/>
          <path d="M12 9L2 9l10 13V9z" fill="#EA6C00"/>
          <path d="M12 9l10 0L12 22V9z" fill="#EA6C00"/>
          <path d="M12 9L6.5 2h11L12 9z" fill="#FDAD00"/>
          <path d="M6.5 2L2 9h10L6.5 2z" fill="#FDD231"/>
          <path d="M17.5 2L22 9H12l5.5-7z" fill="#FDD231"/>
          <path d="M2 9h10v13L2 9z" fill="#FDAD00"/>
          <path d="M22 9H12v13l10-13z" fill="#FDAD00"/>
        </svg>
      )
    },
    {
      name: 'Procreate',
      category: 'Design',
      color: 'from-pink-500 to-purple-600',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6B6B"/>
          <path d="M8 8l3 3-1 5 2-1 5-1-3-3 3-3-3 3-3-3z" fill="white"/>
          <circle cx="15" cy="9" r="2" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Adobe Photoshop',
      category: 'Design',
      color: 'from-blue-600 to-purple-600',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#001E36" rx="4"/>
          <path d="M8 6h3c2.2 0 4 1.8 4 4s-1.8 4-4 4h-1v3H8V6zm2 6h1c1.1 0 2-.9 2-2s-.9-2-2-2h-1v4z" fill="#31C5F0"/>
          <path d="M14 11h1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H14v2h2v1.5h-3.5V11z" fill="#31C5F0"/>
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechFlow',
      testimonial: "Samuel's design approach completely transformed our user experience. His attention to detail and ability to translate complex requirements into intuitive interfaces is exceptional. Working with him was a game-changer for our product.",
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'UX Director',
      company: 'InnovateLab',
      testimonial: "I've worked with many designers, but Samuel's systematic approach to user research and design thinking sets him apart. He doesn't just create beautiful interfaces—he solves real problems for real people.",
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'CEO',
      company: 'StartupForge',
      testimonial: "Samuel helped us redesign our entire platform from the ground up. His insights into user behavior and modern design principles resulted in a 40% increase in user engagement. Highly recommended!",
      avatar: 'EW'
    },
    {
      name: 'David Kim',
      role: 'Engineering Lead',
      company: 'CloudTech',
      testimonial: "Samuel bridges the gap between design and development beautifully. His designs are not only visually stunning but also technically feasible and user-centered. A true collaborative partner.",
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'BrandWorks',
      testimonial: "The rebrand Samuel led for us exceeded all expectations. His strategic thinking combined with creative execution helped us connect with our audience in ways we never imagined possible.",
      avatar: 'LT'
    }
  ];

  return (
    <div className={`min-h-screen text-white scroll-optimized transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{backgroundColor: '#131313'}}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden py-20 content-section">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0" style={{transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)'}}>
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0">
            <div className="w-full h-full relative overflow-hidden">
              {/* Moving Mesh Pattern */}
              <div className="absolute inset-0 opacity-20" style={{transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden'}}>
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 25%, rgba(255,255,255,0.08) 0%, transparent 50%),
                    radial-gradient(circle at 25% 75%, rgba(255,255,255,0.12) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.06) 0%, transparent 50%)
                  `,
                  backgroundSize: '400px 400px',
                  animation: 'meshMove 20s ease-in-out infinite',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}></div>
              </div>
              
              {/* Floating Orbs */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-10 animate-float-slow" style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)',
                  filter: 'blur(2px)'
                }}></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full opacity-15 animate-float-medium" style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 50%, transparent 80%)',
                  filter: 'blur(1px)'
                }}></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full opacity-20 animate-float-fast" style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 60%)',
                  filter: 'blur(3px)'
                }}></div>
              </div>
              
              {/* Animated Lines */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-line-horizontal"></div>
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-15 animate-line-horizontal-delay"></div>
                <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-line-horizontal-delay-2"></div>
                
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-line-vertical"></div>
                <div className="absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-15 animate-line-vertical-delay"></div>
                <div className="absolute top-0 left-2/3 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-10 animate-line-vertical-delay-2"></div>
              </div>
              
              {/* Central Glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 rounded-full opacity-10 animate-glow" style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.1) 60%, transparent 80%)',
                  filter: 'blur(40px)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center hero-content">
          {/* Main Title with Animation */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter min-h-[3rem] md:min-h-[5rem] flex items-center justify-center text-white relative">
              <span className="transition-all duration-100 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
                {currentText}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
              {/* Enhanced Animated Hand Symbol */}
              <div className="absolute -top-12 -right-12 text-4xl animate-bounce drop-shadow-lg">
                {isDeleting ? '👋' : '✨'}
              </div>
            </h1>
            
            {/* Subtitle */}
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-200 font-light mb-2">
                Product Designer & UX Specialist
              </p>
              <p className="text-base md:text-lg text-gray-400">
                Based in Vancouver 🇨🇦
              </p>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 break-words">
              Crafting inclusive, human-centered digital experiences through 
              <span className="text-blue-400 font-medium"> empathy-driven design</span> and 
              <span className="text-purple-400 font-medium"> innovative solutions</span>
            </p>
            
            {/* Key Skills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['UI/UX Design', 'Product Strategy', 'User Research', 'AI Integration'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Monochrome CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <button 
              onClick={() => document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Let's Connect
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center text-gray-400 animate-bounce">
              <span className="text-sm mb-4 tracking-wide">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Work Section */}
      <section id="featured-work" className="py-24 px-4 sm:px-6 lg:px-8 content-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-righteous text-content">
            Featured Work
          </h2>
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01]"
                style={{backgroundColor: '#131313', border: '1px solid #333'}}
              >
                {/* Card Content */}
                <div className="relative z-10 flex flex-col lg:flex-row min-h-[400px]">
                  {/* Left Side - Text Content */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    {/* Project Title & Category */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full text-gray-400 border border-gray-600 mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="text-base text-gray-400">{project.subtitle}</p>
                    </div>
                    
                    {/* Project Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                      {project.description}
                    </p>
                    
                    {/* Button */}
                    <div>
                      <Link href={project.id === 1 ? '/projects/zoneaid' : project.id === 2 ? '/projects/starling' : '#'} className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg border border-gray-600 hover:border-gray-400 hover:bg-gray-800/20 transition-all duration-300">
                        View Case Study 
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right Side - Visual */}
                  <div className="flex-shrink-0 w-full lg:w-2/5 p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-xs">
                      <img 
                        src={project.id === 1 ? "/images/zoneaid/Overview.jpg" : 
                             project.id === 2 ? "/images/starling/starling-overview-updated.png" : 
                             "/images/960x0.webp"} 
                        alt={`${project.title} ${project.subtitle}`}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 content-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-righteous text-content">
            How Ideas Take Shape
          </h2>
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <ProcessCarousel processSteps={processSteps} />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 content-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-righteous text-content">
              My Toolkit
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The tools and technologies I use to bring ideas to life, from initial concept to polished product.
            </p>
          </div>
          
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <ToolsCarousel tools={tools} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 content-section">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-righteous text-content">
            Voices from My Journey
          </h2>
          <p className="text-lg text-gray-300 mb-16">
            A few kind words from the amazing people I've collaborated with.
          </p>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 content-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-righteous text-content">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Ready to discuss your next project? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://linkedin.com/in/samuel-funmilayo-0a9a11217" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Connect with me on LinkedIn
            </a>
            <a 
              href="mailto:hello@samuelfunmilayo.com" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © Samuel Funmilayo 2025. All Rights Reserved.
          </p>
        </div>
      </footer>
      
      {/* AI ChatBox */}
      <ChatBox />
    </div>
  );
}
