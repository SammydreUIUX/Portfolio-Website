export default function About() {
  const skills = [
    { 
      category: 'Core Specialties', 
      items: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems', 'Mobile Apps', 'Web Applications'] 
    },
    { 
      category: 'Tools & Technologies', 
      items: ['Figma', 'Photoshop', 'Illustrator', 'ProtoPie', 'Miro', 'Framer', 'Jira', 'JavaScript'] 
    },
    { 
      category: 'Companies Worked With', 
      items: ['AIRTEL', 'STARLING', 'ZONEAID', 'INSPORHEALM'] 
    },
  ];

  const testimonials = [
    {
      quote: "Transformed product experience and increased conversions by 40%",
      author: "Product Manager",
      company: "Tech Startup"
    },
    {
      quote: "Delivered exceptional designs with a professional research-driven approach",
      author: "Design Director", 
      company: "Digital Agency"
    },
    {
      quote: "Outstanding collaboration and innovative solutions to complex UX challenges",
      author: "Engineering Lead",
      company: "Enterprise Software"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Product Designer with 5+ years in product design and 9+ years in visual design, 
              based in Vancouver, crafting inclusive, human-centered digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-16 h-16 lg:w-20 lg:h-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-lg font-semibold">Samuel Funmilayo</p>
                    <p className="text-sm opacity-90">Product Designer</p>
                  </div>
                </div>
              </div>
            </div>

                         {/* About Content */}
             <div className="space-y-6">
               <h2 className="text-2xl font-bold text-white">My Story</h2>
               <p className="text-gray-300 leading-relaxed">
                 I specialize in creating inclusive, user-centered digital experiences that transform how people interact with technology. 
                 With over 5 years in product design and 9 years in visual design, I bring a unique perspective to every project.
               </p>
               <p className="text-gray-300 leading-relaxed">
                 My approach combines thorough user research with innovative design solutions to solve complex problems. 
                 I believe great design should be accessible, intuitive, and meaningful for all users.
               </p>
               <p className="text-gray-300 leading-relaxed">
                 Based in Vancouver, I&apos;ve had the privilege of working with companies like AIRTEL, STARLING, ZONEAID, and INSPORHEALM, 
                 helping them create digital products that make a real impact in people&apos;s lives.
               </p>
             </div>
          </div>
        </div>
      </section>

             {/* Skills Section */}
       <section className="py-20 bg-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
               Skills & Expertise
             </h2>
             <p className="text-lg text-gray-300 max-w-2xl mx-auto">
               My toolkit for creating exceptional user experiences and digital products.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {skills.map((skillGroup) => (
               <div key={skillGroup.category} className="bg-gray-700 rounded-lg p-6">
                 <h3 className="text-xl font-semibold text-white mb-4">
                   {skillGroup.category}
                 </h3>
                 <div className="space-y-2">
                   {skillGroup.items.map((skill) => (
                     <div key={skill} className="flex items-center">
                       <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                       <span className="text-gray-300">{skill}</span>
                     </div>
                   ))}
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

             {/* Testimonials Section */}
       <section className="py-20 bg-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
               What People Say
             </h2>
             <p className="text-lg text-gray-300 max-w-2xl mx-auto">
               Feedback from clients and collaborators I&apos;ve worked with.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {testimonials.map((testimonial, index) => (
               <div key={index} className="bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-700">
                 <div className="mb-6">
                   <svg className="w-8 h-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
                     <path d="M10 8c-3.3 0-6 2.7-6 6v10c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-2c0-2.2 1.8-4 4-4V8z"/>
                   </svg>
                   <p className="text-gray-300 leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
                 </div>
                 <div>
                   <p className="text-white font-semibold">{testimonial.author}</p>
                   <p className="text-blue-400 text-sm">{testimonial.company}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

    </div>
  );
}
