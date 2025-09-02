'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AirtelCaseStudy() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .slide-up {
          transform: translateY(50px);
          transition: all 0.6s ease-out;
        }
        
        .slide-up.animate-in {
          transform: translateY(0);
        }
        
        .fade-in {
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }
        
        .fade-in.animate-in {
          opacity: 1;
        }
        
        .scale-in {
          transform: scale(0.9);
          opacity: 0;
          transition: all 0.6s ease-out;
        }
        
        .scale-in.animate-in {
          transform: scale(1);
          opacity: 1;
        }
        
        .slide-left {
          transform: translateX(-50px);
          opacity: 0;
          transition: all 0.7s ease-out;
        }
        
        .slide-left.animate-in {
          transform: translateX(0);
          opacity: 1;
        }
        
        .slide-right {
          transform: translateX(50px);
          opacity: 0;
          transition: all 0.7s ease-out;
        }
        
        .slide-right.animate-in {
          transform: translateX(0);
          opacity: 1;
        }
        
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
      `}</style>
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/60 to-teal-100/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-on-scroll fade-in">
            <Link href="/projects" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </div>
          
          <div className="mx-auto mb-8 flex items-center justify-center animate-on-scroll scale-in stagger-1">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 p-3">
              <img 
                src="/images/airtel/airtel-logo.png" 
                alt="Airtel Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              {/* Fallback logo container - hidden by default */}
              <div className="hidden w-full h-full bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 animate-on-scroll slide-up stagger-2">
            Airtel ODU
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-on-scroll slide-up stagger-3">
            Enhancing Connectivity in Nigeria — Bridging the digital divide through user-centered design
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center text-sm animate-on-scroll fade-in stagger-4">
            <div className="flex flex-col items-center">
              <span className="text-gray-600">Role</span>
              <span className="text-gray-900 font-medium">Product Researcher</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-600">Duration</span>
              <span className="text-gray-900 font-medium">8 months</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-600">Team</span>
              <span className="text-gray-900 font-medium">8 members</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-600">Impact</span>
              <span className="text-green-600 font-medium">25% satisfaction boost</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 hover:bg-white/90 transition-all duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-on-scroll slide-left">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Millions of Nigerians rely heavily on mobile internet for personal and professional use, but poor indoor signal coverage has created barriers to productivity, communication, and business growth. Rural communities and commercial hubs alike face frequent delays, dropped connections, and unreliable internet speeds.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The challenge was clear: how might we design an affordable, accessible solution that bridges Nigeria's connectivity gap while serving diverse user needs across rural, urban, and commercial environments?
                </p>
              </div>
              
              <div className="space-y-3 animate-on-scroll slide-left stagger-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Objectives</h3>
                <div className="flex items-center animate-on-scroll slide-left stagger-1 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Improve indoor signal strength across all regions</span>
                </div>
                <div className="flex items-center animate-on-scroll slide-left stagger-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Provide affordable, easy-to-install solution</span>
                </div>
                <div className="flex items-center animate-on-scroll slide-left stagger-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Design for individuals and businesses</span>
                </div>
                <div className="flex items-center animate-on-scroll slide-left stagger-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Build on Airtel's brand trust</span>
                </div>
              </div>
            </div>

            <div className="relative animate-on-scroll slide-right">
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Focus</h3>
                  <p className="text-gray-600 text-sm">Understanding connectivity barriers across Nigeria's diverse landscape</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:bg-gray-50/50 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">Research Methodology</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "User Interviews",
                description: "Surveys & interviews across rural, urban, and commercial zones"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Field Studies",
                description: "On-site research in remote areas to understand geographical barriers"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Competitor Analysis", 
                description: "Analysis of MTN, Glo, and Smile 4G devices and market positioning"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Empathy Mapping",
                description: "Persona development and empathy mapping to synthesize user needs"
              }
            ].map((method, index) => (
              <div key={index} className={`text-center p-6 rounded-xl bg-white hover:bg-gray-50 hover:scale-105 hover:shadow-xl transition-all duration-500 shadow-md border border-gray-200 animate-on-scroll scale-in stagger-${index + 1}`}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white hover:rotate-12 hover:scale-110 transition-all duration-300">
                  {method.icon}
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{method.title}</h3>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Findings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/50 hover:bg-gray-100/70 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">Key Research Findings</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 animate-on-scroll slide-left stagger-1 hover:scale-105 hover:shadow-xl transition-all duration-500">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 hover:rotate-12 transition-transform duration-300">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Rural Connectivity Crisis</h3>
                    <p className="text-gray-700 text-sm">Rural users suffered most from poor signals due to long distances from cell towers, creating barriers to commerce and communication.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 animate-on-scroll slide-left stagger-2 hover:scale-105 hover:shadow-xl transition-all duration-500">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 hover:rotate-12 transition-transform duration-300">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Impact</h3>
                    <p className="text-gray-700 text-sm">Commercial hubs reported significant downtime and financial losses due to unreliable internet connections.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordability Concerns</h3>
                    <p className="text-gray-700 text-sm">Users demanded low-cost solutions without hidden charges, making price accessibility crucial.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Barriers</h3>
                    <p className="text-gray-700 text-sm">Most users lacked technical expertise, requiring a plug-and-play design approach.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Trust</h3>
                    <p className="text-gray-700 text-sm">Strong loyalty to Airtel brand meant users were willing to adopt an Airtel-led connectivity solution.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl">
                <h3 className="text-lg font-semibold text-green-600 mb-2">Key Insight</h3>
                <p className="text-gray-700 text-sm italic">"No existing solution addressed rural connectivity and affordability at scale. Airtel ODU filled this critical gap."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:bg-gray-50/30 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">User Personas</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Amina - Rural Farmer */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-on-scroll scale-in stagger-1 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center">Amina</h3>
                <p className="text-green-100 text-center">Rural Farmer</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Age:</span>
                    <span className="text-gray-900 ml-2">35</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Location:</span>
                    <span className="text-gray-900 ml-2">Northern Nigeria</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Goals:</span>
                    <span className="text-gray-900 ml-2">Stay connected with buyers, access market prices, grow business</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Challenges:</span>
                    <span className="text-gray-900 ml-2">Weak signal, low tech exposure, affordability issues</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-700 text-sm italic">"Sometimes I can't reach my customers because the signal is too weak."</p>
                </div>
              </div>
            </div>

            {/* Chinedu - Small Business Owner */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-on-scroll scale-in stagger-2 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v-3h2l2.5-1.5L11 8H5V6h5.75c.65 0 1.2.35 1.5.88l1.25 2.12c.31.52.2 1.18-.24 1.58L12 12H8v3.5h3V18H4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center">Chinedu</h3>
                <p className="text-blue-100 text-center">Small Business Owner</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Age:</span>
                    <span className="text-gray-900 ml-2">28</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Location:</span>
                    <span className="text-gray-900 ml-2">Lagos</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Goals:</span>
                    <span className="text-gray-900 ml-2">Maintain smooth operations, avoid downtime</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Challenges:</span>
                    <span className="text-gray-900 ml-2">Lost sales due to outages, budget constraints</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm italic">"Every minute of downtime costs me money."</p>
                </div>
              </div>
            </div>

            {/* Ifeoma - IT Professional */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-on-scroll scale-in stagger-3 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,18C20,18.5 19.6,19 19,19H15C14.4,19 14,18.5 14,18V10C14,9.5 14.4,9 15,9H19C19.6,9 20,9.5 20,10M19,5H15A1,1 0 0,0 14,6V8H16V7H18V17H16V16H14V18A1,1 0 0,0 15,19H19A1,1 0 0,0 20,18V6A1,1 0 0,0 19,5M13,17H11V15H13M13,13H11V11H13M13,9H11V7H13V9Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center">Ifeoma</h3>
                <p className="text-purple-100 text-center">IT Professional</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Age:</span>
                    <span className="text-gray-900 ml-2">30</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Location:</span>
                    <span className="text-gray-900 ml-2">Abuja</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Goals:</span>
                    <span className="text-gray-900 ml-2">Reliable high-speed internet for video calls and cloud services</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Challenges:</span>
                    <span className="text-gray-900 ml-2">Frequent disruptions, high data demands</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-700 text-sm italic">"I can't afford interruptions during important meetings."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Design Solution</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Technical Innovation</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Based on our research insights, we designed a comprehensive outdoor unit solution that addresses the core connectivity challenges faced by Nigerian users across all demographics.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">High-gain Antennas</h4>
                    <p className="text-gray-600 text-sm">Advanced antenna technology for stronger signal capture and transmission</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Plug-and-play Setup</h4>
                    <p className="text-gray-600 text-sm">Simple installation process for users without technical expertise</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Weather-resistant Design</h4>
                    <p className="text-gray-600 text-sm">Durable construction optimized for Nigeria's diverse climate conditions</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Affordable Materials</h4>
                    <p className="text-gray-600 text-sm">Cost-effective components to maintain accessibility while ensuring quality</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Scalability</h4>
                    <p className="text-gray-600 text-sm">Multi-device support capability for commercial and enterprise use</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Airtel ODU</h3>
                  <p className="text-gray-600 mb-6">Bridging Nigeria's connectivity gap through innovative outdoor unit technology</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-green-600 text-lg">70%</div>
                      <div className="text-gray-600">Rural reliability boost</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-blue-600 text-lg">60%</div>
                      <div className="text-gray-600">Downtime reduction</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-purple-600 text-lg">85%</div>
                      <div className="text-gray-600">Easy installation</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-teal-600 text-lg">90%</div>
                      <div className="text-gray-600">Durability rating</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SWOT Analysis Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:bg-gray-50/30 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">Comparative SWOT Analysis</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-on-scroll fade-in stagger-1">
            Understanding our competitive landscape and positioning Airtel ODU against MTN, Glo, and Smile solutions
          </p>
          
          {/* Airtel ODU SWOT */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8 animate-on-scroll scale-in stagger-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 hover:scale-110 hover:rotate-12 transition-all duration-300 p-2">
                <img 
                  src="/images/airtel/airtel-logo.png" 
                  alt="Airtel Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Airtel ODU</h3>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Strengths */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 animate-on-scroll slide-up stagger-1 hover:scale-105 hover:shadow-lg transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-green-700">Strengths</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Strong brand trust and large customer base</li>
                  <li>• Unique ODU product for poor indoor signals</li>
                  <li>• Affordable pricing and plug-and-play setup</li>
                  <li>• Weather-resistant design for Nigeria's climate</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 animate-on-scroll slide-up stagger-2 hover:scale-105 hover:shadow-lg transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 hover:rotate-180 transition-transform duration-500">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-red-700">Weaknesses</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Upfront cost barrier for low-income households</li>
                  <li>• Coverage depends on tower proximity</li>
                  <li>• Limited market awareness initially</li>
                </ul>
              </div>

              {/* Opportunities */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 8.207a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11.414 9.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-blue-700">Opportunities</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Expand into underserved African markets</li>
                  <li>• Create premium versions for enterprises</li>
                  <li>• Leverage government digital inclusion partnerships</li>
                </ul>
              </div>

              {/* Threats */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-orange-700">Threats</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Competitors may release similar ODU devices</li>
                  <li>• Economic instability affecting spending</li>
                  <li>• Rapid 5G transition shift in demand</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Competitors Analysis */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* MTN Analysis */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-white">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <h3 className="text-2xl font-bold">MTN</h3>
                </div>
                <p className="text-yellow-100 mt-2">Market leader in urban coverage and scale</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Strengths
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Largest market share in Nigeria</li>
                    <li>• Strong urban network coverage</li>
                    <li>• Broad product portfolio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Weaknesses
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Weak rural penetration vs Airtel</li>
                    <li>• Indoor MiFi/routers poor in low-signal zones</li>
                    <li>• Higher pricing tiers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Key Threat to Airtel ODU:</h5>
                  <p className="text-sm text-gray-700">May introduce similar ODU hardware to capture rural markets</p>
                </div>
              </div>
            </div>

            {/* Glo Analysis */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">G</span>
                  </div>
                  <h3 className="text-2xl font-bold">Glo</h3>
                </div>
                <p className="text-green-100 mt-2">Competitive on price, struggles with reliability</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Strengths
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lowest data costs in Nigerian market</li>
                    <li>• Strong semi-urban penetration</li>
                    <li>• Aggressive promotions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Weaknesses
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Poor network reliability reputation</li>
                    <li>• Weak infrastructure investment</li>
                    <li>• Poor customer service ratings</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-2">Competitive Position:</h5>
                  <p className="text-sm text-gray-700">Least competitive in professional/business use cases</p>
                </div>
              </div>
            </div>

            {/* Smile Analysis */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <h3 className="text-2xl font-bold">Smile</h3>
                </div>
                <p className="text-purple-100 mt-2">High-speed urban focus, premium positioning</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Strengths
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• High-speed 4G/5G networks in urban areas</li>
                    <li>• Reliable performance in major cities</li>
                    <li>• Strong technical infrastructure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Weaknesses
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Premium pricing limits accessibility</li>
                    <li>• Limited rural coverage and penetration</li>
                    <li>• Smaller market share compared to MTN/Airtel</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-700 mb-2">Competitive Position:</h5>
                  <p className="text-sm text-gray-700">Strong in premium urban segment but vulnerable to rural-focused solutions like ODU</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Positioning */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Market Positioning Summary</h3>
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 border border-gray-200">
                  <img 
                    src="/images/airtel/airtel-logo.png" 
                    alt="Airtel Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Airtel ODU</h4>
                <p className="text-sm text-gray-600">Best rural and SME connectivity solution. Differentiates by addressing weak indoor coverage and affordability.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">MTN</h4>
                <p className="text-sm text-gray-600">Market leader in urban coverage and scale, but vulnerable in rural segments where ODU excels.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">G</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Glo</h4>
                <p className="text-sm text-gray-600">Competitive on price, but struggles with reliability and infrastructure limitations.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Smile</h4>
                <p className="text-sm text-gray-600">Premium urban provider with high speeds but limited rural reach and higher costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:bg-gray-50/30 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">Results & Impact</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200 animate-on-scroll scale-in stagger-1 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center hover:rotate-12 hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Connectivity</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>+70% reliability in rural areas</p>
                <p>+60% downtime reduction in businesses</p>
                <p>+50% performance improvement in urban areas</p>
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200 animate-on-scroll scale-in stagger-2 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center hover:rotate-12 hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">User Satisfaction</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>85% found installation easy</p>
                <p>75% satisfied with pricing</p>
                <p>90% rated durability highly</p>
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200 animate-on-scroll scale-in stagger-3 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center hover:rotate-12 hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Impact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>+15% revenue growth for Airtel</p>
                <p>40% of businesses expanded services</p>
                <p>80% willing to recommend to others</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Key Learnings</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    100%
                  </div>
                  <p className="text-gray-700">User-centered design focus drives adoption</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    70%
                  </div>
                  <p className="text-gray-700">Of insights came from field research</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    80%
                  </div>
                  <p className="text-gray-700">Success hinged on designing scalable solutions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    75%
                  </div>
                  <p className="text-gray-700">Of users valued affordability as much as performance</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    90%
                  </div>
                  <p className="text-gray-700">Of refinements came from iteration and testing</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    ❤️
                  </div>
                  <p className="text-gray-700">Empathy was key to designing for diverse Nigerian users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/50 hover:bg-gray-100/70 transition-all duration-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 animate-on-scroll slide-up">Conclusion</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 animate-on-scroll fade-in stagger-1">
            The Airtel ODU case study illustrates how user-centered research and empathy-driven design can solve real connectivity challenges. By addressing the unique needs of Nigerian users—farmers, small businesses, and professionals—Airtel ODU succeeded in creating an affordable, durable, and scalable solution that not only improved connectivity but also drove business growth and user trust.
          </p>
          
          <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-200 rounded-2xl p-8 mb-12 animate-on-scroll scale-in stagger-2 hover:scale-105 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact Statement</h3>
            <p className="text-gray-700 leading-relaxed">
              This project demonstrated that when technology is designed with deep empathy for users' real-world challenges, it can bridge digital divides and create meaningful opportunities for economic growth across diverse communities.
            </p>
          </div>

          <Link href="/projects" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-all duration-300 animate-on-scroll slide-up stagger-3">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </section>
    </div>
  );
}