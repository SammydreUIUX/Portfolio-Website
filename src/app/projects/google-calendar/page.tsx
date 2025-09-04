'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function GoogleCalendarCaseStudy() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-indigo-100/60"></div>
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
            <div className="hover:scale-105 transition-all duration-300">
              <img 
                src="/images/google-calendar/google-calendar-logo.png" 
                alt="Google Calendar Logo"
                className="w-72 h-72 object-contain drop-shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              {/* Fallback logo container - hidden by default */}
              <div className="hidden w-72 h-72 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-8xl">GC</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 animate-on-scroll slide-up stagger-2">
              Google Calendar Redesign
            </h1>
            <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full border border-orange-200 animate-on-scroll slide-up stagger-2">
              Work in Progress
            </span>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-on-scroll slide-up stagger-3">
            Transforming scheduling from chaos to clarity — Smart AI-powered calendar for focus and productivity
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center text-sm animate-on-scroll fade-in stagger-4">
            <div className="flex flex-col items-center">
              <span className="text-gray-600">Role</span>
              <span className="text-gray-900 font-medium">UX/UI Designer</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-600">Duration</span>
              <span className="text-gray-900 font-medium">3 weeks</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-600">Focus</span>
              <span className="text-gray-900 font-medium">Individual Project</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-600">Impact</span>
              <span className="text-blue-600 font-medium">40% faster scheduling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 hover:bg-white/90 transition-all duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-on-scroll slide-left">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I set out to redesign Google Calendar with a focus on smarter scheduling and better focus management. My goal was to reduce the time people spend coordinating meetings, help them protect their focus hours, and make the experience more inclusive for all users.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The vision was to transform Google Calendar from a passive tool into an active productivity partner that anticipates needs and streamlines workflows.
                </p>
              </div>
              
              <div className="space-y-3 animate-on-scroll slide-left stagger-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Objectives</h3>
                <div className="flex items-center animate-on-scroll slide-left stagger-1 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Reduce scheduling coordination time by 40%</span>
                </div>
                <div className="flex items-center animate-on-scroll slide-left stagger-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Protect and prioritize focus time blocks</span>
                </div>
                <div className="flex items-center animate-on-scroll slide-left stagger-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Enhance accessibility and inclusive design</span>
                </div>
                <div className="flex items-center animate-on-scroll slide-left stagger-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Create seamless cross-platform experience</span>
                </div>
              </div>
            </div>

            <div className="relative animate-on-scroll slide-right">
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Focus</h3>
                  <p className="text-gray-600 text-sm">AI-powered scheduling with human-centered design principles</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:bg-gray-50/50 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">The Problem</h2>
          
          {/* Main Problem Statement */}
          <div className="bg-red-50 border-l-4 border-red-400 p-8 rounded-r-lg mb-12 animate-on-scroll slide-up">
            <div className="flex items-start">
              <svg className="w-8 h-8 text-red-400 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  Current Google Calendar Flow: 14 Interactions to Schedule One Meeting
                </h3>
                <p className="text-red-700 text-lg leading-relaxed">
                  Scheduling a simple 30-minute sync with 2 teammates across different time zones 
                  requires extensive manual coordination, context switching, and mental time zone calculations.
                </p>
              </div>
            </div>
          </div>

          {/* Scenario */}
          <div className="bg-blue-50 p-8 rounded-lg mb-12 animate-on-scroll slide-up stagger-1">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Scenario</h3>
            <p className="text-lg text-blue-700">
              <strong>Goal:</strong> Book a 30-minute sync with 2 teammates in different time zones. Everyone is busy.
            </p>
          </div>

          {/* Current UI Screenshots */}
          <div className="mb-12 animate-on-scroll slide-up stagger-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current Google Calendar Interface</h3>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <img
                  src="/images/google-calendar/present-ui.png"
                  alt="Google Calendar main interface showing weekly view"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Present UI of the Google Calendar - Main weekly view interface
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <img
                  src="/images/google-calendar/present-ui2.png"
                  alt="Google Calendar event creation dialog with time zone options"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Event creation dialog showing time zone complexity
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Flow */}
          <div className="mb-12 animate-on-scroll slide-up stagger-3">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Current Flow: 14 Interaction Steps</h3>
            <div className="space-y-4">
              {[
                { step: 1, action: "Open Google Calendar", detail: "Load weekly view, scan visually for free spots." },
                { step: 2, action: "Create Event (Click +)", detail: "Opens event dialog." },
                { step: 3, action: "Add Title + Basic Info", detail: "Manual typing (e.g., \"Weekly Sync\")." },
                { step: 4, action: "Add Attendees", detail: "Type names/emails." },
                { step: 5, action: "Click \"Find a Time\" tab", detail: "Switches to availability view." },
                { step: 6, action: "Scroll through each attendee's schedule", detail: "Check overlaps manually." },
                { step: 7, action: "Translate across time zones", detail: "Mentally calculate local times (no smart help)." },
                { step: 8, action: "Guess a candidate time slot", detail: "Pick what looks like an overlap." },
                { step: 9, action: "Send Invitation", detail: "Click \"Save\" → \"Send.\"" },
                { step: 10, action: "Wait for RSVP responses", detail: "Notifications trickle in (1 accepts, 1 declines)." },
                { step: 11, action: "Reopen Calendar", detail: "Go back to the event." },
                { step: 12, action: "Propose Alternative Time", detail: "Re-check \"Find a Time,\" repeat mental scanning." },
                { step: 13, action: "Send Updated Invite", detail: "Click \"Save changes\" → resend notifications." },
                { step: 14, action: "Confirm with Attendees via Email/Chat", detail: "\"Does this time work better?\" back-and-forth continues." }
              ].map((item) => (
                <div key={item.step} className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.action}</h4>
                    <p className="text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pain Points */}
          <div className="mb-12 animate-on-scroll slide-up stagger-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🟥 Pain Points Along the Way</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <h4 className="font-semibold text-red-800">Multiple Context Switches</h4>
                </div>
                <p className="text-red-700">
                  Calendar ↔ Gmail/Chat back-and-forth disrupts workflow
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-semibold text-red-800">Manual Overlap Checks</h4>
                </div>
                <p className="text-red-700">
                  No AI assistance for finding optimal meeting times
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-semibold text-red-800">Time Zone Math</h4>
                </div>
                <p className="text-red-700">
                  Error-prone mental calculations across multiple zones
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h4 className="font-semibold text-red-800">Cognitive Load</h4>
                </div>
                <p className="text-red-700">
                  Tracking who responded, who declined, what alternatives work
                </p>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 animate-on-scroll slide-up stagger-5">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Insights</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700">The current flow requires <strong>14 separate interactions</strong> for a simple 3-person meeting</span>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700">Time zone coordination relies entirely on <strong>manual mental calculations</strong></span>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700">Multiple context switches break user focus and <strong>increase cognitive load</strong></span>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700">No intelligent suggestions for optimal meeting times based on <strong>actual availability patterns</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/50 hover:bg-gray-100/70 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">Research & Discovery</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="animate-on-scroll slide-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Research Method</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I interviewed 6 users including a remote team lead, a freelancer, and students to learn about their pain points. I also audited competitors like Outlook, Cron, and Motion to identify opportunities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border animate-on-scroll scale-in stagger-1">
                  <h4 className="font-semibold text-blue-600 mb-2">User Interviews</h4>
                  <p className="text-sm text-gray-600">6 participants across different roles and contexts</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border animate-on-scroll scale-in stagger-2">
                  <h4 className="font-semibold text-purple-600 mb-2">Competitive Analysis</h4>
                  <p className="text-sm text-gray-600">Outlook, Cron, Motion, and other calendar apps</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start animate-on-scroll slide-right stagger-1">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <p className="text-gray-700">People want to spend fewer clicks scheduling meetings</p>
                </div>
                <div className="flex items-start animate-on-scroll slide-right stagger-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <p className="text-gray-700">Focus time is undervalued and often interrupted</p>
                </div>
                <div className="flex items-start animate-on-scroll slide-right stagger-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <p className="text-gray-700">Teams need visibility into schedules without clutter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:bg-gray-50/30 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">User Personas & Journeys</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Remote Manager */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-on-scroll scale-in stagger-1 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v-3h2l2.5-1.5L11 8H5V6h5.75c.65 0 1.2.35 1.5.88l1.25 2.12c.31.52.2 1.18-.24 1.58L12 12H8v3.5h3V18H4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center">Sarah</h3>
                <p className="text-blue-100 text-center">Remote Manager</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Challenge:</span>
                    <span className="text-gray-900 ml-2">Cross-time-zone scheduling</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Goal:</span>
                    <span className="text-gray-900 ml-2">Schedule meetings in under a minute</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Need:</span>
                    <span className="text-gray-900 ml-2">Clear visibility of team availability</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm italic">"I need to quickly find meeting slots that work across 3 time zones."</p>
                </div>
              </div>
            </div>

            {/* Freelancer */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-on-scroll scale-in stagger-2 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center">Marcus</h3>
                <p className="text-green-100 text-center">Freelancer</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Challenge:</span>
                    <span className="text-gray-900 ml-2">Protecting deep work hours</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Goal:</span>
                    <span className="text-gray-900 ml-2">2 extra hours/week of focus time</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Need:</span>
                    <span className="text-gray-900 ml-2">Automatic focus time protection</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-700 text-sm italic">"I need my calendar to help me preserve blocks for creative work."</p>
                </div>
              </div>
            </div>

            {/* Student */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-on-scroll scale-in stagger-3 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center">Alex</h3>
                <p className="text-purple-100 text-center">Student</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Challenge:</span>
                    <span className="text-gray-900 ml-2">Complex navigation and reminders</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Goal:</span>
                    <span className="text-gray-900 ml-2">Simple, accessible scheduling</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Need:</span>
                    <span className="text-gray-900 ml-2">Voice commands and shortcuts</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-700 text-sm italic">"I need better accessibility features and clearer navigation."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Ideation & Design Solutions</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Core Design Concepts</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                I translated my wireframes into high-fidelity mockups in Figma for both desktop and mobile, focusing on four main concepts that emerged from user research.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Smart Scheduling Assistant</h4>
                    <p className="text-gray-600 text-sm">AI that suggests optimal meeting slots based on preferences and availability</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Focus Mode</h4>
                    <p className="text-gray-600 text-sm">Blocks and protects deep work hours with intelligent meeting deflection</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Team Availability View</h4>
                    <p className="text-gray-600 text-sm">Clear, shared calendar with color-coded availability insights</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Accessibility Enhancements</h4>
                    <p className="text-gray-600 text-sm">Voice commands, high-contrast mode, and improved keyboard shortcuts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Calendar</h3>
                  <p className="text-gray-600 mb-6">AI-powered productivity partner for modern professionals</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-blue-600 text-lg">40%</div>
                      <div className="text-gray-600">Faster scheduling</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-green-600 text-lg">2hrs</div>
                      <div className="text-gray-600">Extra focus time/week</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-purple-600 text-lg">25%</div>
                      <div className="text-gray-600">Fewer navigation steps</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-orange-600 text-lg">100%</div>
                      <div className="text-gray-600">Cross-platform sync</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype & Testing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:bg-gray-50/30 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">Interactive Prototype & Testing</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="animate-on-scroll slide-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Prototype Development</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I built an interactive prototype in Figma that compared the old Google Calendar flow vs. my redesigned flow. This allowed me to test how much faster and clearer scheduling could become.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Key Flow Comparisons</h4>
                <div className="space-y-3">
                  <div className="flex items-center animate-on-scroll slide-left stagger-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">AI scheduling vs. manual slot finding</span>
                  </div>
                  <div className="flex items-center animate-on-scroll slide-left stagger-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Focus Mode activation and protection</span>
                  </div>
                  <div className="flex items-center animate-on-scroll slide-left stagger-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Team availability visualization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Usability Testing Results</h3>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-xl shadow-md border animate-on-scroll scale-in stagger-1">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold text-green-600 mr-4">✓</span>
                    <p className="text-gray-700">AI scheduling saved users multiple steps</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md border animate-on-scroll scale-in stagger-2">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold text-blue-600 mr-4">✓</span>
                    <p className="text-gray-700">Focus Mode made protecting deep work easier</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md border animate-on-scroll scale-in stagger-3">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold text-orange-600 mr-4">!</span>
                    <p className="text-gray-700">Users wanted AI to explain why certain times were suggested</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Testing Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-600 mb-3">What Worked</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Users found AI suggestions intuitive and helpful</li>
                  <li>• Focus Mode was immediately understood and valued</li>
                  <li>• Team view reduced coordination overhead significantly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600 mb-3">Areas for Improvement</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Need more transparency in AI decision-making</li>
                  <li>• Some accessibility features needed refinement</li>
                  <li>• Cross-platform consistency required attention</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Outcomes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:bg-gray-50/30 transition-all duration-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">Impact & Outcomes</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200 animate-on-scroll scale-in stagger-1 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center hover:rotate-12 hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Scheduling Efficiency</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>40% faster scheduling with AI suggestions</p>
                <p>Reduced coordination time significantly</p>
                <p>Streamlined cross-timezone meetings</p>
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200 animate-on-scroll scale-in stagger-2 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center hover:rotate-12 hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Focus Protection</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>2 extra hours/week of focus time</p>
                <p>Reduced meeting interruptions</p>
                <p>Better work-life balance</p>
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200 animate-on-scroll scale-in stagger-3 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center hover:rotate-12 hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Accessibility</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>25% reduction in navigation steps</p>
                <p>Enhanced screen reader support</p>
                <p>Voice command integration</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Projected Impact</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <p className="text-gray-700 text-sm">Faster scheduling with AI suggestions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2hrs</div>
                <p className="text-gray-700 text-sm">Extra focus time preserved per week</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                <p className="text-gray-700 text-sm">Fewer navigation steps for accessibility users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/50 hover:bg-gray-100/70 transition-all duration-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-on-scroll slide-up">Reflection & Learnings</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 animate-on-scroll scale-in stagger-1">
                <h3 className="text-lg font-bold text-blue-600 mb-3">🤖 Balancing AI & Trust</h3>
                <p className="text-gray-700 text-sm">Through this project, I learned how important it is to balance automation with user trust. Users appreciate AI assistance but want transparency in decision-making.</p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200 animate-on-scroll scale-in stagger-2">
                <h3 className="text-lg font-bold text-green-600 mb-3">♿ Accessibility from the Start</h3>
                <p className="text-gray-700 text-sm">I saw the value of designing with accessibility in mind from the beginning rather than retrofitting features later.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 animate-on-scroll scale-in stagger-3">
                <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 User-Centered Iteration</h3>
                <p className="text-gray-700 text-sm">Early user testing revealed insights that significantly improved the final design, especially around AI explanation and transparency.</p>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 animate-on-scroll scale-in stagger-4">
                <h3 className="text-lg font-bold text-orange-600 mb-3">🔮 Future Integration</h3>
                <p className="text-gray-700 text-sm">The next step would be exploring deeper integrations with Gmail and Docs to make scheduling even more seamless.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaway</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Great calendar design isn't just about organizing time—it's about respecting and optimizing how people think, work, and collaborate. The most powerful features are often the most invisible ones.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 animate-on-scroll slide-up">Conclusion</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 animate-on-scroll fade-in stagger-1">
            This Google Calendar redesign demonstrates how thoughtful UX design can transform everyday tools into intelligent productivity partners. By prioritizing user needs and leveraging AI thoughtfully, we can create experiences that not only save time but actively protect what matters most—focus and meaningful work.
          </p>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 rounded-2xl p-8 mb-12 animate-on-scroll scale-in stagger-2">
            <p className="text-gray-700 leading-relaxed">
              The success of this project reinforced my belief that the best technology feels invisible—it anticipates needs, removes friction, and empowers users to focus on what truly matters.
            </p>
          </div>

          <Link href="/projects" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 animate-on-scroll slide-up stagger-3">
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