'use client';

import Link from 'next/link';

export default function Projects() {
  const caseStudies = [
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
      color: 'from-red-500 to-orange-500',
      featured: true
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
      color: 'from-blue-500 to-purple-500',
      featured: true
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
      color: 'from-green-500 to-teal-500',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#131313' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#131313' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-righteous text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-futura">
              Explore my design projects. Each case study represents 
              a unique challenge and demonstrates my approach to creating inclusive, user-centered digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20" style={{ backgroundColor: '#131313' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((project) => (
              <div 
                key={project.id} 
                className="group relative rounded-3xl overflow-hidden transition-all duration-700 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-3 group-hover:opacity-8 transition-opacity duration-700`}></div>
                
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" style={{
                  background: `linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)`,
                  filter: 'blur(1px)'
                }}></div>
                
                {/* Card Content */}
                <div className="relative z-10 p-8 group-hover:p-9 transition-all duration-300">
                  {/* Category & Meta Info */}
                  <div className="mb-7 space-y-4">
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className={`inline-block px-5 py-2.5 text-sm font-futura font-semibold rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg shadow-current/30 group-hover:shadow-current/50 transition-all duration-300`}>
                        {project.category}
                      </span>
                      <div className="flex items-center gap-3 text-sm text-gray-300 font-futura">
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">{project.duration}</span>
                        <span>•</span>
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">{project.team}</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-sm text-gray-300 font-futura font-medium">{project.role}</p>
                    </div>
                  </div>
                  
                  {/* Project Title & Subtitle */}
                  <div className="mb-7">
                    <h3 className="text-4xl lg:text-5xl font-righteous mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xl text-gray-300 font-futura font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">{project.subtitle}</p>
                  </div>
                  
                  {/* Project Description */}
                  <div className="mb-7 p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-gray-300 font-futura leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-base">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-7">
                    <h4 className="text-white font-righteous mb-4 text-base">Key Features</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.keyFeatures.map((feature, idx) => (
                        <span key={idx} className="px-4 py-2.5 text-gray-300 font-futura rounded-full text-sm border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-white/10">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact & Technologies */}
                  <div className="mb-8 space-y-5">
                    <div className="p-5 rounded-xl border border-green-400/30 bg-gradient-to-r from-green-400/10 to-green-600/5 shadow-lg shadow-green-400/10">
                      <p className="text-green-400 font-righteous text-base mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Impact
                      </p>
                      <p className="text-gray-200 font-futura text-base font-medium">{project.impact}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-gray-300 font-futura text-base mb-3 font-medium">Technologies Used</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-2 bg-blue-500/10 text-blue-300 font-futura rounded-lg text-sm border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Case Study Button */}
                  <Link
                    href={project.id === 1 ? '/projects/zoneaid' : '#'}
                    className={`inline-flex items-center justify-center w-full px-8 py-5 bg-gradient-to-r ${project.color} text-white font-futura font-bold rounded-2xl hover:shadow-xl hover:shadow-current/30 transition-all duration-500 group-hover:translate-y-2 group-hover:scale-[1.02] text-lg relative overflow-hidden`}
                    style={{
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <span className="relative z-10 flex items-center gap-3">
                      View Case Study
                      <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

             {/* Additional Projects Section */}
       <section className="py-20" style={{ backgroundColor: '#0f0f0f' }}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-righteous text-white mb-4">
               More Work
             </h2>
             <p className="text-lg text-gray-300 font-futura max-w-2xl mx-auto">
               Additional projects and collaborations that showcase my diverse skills 
               in product design and fullstack development.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               {
                 title: 'E-Commerce Platform',
                 category: 'Full-Stack',
                 description: 'Modern e-commerce solution with real-time inventory and secure payments.'
               },
               {
                 title: 'Task Management App',
                 category: 'Product Design',
                 description: 'Collaborative task management with drag-and-drop functionality.'
               },
               {
                 title: 'Weather Dashboard',
                 category: 'Frontend',
                 description: 'Beautiful weather dashboard with real-time data visualization.'
               }
             ].map((project, index) => (
               <div 
                 key={index} 
                 className="rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                 style={{ 
                   background: 'rgba(255, 255, 255, 0.05)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255, 255, 255, 0.1)'
                 }}
               >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-green-500 to-blue-600">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <p className="text-sm font-futura font-semibold">{project.title}</p>
                    </div>
                  </div>
                </div>

                                 {/* Project Content */}
                 <div className="p-6">
                   <div className="mb-3">
                     <span className="inline-block bg-white/10 text-green-300 text-xs font-futura font-medium px-2 py-1 rounded-full border border-green-500/30">
                       {project.category}
                     </span>
                   </div>
                   
                   <h3 className="text-lg font-righteous text-white mb-3">{project.title}</h3>
                   <p className="text-gray-300 font-futura text-sm leading-relaxed mb-4">
                     {project.description}
                   </p>

                   {/* View Project Button */}
                   <Link
                     href="#"
                     className="inline-flex items-center justify-center w-full px-4 py-2 bg-white/10 text-white text-sm font-futura font-medium rounded hover:bg-white/20 transition-colors border border-white/20"
                   >
                     View Project
                   </Link>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro Interactions Section */}
      <section className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-righteous text-white mb-4">
              Micro Interactions
            </h2>
            <p className="text-lg text-gray-300 font-futura max-w-2xl mx-auto">
              Thoughtful details that enhance user experience through delightful animations and interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Button Hover Animation',
                description: 'Smooth scale and color transitions on interactive buttons'
              },
              {
                title: 'Loading State Animation',
                description: 'Engaging skeleton loaders and progress indicators'
              },
              {
                title: 'Form Field Interactions',
                description: 'Real-time validation feedback and input animations'
              },
              {
                title: 'Navigation Transitions',
                description: 'Seamless page transitions and menu animations'
              }
            ].map((video, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
              >
                {/* Video Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  {/* Play Button */}
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-futura px-2 py-1 rounded">
                    0:{(15 + index * 5).toString().padStart(2, '0')}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-righteous text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 font-futura text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo Showcase */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-3xl"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                   backdropFilter: 'blur(20px)',
                   border: '1px solid rgba(255, 255, 255, 0.15)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                 }}>
              <h3 className="text-2xl font-righteous text-white mb-4">
                See It In Action
              </h3>
              <p className="text-gray-300 font-futura mb-6 max-w-md mx-auto">
                Every interaction on this page demonstrates thoughtful micro-animations designed to enhance user experience.
              </p>
              <div className="flex justify-center gap-4">
                {['🎯', '✨', '🎨', '⚡'].map((emoji, idx) => (
                  <div 
                    key={idx}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#131313' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-righteous text-white mb-4">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="text-lg text-gray-300 font-futura mb-8 max-w-2xl mx-auto">
            Ready to discuss your next project? I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-futura font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            style={{
              background: 'rgba(59, 130, 246, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
