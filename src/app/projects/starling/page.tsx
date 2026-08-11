'use client';

import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Swiss editorial tokens                                             */
/* ------------------------------------------------------------------ */
const SW_BG = '#FAFAF8';
const SW_PANEL = '#FFFFFF';
const SW_INK = '#111111';
const SW_MUTED = '#6E6E6B';
const SW_BORDER = '#E4E3DE';

export default function StarlingCaseStudy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SW_BG, color: SW_INK }}>
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ borderColor: SW_BORDER }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="sw-serif text-2xl md:text-3xl mb-8 animate-fade-in-up animation-delay-200" style={{ color: SW_INK }}>
            Designing a Modern Hospitality Platform for Seamless Booking Experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
            <span className="sw-label px-4 py-2 border" style={{ borderColor: SW_BORDER, color: SW_MUTED }}>UX/UI Design</span>
            <span className="sw-label px-4 py-2 border" style={{ borderColor: SW_BORDER, color: SW_MUTED }}>Mobile-First</span>
            <span className="sw-label px-4 py-2 border" style={{ borderColor: SW_BORDER, color: SW_MUTED }}>Hospitality</span>
            <span className="sw-label px-4 py-2 border" style={{ borderColor: SW_BORDER, color: SW_MUTED }}>User Research</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative animate-fade-in-up animation-delay-600">
            <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
              <img
                src="/images/starling/starling-overview-updated.png"
                alt="Starling Hospitality App Design Overview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_PANEL }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 animate-fade-in-up" style={{ color: SW_INK }}>
            Introduction
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-6 animate-fade-in-up animation-delay-200" style={{ color: SW_MUTED }}>
              Starling is a modern hospitality platform designed to simplify discovering, booking, and managing short-term stays. The challenge was to create a seamless experience that balances ease of booking for travelers with strong property visibility for hosts, addressing the fragmented nature of existing booking platforms.
            </p>
            <div className="rounded-none border p-6 mt-8 animate-fade-in-up animation-delay-400" style={{ borderColor: SW_BORDER }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Project Goals</h3>
              <ul className="space-y-3" style={{ color: SW_MUTED }}>
                <li className="flex items-center animate-fade-in-stagger animation-delay-600 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-1.5 h-1.5 mr-3" style={{ backgroundColor: SW_INK }}></span>
                  Create a clean, mobile-first UI that minimizes cognitive load
                </li>
                <li className="flex items-center animate-fade-in-stagger animation-delay-800 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-1.5 h-1.5 mr-3" style={{ backgroundColor: SW_INK }}></span>
                  Provide personalized recommendations for users
                </li>
                <li className="flex items-center animate-fade-in-stagger animation-delay-1000 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-1.5 h-1.5 mr-3" style={{ backgroundColor: SW_INK }}></span>
                  Design a smooth booking flow with transparent pricing
                </li>
                <li className="flex items-center animate-fade-in-stagger hover:translate-x-2 transition-transform duration-200" style={{animationDelay: '1.2s'}}>
                  <span className="w-1.5 h-1.5 mr-3" style={{ backgroundColor: SW_INK }}></span>
                  Implement visual-first property cards for better browsing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_PANEL }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 text-center animate-fade-in-up" style={{ color: SW_INK }}>
            Problem Statement
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="rounded-none border p-8" style={{ borderColor: SW_BORDER }}>
                <p className="text-xl leading-relaxed mb-6" style={{ color: SW_MUTED }}>
                  Travelers and guests seeking short-term stays often face fragmented booking experiences. Existing hospitality apps either overwhelm users with too much information or lack clarity in navigation. For hotel owners, showcasing their properties effectively is also a challenge.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                      <span className="text-xs" style={{ color: SW_INK }}>✕</span>
                    </div>
                    <p style={{ color: SW_MUTED }}>Fragmented booking experiences across multiple platforms</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                      <span className="text-xs" style={{ color: SW_INK }}>✕</span>
                    </div>
                    <p style={{ color: SW_MUTED }}>Apps that overwhelm users with excessive information or lack clear navigation</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                      <span className="text-xs" style={{ color: SW_INK }}>✕</span>
                    </div>
                    <p style={{ color: SW_MUTED }}>Difficulty for hotel owners to showcase their properties effectively</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                      <span className="text-xs" style={{ color: SW_INK }}>✕</span>
                    </div>
                    <p style={{ color: SW_MUTED }}>Lack of balance between ease of booking and property visibility</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in-up animation-delay-400">
              <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
                <img
                  src="/images/starling/problem-statement.png"
                  alt="Problem Statement - Fragmented Booking Experience"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_BG }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 text-center" style={{ color: SW_INK }}>
            Proposed Solution
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
                <img
                  src="/images/starling/proposed-solution.png"
                  alt="Proposed Solution - Modern Hospitality Platform Design"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="rounded-none border p-8" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
                <p className="text-xl leading-relaxed mb-6" style={{ color: SW_MUTED }}>
                  Build a hospitality app that simplifies discovering, booking, and managing stays through:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                      <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                    </div>
                    <p style={{ color: SW_MUTED }}>Clean UI that minimizes cognitive load</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                      <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                    </div>
                    <p style={{ color: SW_MUTED }}>Personalized recommendations for users</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                      <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                    </div>
                    <p style={{ color: SW_MUTED }}>Smooth booking flow with transparent pricing</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                      <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                    </div>
                    <p style={{ color: SW_MUTED }}>Visual-first property cards for better browsing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_PANEL }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 animate-fade-in-up" style={{ color: SW_INK }}>
            User Research &amp; Discovery
          </h2>

          {/* Research Methods */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: SW_INK }}>Research Methodology</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border p-6 animate-fade-in-up animation-delay-200 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
                <h4 className="sw-label mb-3" style={{ color: SW_INK }}>Competitive Analysis</h4>
                <p style={{ color: SW_MUTED }}>Analyzed Airbnb, Booking.com, and Agoda to identify gaps and opportunities</p>
              </div>
              <div className="border p-6 animate-fade-in-up animation-delay-400 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
                <h4 className="sw-label mb-3" style={{ color: SW_INK }}>User Interviews</h4>
                <p style={{ color: SW_MUTED }}>6 frequent travelers and 4 hotel owners to understand pain points</p>
              </div>
              <div className="border p-6 animate-fade-in-up animation-delay-600 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
                <h4 className="sw-label mb-3" style={{ color: SW_INK }}>User Surveys</h4>
                <p style={{ color: SW_MUTED }}>Identified key pain points in existing booking experiences</p>
              </div>
            </div>

            {/* Key Insights Image */}
            <div className="rounded-none overflow-hidden border animate-fade-in-up animation-delay-400" style={{ borderColor: SW_BORDER }}>
              <img
                src="/images/starling/key-insights.png"
                alt="User Research Key Insights - Data Visualization"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: SW_INK }}>Key User Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                    <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                  </div>
                  <p style={{ color: SW_MUTED }}>Users dislike long forms and hidden charges</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                    <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                  </div>
                  <p style={{ color: SW_MUTED }}>Travelers want quick filters (location, price, amenities)</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                    <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                  </div>
                  <p style={{ color: SW_MUTED }}>Hotel owners want easy ways to update listings</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: SW_INK }}>Research Results</h3>
              <div className="space-y-6">
                <div className="border p-6 animate-fade-in-up animation-delay-200 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
                  <div className="flex items-center mb-3">
                    <span className="sw-serif text-3xl mr-4" style={{ color: SW_INK }}>70%</span>
                    <p style={{ color: SW_MUTED }}>of travelers prefer mobile-first experiences</p>
                  </div>
                </div>
                <div className="border p-6 animate-fade-in-up animation-delay-400 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
                  <div className="flex items-center mb-3">
                    <span className="sw-serif text-3xl mr-4" style={{ color: SW_INK }}>80%</span>
                    <p style={{ color: SW_MUTED }}>value transparent pricing over discounts</p>
                  </div>
                </div>
                <div className="border p-6 animate-fade-in-up animation-delay-600 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
                  <p style={{ color: SW_MUTED }}>
                    <span className="font-semibold" style={{ color: SW_INK }}>Hotel owners</span> highlighted the need for simpler listing dashboards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_BG }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8" style={{ color: SW_INK }}>
            Competitor Analysis
          </h2>
          <div className="rounded-none border p-8" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
            <p className="text-xl leading-relaxed" style={{ color: SW_MUTED }}>
              A competitor map showed that while existing hospitality apps focus heavily on bookings, very few provide <span className="font-semibold" style={{ color: SW_INK }}>concierge integration</span> or <span className="font-semibold" style={{ color: SW_INK }}>seamless event planning features</span>, giving Starling a competitive edge.
            </p>
          </div>
        </div>
      </section>

      {/* Empathy Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_BG }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 text-center" style={{ color: SW_INK }}>
            Empathy Map
          </h2>
          <p className="text-xl text-center mb-12" style={{ color: SW_MUTED }}>
            Understanding our primary user - the traveler
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="border p-6 animate-fade-in-up animation-delay-200 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Thinks</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: SW_MUTED }}>
                <p className="italic">&ldquo;I want a quick and safe way to find accommodation that meets my needs.&rdquo;</p>
                <p className="italic">&ldquo;This booking process should be simple and trustworthy - no surprises.&rdquo;</p>
                <p className="italic">&ldquo;I hope this app shows me genuine reviews and real pricing.&rdquo;</p>
              </div>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-400 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Feels</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: SW_MUTED }}>
                <p>• Excited about upcoming travel plans</p>
                <p>• Anxious about hidden fees and booking complications</p>
                <p>• Frustrated with overwhelming booking platforms</p>
                <p>• Hopeful about finding the perfect stay</p>
                <p>• Stressed about time constraints</p>
              </div>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-600 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Says</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: SW_MUTED }}>
                <p className="italic">&ldquo;I don&apos;t want to waste time browsing irrelevant listings.&rdquo;</p>
                <p className="italic">&ldquo;Show me the real price upfront - no hidden costs!&rdquo;</p>
                <p className="italic">&ldquo;Why can&apos;t booking be as simple as ordering food?&rdquo;</p>
                <p className="italic">&ldquo;I need to see honest reviews from real guests.&rdquo;</p>
              </div>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-800 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Does</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: SW_MUTED }}>
                <p>• Compares 2-3 platforms before making a decision</p>
                <p>• Checks reviews extensively and looks for patterns</p>
                <p>• Screenshots pricing to compare later</p>
                <p>• Seeks recommendations from friends and social media</p>
                <p>• Books on mobile during commute or breaks</p>
              </div>
            </div>
          </div>

          {/* Empathy Map Image */}
          <div className="rounded-none overflow-hidden border animate-fade-in-up animation-delay-600" style={{ borderColor: SW_BORDER }}>
            <img
              src="/images/starling/empathy-map.png"
              alt="Empathy Map - Understanding the Traveler User Persona with Thinks, Feels, Says, and Does quadrants"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_PANEL }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8" style={{ color: SW_INK }}>
            User Personas
          </h2>
          <div className="space-y-12">
            {/* Primary Persona - David Schmidt */}
            <div className="rounded-none border p-8" style={{ borderColor: SW_BORDER }}>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 border flex items-center justify-center text-3xl mr-6" style={{ borderColor: SW_BORDER }}>
                  👨‍💼
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: SW_INK }}>David Schmidt</h3>
                  <p style={{ color: SW_MUTED }}>Businessman, 45 years</p>
                  <p className="text-sm" style={{ color: SW_MUTED }}>Married • Nigeria</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Goals</h4>
                  <ul className="text-sm space-y-1" style={{ color: SW_MUTED }}>
                    <li>• Find top-rated, business-friendly hotels with excellent amenities</li>
                    <li>• Identify family-friendly activities and attractions suitable for his children</li>
                    <li>• Efficiently manage travel arrangements to maximize time during short visits</li>
                    <li>• Ensure high standards of comfort and luxury in accommodations and services</li>
                    <li>• Access quick and reliable information for last-minute travel changes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Frustrations</h4>
                  <ul className="text-sm space-y-1" style={{ color: SW_MUTED }}>
                    <li>• Lack of options for high-quality, family-oriented accommodations and services</li>
                    <li>• Inconsistent and unreliable information on hotel and service quality</li>
                    <li>• Difficulty finding activities that cater to both business and family needs</li>
                    <li>• Time-consuming processes to secure accommodations and itinerary changes</li>
                    <li>• Lack of streamlined services tailored to high-end, time-sensitive travelers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Bio</h4>
                  <p className="text-sm" style={{ color: SW_MUTED }}>David is a 45-year-old corporate executive who frequently travels for both business and leisure. He appreciates efficiency and thorough planning. David enjoys luxury travel and often extends business trips to explore new places with his family.</p>
                </div>
              </div>

              <div className="border-l-2 pl-4" style={{ borderColor: SW_INK }}>
                <p className="text-sm italic" style={{ color: SW_INK }}>
                  &ldquo;I want a travel tool that is as efficient and reliable as the ones I use for business.&rdquo;
                </p>
              </div>
            </div>

            {/* Secondary Persona - Jessica Lee */}
            <div className="rounded-none border p-8" style={{ borderColor: SW_BORDER }}>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 border flex items-center justify-center text-3xl mr-6" style={{ borderColor: SW_BORDER }}>
                  📸
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: SW_INK }}>Jessica Lee</h3>
                  <p style={{ color: SW_MUTED }}>Photographer, 34 years</p>
                  <p className="text-sm" style={{ color: SW_MUTED }}>Single • Canada</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Goals</h4>
                  <ul className="text-sm space-y-1" style={{ color: SW_MUTED }}>
                    <li>• Discover unique, safe, and culturally immersive lodging options</li>
                    <li>• Provide authentic travel content and reviews for her audience</li>
                    <li>• Streamline the planning process with an all-in-one travel app</li>
                    <li>• Gain insights into local events and cultural festivals to attend and cover</li>
                    <li>• Build a network of local contacts for deeper cultural immersion</li>
                  </ul>
                </div>

                <div>
                  <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Frustrations</h4>
                  <ul className="text-sm space-y-1" style={{ color: SW_MUTED }}>
                    <li>• Difficulty finding current and reliable information on local culture and events</li>
                    <li>• Managing travel logistics through multiple apps and platforms</li>
                    <li>• Limited access to real-time local support and guidance</li>
                    <li>• Overwhelming amount of unverified or outdated travel content</li>
                    <li>• Challenges in connecting with locals or cultural insiders for authentic experiences</li>
                  </ul>
                </div>

                <div>
                  <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Bio</h4>
                  <p className="text-sm" style={{ color: SW_MUTED }}>Jessica is a 34-year-old travel blogger from Toronto, Canada, who specializes in African travel destinations. She&apos;s a photographer and relies heavily on digital tools to plan her trips. Jessica is always looking for new experiences and cultural insights to share with her large following on social media.</p>
                </div>
              </div>

              <div className="border-l-2 pl-4" style={{ borderColor: SW_INK }}>
                <p className="text-sm italic" style={{ color: SW_INK }}>
                  &quot;I need an app that not only helps me plan efficiently but also ensures that I&apos;m experiencing the true essence of each location.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* User Personas Images */}
          <div className="mt-12 space-y-8">
            <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
              <img
                src="/images/starling/user-persona1.png"
                alt="Sarah Mitchell - Marketing Manager Traveler Persona with goals, pain points, and needs"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
              <img
                src="/images/starling/user-persona2.png"
                alt="Marcus Chen - Hotel Owner Persona with goals, pain points, and needs"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="italic" style={{ color: SW_MUTED }}>
              These personas guided feature prioritization and user flows throughout the design process.
            </p>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_BG }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 text-center" style={{ color: SW_INK }}>
            Information Architecture
          </h2>
          <p className="text-xl text-center mb-12" style={{ color: SW_MUTED }}>
            Mapping the app structure for clarity and simplicity
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="border p-6 animate-fade-in-up animation-delay-200 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Onboarding</h3>
              <p className="text-sm mb-3" style={{ color: SW_MUTED }}>Quick intro screens</p>
              <ul className="text-xs space-y-1" style={{ color: SW_MUTED }}>
                <li>• Welcome screen</li>
                <li>• Feature highlights</li>
                <li>• Account setup</li>
              </ul>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-400 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Home</h3>
              <p className="text-sm mb-3" style={{ color: SW_MUTED }}>Featured stays + search bar</p>
              <ul className="text-xs space-y-1" style={{ color: SW_MUTED }}>
                <li>• Search functionality</li>
                <li>• Featured properties</li>
                <li>• Quick filters</li>
              </ul>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-600 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Search/Filters</h3>
              <p className="text-sm mb-3" style={{ color: SW_MUTED }}>Location, dates, price, amenities</p>
              <ul className="text-xs space-y-1" style={{ color: SW_MUTED }}>
                <li>• Location picker</li>
                <li>• Date selection</li>
                <li>• Price range</li>
                <li>• Amenity filters</li>
              </ul>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-800 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Property Details</h3>
              <p className="text-sm mb-3" style={{ color: SW_MUTED }}>Photos, description, reviews, pricing</p>
              <ul className="text-xs space-y-1" style={{ color: SW_MUTED }}>
                <li>• Photo gallery</li>
                <li>• Property info</li>
                <li>• Guest reviews</li>
                <li>• Pricing breakdown</li>
              </ul>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-600 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Booking Flow</h3>
              <p className="text-sm mb-3" style={{ color: SW_MUTED }}>Select → Payment → Confirmation</p>
              <ul className="text-xs space-y-1" style={{ color: SW_MUTED }}>
                <li>• Date confirmation</li>
                <li>• Guest details</li>
                <li>• Payment processing</li>
                <li>• Booking success</li>
              </ul>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-800 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Profile/Dashboard</h3>
              <p className="text-sm mb-3" style={{ color: SW_MUTED }}>Bookings, saved stays, settings</p>
              <ul className="text-xs space-y-1" style={{ color: SW_MUTED }}>
                <li>• My bookings</li>
                <li>• Saved properties</li>
                <li>• Account settings</li>
                <li>• Trip history</li>
              </ul>
            </div>
          </div>

          {/* Information Architecture Image */}
          <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
            <img
              src="/images/starling/information-architecture.png"
              alt="Information Architecture - App structure showing Onboarding, Home, Search/Filters, Property Details, Booking Flow, and Profile/Dashboard sections"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_PANEL }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 text-center" style={{ color: SW_INK }}>
            User Flow
          </h2>
          <p className="text-xl text-center mb-12" style={{ color: SW_MUTED }}>
            Mapping the journey from discovery to booking confirmation
          </p>

          {/* Primary User Flow: Booking a Stay */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: SW_INK }}>Primary Flow: Booking a Stay</h3>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
              <div className="flex flex-col items-center text-center p-4 border flex-1 animate-fade-in-up animation-delay-200 transition-all duration-300 cursor-pointer group" style={{ borderColor: SW_BORDER }}>
                <div className="w-12 h-12 border flex items-center justify-center font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300" style={{ borderColor: SW_INK, color: SW_INK }}>1</div>
                <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Open App</h4>
                <p className="text-sm" style={{ color: SW_MUTED }}>Launch Starling → Home screen</p>
              </div>

              <div className="hidden md:block">
                <svg className="w-8 h-8" style={{ color: SW_MUTED }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center p-4 border flex-1 animate-fade-in-up animation-delay-400 transition-all duration-300 cursor-pointer group" style={{ borderColor: SW_BORDER }}>
                <div className="w-12 h-12 border flex items-center justify-center font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300" style={{ borderColor: SW_INK, color: SW_INK }}>2</div>
                <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Search</h4>
                <p className="text-sm" style={{ color: SW_MUTED }}>Enter location → Apply filters</p>
              </div>

              <div className="hidden md:block">
                <svg className="w-8 h-8" style={{ color: SW_MUTED }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center p-4 border flex-1 animate-fade-in-up animation-delay-600 transition-all duration-300 cursor-pointer group" style={{ borderColor: SW_BORDER }}>
                <div className="w-12 h-12 border flex items-center justify-center font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300" style={{ borderColor: SW_INK, color: SW_INK }}>3</div>
                <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Browse</h4>
                <p className="text-sm" style={{ color: SW_MUTED }}>View property cards → Tap listing</p>
              </div>

              <div className="hidden md:block">
                <svg className="w-8 h-8" style={{ color: SW_MUTED }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center p-4 border flex-1 animate-fade-in-up animation-delay-800 transition-all duration-300 cursor-pointer group" style={{ borderColor: SW_BORDER }}>
                <div className="w-12 h-12 border flex items-center justify-center font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300" style={{ borderColor: SW_INK, color: SW_INK }}>4</div>
                <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Review</h4>
                <p className="text-sm" style={{ color: SW_MUTED }}>View details → Check pricing</p>
              </div>

              <div className="hidden md:block">
                <svg className="w-8 h-8" style={{ color: SW_MUTED }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center p-4 border flex-1 animate-fade-in-up animation-delay-1000 transition-all duration-300 cursor-pointer group" style={{ borderColor: SW_BORDER }}>
                <div className="w-12 h-12 border flex items-center justify-center font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300" style={{ borderColor: SW_INK, color: SW_INK }}>5</div>
                <h4 className="sw-label mb-2" style={{ color: SW_INK }}>Book</h4>
                <p className="text-sm" style={{ color: SW_MUTED }}>Payment → Confirmation</p>
              </div>
            </div>
          </div>

          {/* User Flow Image */}
          <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
            <img
              src="/images/starling/user-flow.png"
              alt="User Flow Diagram - Complete booking journey from app launch to confirmation with 5-step process"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_BG }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 text-center" style={{ color: SW_INK }}>
            Low-Fidelity Wireframes
          </h2>
          <p className="text-xl text-center mb-12" style={{ color: SW_MUTED }}>
            Sketching the foundation for minimal steps in search and booking
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: SW_INK }}>Key Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                    <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                  </div>
                  <p style={{ color: SW_MUTED }}>Sketches focused on minimal steps for search &amp; booking</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                    <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                  </div>
                  <p style={{ color: SW_MUTED }}>Card layouts tested for readability and visual hierarchy</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                    <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                  </div>
                  <p style={{ color: SW_MUTED }}>Simple navigation tabs for Home, Search, Bookings, and Profile</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: SW_INK }}>
                    <span className="text-xs" style={{ color: SW_INK }}>✓</span>
                  </div>
                  <p style={{ color: SW_MUTED }}>Straightforward, predictable pathways without unnecessary distractions</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: SW_INK }}>Wireframe Priorities</h3>
              <div className="rounded-none border p-6" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
                <ul className="space-y-3" style={{ color: SW_MUTED }}>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 mr-3" style={{ backgroundColor: SW_INK }}></span>
                    Layout hierarchy for property cards
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 mr-3" style={{ backgroundColor: SW_INK }}></span>
                    Search and filter placement optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 mr-3" style={{ backgroundColor: SW_INK }}></span>
                    Booking flow simplification
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 mr-3" style={{ backgroundColor: SW_INK }}></span>
                    Navigation structure validation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wireframes Images */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left side - Tall image */}
            <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
              <img
                src="/images/starling/wireframe1.png"
                alt="Low-Fidelity Wireframes - Main screen layouts and navigation structure"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right side - Two shorter images stacked */}
            <div className="space-y-6">
              <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
                <img
                  src="/images/starling/wireframe2.png"
                  alt="Low-Fidelity Wireframes - Search and filter interface design"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
                <img
                  src="/images/starling/wireframe3.png"
                  alt="Low-Fidelity Wireframes - Booking flow and property details"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_PANEL }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 text-center" style={{ color: SW_INK }}>
            Design System
          </h2>
          <p className="text-xl leading-relaxed text-center mb-12" style={{ color: SW_MUTED }}>
            Building consistency and modern appeal through systematic design choices
          </p>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <div className="border p-6 animate-fade-in-up animation-delay-200 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
              <div className="w-12 h-12 border flex items-center justify-center mb-4" style={{ borderColor: SW_INK }}>
                <span className="text-lg" style={{ color: SW_INK }}>🎨</span>
              </div>
              <h3 className="sw-label mb-3" style={{ color: SW_INK }}>Color Palette</h3>
              <p className="text-sm mb-4" style={{ color: SW_MUTED }}>Black, white, and neutral grey with hairline borders</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="w-6 h-6 border" style={{backgroundColor: SW_INK, borderColor: SW_BORDER}} title="Ink"></div>
                <div className="w-6 h-6 border" style={{backgroundColor: SW_MUTED, borderColor: SW_BORDER}} title="Muted"></div>
                <div className="w-6 h-6 border" style={{backgroundColor: SW_BORDER, borderColor: SW_BORDER}} title="Border"></div>
                <div className="w-6 h-6 border" style={{backgroundColor: SW_BG, borderColor: SW_BORDER}} title="Background"></div>
                <div className="w-6 h-6 border" style={{backgroundColor: '#8A8A8A', borderColor: SW_BORDER}} title="Gray"></div>
                <div className="w-6 h-6 border" style={{backgroundColor: SW_PANEL, borderColor: SW_BORDER}} title="White"></div>
              </div>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-400 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
              <div className="w-12 h-12 border flex items-center justify-center mb-4" style={{ borderColor: SW_INK }}>
                <span className="sw-serif text-lg" style={{ color: SW_INK }}>Aa</span>
              </div>
              <h3 className="sw-label mb-3" style={{ color: SW_INK }}>Typography</h3>
              <p className="text-sm mb-4" style={{ color: SW_MUTED }}>Fraunces serif for display, Inter for body copy</p>
              <div className="space-y-1">
                <div className="sw-serif text-sm font-bold" style={{ color: SW_INK }}>Heading Bold</div>
                <div className="text-xs font-medium" style={{ color: SW_MUTED }}>Body Medium</div>
                <div className="text-xs" style={{ color: SW_MUTED }}>Caption Regular</div>
              </div>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-600 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
              <div className="w-12 h-12 border flex items-center justify-center mb-4" style={{ borderColor: SW_INK }}>
                <span className="text-lg" style={{ color: SW_INK }}>⚡</span>
              </div>
              <h3 className="sw-label mb-3" style={{ color: SW_INK }}>UI Components</h3>
              <p className="text-sm mb-4" style={{ color: SW_MUTED }}>Buttons, cards, modals, search bars, filter chips</p>
              <div className="space-y-2">
                <button className="sw-btn sw-btn-primary w-full py-1.5 text-xs">Primary Button</button>
                <div className="w-full py-1.5 border text-xs text-center" style={{ borderColor: SW_BORDER, color: SW_MUTED }}>Card Component</div>
              </div>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-800 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
              <div className="w-12 h-12 border flex items-center justify-center mb-4" style={{ borderColor: SW_INK }}>
                <span className="text-lg" style={{ color: SW_INK }}>✨</span>
              </div>
              <h3 className="sw-label mb-3" style={{ color: SW_INK }}>Icons</h3>
              <p className="text-sm mb-4" style={{ color: SW_MUTED }}>Line-based for a modern, lightweight feel</p>
              <div className="flex space-x-3" style={{ color: SW_MUTED }}>
                <span className="text-lg">🏠</span>
                <span className="text-lg">🔍</span>
                <span className="text-lg">❤️</span>
                <span className="text-lg">👤</span>
              </div>
            </div>
          </div>

          {/* Design System Image */}
          <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
            <img
              src="/images/starling/design-system.png"
              alt="Design System - Complete style guide with color palette, typography, and UI components"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* High-Fidelity UI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_BG }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 text-center" style={{ color: SW_INK }}>
            High-Fidelity UI Design
          </h2>
          <p className="text-xl text-center mb-16" style={{ color: SW_MUTED }}>
            Bringing the wireframes to life with polished visual design and brand identity
          </p>

          <div className="space-y-16">
            {/* Splash Screen */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="sw-label mb-6" style={{ color: SW_INK }}>Splash Screen</h3>
                <div className="space-y-4" style={{ color: SW_MUTED }}>
                  <p className="text-lg leading-relaxed">
                    The splash screen serves as the welcoming entry point to the Starling app, establishing immediate brand recognition and setting expectations for the user experience.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Clean, minimalist design with prominent Starling branding</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Calming teal color palette that evokes trust and hospitality</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Smooth loading animation that engages users during app initialization</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
                  <img
                    src="/images/starling/splash-screen.png"
                    alt="Starling App Splash Screen - Brand identity and welcome experience"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Home Screen */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
                  <img
                    src="/images/starling/home-screen.png"
                    alt="Starling App Home Screen - Central hub with search and featured properties"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h3 className="sw-label mb-6" style={{ color: SW_INK }}>Home Screen</h3>
                <div className="space-y-4" style={{ color: SW_MUTED }}>
                  <p className="text-lg leading-relaxed">
                    The home screen acts as the central command center, providing users with immediate access to search functionality and personalized recommendations.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Prominent search bar with smart location and date suggestions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Curated featured properties with high-quality imagery</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Quick access filters for price, amenities, and property type</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Personalized recommendations based on user preferences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explore Screen */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="sw-label mb-6" style={{ color: SW_INK }}>Explore Screen</h3>
                <div className="space-y-4" style={{ color: SW_MUTED }}>
                  <p className="text-lg leading-relaxed">
                    The explore screen transforms property browsing into an engaging, visual-first experience that helps users discover their perfect accommodation effortlessly.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Visual-first property cards with large, compelling imagery</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Intuitive filter chips for easy refinement of search results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Transparent pricing display with no hidden fees</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2" style={{ backgroundColor: SW_INK }}></div>
                      <p>Smart sorting options: price, rating, distance, and availability</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
                  <img
                    src="/images/starling/explore-screen.png"
                    alt="Starling App Explore Screen - Visual property browsing with filters"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Screens */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_PANEL }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8 text-center" style={{ color: SW_INK }}>
            Other Screens &amp; Features
          </h2>
          <p className="text-xl text-center mb-12" style={{ color: SW_MUTED }}>
            Additional screens to complete the user experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="border p-6 animate-fade-in-up animation-delay-200 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Onboarding Walkthrough</h3>
              <p className="text-sm" style={{ color: SW_MUTED }}>Clean home screen with prominent search and curated property cards with large images</p>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-400 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Saved Favorites</h3>
              <p className="text-sm" style={{ color: SW_MUTED }}>Filter chips for intuitive refinement and easy access to saved properties</p>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-600 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Booking Confirmation</h3>
              <p className="text-sm" style={{ color: SW_MUTED }}>Booking screen with transparent breakdown and calendar sync integration</p>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-800 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>User Profile &amp; Settings</h3>
              <p className="text-sm" style={{ color: SW_MUTED }}>Complete user account management and personalization settings</p>
            </div>

            <div className="border p-6 animate-fade-in-up animation-delay-1000 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Host Dashboard</h3>
              <p className="text-sm" style={{ color: SW_MUTED }}>Property management interface for hotel owners with simple listing updates</p>
            </div>

            <div className="border p-6 animate-fade-in-up transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, animationDelay: '1.2s' }}>
              <h3 className="sw-label mb-4" style={{ color: SW_INK }}>Guest Support</h3>
              <p className="text-sm" style={{ color: SW_MUTED }}>Direct communication channels between guests and property owners</p>
            </div>
          </div>

          {/* Other Screens Image */}
          <div className="p-6">
            <div className="rounded-none overflow-hidden border" style={{ borderColor: SW_BORDER }}>
              <img
                src="/images/starling/Other-screen.png"
                alt="Starling App Other Screens"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_BG }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8" style={{ color: SW_INK }}>
            What I Learned
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border p-6 animate-fade-in-up animation-delay-200 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
                <h3 className="sw-label mb-3" style={{ color: SW_INK }}>Simplicity Wins</h3>
                <p style={{ color: SW_MUTED }}>Users appreciate fewer steps, not more features. Focus on core functionality over feature bloat.</p>
              </div>

              <div className="border p-6 animate-fade-in-up animation-delay-400 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
                <h3 className="sw-label mb-3" style={{ color: SW_INK }}>Balancing Dual Empathy</h3>
                <p style={{ color: SW_MUTED }}>Balancing traveler needs vs. host needs requires dual empathy and understanding both user types.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border p-6 animate-fade-in-up animation-delay-600 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
                <h3 className="sw-label mb-3" style={{ color: SW_INK }}>Early Testing Value</h3>
                <p style={{ color: SW_MUTED }}>Testing early wireframes helped validate flows before UI polish, saving time and resources.</p>
              </div>

              <div className="border p-6 animate-fade-in-up animation-delay-800 transition-all duration-300 cursor-pointer" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
                <h3 className="sw-label mb-3" style={{ color: SW_INK }}>Transparent Pricing Impact</h3>
                <p style={{ color: SW_MUTED }}>Transparent pricing builds user trust, which directly impacts conversions and user satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Reflection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: SW_BG }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="sw-serif text-3xl md:text-4xl mb-8" style={{ color: SW_INK }}>
            Final Reflection
          </h2>
          <div className="rounded-none border p-8 animate-fade-in-up transition-all duration-300" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
            <p className="text-xl leading-relaxed" style={{ color: SW_MUTED }}>
              This project reinforced my belief that great design in hospitality isn&apos;t just about functionality, but about creating a digital experience that feels <span className="font-semibold" style={{ color: SW_INK }}>human</span>, <span className="font-semibold" style={{ color: SW_INK }}>helpful</span>, and <span className="font-semibold" style={{ color: SW_INK }}>welcoming</span>, just like hospitality itself.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: SW_BORDER, backgroundColor: SW_PANEL }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link
              href="/"
              className="sw-btn sw-btn-primary"
            >
              ← Back to Home
            </Link>
            <Link
              href="/#featured-work"
              className="sw-btn sw-btn-secondary"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
