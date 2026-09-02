'use client';

import { useRef, useState } from 'react';

const SW_BG = '#FAFAF8';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

// Web3Forms access keys are meant to be embedded in client-side code:
// https://docs.web3forms.com/ - they only authorize submissions to the
// destination inbox configured for this key, nothing sensitive is exposed.
const WEB3FORMS_ACCESS_KEY = '20429895-edb3-4f0b-9580-2d04681bb135';

const SUBJECT_LABELS: Record<string, string> = {
  project: 'Project Inquiry',
  collaboration: 'Collaboration',
  job: 'Job Opportunity',
  other: 'Other',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: { name: string; email: string; subject: string; message: string }): string | null {
  if (!data.name.trim()) return 'Please enter your name.';
  if (!data.email.trim() || !EMAIL_REGEX.test(data.email.trim())) return 'Please enter a valid email address.';
  if (!data.subject) return 'Please select a subject.';
  if (!data.message.trim() || data.message.trim().length < 10) return 'Please enter a message of at least 10 characters.';
  return null;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: real visitors never see this field, so any value in it means
    // a bot filled the form. Fail silently rather than tipping it off.
    if (honeypotRef.current?.value) {
      return;
    }

    const validationError = validate(formData);
    if (validationError) {
      setSubmitStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          replyto: formData.email.trim(),
          subject: `Portfolio Contact: ${SUBJECT_LABELS[formData.subject] ?? formData.subject}`,
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Something went wrong while sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
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
          <div role="status" aria-live="polite">
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 border" style={{ borderColor: SW_INK }}>
                <p>Thank you for your message! I&apos;ll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 border" style={{ borderColor: SW_INK }}>
                <p>{errorMessage || 'Something went wrong. Please try again.'}</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Honeypot field: hidden from real visitors and assistive tech, left
                empty by humans but often auto-filled by simple spam bots. */}
            <input
              type="text"
              name="botcheck"
              ref={honeypotRef}
              className="hidden"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

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
                  aria-required="true"
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
                  aria-required="true"
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
                aria-required="true"
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
                aria-required="true"
                rows={5}
                className={inputClasses}
                style={{ borderColor: SW_LINE, color: SW_INK }}
                placeholder="Tell me about your project or how I can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
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
          <a href="mailto:contact@samuelfunmilayo.space" className="sw-label hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>
            contact@samuelfunmilayo.space
          </a>
          <span className="sw-label" style={{ color: SW_GRAY }}>Vancouver, BC, Canada</span>
          <span className="sw-label" style={{ color: SW_GRAY }}>Available for new projects</span>
        </div>
      </section>
    </div>
  );
}
