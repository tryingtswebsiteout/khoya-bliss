import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-secondary/40 mt-auto">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading text-3xl text-primary mb-4">Khoya Bliss</h3>
            <p className="font-paragraph text-foreground text-base leading-relaxed">
              Experience the authentic taste of traditional Khoya ice cream, crafted with pure milk solids and love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-paragraph text-lg font-semibold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/store" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                  Order Now
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-paragraph text-lg font-semibold text-secondary-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-paragraph text-base text-foreground">+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-paragraph text-base text-foreground">hello@khoyabliss.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="font-paragraph text-base text-foreground">Karachi, Pakistan</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary/40 mt-12 pt-8 text-center">
          <p className="font-paragraph text-sm text-foreground">
            © {new Date().getFullYear()} Khoya Bliss Ice Cream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
