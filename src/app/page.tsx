'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ChatBox from './components/ChatBox';

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [currentText, isDeleting, currentTitle]);
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
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12.001 18v-4.336A3.333 3.333 0 0 0 15.332 8.668z"/>
        </svg>
      )
    },
    {
      name: 'Miro',
      category: 'Collaboration',
      color: 'from-yellow-400 to-orange-500',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.392 0H6.608C2.983 0 0 2.99 0 6.608v10.784C0 21.01 2.99 24 6.608 24h10.784C21.017 24 24 21.01 24 17.392V6.608C24 2.99 21.01 0 17.392 0z"/>
        </svg>
      )
    },
    {
      name: 'ProtoPie',
      category: 'Prototyping',
      color: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'Development',
      color: 'from-yellow-400 to-yellow-600',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      )
    },
    {
      name: 'React',
      category: 'Development',
      color: 'from-blue-400 to-blue-600',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        </svg>
      )
    },
    {
      name: 'HTML',
      category: 'Development',
      color: 'from-orange-500 to-red-500',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      )
    },
    {
      name: 'CSS',
      category: 'Development',
      color: 'from-blue-500 to-blue-700',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm4.133 4.518l4.06 11.447 1.713.484.484-.121L17.372 4.518l-2.484.484-4.123 9.033-4.123-9.033L4.133 4.518z"/>
        </svg>
      )
    },
    {
      name: 'Sketch',
      category: 'Design',
      color: 'from-yellow-400 to-orange-400',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 5L12 18.5L17.5 5z"/>
          <path d="M2 9h5L12 21z"/>
          <path d="M17 9h5L12 21z"/>
          <path d="M2 9h20L12 3z"/>
        </svg>
      )
    },
    {
      name: 'Procreate',
      category: 'Design',
      color: 'from-pink-500 to-purple-600',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      name: 'Adobe Photoshop',
      category: 'Design',
      color: 'from-blue-600 to-purple-600',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0v24h24V0H0zm12.5 7c1.9 0 3.1.9 3.1 2.3s-1.2 2.3-3.1 2.3H9.4V7h3.1zm-.1 3.9c1.1 0 1.8-.5 1.8-1.3s-.7-1.3-1.8-1.3H10.7v2.6h1.7z"/>
        </svg>
      )
    }
  ];

  const testimonials = [
    { name: 'Sarah Chen', role: 'Product Manager', company: 'TechCorp' },
    { name: 'Marcus Rodriguez', role: 'UX Director', company: 'Design Studio' },
    { name: 'Emily Watson', role: 'Founder', company: 'StartupXYZ' },
    { name: 'David Kim', role: 'Engineering Lead', company: 'Innovation Labs' }
  ];

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#131313'}}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0">
          {/* Grid Pattern with Gradient and Shining Center */}
          <div className="absolute inset-0">
            <div className="w-full h-full relative" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}>
              {/* Radial Gradient Overlay with Shining Center */}
              <div className="absolute inset-0" style={{
                background: `
                  radial-gradient(circle at center, 
                    rgba(255,255,255,0.15) 0%, 
                    rgba(255,255,255,0.1) 20%, 
                    rgba(255,255,255,0.05) 40%, 
                    rgba(255,255,255,0.02) 60%, 
                    transparent 80%
                  )
                `
              }}></div>
              
              {/* Animated Pulse Effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, transparent 70%)',
                animationDuration: '4s'
              }}></div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Main Title with Animation */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter min-h-[5rem] md:min-h-[8rem] flex items-center justify-center text-white relative">
              <span className="transition-all duration-100 font-mono bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
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
              <p className="text-2xl md:text-3xl text-gray-200 font-light mb-2">
                Product Designer & UX Specialist
              </p>
              <p className="text-lg md:text-xl text-gray-400">
                Based in Vancouver 🇨🇦
              </p>
              
              {/* Decorative Line */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center text-gray-400 animate-bounce">
              <span className="text-sm mb-2">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-gray-300">
              Crafting digital experiences that put humans first
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi, I&apos;m Samuel Funmilayo — a Product Designer based in Vancouver with a passion for creating inclusive, human-centered digital experiences. With a background spanning UI/UX design, product research, and AI integration, I bring a holistic approach to solving complex design challenges.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in design is driven by empathy and curiosity. I believe the best products are born from deep user understanding and careful attention to the small details that make big differences in people&apos;s lives.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I&apos;m not designing, you&apos;ll find me exploring Vancouver&apos;s trails, experimenting with new AI tools, or diving into the latest design trends that push the boundaries of what&apos;s possible.
              </p>

              {/* Skills */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-white mb-4">What I Do Best</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">User Experience Design</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">Product Strategy</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">User Research</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">Interface Design</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">Design Systems</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">AI Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual/Stats Side */}
            <div className="relative">
              {/* Profile Card */}
              <div className="rounded-2xl p-8" style={{backgroundColor: '#131313', boxShadow: '12px 12px 24px rgba(0,0,0,0.6), -12px -12px 24px rgba(255,255,255,0.08)'}}>
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden" style={{boxShadow: '6px 6px 12px rgba(0,0,0,0.5), -6px -6px 12px rgba(255,255,255,0.1), inset 2px 2px 4px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(255,255,255,0.05)'}}>
                    <img 
                      src="/images/samuel.jfif" 
                      alt="Samuel Funmilayo - Product Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Samuel Funmilayo</h3>
                  <p className="text-gray-400">Product Designer</p>
                  <p className="text-sm text-gray-500">Vancouver, Canada 🇨🇦</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6" style={{borderTop: '1px solid #333'}}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-300 mb-1">5+</div>
                    <p className="text-sm text-gray-400">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-300 mb-1">20+</div>
                    <p className="text-sm text-gray-400">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-300 mb-1">100+</div>
                    <p className="text-sm text-gray-400">Users Researched</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-300 mb-1">15+</div>
                    <p className="text-sm text-gray-400">Happy Clients</p>
                  </div>
                </div>

                {/* Tools */}
                <div className="pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-3 text-center">Favorite Tools</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 text-gray-300 rounded-full text-xs" style={{backgroundColor: '#131313'}}>Figma</span>
                    <span className="px-3 py-1 text-gray-300 rounded-full text-xs" style={{backgroundColor: '#131313'}}>Miro</span>
                    <span className="px-3 py-1 text-gray-300 rounded-full text-xs" style={{backgroundColor: '#131313'}}>Framer</span>
                    <span className="px-3 py-1 text-gray-300 rounded-full text-xs" style={{backgroundColor: '#131313'}}>Principle</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-green-500 rounded-full opacity-25 animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-6">
              Curious about my process or want to collaborate?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about" 
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Learn More About Me
              </Link>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
              >
                Let's Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured Work
          </h2>
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{backgroundColor: '#131313', boxShadow: 'inset 5px 5px 10px rgba(0,0,0,0.5), inset -5px -5px 10px rgba(255,255,255,0.05)'}}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col lg:flex-row min-h-[600px]">
                  {/* Left Side - Text Content */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    {/* Category & Meta Info */}
                    <div className="mb-6 space-y-3">
                      <div className="flex flex-wrap gap-3 items-center">
                        <span className={`inline-block px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r ${project.color} text-white`}>
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-400">{project.duration}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-400">{project.team}</span>
                      </div>
                      <p className="text-sm text-gray-400 font-medium">{project.role}</p>
                    </div>
                    
                    {/* Project Title & Subtitle */}
                    <div className="mb-6">
                      <h3 className="text-4xl lg:text-5xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xl text-gray-300 font-medium">{project.subtitle}</p>
                    </div>
                    
                    {/* Project Description */}
                    <p className="text-gray-300 leading-relaxed mb-8 text-lg group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Key Features */}
                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-3">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.keyFeatures.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 text-gray-300 rounded-full text-sm" style={{backgroundColor: '#131313', boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.5), inset -2px -2px 5px rgba(255,255,255,0.05)'}}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Impact & Technologies */}
                    <div className="mb-8 space-y-4">
                      <div className="p-4 rounded-lg" style={{backgroundColor: '#131313', boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.5), inset -3px -3px 6px rgba(255,255,255,0.05)'}}>
                        <p className="text-green-400 font-semibold text-sm">Impact</p>
                        <p className="text-gray-300">{project.impact}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Technologies Used</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-900/20 text-blue-300 rounded text-xs border border-blue-500/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Button */}
                    <div>
                      <Link href={project.id === 1 ? '/projects/zoneaid' : project.id === 2 ? '/projects/starling' : '#'} className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-current/20 transition-all duration-300 group-hover:translate-x-2`}>
                        View Case Study 
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right Side - Visual Design */}
                  <div className="flex-shrink-0 w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                    {project.id === 1 ? (
                      // ZoneAid - Emergency App Visual
                      <div className="relative w-full max-w-md lg:max-w-lg">
                        <img 
                          src="/images/zoneaid/Overview.jpg" 
                          alt="ZoneAid Emergency Safety App Screenshot"
                          className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
                      </div>
                    ) : project.id === 2 ? (
                      // Starling - Hotel Booking Visual
                      <div className="relative w-full max-w-md lg:max-w-lg">
                        <img 
                          src="/images/starling/starling-overview-updated.png" 
                          alt="Starling Hospitality App Design - UX/UI Case Study"
                          className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    ) : (
                      // Airtel ODU - Research Visual
                      <div className="relative w-full max-w-md lg:max-w-lg">
                        <img 
                          src="/images/960x0.webp" 
                          alt="Nokia Routers - Airtel ODU Telecom Research Project"
                          className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How Ideas Take Shape
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-all duration-300 ease-out group-hover:rotate-3">
                  <div className="p-4 rounded-2xl transition-all duration-300" style={{backgroundColor: '#131313', boxShadow: '5px 5px 10px rgba(0,0,0,0.5), -5px -5px 10px rgba(255,255,255,0.05)'}}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Toolkit
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The tools and technologies I use to bring ideas to life, from initial concept to polished product.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-105" style={{backgroundColor: '#131313', boxShadow: '8px 8px 16px rgba(0,0,0,0.5), -8px -8px 16px rgba(255,255,255,0.05)'}}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-5 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {tool.icon}
                  </div>
                  
                  {/* Tool name */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {tool.name}
                  </h3>
                  
                  {/* Category */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {tool.category}
                  </p>
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Voices from My Journey
          </h2>
          <p className="text-xl text-gray-300 mb-16">
            A few kind words from the amazing people I've collaborated with.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {testimonials.map((person, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#131313'}}>
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="font-semibold mb-1">{person.name}</h3>
                <p className="text-sm text-gray-400">{person.role}</p>
                <p className="text-sm text-gray-500">{person.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to discuss your next project? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://linkedin.com" 
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
