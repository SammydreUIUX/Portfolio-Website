import Link from 'next/link';

const SW_INK = '#111111';
const SW_BG = '#FAFAF8';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: SW_BG, color: SW_INK, borderTop: `1px solid ${SW_LINE}` }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="sw-label" style={{ color: SW_GRAY }}>
            &copy; {currentYear} Samuel Funmilayo
          </p>

          <div className="flex items-center gap-8">
            <Link href="/about" className="sw-label hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>About</Link>
            <Link href="/design-lab" className="sw-label hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>Design Lab</Link>
            <Link href="/contact" className="sw-label hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>Contact</Link>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/SammydreUIUX" target="_blank" rel="noopener noreferrer" className="sw-label hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>GitHub</a>
            <a href="https://linkedin.com/in/samuel-funmilayo-0a9a11217" target="_blank" rel="noopener noreferrer" className="sw-label hover:opacity-60 transition-opacity" style={{ color: SW_GRAY }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
