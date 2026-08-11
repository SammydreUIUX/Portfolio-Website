'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const SW_BG = '#FAFAF8';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

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
    <div className="min-h-screen" style={{ backgroundColor: SW_BG, color: SW_INK }}>
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
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-on-scroll fade-in">
            <Link href="/#featured-work" className="inline-flex items-center hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>
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
                className="w-72 h-72 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              {/* Fallback logo container - hidden by default */}
              <div className="hidden w-72 h-72 items-center justify-center border" style={{ backgroundColor: SW_INK, borderColor: SW_LINE }}>
                <span className="text-white font-bold text-8xl">GC</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="sw-serif text-4xl lg:text-5xl font-bold animate-on-scroll slide-up stagger-2">
              Google Calendar Redesign
            </h1>
            <span className="sw-label border px-3 py-1 animate-on-scroll slide-up stagger-2" style={{ borderColor: SW_LINE, color: SW_GRAY }}>
              Work in Progress
            </span>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-on-scroll slide-up stagger-3" style={{ color: SW_GRAY }}>
            Transforming scheduling from chaos to clarity: smart AI-powered calendar for focus and productivity
          </p>

          <div className="flex flex-wrap gap-6 justify-center text-sm animate-on-scroll fade-in stagger-4">
            <div className="flex flex-col items-center">
              <span style={{ color: SW_GRAY }}>Role</span>
              <span className="font-medium">UX/UI Designer</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: SW_GRAY }}>Duration</span>
              <span className="font-medium">3 weeks</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: SW_GRAY }}>Focus</span>
              <span className="font-medium">Individual Project</span>
            </div>
            <div className="flex flex-col items-center">
              <span style={{ color: SW_GRAY }}>Impact</span>
              <span className="font-medium">40% faster scheduling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-on-scroll slide-left">
                <h2 className="sw-serif text-3xl font-bold mb-6">Project Overview</h2>
                <p className="leading-relaxed mb-6" style={{ color: SW_GRAY }}>
                  I set out to redesign Google Calendar with a focus on smarter scheduling and better focus management. My goal was to reduce the time people spend coordinating meetings, help them protect their focus hours, and make the experience more inclusive for all users.
                </p>
                <p className="leading-relaxed" style={{ color: SW_GRAY }}>
                  The vision was to transform Google Calendar from a passive tool into an active productivity partner that anticipates needs and streamlines workflows.
                </p>
              </div>

              <div className="space-y-3 animate-on-scroll slide-left stagger-2">
                <h3 className="text-xl font-semibold mb-4">Key Objectives</h3>
                <div className="flex items-center animate-on-scroll slide-left stagger-1 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 flex-shrink-0 mr-3" style={{ backgroundColor: SW_INK }}></div>
                  <span style={{ color: SW_GRAY }}>Reduce scheduling coordination time by 40%</span>
                </div>
                <div className="flex items-center animate-on-scroll slide-left stagger-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 flex-shrink-0 mr-3" style={{ backgroundColor: SW_INK }}></div>
                  <span style={{ color: SW_GRAY }}>Protect and prioritize focus time blocks</span>
                </div>
                <div className="flex items-center animate-on-scroll slide-left stagger-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 flex-shrink-0 mr-3" style={{ backgroundColor: SW_INK }}></div>
                  <span style={{ color: SW_GRAY }}>Enhance accessibility and inclusive design</span>
                </div>
                <div className="flex items-center animate-on-scroll slide-left stagger-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 flex-shrink-0 mr-3" style={{ backgroundColor: SW_INK }}></div>
                  <span style={{ color: SW_GRAY }}>Create seamless cross-platform experience</span>
                </div>
              </div>
            </div>

            <div className="relative animate-on-scroll slide-right">
              <div className="relative z-10 bg-white p-8 border" style={{ borderColor: SW_LINE }}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:rotate-6 transition-transform duration-300" style={{ backgroundColor: SW_INK }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Design Focus</h3>
                  <p className="text-sm" style={{ color: SW_GRAY }}>AI-powered scheduling with human-centered design principles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-4xl font-bold text-center mb-16 animate-on-scroll slide-up">The Problem</h2>

          {/* Main Problem Statement */}
          <div className="bg-white p-8 border border-l-4 mb-12 animate-on-scroll slide-up" style={{ borderColor: SW_LINE, borderLeftColor: SW_INK }}>
            <div className="flex items-start">
              <svg className="w-8 h-8 mt-1 mr-4 flex-shrink-0" style={{ color: SW_GRAY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  The Timezone Puzzle: When &quot;3 o&apos;clock&quot; Means 3 Different Times
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: SW_GRAY }}>
                  Scheduling with friends or teammates across time zones turns into a mental math nightmare.
                  When you say &quot;Let&apos;s meet at 3 PM,&quot; that&apos;s 8 PM for your friend in Nigeria and 12:30 AM for your colleague in India.
                </p>
              </div>
            </div>
          </div>

          {/* Scenario */}
          <div className="bg-white border p-8 mb-12 animate-on-scroll slide-up stagger-1" style={{ borderColor: SW_LINE }}>
            <h3 className="text-xl font-bold mb-4">The Problem in Action</h3>
            <div className="space-y-4">
              <p className="text-lg" style={{ color: SW_GRAY }}>
                <strong style={{ color: SW_INK }}>Imagine:</strong> You want to schedule a game night with two friends
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-4 border" style={{ borderColor: SW_LINE }}>
                  <div className="font-semibold">🇨🇦 You (Canada)</div>
                  <div style={{ color: SW_GRAY }}>3:00 PM - Perfect afternoon time</div>
                </div>
                <div className="bg-white p-4 border" style={{ borderColor: SW_LINE }}>
                  <div className="font-semibold">🇳🇬 Friend (Nigeria)</div>
                  <div style={{ color: SW_GRAY }}>8:00 PM - Getting late, dinner time</div>
                </div>
                <div className="bg-white p-4 border" style={{ borderColor: SW_LINE }}>
                  <div className="font-semibold">🇮🇳 Friend (India)</div>
                  <div className="font-semibold">12:30 AM - Already asleep!</div>
                </div>
              </div>
              <p className="text-sm italic" style={{ color: SW_GRAY }}>
                Result: Endless back-and-forth messages, mental timezone math, and frustrated friends
              </p>
            </div>
          </div>

          {/* Current UI Screenshots */}
          <div className="mb-12 animate-on-scroll slide-up stagger-2">
            <h3 className="text-2xl font-bold mb-8 text-center">Current Google Calendar Interface</h3>
            <div className="space-y-8">
              <div className="bg-white p-6 border" style={{ borderColor: SW_LINE }}>
                <img
                  src="/images/google-calendar/present-ui.png"
                  alt="Google Calendar main interface showing weekly view"
                  className="w-full"
                />
                <p className="text-sm mt-4 text-center" style={{ color: SW_GRAY }}>
                  Present UI of the Google Calendar - Main weekly view interface
                </p>
              </div>

              <div className="bg-white p-6 border" style={{ borderColor: SW_LINE }}>
                <img
                  src="/images/google-calendar/present-ui2.png"
                  alt="Google Calendar event creation dialog with time zone options"
                  className="w-full"
                />
                <p className="text-sm mt-4 text-center" style={{ color: SW_GRAY }}>
                  Event creation dialog showing time zone complexity
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Flow */}
          <div className="mb-12 animate-on-scroll slide-up stagger-3">
            <h3 className="text-2xl font-bold mb-6">The Timezone Coordination Nightmare</h3>
            <p className="mb-6" style={{ color: SW_GRAY }}>Here&apos;s what happens when you try to schedule that game night with your friends across time zones:</p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Before: Current Flow */}
              <div className="bg-white p-6 border" style={{ borderColor: SW_LINE }}>
                <h4 className="font-bold mb-4 flex items-center">
                  <span className="rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2 border" style={{ borderColor: SW_INK }}>❌</span>
                  Current Flow: 8+ Back-and-Forth Messages
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-xs">1.</span>
                    <div className="min-w-0">
                      <div className="font-medium">Send initial message</div>
                      <div className="text-xs" style={{ color: SW_GRAY }}>&quot;Hey, game night Saturday at 3 PM?&quot;</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-xs">2.</span>
                    <div className="min-w-0">
                      <div className="font-medium">Friend from Nigeria responds</div>
                      <div className="text-xs" style={{ color: SW_GRAY }}>&quot;That&apos;s 8 PM for me, bit late...&quot;</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-xs">3.</span>
                    <div className="min-w-0">
                      <div className="font-medium">Friend from India responds</div>
                      <div className="text-xs" style={{ color: SW_GRAY }}>&quot;12:30 AM? I&apos;ll be sleeping 😴&quot;</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-xs">4.</span>
                    <div className="min-w-0">
                      <div className="font-medium">You do mental math</div>
                      <div className="text-xs" style={{ color: SW_GRAY }}>&quot;Let me think... what about 11 AM my time?&quot;</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-xs">5.</span>
                    <div className="min-w-0">
                      <div className="font-medium">More confusion</div>
                      <div className="text-xs" style={{ color: SW_GRAY }}>&quot;Wait, what time is that for me again?&quot;</div>
                    </div>
                  </div>
                  <div className="text-center mt-4 p-2 border text-xs font-medium" style={{ borderColor: SW_LINE, color: SW_GRAY }}>
                    🕐 15+ minutes of confusion, frustration, and mental math
                  </div>
                </div>
              </div>

              {/* After: Smart Solution */}
              <div className="bg-white p-6 border" style={{ borderColor: SW_LINE }}>
                <h4 className="font-bold mb-4 flex items-center">
                  <span className="rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2 border" style={{ borderColor: SW_INK }}>✅</span>
                  Smart Helper Solution: 1 Simple Action
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-xs">1.</span>
                    <div className="min-w-0">
                      <div className="font-medium">Tell your smart helper</div>
                      <div className="text-xs" style={{ color: SW_GRAY }}>&quot;Find a time for game night with Sarah and Raj&quot;</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-xs">2.</span>
                    <div className="min-w-0">
                      <div className="font-medium">AI analyzes all schedules</div>
                      <div className="text-xs" style={{ color: SW_GRAY }}>Considers work hours, sleep times, and preferences</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-xs">3.</span>
                    <div className="min-w-0">
                      <div className="font-medium">Perfect suggestion appears</div>
                      <div className="text-xs" style={{ color: SW_GRAY }}>&quot;Best time: Saturday 10 AM (Canada) = 3 PM (Nigeria) = 7:30 PM (India)&quot;</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-xs">4.</span>
                    <div className="min-w-0">
                      <div className="font-medium">One-click invite sent</div>
                      <div className="text-xs" style={{ color: SW_GRAY }}>Everyone sees their local time, no confusion</div>
                    </div>
                  </div>
                  <div className="text-center mt-4 p-2 border text-xs font-medium" style={{ borderColor: SW_LINE, color: SW_GRAY }}>
                    🚀 30 seconds total, zero mental math, happy friends
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points */}
          <div className="mb-12 animate-on-scroll slide-up stagger-4">
            <h3 className="text-2xl font-bold mb-8 text-center">🟥 Pain Points Along the Way</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 border" style={{ borderColor: SW_LINE }}>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 mr-3" style={{ color: SW_GRAY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <h4 className="font-semibold">Multiple Context Switches</h4>
                </div>
                <p style={{ color: SW_GRAY }}>
                  Calendar ↔ Gmail/Chat back-and-forth disrupts workflow
                </p>
              </div>

              <div className="bg-white p-6 border" style={{ borderColor: SW_LINE }}>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 mr-3" style={{ color: SW_GRAY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-semibold">Manual Overlap Checks</h4>
                </div>
                <p style={{ color: SW_GRAY }}>
                  No AI assistance for finding optimal meeting times
                </p>
              </div>

              <div className="bg-white p-6 border" style={{ borderColor: SW_LINE }}>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 mr-3" style={{ color: SW_GRAY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-semibold">Time Zone Math</h4>
                </div>
                <p style={{ color: SW_GRAY }}>
                  Error-prone mental calculations across multiple zones
                </p>
              </div>

              <div className="bg-white p-6 border" style={{ borderColor: SW_LINE }}>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 mr-3" style={{ color: SW_GRAY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h4 className="font-semibold">Cognitive Load</h4>
                </div>
                <p style={{ color: SW_GRAY }}>
                  Tracking who responded, who declined, what alternatives work
                </p>
              </div>
            </div>
          </div>

          {/* Visual Timezone Comparison */}
          <div className="mb-12 animate-on-scroll slide-up stagger-4">
            <h3 className="text-2xl font-bold mb-8 text-center">The Visual Problem</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Before Visual */}
              <div className="bg-white p-6 border" style={{ borderColor: SW_LINE }}>
                <h4 className="text-lg font-bold mb-4 text-center">❌ Before: Timezone Confusion</h4>
                <div className="bg-white p-4 border" style={{ borderColor: SW_LINE }}>
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold">&quot;Let&apos;s meet at 3 o&apos;clock&quot;</div>
                    <div className="text-sm" style={{ color: SW_GRAY }}>But what does this actually mean?</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border" style={{ borderColor: SW_LINE }}>
                      <div className="flex items-center">
                        <span className="text-lg mr-2">🇨🇦</span>
                        <span className="font-medium">Canada</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">3:00 PM</div>
                        <div className="text-xs" style={{ color: SW_GRAY }}>Perfect!</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 border" style={{ borderColor: SW_LINE }}>
                      <div className="flex items-center">
                        <span className="text-lg mr-2">🇳🇬</span>
                        <span className="font-medium">Nigeria</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">8:00 PM</div>
                        <div className="text-xs" style={{ color: SW_GRAY }}>Getting late...</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 border" style={{ borderColor: SW_LINE }}>
                      <div className="flex items-center">
                        <span className="text-lg mr-2">🇮🇳</span>
                        <span className="font-medium">India</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">12:30 AM</div>
                        <div className="text-xs font-semibold">Sleeping! 😴</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* After Visual */}
              <div className="bg-white p-6 border" style={{ borderColor: SW_LINE }}>
                <h4 className="text-lg font-bold mb-4 text-center">✅ After: Smart Time Finding</h4>
                <div className="bg-white p-4 border" style={{ borderColor: SW_LINE }}>
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold">AI finds the perfect overlap</div>
                    <div className="text-sm" style={{ color: SW_GRAY }}>Everyone&apos;s awake and available!</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border" style={{ borderColor: SW_LINE }}>
                      <div className="flex items-center">
                        <span className="text-lg mr-2">🇨🇦</span>
                        <span className="font-medium">Canada</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">10:00 AM</div>
                        <div className="text-xs" style={{ color: SW_GRAY }}>Saturday morning ✓</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 border" style={{ borderColor: SW_LINE }}>
                      <div className="flex items-center">
                        <span className="text-lg mr-2">🇳🇬</span>
                        <span className="font-medium">Nigeria</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">3:00 PM</div>
                        <div className="text-xs" style={{ color: SW_GRAY }}>Perfect afternoon ✓</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 border" style={{ borderColor: SW_LINE }}>
                      <div className="flex items-center">
                        <span className="text-lg mr-2">🇮🇳</span>
                        <span className="font-medium">India</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">7:30 PM</div>
                        <div className="text-xs" style={{ color: SW_GRAY }}>Evening free time ✓</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-white p-8 border animate-on-scroll slide-up stagger-5" style={{ borderColor: SW_LINE }}>
            <h3 className="text-2xl font-bold mb-6 text-center">Why This Matters</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-1.5 h-1.5 mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: SW_INK }}></span>
                <span style={{ color: SW_GRAY }}>When you say <strong style={{ color: SW_INK }}>&quot;3 o&apos;clock&quot;</strong> to friends across time zones, it means 3 completely different times</span>
              </div>
              <div className="flex items-start">
                <span className="w-1.5 h-1.5 mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: SW_INK }}></span>
                <span style={{ color: SW_GRAY }}>People waste <strong style={{ color: SW_INK }}>15+ minutes</strong> doing mental timezone math and sending confused messages back and forth</span>
              </div>
              <div className="flex items-start">
                <span className="w-1.5 h-1.5 mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: SW_INK }}></span>
                <span style={{ color: SW_GRAY }}>A smart scheduling helper could find the perfect overlap in <strong style={{ color: SW_INK }}>30 seconds</strong> instead of 15 minutes</span>
              </div>
              <div className="flex items-start">
                <span className="w-1.5 h-1.5 mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: SW_INK }}></span>
                <span style={{ color: SW_GRAY }}>This simple improvement would make <strong style={{ color: SW_INK }}>global collaboration</strong> feel effortless instead of exhausting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-4xl font-bold text-center mb-16 animate-on-scroll slide-up">Research & Discovery</h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="animate-on-scroll slide-left">
                <h3 className="text-2xl font-semibold mb-6">Research Method</h3>
                <p className="leading-relaxed mb-6" style={{ color: SW_GRAY }}>
                  I interviewed 6 users including a remote team lead, a freelancer, and students to learn about their pain points. I also audited competitors like Outlook, Cron, and Motion to identify opportunities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border animate-on-scroll scale-in stagger-1" style={{ borderColor: SW_LINE }}>
                  <h4 className="font-semibold mb-2">User Interviews</h4>
                  <p className="text-sm" style={{ color: SW_GRAY }}>6 participants across different roles and contexts</p>
                </div>
                <div className="p-4 bg-white border animate-on-scroll scale-in stagger-2" style={{ borderColor: SW_LINE }}>
                  <h4 className="font-semibold mb-2">Competitive Analysis</h4>
                  <p className="text-sm" style={{ color: SW_GRAY }}>Outlook, Cron, Motion, and other calendar apps</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Key Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start animate-on-scroll slide-right stagger-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1" style={{ backgroundColor: SW_INK }}>
                    ✓
                  </div>
                  <p style={{ color: SW_GRAY }}>People want to spend fewer clicks scheduling meetings</p>
                </div>
                <div className="flex items-start animate-on-scroll slide-right stagger-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1" style={{ backgroundColor: SW_INK }}>
                    ✓
                  </div>
                  <p style={{ color: SW_GRAY }}>Focus time is undervalued and often interrupted</p>
                </div>
                <div className="flex items-start animate-on-scroll slide-right stagger-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1" style={{ backgroundColor: SW_INK }}>
                    ✓
                  </div>
                  <p style={{ color: SW_GRAY }}>Teams need visibility into schedules without clutter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-4xl font-bold text-center mb-16 animate-on-scroll slide-up">User Personas & Journeys</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Remote Manager */}
            <div className="bg-white border overflow-hidden animate-on-scroll scale-in stagger-1" style={{ borderColor: SW_LINE }}>
              <div className="p-6 text-white" style={{ backgroundColor: SW_INK }}>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v-3h2l2.5-1.5L11 8H5V6h5.75c.65 0 1.2.35 1.5.88l1.25 2.12c.31.52.2 1.18-.24 1.58L12 12H8v3.5h3V18H4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center">Sarah</h3>
                <p className="text-white/70 text-center">Remote Manager</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium" style={{ color: SW_GRAY }}>Challenge:</span>
                    <span className="ml-2">Cross-time-zone scheduling</span>
                  </div>
                  <div>
                    <span className="font-medium" style={{ color: SW_GRAY }}>Goal:</span>
                    <span className="ml-2">Schedule meetings in under a minute</span>
                  </div>
                  <div>
                    <span className="font-medium" style={{ color: SW_GRAY }}>Need:</span>
                    <span className="ml-2">Clear visibility of team availability</span>
                  </div>
                </div>
                <div className="mt-6 p-4 border-l-4" style={{ borderColor: SW_INK, backgroundColor: SW_BG }}>
                  <p className="text-sm italic" style={{ color: SW_GRAY }}>&quot;I need to quickly find meeting slots that work across 3 time zones.&quot;</p>
                </div>
              </div>
            </div>

            {/* Freelancer */}
            <div className="bg-white border overflow-hidden animate-on-scroll scale-in stagger-2" style={{ borderColor: SW_LINE }}>
              <div className="p-6 text-white" style={{ backgroundColor: SW_INK }}>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center">Marcus</h3>
                <p className="text-white/70 text-center">Freelancer</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium" style={{ color: SW_GRAY }}>Challenge:</span>
                    <span className="ml-2">Protecting deep work hours</span>
                  </div>
                  <div>
                    <span className="font-medium" style={{ color: SW_GRAY }}>Goal:</span>
                    <span className="ml-2">2 extra hours/week of focus time</span>
                  </div>
                  <div>
                    <span className="font-medium" style={{ color: SW_GRAY }}>Need:</span>
                    <span className="ml-2">Automatic focus time protection</span>
                  </div>
                </div>
                <div className="mt-6 p-4 border-l-4" style={{ borderColor: SW_INK, backgroundColor: SW_BG }}>
                  <p className="text-sm italic" style={{ color: SW_GRAY }}>&quot;I need my calendar to help me preserve blocks for creative work.&quot;</p>
                </div>
              </div>
            </div>

            {/* Student */}
            <div className="bg-white border overflow-hidden animate-on-scroll scale-in stagger-3" style={{ borderColor: SW_LINE }}>
              <div className="p-6 text-white" style={{ backgroundColor: SW_INK }}>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center">Alex</h3>
                <p className="text-white/70 text-center">Student</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium" style={{ color: SW_GRAY }}>Challenge:</span>
                    <span className="ml-2">Complex navigation and reminders</span>
                  </div>
                  <div>
                    <span className="font-medium" style={{ color: SW_GRAY }}>Goal:</span>
                    <span className="ml-2">Simple, accessible scheduling</span>
                  </div>
                  <div>
                    <span className="font-medium" style={{ color: SW_GRAY }}>Need:</span>
                    <span className="ml-2">Voice commands and shortcuts</span>
                  </div>
                </div>
                <div className="mt-6 p-4 border-l-4" style={{ borderColor: SW_INK, backgroundColor: SW_BG }}>
                  <p className="text-sm italic" style={{ color: SW_GRAY }}>&quot;I need better accessibility features and clearer navigation.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-4xl font-bold text-center mb-16">Ideation & Design Solutions</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">The Smart Helper Solution</h3>
              <p className="leading-relaxed mb-8" style={{ color: SW_GRAY }}>
                Instead of forcing users to do mental timezone math, I designed an AI-powered scheduling assistant that makes global coordination feel as simple as texting a friend down the street.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1" style={{ backgroundColor: SW_INK }}>🧠</div>
                  <div>
                    <h4 className="font-semibold mb-1">Smart Timezone Helper</h4>
                    <p className="text-sm" style={{ color: SW_GRAY }}>AI that instantly finds the perfect meeting time across any number of time zones</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1" style={{ backgroundColor: SW_INK }}>🎯</div>
                  <div>
                    <h4 className="font-semibold mb-1">One-Click Scheduling</h4>
                    <p className="text-sm" style={{ color: SW_GRAY }}>Tell your calendar who to meet with, and it handles all the timezone math for you</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1" style={{ backgroundColor: SW_INK }}>🌍</div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Time View</h4>
                    <p className="text-sm" style={{ color: SW_GRAY }}>See everyone&apos;s local time at a glance, no more mental calculations</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1" style={{ backgroundColor: SW_INK }}>💬</div>
                  <div>
                    <h4 className="font-semibold mb-1">Smart Invites</h4>
                    <p className="text-sm" style={{ color: SW_GRAY }}>Invitations automatically show each person&apos;s local time, no confusion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white p-8 border" style={{ borderColor: SW_LINE }}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl border-2" style={{ borderColor: SW_INK }}>
                    🌍
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Global Schedule Helper</h3>
                  <p className="mb-6" style={{ color: SW_GRAY }}>Your AI assistant for effortless timezone coordination</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 border" style={{ borderColor: SW_LINE }}>
                      <div className="font-bold text-lg">30sec</div>
                      <div style={{ color: SW_GRAY }}>Instead of 15min</div>
                    </div>
                    <div className="p-3 border" style={{ borderColor: SW_LINE }}>
                      <div className="font-bold text-lg">Zero</div>
                      <div style={{ color: SW_GRAY }}>Mental math required</div>
                    </div>
                    <div className="p-3 border" style={{ borderColor: SW_LINE }}>
                      <div className="font-bold text-lg">1-click</div>
                      <div style={{ color: SW_GRAY }}>Perfect time found</div>
                    </div>
                    <div className="p-3 border" style={{ borderColor: SW_LINE }}>
                      <div className="font-bold text-lg">Happy</div>
                      <div style={{ color: SW_GRAY }}>Global friends</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype & Testing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-4xl font-bold text-center mb-16 animate-on-scroll slide-up">Interactive Prototype & Testing</h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="animate-on-scroll slide-left">
                <h3 className="text-2xl font-semibold mb-6">Prototype Development</h3>
                <p className="leading-relaxed mb-6" style={{ color: SW_GRAY }}>
                  I built an interactive prototype in Figma that compared the old Google Calendar flow vs. my redesigned flow. This allowed me to test how much faster and clearer scheduling could become.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Key Flow Comparisons</h4>
                <div className="space-y-3">
                  <div className="flex items-center animate-on-scroll slide-left stagger-1">
                    <div className="w-1.5 h-1.5 flex-shrink-0 mr-3" style={{ backgroundColor: SW_INK }}></div>
                    <span style={{ color: SW_GRAY }}>AI scheduling vs. manual slot finding</span>
                  </div>
                  <div className="flex items-center animate-on-scroll slide-left stagger-2">
                    <div className="w-1.5 h-1.5 flex-shrink-0 mr-3" style={{ backgroundColor: SW_INK }}></div>
                    <span style={{ color: SW_GRAY }}>Focus Mode activation and protection</span>
                  </div>
                  <div className="flex items-center animate-on-scroll slide-left stagger-3">
                    <div className="w-1.5 h-1.5 flex-shrink-0 mr-3" style={{ backgroundColor: SW_INK }}></div>
                    <span style={{ color: SW_GRAY }}>Team availability visualization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Usability Testing Results</h3>
              <div className="space-y-4">
                <div className="p-6 bg-white border animate-on-scroll scale-in stagger-1" style={{ borderColor: SW_LINE }}>
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold mr-4">✓</span>
                    <p style={{ color: SW_GRAY }}>AI scheduling saved users multiple steps</p>
                  </div>
                </div>
                <div className="p-6 bg-white border animate-on-scroll scale-in stagger-2" style={{ borderColor: SW_LINE }}>
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold mr-4">✓</span>
                    <p style={{ color: SW_GRAY }}>Focus Mode made protecting deep work easier</p>
                  </div>
                </div>
                <div className="p-6 bg-white border animate-on-scroll scale-in stagger-3" style={{ borderColor: SW_LINE }}>
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold mr-4">!</span>
                    <p style={{ color: SW_GRAY }}>Users wanted AI to explain why certain times were suggested</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border p-8" style={{ borderColor: SW_LINE }}>
            <h3 className="text-2xl font-bold text-center mb-6">Testing Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">What Worked</h4>
                <ul className="space-y-2 text-sm" style={{ color: SW_GRAY }}>
                  <li>• Users found AI suggestions intuitive and helpful</li>
                  <li>• Focus Mode was immediately understood and valued</li>
                  <li>• Team view reduced coordination overhead significantly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Areas for Improvement</h4>
                <ul className="space-y-2 text-sm" style={{ color: SW_GRAY }}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-4xl font-bold text-center mb-16 animate-on-scroll slide-up">Impact & Outcomes</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white border animate-on-scroll scale-in stagger-1" style={{ borderColor: SW_LINE }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-all duration-300" style={{ backgroundColor: SW_INK }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Scheduling Efficiency</h3>
              <div className="space-y-2 text-sm" style={{ color: SW_GRAY }}>
                <p>40% faster scheduling with AI suggestions</p>
                <p>Reduced coordination time significantly</p>
                <p>Streamlined cross-timezone meetings</p>
              </div>
            </div>

            <div className="text-center p-8 bg-white border animate-on-scroll scale-in stagger-2" style={{ borderColor: SW_LINE }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-all duration-300" style={{ backgroundColor: SW_INK }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Focus Protection</h3>
              <div className="space-y-2 text-sm" style={{ color: SW_GRAY }}>
                <p>2 extra hours/week of focus time</p>
                <p>Reduced meeting interruptions</p>
                <p>Better work-life balance</p>
              </div>
            </div>

            <div className="text-center p-8 bg-white border animate-on-scroll scale-in stagger-3" style={{ borderColor: SW_LINE }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-all duration-300" style={{ backgroundColor: SW_INK }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Accessibility</h3>
              <div className="space-y-2 text-sm" style={{ color: SW_GRAY }}>
                <p>25% reduction in navigation steps</p>
                <p>Enhanced screen reader support</p>
                <p>Voice command integration</p>
              </div>
            </div>
          </div>

          <div className="bg-white border p-8" style={{ borderColor: SW_LINE }}>
            <h3 className="text-2xl font-bold text-center mb-8">Projected Impact</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40%</div>
                <p className="text-sm" style={{ color: SW_GRAY }}>Faster scheduling with AI suggestions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2hrs</div>
                <p className="text-sm" style={{ color: SW_GRAY }}>Extra focus time preserved per week</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25%</div>
                <p className="text-sm" style={{ color: SW_GRAY }}>Fewer navigation steps for accessibility users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="sw-serif text-4xl font-bold text-center mb-16 animate-on-scroll slide-up">Reflection & Learnings</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white border p-6 animate-on-scroll scale-in stagger-1" style={{ borderColor: SW_LINE }}>
                <h3 className="text-lg font-bold mb-3">🤖 Balancing AI & Trust</h3>
                <p className="text-sm" style={{ color: SW_GRAY }}>Through this project, I learned how important it is to balance automation with user trust. Users appreciate AI assistance but want transparency in decision-making.</p>
              </div>

              <div className="bg-white border p-6 animate-on-scroll scale-in stagger-2" style={{ borderColor: SW_LINE }}>
                <h3 className="text-lg font-bold mb-3">♿ Accessibility from the Start</h3>
                <p className="text-sm" style={{ color: SW_GRAY }}>I saw the value of designing with accessibility in mind from the beginning rather than retrofitting features later.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border p-6 animate-on-scroll scale-in stagger-3" style={{ borderColor: SW_LINE }}>
                <h3 className="text-lg font-bold mb-3">🎯 User-Centered Iteration</h3>
                <p className="text-sm" style={{ color: SW_GRAY }}>Early user testing revealed insights that significantly improved the final design, especially around AI explanation and transparency.</p>
              </div>

              <div className="bg-white border p-6 animate-on-scroll scale-in stagger-4" style={{ borderColor: SW_LINE }}>
                <h3 className="text-lg font-bold mb-3">🔮 Future Integration</h3>
                <p className="text-sm" style={{ color: SW_GRAY }}>The next step would be exploring deeper integrations with Gmail and Docs to make scheduling even more seamless.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border p-8 text-center" style={{ borderColor: SW_LINE }}>
            <h3 className="text-2xl font-bold mb-4">Key Takeaway</h3>
            <p className="text-xl leading-relaxed" style={{ color: SW_GRAY }}>
              Great calendar design isn&apos;t just about organizing time. It&apos;s about respecting and optimizing how people think, work, and collaborate. The most powerful features are often the most invisible ones.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="sw-serif text-4xl font-bold mb-8 animate-on-scroll slide-up">Conclusion</h2>
          <p className="text-xl leading-relaxed mb-8 animate-on-scroll fade-in stagger-1" style={{ color: SW_GRAY }}>
            This Google Calendar redesign demonstrates how thoughtful UX design can transform everyday tools into intelligent productivity partners. By prioritizing user needs and leveraging AI thoughtfully, we can create experiences that not only save time but actively protect what matters most: focus and meaningful work.
          </p>

          <div className="bg-white border p-8 mb-12 animate-on-scroll scale-in stagger-2" style={{ borderColor: SW_LINE }}>
            <p className="leading-relaxed" style={{ color: SW_GRAY }}>
              The success of this project reinforced my belief that the best technology feels invisible. It anticipates needs, removes friction, and empowers users to focus on what truly matters.
            </p>
          </div>

          <Link href="/#featured-work" className="sw-btn sw-btn-primary inline-flex animate-on-scroll slide-up stagger-3">
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
