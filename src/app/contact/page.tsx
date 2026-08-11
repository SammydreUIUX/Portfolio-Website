'use client';

import { useState } from 'react';

const SW_BG = '#FAFAF8';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-0 py-3 border-0 border-b bg-transparent focus:outline-none focus:border-black transition-colors text-lg";

  return (
    <div className="min-h-screen" style={{ backgroundColor: SW_BG, color: SW_INK }}>
      {/* Hero: Say Hello */}
      <section className="px-6 sm:px-8 lg:px-12 pt-28 pb-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="sw-label mb-8" style={{ color: SW_GRAY }}>Get In Touch</p>
          <h1 className="sw-display text-[16vw] sm:text-[11vw] lg:text-[8vw] leading-none mb-10">
            Say Hello
          </h1>
          <p className="text-xl max-w-xl mx-auto" style={{ color: SW_GRAY }}>
            I&apos;m always interested in new opportunities and exciting projects. Feel free to reach out.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 sm:px-8 lg:px-12 pb-24 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-2xl mx-auto pt-20">
          {submitStatus === 'success' && (
            <div className="mb-8 p-4 border" style={{ borderColor: SW_INK }}>
              <p>Thank you for your message! I&apos;ll get back to you soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 border" style={{ borderColor: SW_INK }}>
              <p>Something went wrong. Please try again.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="sw-label block mb-2" style={{ color: SW_GRAY }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={inputClasses}
                  style={{ borderColor: SW_LINE, color: SW_INK }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sw-label block mb-2" style={{ color: SW_GRAY }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={inputClasses}
                  style={{ borderColor: SW_LINE, color: SW_INK }}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sw-label block mb-2" style={{ color: SW_GRAY }}>
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={inputClasses}
                style={{ borderColor: SW_LINE, color: SW_INK }}
              >
                <option value="">Select a subject</option>
                <option value="project">Project Inquiry</option>
                <option value="collaboration">Collaboration</option>
                <option value="job">Job Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="sw-label block mb-2" style={{ color: SW_GRAY }}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className={inputClasses}
                style={{ borderColor: SW_LINE, color: SW_INK }}
                placeholder="Tell me about your project or how I can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="sw-btn sw-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Quiet details strip */}
      <section className="px-6 sm:px-8 lg:px-12 py-10 border-t" style={{ borderColor: SW_LINE }}>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <a href="mailto:sdamilare72@gmail.com" className="sw-label hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>
            sdamilare72@gmail.com
          </a>
          <span className="sw-label" style={{ color: SW_GRAY }}>Vancouver, BC, Canada</span>
          <span className="sw-label" style={{ color: SW_GRAY }}>Available for new projects</span>
        </div>
      </section>
    </div>
  );
}
