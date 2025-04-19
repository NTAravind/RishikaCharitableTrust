import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-white rounded-3xl mb-2 mt-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-semibold text-[var(--color-accent)] mb-2">Rishika Charitable Trust</span>
          <span className="text-sm text-white/70 text-center md:text-left">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        {/* Center: Address and Contact */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-2 text-[var(--color-accent)] mt-1 flex-shrink-0" />
            <span className="text-sm text-white/90 max-w-xs text-center md:text-left">
              No 80, 2nd Cross Rd, Gurudatta Layout, Dattatreya Nagar, Hosakerehalli, Bengaluru, Karnataka 560085
            </span>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2 text-[var(--color-accent)] flex-shrink-0" />
            <span className="text-sm text-white/90">+91 9060301061</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-[var(--color-accent)] flex-shrink-0" />
            <span className="text-sm text-white/90">Rishikacharitable@gmail.com</span>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col items-center md:items-end">
          <span className="text-sm font-medium mb-4">Connect With Us</span>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/share/1J2V6hzV5y/?mibextid=wwXIfr" target="_blank" className="text-white hover:text-[var(--color-accent)] transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/sumanthshruthii?igsh=NXBjdXdwdGN2bWdu" target="_blank" className="text-white hover:text-[var(--color-accent)] transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sumanthsharma-750?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="text-white hover:text-[var(--color-accent)] transition">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}