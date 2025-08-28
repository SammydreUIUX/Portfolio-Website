'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      value: 'hello@johndoe.com',
      link: 'mailto:hello@johndoe.com'
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'location',
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you for your message! I&apos;ll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Something went wrong. Please try again.</p>
                </div>
              )}

                             <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                       Name *
                     </label>
                     <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleInputChange}
                       required
                       className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                       placeholder="Your name"
                     />
                   </div>
                   <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                       Email *
                     </label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleInputChange}
                       required
                       className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                       placeholder="your.email@example.com"
                     />
                   </div>
                 </div>

                 <div>
                   <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                     Subject *
                   </label>
                   <select
                     id="subject"
                     name="subject"
                     value={formData.subject}
                     onChange={handleInputChange}
                     required
                     className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                   >
                    <option value="">Select a subject</option>
                    <option value="project">Project Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="job">Job Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                     Message *
                   </label>
                   <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     required
                     rows={6}
                     className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                     placeholder="Tell me about your project or how I can help..."
                   ></textarea>
                 </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

                         {/* Contact Information */}
             <div className="space-y-8">
               {/* Contact Info */}
               <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
                 <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                 <div className="space-y-6">
                   {contactInfo.map((info) => (
                     <div key={info.title} className="flex items-center">
                       <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                         <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          {info.icon === 'email' && (
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          )}
                          {info.icon === 'phone' && (
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          )}
                          {info.icon === 'location' && (
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          )}
                        </svg>
                      </div>
                                             <div>
                         <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                         <a
                           href={info.link}
                           className="text-blue-400 hover:text-blue-300 transition-colors"
                         >
                           {info.value}
                         </a>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

                             {/* Social Links */}
               <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
                 <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
                 <div className="flex space-x-4">
                   {socialLinks.map((social) => (
                     <a
                       key={social.name}
                       href={social.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
                       aria-label={social.name}
                     >
                       <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon === 'github' && (
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        )}
                        {social.icon === 'linkedin' && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        )}
                        {social.icon === 'twitter' && (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

                             {/* Availability */}
               <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
                 <h2 className="text-2xl font-bold text-white mb-6">Availability</h2>
                 <div className="space-y-4">
                   <div className="flex items-center justify-between">
                     <span className="text-gray-300">Current Status:</span>
                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900 text-green-300">
                       Available for new projects
                     </span>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-gray-300">Response Time:</span>
                     <span className="text-white font-medium">Within 24 hours</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-gray-300">Preferred Contact:</span>
                     <span className="text-white font-medium">Email</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
