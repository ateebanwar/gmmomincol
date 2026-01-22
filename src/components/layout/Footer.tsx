import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Admission", href: "/admission" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Library", href: "/student-corner/library" },
  { label: "Scholarships", href: "/student-corner/scholarship" },
  { label: "Results", href: "/results" },
  { label: "Academic Calendar", href: "/iqac/academic-calendar" },
  { label: "Anti-Ragging", href: "/student-corner/anti-ragging" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">G.M. Momin</h3>
                <p className="text-sm text-primary-foreground/70">Women's College</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Empowering women through quality education since establishment. 
              A premier institution dedicated to academic excellence and holistic development.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={`Social link ${index + 1}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  Bhiwandi, Thane District,<br />
                  Maharashtra - 421302
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+912522220123" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +91 2522 220123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@gmmomincol.org" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@gmmomincol.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 G.M. Momin Women's College. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
