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
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my design projects. Each case study represents 
              a unique challenge and demonstrates my approach to creating inclusive, user-centered digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-gray-800 rounded-3xl overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative z-10 p-8">
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
                    <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xl text-gray-300 font-medium">{project.subtitle}</p>
                  </div>
                  
                  {/* Project Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.keyFeatures.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact & Technologies */}
                  <div className="mb-8 space-y-4">
                    <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                      <p className="text-green-400 font-semibold text-sm">Impact</p>
                      <p className="text-gray-300 text-sm">{project.impact}</p>
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

                  {/* View Case Study Button */}
                  <Link
                    href={project.id === 1 ? '/projects/zoneaid' : '#'}
                    className={`inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-current/20 transition-all duration-300 group-hover:translate-y-1`}
                  >
                    View Case Study
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

             {/* Additional Projects Section */}
       <section className="py-20 bg-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
               More Work
             </h2>
             <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
                 className="bg-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                      <p className="text-sm font-semibold">{project.title}</p>
                    </div>
                  </div>
                </div>

                                 {/* Project Content */}
                 <div className="p-6">
                   <div className="mb-3">
                     <span className="inline-block bg-green-900 text-green-300 text-xs font-medium px-2 py-1 rounded-full">
                       {project.category}
                     </span>
                   </div>
                   
                   <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                   <p className="text-gray-300 text-sm leading-relaxed mb-4">
                     {project.description}
                   </p>

                   {/* View Project Button */}
                   <Link
                     href="#"
                     className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors"
                   >
                     View Project
                   </Link>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to discuss your next project? I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
