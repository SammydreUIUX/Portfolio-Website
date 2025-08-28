'use client';

import React from 'react';
import Link from 'next/link';

export default function ZoneAidCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-orange-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </div>
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl mx-auto mb-8 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            ZoneAid
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Emergency Safety App — Redesigning how people respond when seconds matter
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Role</span>
              <span className="text-white font-medium">Lead UI/UX Designer</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Duration</span>
              <span className="text-white font-medium">6 months</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Team</span>
              <span className="text-white font-medium">4 members</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Impact</span>
              <span className="text-green-400 font-medium">40% faster response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  When panic strikes, every second counts. Yet existing emergency apps were cluttered with features that became barriers during the moments that mattered most. People were freezing, fumbling, and failing to get help when they needed it desperately.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  ZoneAid needed to become more than an app—it needed to be an instant lifeline that worked even when users couldn't think clearly, couldn't see properly, or couldn't use both hands.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">The Solution</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We stripped away everything non-essential and rebuilt the emergency experience around three core principles: speed, simplicity, and reliability. The new ZoneAid gets users connected to help in under 3 seconds, works offline, and functions even in the most chaotic situations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">One-tap SOS activation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Offline emergency mode</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Family monitoring system</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Real-time location sharing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/zoneaid/Overview.jpg" 
                  alt="ZoneAid app interface showing the main emergency screen with Request For Help button and recent emergencies list"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 ease-out"
                />
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Navigation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Design Journey</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { phase: "Discover", description: "Understanding fear and urgency" },
              { phase: "Define", description: "Clarity from chaos" },
              { phase: "Sketch", description: "Life-saving blueprints" },
              { phase: "IA", description: "Emergency system backbone" },
              { phase: "Wireframe", description: "First true rehearsal" },
              { phase: "Prototype", description: "Testing under pressure" },
              { phase: "Deliver", description: "Promise of response" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 hover:scale-105 transition-all duration-300 ease-out">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{item.phase}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Phase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
              01
            </div>
            <div>
              <h2 className="text-4xl font-bold">Discover</h2>
              <p className="text-gray-400">Walking through the world of fear</p>
            </div>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The research began in hospital waiting rooms and emergency dispatch centers, but the real learning happened in the quiet moments when people shared their stories of fear.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              I sat with Maria, a working mother, as she recounted the night her apartment building caught fire. "I grabbed my phone to call 911, but my hands were shaking so badly I kept dialing wrong. My daughter was crying, smoke was everywhere, and I just... froze. I couldn't think. The emergency app I had installed? It had five different buttons and I had no idea which one to press."
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              At the dispatch center, Lieutenant Rodriguez explained the bottlenecks they see daily: "We get calls where people are so panicked they can't speak clearly. They can't remember their address. Sometimes we get pocket dials that could have been real emergencies. The technology should be helping them communicate, not adding another layer of complexity."
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              During a ride-along with paramedics, I witnessed a cardiac event where bystanders struggled with an emergency app that required them to create an account before calling for help. Precious minutes ticked by as someone fumbled through registration screens while a life hung in the balance.
            </p>
            
            <div className="bg-red-900/20 border-l-4 border-red-500 p-6 my-8">
              <p className="text-gray-200 italic">
                "In emergencies, cognitive load becomes the enemy. Fear narrows attention, stress impairs fine motor skills, and panic clouds judgment. Every extra tap, every confusing icon, every moment of hesitation could mean the difference between life and death."
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The patterns became clear through dozens of interviews. People didn't need more features during emergencies—they needed fewer barriers. They didn't need options—they needed action. They didn't need complexity—they needed clarity that cut through chaos.
            </p>
            
            <p className="text-xl text-orange-300 font-medium mb-8 border-l-4 border-orange-500 pl-6">
              "We didn't need more features. We needed fewer barriers."
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              This insight would reshape everything that followed. The research wasn't just data points—it was a collection of human stories that demanded we design not just for normal circumstances, but for the worst moments of people's lives. It set the stage for defining what truly mattered in those critical seconds.
            </p>
          </div>

          {/* Discover Phase Images */}
          <div className="mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Emergency Categories Screen */}
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="/images/zoneaid/discover-1.jpg.png" 
                    alt="ZoneAid emergency category selection screen showing Fire, Medical, Assault, Robbery, Bio Hazard, Kidnapping, Suspicious Activity and Others options"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 ease-out"
                  />
                </div>
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-2xl transform scale-110"></div>
              </div>

              {/* Help Progress Screen */}
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="/images/zoneaid/discover-2.jpg.png" 
                    alt="ZoneAid help progress screen showing breathing guidance and Zone Aiders availability with Helper Rendered status"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ease-out"
                  />
                </div>
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-2xl transform scale-110"></div>
              </div>
            </div>
            
            {/* Image Description */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Emergency categorization system and real-time helper coordination - core features that emerged from user research insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Define Phase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
              02
            </div>
            <div>
              <h2 className="text-4xl font-bold">Define</h2>
              <p className="text-gray-400">Clarity from chaos</p>
            </div>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The raw emotions and scattered insights from research needed to crystallize into something actionable. This is where chaos transforms into clarity.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              I spread dozens of interview transcripts across the conference room wall. Patterns emerged like constellations—fear, confusion, time pressure, and the desperate need for simplicity. But patterns weren't enough. We needed to define the exact problem we were solving.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The breakthrough came when we reframed the question. Instead of "How do we build a better emergency app?" we asked: "How do we help users act decisively in under 3 seconds when their world is falling apart?"
            </p>
            
            <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
              <p className="text-gray-200 font-semibold mb-3">Core Problem Statement:</p>
              <p className="text-gray-200">
                During emergencies, people need to connect with help in under 3 seconds, but existing solutions create cognitive barriers that delay critical response when fear and panic compromise decision-making abilities.
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              From the research, three distinct personas emerged. There was Sarah, the frightened commuter who discovered her train was derailed and needed immediate help. Miguel, the father whose child was choking and whose hands were too shaky to navigate complex menus. And Lieutenant Chen, the emergency responder who needed clear, actionable information from callers who could barely speak.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Each persona demanded different solutions, but they shared a common thread: the need for immediate, intuitive action. This led us to our core "How Might We" questions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-gray-800/50 rounded-xl">
                <h4 className="font-semibold text-orange-400 mb-3">For Users in Crisis</h4>
                <p className="text-gray-300 text-sm">How might we eliminate every unnecessary step between panic and help?</p>
              </div>
              <div className="p-6 bg-gray-800/50 rounded-xl">
                <h4 className="font-semibold text-red-400 mb-3">For Impaired Function</h4>
                <p className="text-gray-300 text-sm">How might we design for trembling hands, tunnel vision, and compromised cognition?</p>
              </div>
              <div className="p-6 bg-gray-800/50 rounded-xl">
                <h4 className="font-semibold text-yellow-400 mb-3">For Critical Moments</h4>
                <p className="text-gray-300 text-sm">How might we ensure the app works when everything else fails?</p>
              </div>
              <div className="p-6 bg-gray-800/50 rounded-xl">
                <h4 className="font-semibold text-green-400 mb-3">For First Responders</h4>
                <p className="text-gray-300 text-sm">How might we provide responders with actionable information immediately?</p>
              </div>
            </div>
            
            <p className="text-xl text-yellow-300 font-medium mb-8 border-l-4 border-yellow-500 pl-6">
              "We shifted from solving everything to solving the critical path."
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              This clarity set the foundation for everything that followed. We weren't building features—we were designing lifelines. The next phase would require us to rapidly explore how these insights could take physical form through quick, low-fidelity experiments.
            </p>
          </div>

          {/* Define Phase Image */}
          <div className="mt-12">
            <div className="relative bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 002 2v16a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Define Phase Image</p>
                <p className="text-gray-500 text-xs mt-1">Upload your problem definition and persona imagery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sketch Phase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
              03
            </div>
            <div>
              <h2 className="text-4xl font-bold">Sketch</h2>
              <p className="text-gray-400">Life-saving blueprints</p>
            </div>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Before opening Figma, before thinking about colors or animations, we needed to understand the fundamental shapes of emergency response. These sketches would be about urgency, not aesthetics.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              I dimmed the lights in my office and attempted to sketch while acting out panic scenarios. How does the interface feel when your hands are shaking? What happens when you can only use one hand because the other is helping someone? Can you find the emergency button when your vision is tunneled by fear?
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The first breakthrough came through failure. Every traditional app layout I sketched—navigation bars, menus, categorized options—crumbled under the pressure of emergency simulation. The cognitive load was too high. The paths were too complex. The buttons were too small for trembling fingers.
            </p>
            
            <div className="bg-green-900/20 border-l-4 border-green-500 p-6 my-8">
              <p className="text-gray-200 italic">
                "The sketches that worked weren't about interface design—they were about human psychology under extreme stress. Every line had to justify its existence in the worst moments of someone's life."
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Through dozens of iterations, patterns emerged. The SOS function couldn't be buried in menus—it had to be the hub of the entire system. Secondary features like family notifications and location sharing were important, but they couldn't compete for attention during those critical first seconds.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              I tested button placement by holding my phone in different emergency scenarios: running down stairs, hiding in a closet, supporting an injured person. The thumb reach studies revealed that the center-bottom area was most accessible across different hand sizes and grip styles, especially when motor skills were compromised.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The offline mode exploration proved crucial. What happens when cell service fails but WiFi works? What about when both fail but the app still needs to record what's happening? These sketches led to designing progressive functionality—the app would work in layers, gracefully degrading while maintaining core emergency functions.
            </p>
            
            <p className="text-xl text-green-300 font-medium mb-8 border-l-4 border-green-500 pl-6">
              "These weren't just sketches. They were life-saving blueprints."
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Each sketch session brought us closer to understanding the architecture of urgency. But sketches, no matter how insightful, needed structure. The next phase would organize these insights into a coherent system that could guide the development of a truly emergency-ready application.
            </p>
          </div>

          {/* Sketch Phase Image */}
          <div className="mt-12">
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/zoneaid/sketch-phase.jpg" 
                  alt="ZoneAid sketching process showing low-fidelity wireframes for Home, Get Help, Help flows, Call functionality, Report, Chat, Verification, and Profile screens"
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 ease-out"
                  onError={(e) => {console.log('Image failed to load:', (e.target as HTMLImageElement).src)}}
                />
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-2xl transform scale-105"></div>
            </div>
            
            {/* Image Description */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Early sketching process mapping out the core user flows - from emergency activation to help coordination and verification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Architecture Phase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
              04
            </div>
            <div>
              <h2 className="text-4xl font-bold">Information Architecture</h2>
              <p className="text-gray-400">Emergency system backbone</p>
            </div>
          </div>
          
          {/* Information Architecture Phase Image */}
          <div className="mt-8 mb-12">
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/zoneaid/information-architecture.png" 
                  alt="ZoneAid Information Architecture diagram showing the three-layer system: Emergency Core Layer with SOS activation and location services, Support Layer with family notifications and status updates, and Maintenance Layer with settings and contact management"
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 ease-out"
                />
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 blur-2xl transform scale-105"></div>
            </div>
            
            {/* Image Description */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Three-layer Information Architecture: Emergency Core (immediate response), Support Layer (assistance coordination), and Maintenance Layer (preparation features)
              </p>
            </div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The sketches had revealed the what and where, but now we needed the how. How do these features connect? How does information flow during an emergency? How do we build a system that supports both crisis and calm?
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The conference room wall became a battlefield of sticky notes. Every feature, every screen, every interaction was mapped and re-mapped. Traditional tree structures felt wrong for emergency design—they forced linear thinking when emergencies are chaotic and unpredictable.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The breakthrough came when we stopped thinking in hierarchies and started thinking in layers of urgency. The app needed three distinct functional layers, each serving different moments in the emergency timeline:
            </p>
            
            <div className="space-y-6 my-8">
              <div className="p-6 bg-red-900/20 rounded-xl border-l-4 border-red-500">
                <h4 className="font-semibold text-red-400 mb-3">Emergency Core Layer</h4>
                <p className="text-gray-300 mb-3">The immediate response system—SOS activation, location broadcasting, and emergency categorization. This layer had to work in under 3 seconds with minimal cognitive load.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-800/30 text-red-300 rounded text-sm">SOS Button</span>
                  <span className="px-2 py-1 bg-red-800/30 text-red-300 rounded text-sm">Emergency Categories</span>
                  <span className="px-2 py-1 bg-red-800/30 text-red-300 rounded text-sm">Auto-Location</span>
                </div>
              </div>
              
              <div className="p-6 bg-yellow-900/20 rounded-xl border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-400 mb-3">Support Layer</h4>
                <p className="text-gray-300 mb-3">The assistance system—family notifications, real-time updates, and fallback communication methods. This layer activates after the core emergency is triggered.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-yellow-800/30 text-yellow-300 rounded text-sm">Family Alerts</span>
                  <span className="px-2 py-1 bg-yellow-800/30 text-yellow-300 rounded text-sm">Location Sharing</span>
                  <span className="px-2 py-1 bg-yellow-800/30 text-yellow-300 rounded text-sm">Status Updates</span>
                </div>
              </div>
              
              <div className="p-6 bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-400 mb-3">Maintenance Layer</h4>
                <p className="text-gray-300 mb-3">The preparation system—settings, contacts management, and onboarding. This layer is accessed during calm moments to prepare for potential emergencies.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-800/30 text-blue-300 rounded text-sm">Emergency Contacts</span>
                  <span className="px-2 py-1 bg-blue-800/30 text-blue-300 rounded text-sm">Medical Info</span>
                  <span className="px-2 py-1 bg-blue-800/30 text-blue-300 rounded text-sm">Preferences</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The philosophy became "loops, not trees." Instead of forcing users down predetermined paths, the architecture created loops that always brought them back to the central emergency hub. No matter where panic led them in the app, they could always return to safety with a single tap.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              This layered approach also solved the offline problem. The Emergency Core could function completely offline, the Support Layer worked with limited connectivity, and the Maintenance Layer required full internet access but wasn't time-critical.
            </p>
            
            <p className="text-xl text-blue-300 font-medium mb-8 border-l-4 border-blue-500 pl-6">
              "The architecture gave us confidence—we had built a system that could handle chaos."
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              With this foundation in place, we were ready to move from abstract structure to concrete interface. The wireframing phase would test whether our carefully planned architecture could actually support real human behavior in crisis situations.
            </p>
          </div>

        </div>
      </section>

      {/* Wireframe Phase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
              05
            </div>
            <div>
              <h2 className="text-4xl font-bold">Wireframe</h2>
              <p className="text-gray-400">First true rehearsal</p>
            </div>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Moving from sketches to wireframes felt like the difference between planning a fire drill and actually running one. The grayscale boxes on screen would either prove or disprove months of research and architectural decisions.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The first wireframes were humbling. What looked logical on paper felt clunky in practice. The SOS button, despite being large and central, didn't feel urgent enough. The emergency categories, while clearly labeled, required too much reading time when seconds mattered.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Iteration became obsession. We tested button sizes against thumb reach studies from mobile ergonomics research. The SOS button grew from 60pt to 80pt to finally 120pt—large enough that even shaking hands could activate it reliably. The contrast ratios were pushed beyond WCAG AAA standards to ensure visibility in low-light emergency scenarios.
            </p>
            
            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 my-8">
              <p className="text-gray-200 italic">
                "Every wireframe decision became a question of life and death. Is this button big enough for someone having a heart attack to press? Can this text be read by someone hiding from an intruder? Would this navigation make sense to someone in shock?"
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The tradeoffs were constant and difficult. More visual clarity meant larger elements, which meant less information per screen. Simplicity meant hiding advanced features, but what if someone needed those features in a specific emergency? Each decision required us to choose between competing emergency scenarios.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The breakthrough came when we tested the wireframes with simulated stress. We asked users to navigate the app while performing distracting tasks—mental math, loud noises, time pressure. The wireframes that survived this testing looked nothing like traditional app interfaces. They were bold, simple, and almost primitive in their clarity.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Progressive disclosure became our design philosophy. The main screen showed only the essential emergency function. Secondary features appeared only after the primary emergency action was completed. This ensured that panic wouldn't lead to paralysis—there was always one clear, correct action available.
            </p>
            
            <p className="text-xl text-purple-300 font-medium mb-8 border-l-4 border-purple-500 pl-6">
              "The wireframes became our first true rehearsal of saving lives."
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              These grayscale blueprints had proven the architecture could work. But wireframes are just promises—the delivery phase would determine whether we could transform these structural insights into an app that truly served people in their darkest moments.
            </p>
          </div>

          {/* Wireframe Phase Image */}
          <div className="mt-12">
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/zoneaid/wireframes.png" 
                  alt="ZoneAid wireframe designs showing low-fidelity layouts for emergency screens, SOS button placement, emergency categorization, and progressive disclosure of secondary features"
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 ease-out"
                />
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-2xl transform scale-105"></div>
            </div>
            
            {/* Image Description */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Low-fidelity wireframes testing button placement, screen hierarchy, and progressive disclosure under stress conditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Phase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
              06
            </div>
            <div>
              <h2 className="text-4xl font-bold">Prototype</h2>
              <p className="text-gray-400">Testing under pressure</p>
            </div>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We developed interactive prototypes and conducted stress-testing with simulated emergency scenarios. Our testing approach included both controlled environments and realistic stress simulations to validate design decisions under pressure.
            </p>
            
            <div className="bg-pink-900/20 border-l-4 border-pink-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-pink-300 mb-4">🌀 Prototype Flow: Emergency Within 3 Taps</h3>
              <p className="text-gray-200 mb-4">The initial user journey was mapped as:</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-gray-800/50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">1</div>
                  <p className="text-sm text-gray-300">Launch App</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">2</div>
                  <p className="text-sm text-gray-300">Tap SOS Button</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">3</div>
                  <p className="text-sm text-gray-300">Select Emergency Type (optional)</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">4</div>
                  <p className="text-sm text-gray-300">Location + Alert Sent Automatically</p>
                </div>
              </div>
              <p className="text-gray-200">
                We purposefully made emergency selection optional, allowing users to trigger help first and clarify later if needed. That decision alone reduced total user actions from 5 to just 2.
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Each micro-interaction was tested for:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-gray-800/50 rounded-xl">
                <h4 className="font-semibold text-purple-400 mb-2">Tactile Feedback</h4>
                <p className="text-gray-300 text-sm">We mimicked haptic feedback on mobile to provide immediate physical response confirmation.</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-xl">
                <h4 className="font-semibold text-blue-400 mb-2">Contrast & Visibility</h4>
                <p className="text-gray-300 text-sm">High-contrast dark mode designed specifically for night use and low-light emergencies.</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-xl">
                <h4 className="font-semibold text-green-400 mb-2">Thumb Reach</h4>
                <p className="text-gray-300 text-sm">Designed for one-handed use, optimized for both left and right-handed users.</p>
              </div>
            </div>

            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-purple-300 mb-4">🎯 Visual Simplicity = Psychological Clarity</h3>
              <p className="text-gray-200 mb-4">Instead of detailed dashboards, we prioritized:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>A single, dominant SOS button</li>
                <li>A concise message: "Help is on the way"</li>
                <li>A mini-map showing incoming responder ETA</li>
              </ul>
              <p className="text-gray-200 mb-4">We created visual prototypes for multiple user states:</p>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="bg-gray-800/50 p-2 rounded text-gray-300">"Searching for nearby help"</div>
                <div className="bg-gray-800/50 p-2 rounded text-gray-300">"Responder found — en route"</div>
                <div className="bg-gray-800/50 p-2 rounded text-gray-300">"No response — fallback in progress"</div>
              </div>
              <p className="text-gray-200 mt-4">Each one used calming tones, micro-animations, and real-time feedback to reduce anxiety.</p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">🧪 Rapid Testing + Iteration</h3>
              <p className="text-gray-200 mb-4">We shared our interactive Figma prototypes with:</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-1">10</div>
                  <div>
                    <h4 className="font-semibold text-blue-300">Everyday users (ages 18–55)</h4>
                    <p className="text-gray-300 text-sm">General public testing for usability and accessibility</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-1">5</div>
                  <div>
                    <h4 className="font-semibold text-green-300">Paramedics and security professionals</h4>
                    <p className="text-gray-300 text-sm">Professional responder feedback and validation</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-200 mb-4">They tested flows on their own devices in simulated scenarios — including dim lighting, poor internet, and with gloves on.</p>
              
              <h4 className="font-semibold text-blue-300 mb-3">Key Findings:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Users loved the instant feedback loop: "I knew something was happening."</li>
                <li>One tester suggested adding vibration feedback, which we mocked up immediately.</li>
                <li>A responder mentioned: "It helps to see the emergency category early — we prepare better." So we made category selection visible to responders even if delayed by the user.</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              We then refined the prototype into a high-fidelity version — using ZoneAid's primary palette (#000066) with urgent tones like red and orange to guide attention without overwhelming the user.
            </p>

            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-green-300 mb-6">⚙️ Prototype Testing Results</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">2.8s</div>
                  <p className="text-gray-300 text-sm">Average emergency activation time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">94%</div>
                  <p className="text-gray-300 text-sm">Success rate under stress conditions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <p className="text-gray-300 text-sm">GPS accuracy in location sharing</p>
                </div>
              </div>
              
              <h4 className="font-semibold text-green-300 mb-4">Key Prototype Features Validated</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-400 mb-2">Emergency Widget</h5>
                  <p className="text-gray-300 text-sm">Lock screen widget for instant access without unlocking device</p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-400 mb-2">Audio Confirmation</h5>
                  <p className="text-gray-300 text-sm">Voice feedback confirming emergency type and responder dispatch</p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-red-400 mb-2">Biometric Integration</h5>
                  <p className="text-gray-300 text-sm">Heart rate monitoring to detect genuine distress vs accidental activation</p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">False Alarm Protection</h5>
                  <p className="text-gray-300 text-sm">3-second countdown with easy cancellation to prevent false alerts</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-pink-300 font-medium mb-8 border-l-4 border-pink-500 pl-6">
              "The prototype didn't just validate our design—it evolved it into something that could truly save lives."
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              The data from prototype testing became the foundation for the final development phase. We had moved beyond designing an app to engineering a lifeline. The deliver phase would focus on translating these battle-tested insights into a polished product ready for the real world.
            </p>
          </div>

          {/* Prototype Phase Content */}
          <div className="mt-12 space-y-12">
            {/* Prototype Flow Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/zoneaid/prototype-flow.png" 
                  alt="ZoneAid interactive prototype flow diagram showing complete user journey from emergency detection through help coordination, including multiple flow paths for different emergency scenarios and responder interactions"
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 ease-out"
                />
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-2xl transform scale-105"></div>
            </div>
            
            {/* Flow Image Description */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Interactive prototype flow mapping the complete user journey - from emergency activation through help coordination and emergency responder integration
              </p>
            </div>

            {/* Video Prototype */}
            <div className="relative max-w-sm mx-auto">
              <div className="relative z-10">
                <video 
                  className="aspect-[9/16] w-full rounded-2xl shadow-2xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/images/zoneaid/prototype-demo.mp4" type="video/mp4" />
                  <source src="/images/zoneaid/prototype-demo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-2xl transform scale-105"></div>
            </div>

            {/* Video Description */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Prototype testing sessions showing real users navigating emergency scenarios under simulated stress conditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliver Phase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
              07
            </div>
            <div>
              <h2 className="text-4xl font-bold">Deliver</h2>
              <p className="text-gray-400">Promise of response</p>
            </div>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The final phase wasn't about perfecting pixels—it was about honoring the promises we'd made to people like Maria, who couldn't dial 911 when her building was burning. Every color choice, animation, and micro-interaction had to serve the moment when everything else fails.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Working with developers became a exercise in translating emotion into code. How do you program urgency? The red emergency button wasn't just #FF0000—it was the color that needed to cut through panic and tunnel vision. The haptic feedback wasn't just a vibration—it was confirmation that help was coming when someone couldn't trust their senses.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Collaboration with emergency advisors and first responders kept us grounded in reality. Lieutenant Rodriguez, who had shared dispatch insights during research, now helped us understand exactly what information responders needed most. The app needed to communicate not just that someone needed help, but what kind of help and where to send it.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The real test came during beta testing with actual emergency scenarios—controlled, but real. Volunteer testers navigated the app during simulated fires, medical emergencies, and security threats. The app that emerged from this testing was stripped down, focused, and incredibly fast. It matched the urgency of real scenarios because it was designed by people who understood that design could save lives.
            </p>
            
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-l-4 border-red-500 p-6 my-8">
              <p className="text-gray-200 italic">
                "The stories of fear from research had shaped every pixel of the final solution. Maria's shaking hands guided button sizing. Lieutenant Rodriguez's dispatch experience informed the information hierarchy. Every interview, every moment of panic, every barrier we'd discovered was now addressed in the final design."
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Launch day felt different from other product releases. This wasn't about user engagement or conversion rates—it was about whether we'd created something worthy of people's trust in their worst moments. The early adoption metrics were encouraging, but the real success stories came in different forms.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Three months post-launch, we received a message from a user who'd activated ZoneAid during a car accident. "I couldn't think straight, couldn't remember my location, could barely hold my phone. But I could tap that red button, and everything else happened automatically. Help arrived in minutes." The 40% improvement in response time wasn't just a statistic—it represented moments like these.
            </p>
            
            <p className="text-xl text-red-300 font-medium mb-8 border-l-4 border-red-500 pl-6">
              "From fear to clarity, ZoneAid wasn't just an app. It was a promise of response when seconds matter."
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              The project taught me that designing for extremes—for fear, for panic, for life-threatening situations—creates solutions that work beautifully in normal circumstances too. When you design for someone's worst day, you create experiences that serve them on every other day as well.
            </p>
          </div>

          {/* Deliver Phase Images */}
          <div className="mt-12 space-y-8">
            {/* First Deliver Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/zoneaid/deliver 1.png" 
                  alt="ZoneAid final design showing the polished emergency activation screen with red SOS button and clean, minimal interface designed for high-stress situations"
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 ease-out"
                />
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-2xl transform scale-105"></div>
            </div>

            {/* Second Deliver Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/zoneaid/deliver 2.png" 
                  alt="ZoneAid final user interface details showing emergency categorization and location sharing features with optimized contrast and button sizing for accessibility"
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ease-out"
                />
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 blur-2xl transform scale-105"></div>
            </div>

            {/* Third Deliver Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/zoneaid/deliver 3.png" 
                  alt="ZoneAid implementation results showing the completed emergency response system with real-time status updates and responder coordination interface"
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 ease-out"
                />
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-red-500/10 blur-2xl transform scale-105"></div>
            </div>
            
            {/* Images Description */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Final delivered screens showcasing the complete emergency response system - from initial SOS activation to responder coordination and status updates
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Impact & Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 hover:scale-105 transition-all duration-300 ease-out">
              <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
              <p className="text-gray-300">Faster emergency response time</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 hover:scale-105 transition-all duration-300 ease-out">
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <p className="text-gray-300">Success rate in user testing</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 hover:scale-105 transition-all duration-300 ease-out">
              <div className="text-4xl font-bold text-purple-400 mb-2">3s</div>
              <p className="text-gray-300">Average time to connect to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Next Case Study</h2>
          <Link href="/projects/starling" className="inline-block group">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Starling</h3>
              <p className="text-gray-300">Transforming hospitality booking experience</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}