import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      href: 'https://github.com/samuelfunmilayo', 
      label: 'GitHub', 
      icon: 'github' 
    },
    { 
      href: 'https://linkedin.com/in/samuel-funmilayo-0a9a11217', 
      label: 'LinkedIn', 
      icon: 'linkedin' 
    },
    { 
      href: 'https://twitter.com/samuelfunmilayo', 
      label: 'Twitter', 
      icon: 'twitter' 
    },
  ];

  return (
    <footer className="relative text-white overflow-hidden" style={{backgroundColor: '#131313'}}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Floating orbs for ambient lighting */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Large Background Name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Background name with soft glow and gradient */}
        <div className="relative text-center">
          {/* Multiple glow layers for soft effect */}
          <div className="absolute inset-0 blur-3xl opacity-10">
            <div className="flex flex-col items-center leading-[0.8]">
              <h1 className="text-6xl sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent select-none">
                SAMUEL
              </h1>
              <h1 className="text-6xl sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent select-none">
                FUNMILAYO
              </h1>
            </div>
          </div>
          <div className="absolute inset-0 blur-2xl opacity-0">
            <div className="flex flex-col items-center leading-[0.8]">
              <h1 className="text-6xl sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent select-none">
                SAMUEL
              </h1>
              <h1 className="text-6xl sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent select-none">
                FUNMILAYO
              </h1>
            </div>
          </div>
          <div className="absolute inset-0 blur-xl opacity-0">
            <div className="flex flex-col items-center leading-[0.8]">
              <h1 className="text-6xl sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent select-none">
                SAMUEL
              </h1>
              <h1 className="text-6xl sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent select-none">
                FUNMILAYO
              </h1>
            </div>
          </div>
          
          {/* Main background text with gradient */}
          <div className="flex flex-col items-center leading-[0.8]">
            <h1 className="text-6xl sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold bg-gradient-to-br from-white/4 via-gray-200/3 to-gray-400/2 bg-clip-text text-transparent select-none">
              SAMUEL
            </h1>
            <h1 className="text-6xl sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold bg-gradient-to-br from-white/4 via-gray-200/3 to-gray-400/2 bg-clip-text text-transparent select-none">
              FUNMILAYO
            </h1>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Simple header */}
        <div className="text-center mb-16">
          <p className="text-2xl text-gray-300 mb-2">
            Ready to work together?
          </p>
          <p className="text-lg text-gray-400">
            Product Designer & UX Specialist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400">Vancouver, Canada 🇨🇦</p>
              <a 
                href="mailto:hello@samuelfunmilayo.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 block"
              >
                hello@samuelfunmilayo.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{backgroundColor: '#131313', border: '1px solid #333'}}
                  aria-label={social.label}
                >
                  <svg className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
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
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Samuel Funmilayo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
