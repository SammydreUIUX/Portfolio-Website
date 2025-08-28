'use client';

export default function StarlingCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-500/10 to-green-700/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            🌟 Starling App Case Study
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Designing a Modern Hospitality Platform for Seamless Booking Experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-green-400">
            <span className="px-4 py-2 bg-green-500/20 rounded-full">UX/UI Design</span>
            <span className="px-4 py-2 bg-green-500/20 rounded-full">Mobile-First</span>
            <span className="px-4 py-2 bg-green-500/20 rounded-full">Hospitality</span>
            <span className="px-4 py-2 bg-green-500/20 rounded-full">User Research</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-1 shadow-2xl">
            <div className="bg-gray-900 rounded-3xl p-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/starling/starling-overview-updated.png" 
                  alt="Starling Hospitality App Design Overview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Introduction
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Starling is a modern hospitality platform designed to simplify discovering, booking, and managing short-term stays. The challenge was to create a seamless experience that balances ease of booking for travelers with strong property visibility for hosts, addressing the fragmented nature of existing booking platforms.
            </p>
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/20 mt-8">
              <h3 className="text-green-400 font-semibold mb-4">Project Goals</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Create a clean, mobile-first UI that minimizes cognitive load
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Provide personalized recommendations for users
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Design a smooth booking flow with transparent pricing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Implement visual-first property cards for better browsing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            🚩 Problem Statement
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Travelers and guests seeking short-term stays often face fragmented booking experiences. Existing hospitality apps either overwhelm users with too much information or lack clarity in navigation. For hotel owners, showcasing their properties effectively is also a challenge.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✕</span>
                    </div>
                    <p className="text-gray-300">Fragmented booking experiences across multiple platforms</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✕</span>
                    </div>
                    <p className="text-gray-300">Apps that overwhelm users with excessive information or lack clear navigation</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✕</span>
                    </div>
                    <p className="text-gray-300">Difficulty for hotel owners to showcase their properties effectively</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✕</span>
                    </div>
                    <p className="text-gray-300">Lack of balance between ease of booking and property visibility</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-1 shadow-2xl">
                <div className="bg-gray-900 rounded-3xl p-6">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/images/starling/problem-statement.png" 
                      alt="Problem Statement - Fragmented Booking Experience"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            💡 Proposed Solution
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-1 shadow-2xl">
                <div className="bg-gray-900 rounded-3xl p-6">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/images/starling/proposed-solution.png" 
                      alt="Proposed Solution - Modern Hospitality Platform Design"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Build a hospitality app that simplifies discovering, booking, and managing stays through:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-300">Clean UI that minimizes cognitive load</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-300">Personalized recommendations for users</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-300">Smooth booking flow with transparent pricing</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-300">Visual-first property cards for better browsing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            🔍 User Research & Discovery
          </h2>
          
          {/* Research Methods */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">Research Methodology</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="font-semibold text-green-400 mb-3">Competitive Analysis</h4>
                <p className="text-gray-300">Analyzed Airbnb, Booking.com, and Agoda to identify gaps and opportunities</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="font-semibold text-green-400 mb-3">User Interviews</h4>
                <p className="text-gray-300">6 frequent travelers and 4 hotel owners to understand pain points</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="font-semibold text-green-400 mb-3">User Surveys</h4>
                <p className="text-gray-300">Identified key pain points in existing booking experiences</p>
              </div>
            </div>
            
            {/* Key Insights Image */}
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-3xl p-6">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/starling/key-insights.png" 
                    alt="User Research Key Insights - Data Visualization"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key User Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Users dislike long forms and hidden charges</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Travelers want quick filters (location, price, amenities)</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Hotel owners want easy ways to update listings</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Research Results</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold text-blue-400 mr-4">70%</span>
                    <p className="text-gray-300">of travelers prefer mobile-first experiences</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold text-green-400 mr-4">80%</span>
                    <p className="text-gray-300">value transparent pricing over discounts</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-500/30">
                  <p className="text-gray-300">
                    <span className="font-semibold text-purple-400">Hotel owners</span> highlighted the need for simpler listing dashboards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            📊 Competitor Analysis
          </h2>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              A competitor map showed that while existing hospitality apps focus heavily on bookings, very few provide <span className="text-green-400 font-semibold">concierge integration</span> or <span className="text-green-400 font-semibold">seamless event planning features</span> — giving Starling a competitive edge.
            </p>
          </div>
        </div>
      </section>

      {/* Empathy Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            💭 Empathy Map
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Understanding our primary user - the traveler
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-400 mb-4">💭 THINKS</h3>
              <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <p className="italic">"I want a quick and safe way to find accommodation that meets my needs."</p>
                <p className="italic">"This booking process should be simple and trustworthy - no surprises."</p>
                <p className="italic">"I hope this app shows me genuine reviews and real pricing."</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-4">❤️ FEELS</h3>
              <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <p>• Excited about upcoming travel plans</p>
                <p>• Anxious about hidden fees and booking complications</p>
                <p>• Frustrated with overwhelming booking platforms</p>
                <p>• Hopeful about finding the perfect stay</p>
                <p>• Stressed about time constraints</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-purple-400 mb-4">💬 SAYS</h3>
              <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <p className="italic">"I don't want to waste time browsing irrelevant listings."</p>
                <p className="italic">"Show me the real price upfront - no hidden costs!"</p>
                <p className="italic">"Why can't booking be as simple as ordering food?"</p>
                <p className="italic">"I need to see honest reviews from real guests."</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-bold text-orange-400 mb-4">🔍 DOES</h3>
              <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <p>• Compares 2-3 platforms before making a decision</p>
                <p>• Checks reviews extensively and looks for patterns</p>
                <p>• Screenshots pricing to compare later</p>
                <p>• Seeks recommendations from friends and social media</p>
                <p>• Books on mobile during commute or breaks</p>
              </div>
            </div>
          </div>
          
          {/* Empathy Map Image */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-gray-900 rounded-3xl p-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/starling/empathy-map.png" 
                  alt="Empathy Map - Understanding the Traveler User Persona with Thinks, Feels, Says, and Does quadrants"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            👤 User Personas
          </h2>
          <div className="space-y-12">
            {/* Primary Persona - David Schmidt */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-8 border border-green-500/30">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-3xl mr-6">
                  👨‍💼
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400">David Schmidt</h3>
                  <p className="text-gray-300">Businessman, 45 years</p>
                  <p className="text-sm text-gray-400">Married • Nigeria</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">🎯 Goals</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Find top-rated, business-friendly hotels with excellent amenities</li>
                    <li>• Identify family-friendly activities and attractions suitable for his children</li>
                    <li>• Efficiently manage travel arrangements to maximize time during short visits</li>
                    <li>• Ensure high standards of comfort and luxury in accommodations and services</li>
                    <li>• Access quick and reliable information for last-minute travel changes</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">😤 Frustrations</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Lack of options for high-quality, family-oriented accommodations and services</li>
                    <li>• Inconsistent and unreliable information on hotel and service quality</li>
                    <li>• Difficulty finding activities that cater to both business and family needs</li>
                    <li>• Time-consuming processes to secure accommodations and itinerary changes</li>
                    <li>• Lack of streamlined services tailored to high-end, time-sensitive travelers</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">📝 Bio</h4>
                  <p className="text-gray-300 text-sm">David is a 45-year-old corporate executive who frequently travels for both business and leisure. He appreciates efficiency and thorough planning. David enjoys luxury travel and often extends business trips to explore new places with his family.</p>
                </div>
              </div>
              
              <div className="bg-green-900/20 rounded-lg p-4">
                <p className="text-green-300 text-sm italic">
                  "I want a travel tool that is as efficient and reliable as the ones I use for business."
                </p>
              </div>
            </div>
            
            {/* Secondary Persona - Jessica Lee */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-500/30">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl mr-6">
                  📸
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">Jessica Lee</h3>
                  <p className="text-gray-300">Photographer, 34 years</p>
                  <p className="text-sm text-gray-400">Single • Canada</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">🎯 Goals</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Discover unique, safe, and culturally immersive lodging options</li>
                    <li>• Provide authentic travel content and reviews for her audience</li>
                    <li>• Streamline the planning process with an all-in-one travel app</li>
                    <li>• Gain insights into local events and cultural festivals to attend and cover</li>
                    <li>• Build a network of local contacts for deeper cultural immersion</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">😤 Frustrations</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Difficulty finding current and reliable information on local culture and events</li>
                    <li>• Managing travel logistics through multiple apps and platforms</li>
                    <li>• Limited access to real-time local support and guidance</li>
                    <li>• Overwhelming amount of unverified or outdated travel content</li>
                    <li>• Challenges in connecting with locals or cultural insiders for authentic experiences</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">📝 Bio</h4>
                  <p className="text-gray-300 text-sm">Jessica is a 34-year-old travel blogger from Toronto, Canada, who specializes in African travel destinations. She's a photographer and relies heavily on digital tools to plan her trips. Jessica is always looking for new experiences and cultural insights to share with her large following on social media.</p>
                </div>
              </div>
              
              <div className="bg-blue-900/20 rounded-lg p-4">
                <p className="text-blue-300 text-sm italic">
                  "I need an app that not only helps me plan efficiently but also ensures that I'm experiencing the true essence of each location."
                </p>
              </div>
            </div>
          </div>
          
          {/* User Personas Images */}
          <div className="mt-12 space-y-8">
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-3xl p-6">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/starling/user-persona1.png" 
                    alt="Sarah Mitchell - Marketing Manager Traveler Persona with goals, pain points, and needs"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-3xl p-6">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/starling/user-persona2.png" 
                    alt="Marcus Chen - Hotel Owner Persona with goals, pain points, and needs"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300 italic">
              These personas guided feature prioritization and user flows throughout the design process.
            </p>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            🏗️ Information Architecture
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Mapping the app structure for clarity and simplicity
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-400 mb-4">📱 Onboarding</h3>
              <p className="text-gray-300 text-sm mb-3">Quick intro screens</p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Welcome screen</li>
                <li>• Feature highlights</li>
                <li>• Account setup</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-4">🏠 Home</h3>
              <p className="text-gray-300 text-sm mb-3">Featured stays + search bar</p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Search functionality</li>
                <li>• Featured properties</li>
                <li>• Quick filters</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-purple-400 mb-4">🔍 Search/Filters</h3>
              <p className="text-gray-300 text-sm mb-3">Location, dates, price, amenities</p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Location picker</li>
                <li>• Date selection</li>
                <li>• Price range</li>
                <li>• Amenity filters</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-bold text-orange-400 mb-4">🏨 Property Details</h3>
              <p className="text-gray-300 text-sm mb-3">Photos, description, reviews, pricing</p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Photo gallery</li>
                <li>• Property info</li>
                <li>• Guest reviews</li>
                <li>• Pricing breakdown</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/10 rounded-xl p-6 border border-teal-500/30">
              <h3 className="text-lg font-bold text-teal-400 mb-4">💳 Booking Flow</h3>
              <p className="text-gray-300 text-sm mb-3">Select → Payment → Confirmation</p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Date confirmation</li>
                <li>• Guest details</li>
                <li>• Payment processing</li>
                <li>• Booking success</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-xl p-6 border border-pink-500/30">
              <h3 className="text-lg font-bold text-pink-400 mb-4">👤 Profile/Dashboard</h3>
              <p className="text-gray-300 text-sm mb-3">Bookings, saved stays, settings</p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• My bookings</li>
                <li>• Saved properties</li>
                <li>• Account settings</li>
                <li>• Trip history</li>
              </ul>
            </div>
          </div>
          
          {/* Information Architecture Image */}
          <div className="bg-gradient-to-br from-blue-400 to-sky-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-blue-50 rounded-3xl p-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/starling/information-architecture.png" 
                  alt="Information Architecture - App structure showing Onboarding, Home, Search/Filters, Property Details, Booking Flow, and Profile/Dashboard sections"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* User Flow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            🔄 User Flow
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Mapping the journey from discovery to booking confirmation
          </p>
          
          {/* Primary User Flow: Booking a Stay */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Primary Flow: Booking a Stay</h3>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl border border-green-500/30 flex-1">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">1</div>
                <h4 className="font-semibold text-green-400 mb-2">Open App</h4>
                <p className="text-gray-300 text-sm">Launch Starling → Home screen</p>
              </div>
              
              <div className="hidden md:block">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/30 flex-1">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">2</div>
                <h4 className="font-semibold text-blue-400 mb-2">Search</h4>
                <p className="text-gray-300 text-sm">Enter location → Apply filters</p>
              </div>
              
              <div className="hidden md:block">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/30 flex-1">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">3</div>
                <h4 className="font-semibold text-purple-400 mb-2">Browse</h4>
                <p className="text-gray-300 text-sm">View property cards → Tap listing</p>
              </div>
              
              <div className="hidden md:block">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl border border-orange-500/30 flex-1">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">4</div>
                <h4 className="font-semibold text-orange-400 mb-2">Review</h4>
                <p className="text-gray-300 text-sm">View details → Check pricing</p>
              </div>
              
              <div className="hidden md:block">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-teal-500/10 to-teal-600/10 rounded-xl border border-teal-500/30 flex-1">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">5</div>
                <h4 className="font-semibold text-teal-400 mb-2">Book</h4>
                <p className="text-gray-300 text-sm">Payment → Confirmation</p>
              </div>
            </div>
          </div>
          
          {/* User Flow Image */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-1 shadow-2xl">
            <div className="rounded-3xl p-6" style={{backgroundColor: '#CEF5EC'}}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/starling/user-flow.png" 
                  alt="User Flow Diagram - Complete booking journey from app launch to confirmation with 5-step process"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            ✏️ Low-Fidelity Wireframes
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Sketching the foundation for minimal steps in search and booking
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Sketches focused on minimal steps for search & booking</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Card layouts tested for readability and visual hierarchy</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Simple navigation tabs for Home, Search, Bookings, and Profile</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Straightforward, predictable pathways without unnecessary distractions</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Wireframe Priorities</h3>
              <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Layout hierarchy for property cards
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Search and filter placement optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Booking flow simplification
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Navigation structure validation
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Wireframes Images */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left side - Tall image */}
            <div className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-3xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-3xl p-6">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/starling/wireframe1.png" 
                    alt="Low-Fidelity Wireframes - Main screen layouts and navigation structure"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Right side - Two shorter images stacked */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-3xl p-1 shadow-2xl">
                <div className="bg-gray-900 rounded-3xl p-6">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/images/starling/wireframe2.png" 
                      alt="Low-Fidelity Wireframes - Search and filter interface design"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-3xl p-1 shadow-2xl">
                <div className="bg-gray-900 rounded-3xl p-6">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/images/starling/wireframe3.png" 
                      alt="Low-Fidelity Wireframes - Booking flow and property details"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            🎨 Design System
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed text-center mb-12">
            Building consistency and modern appeal through systematic design choices
          </p>
          
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-6 border border-green-500/30">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-green-400 mb-3">Color Palette</h3>
              <p className="text-gray-300 text-sm mb-4">Calming teal and green tones with neutral accents</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="w-6 h-6 rounded" style={{backgroundColor: '#1A3C44'}} title="Dark Teal"></div>
                <div className="w-6 h-6 rounded" style={{backgroundColor: '#A3D2CA'}} title="Light Green"></div>
                <div className="w-6 h-6 rounded" style={{backgroundColor: '#2E4A4A'}} title="Dark Blue-Green"></div>
                <div className="w-6 h-6 rounded" style={{backgroundColor: '#4A7D82'}} title="Medium Teal"></div>
                <div className="w-6 h-6 rounded" style={{backgroundColor: '#8A8A8A'}} title="Gray"></div>
                <div className="w-6 h-6 bg-white rounded border border-gray-600" title="White"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-6 border border-blue-500/30">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">Aa</span>
              </div>
              <h3 className="text-lg font-bold text-blue-400 mb-3">Typography</h3>
              <p className="text-gray-300 text-sm mb-4">Segoe UI (clean, readable)</p>
              <div className="space-y-1" style={{fontFamily: 'Segoe UI, system-ui, sans-serif'}}>
                <div className="text-sm font-bold text-white">Heading Bold</div>
                <div className="text-xs font-medium text-gray-300">Body Medium</div>
                <div className="text-xs text-gray-400">Caption Regular</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-6 border border-purple-500/30">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-purple-400 mb-3">UI Components</h3>
              <p className="text-gray-300 text-sm mb-4">Buttons, cards, modals, search bars, filter chips</p>
              <div className="space-y-2">
                <button className="w-full py-1.5 text-white rounded text-xs" style={{backgroundColor: '#1A3C44'}}>Primary Button</button>
                <div className="w-full py-1.5 bg-gray-700 text-gray-300 rounded text-xs text-center">Card Component</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl p-6 border border-orange-500/30">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">✨</span>
              </div>
              <h3 className="text-lg font-bold text-orange-400 mb-3">Icons</h3>
              <p className="text-gray-300 text-sm mb-4">Line-based for a modern, lightweight feel</p>
              <div className="flex space-x-3 text-gray-400">
                <span className="text-lg">🏠</span>
                <span className="text-lg">🔍</span>
                <span className="text-lg">❤️</span>
                <span className="text-lg">👤</span>
              </div>
            </div>
          </div>
          
          {/* Design System Image */}
          <div className="bg-gradient-to-br from-teal-500 to-green-500 rounded-3xl p-1 shadow-2xl">
            <div className="rounded-3xl p-6" style={{backgroundColor: '#CEF5EC'}}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/starling/design-system.png" 
                  alt="Design System - Complete style guide with color palette, typography, and UI components"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Fidelity UI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            📱 High-Fidelity UI Design
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            Bringing the wireframes to life with polished visual design and brand identity
          </p>
          
          <div className="space-y-16">
            {/* Splash Screen */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-6">🌟 Splash Screen</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    The splash screen serves as the welcoming entry point to the Starling app, establishing immediate brand recognition and setting expectations for the user experience.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <p>Clean, minimalist design with prominent Starling branding</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <p>Calming teal color palette that evokes trust and hospitality</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <p>Smooth loading animation that engages users during app initialization</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-1 shadow-2xl">
                  <div className="bg-gray-900 rounded-3xl p-6">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src="/images/starling/splash-screen.png" 
                        alt="Starling App Splash Screen - Brand identity and welcome experience"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Home Screen */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-500 to-teal-600 rounded-3xl p-1 shadow-2xl">
                  <div className="bg-gray-900 rounded-3xl p-6">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src="/images/starling/home-screen.png" 
                        alt="Starling App Home Screen - Central hub with search and featured properties"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">🏠 Home Screen</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    The home screen acts as the central command center, providing users with immediate access to search functionality and personalized recommendations.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p>Prominent search bar with smart location and date suggestions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p>Curated featured properties with high-quality imagery</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p>Quick access filters for price, amenities, and property type</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p>Personalized recommendations based on user preferences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Explore Screen */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-6">🔍 Explore Screen</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    The explore screen transforms property browsing into an engaging, visual-first experience that helps users discover their perfect accommodation effortlessly.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p>Visual-first property cards with large, compelling imagery</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p>Intuitive filter chips for easy refinement of search results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p>Transparent pricing display with no hidden fees</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p>Smart sorting options: price, rating, distance, and availability</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-1 shadow-2xl">
                  <div className="bg-gray-900 rounded-3xl p-6">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src="/images/starling/explore-screen.png" 
                        alt="Starling App Explore Screen - Visual property browsing with filters"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Screens */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            📱 Other Screens & Features
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Additional screens to complete the user experience
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-400 mb-4">🚀 Onboarding Walkthrough</h3>
              <p className="text-gray-300 text-sm">Clean home screen with prominent search and curated property cards with large images</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-xl p-6 border border-pink-500/30">
              <h3 className="text-lg font-bold text-pink-400 mb-4">❤️ Saved Favorites</h3>
              <p className="text-gray-300 text-sm">Filter chips for intuitive refinement and easy access to saved properties</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-4">✅ Booking Confirmation</h3>
              <p className="text-gray-300 text-sm">Booking screen with transparent breakdown and calendar sync integration</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-purple-400 mb-4">👤 User Profile & Settings</h3>
              <p className="text-gray-300 text-sm">Complete user account management and personalization settings</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-bold text-orange-400 mb-4">🏨 Host Dashboard</h3>
              <p className="text-gray-300 text-sm">Property management interface for hotel owners with simple listing updates</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/10 rounded-xl p-6 border border-teal-500/30">
              <h3 className="text-lg font-bold text-teal-400 mb-4">💬 Guest Support</h3>
              <p className="text-gray-300 text-sm">Direct communication channels between guests and property owners</p>
            </div>
          </div>
          
          {/* Other Screens Image */}
          <div className="rounded-2xl p-6">
            <div className="rounded-xl overflow-hidden shadow-lg shadow-green-500/20">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            💡 What I Learned
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-3">🎯 Simplicity Wins</h3>
                <p className="text-gray-300">Users appreciate fewer steps, not more features. Focus on core functionality over feature bloat.</p>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-3">⚖️ Balancing Dual Empathy</h3>
                <p className="text-gray-300">Balancing traveler needs vs. host needs requires dual empathy and understanding both user types.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-400 mb-3">🔍 Early Testing Value</h3>
                <p className="text-gray-300">Testing early wireframes helped validate flows before UI polish, saving time and resources.</p>
              </div>
              
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-400 mb-3">💰 Transparent Pricing Impact</h3>
                <p className="text-gray-300">Transparent pricing builds user trust, which directly impacts conversions and user satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Reflection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Final Reflection
          </h2>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-8 border border-green-500/30">
            <p className="text-xl text-gray-300 leading-relaxed">
              This project reinforced my belief that great design in hospitality isn't just about functionality, but about creating a digital experience that feels <span className="text-green-400 font-semibold">human</span>, <span className="text-green-400 font-semibold">helpful</span>, and <span className="text-green-400 font-semibold">welcoming</span> — just like hospitality itself.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              ← Back to Home
            </a>
            <a 
              href="/projects" 
              className="px-8 py-3 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}