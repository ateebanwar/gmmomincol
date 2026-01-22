import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, GraduationCap, Phone, Mail,
  FileText, Award, Users, Calendar, BookOpen, Shield,
  Globe, MapPin, Activity, Building2, UserCircle,
  Milestone, FileCheck, Gavel, Scale, LayoutGrid,
  BookMarked, Library, Presentation, FlaskConical,
  Trophy, FileOutput, PenTool, CheckCircle, FileSearch,
  ClipboardCheck, Building, UserPlus, HeartPulse,
  MessageSquare, HelpCircle, PhoneCall
} from "lucide-react";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";

// Navigation Data
const navItems = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "College Overview", href: "/about", description: "Identity, vision, and mission", icon: Building2 },
      { label: "Right to Information", href: "/about/rti", description: "Transparency and accountability", icon: FileText },
      { label: "Milestones", href: "/about/milestones", description: "Our journey through the years", icon: Milestone },
      { label: "Annual Reports", href: "/about/annual-report", description: "Yearly progress records", icon: FileCheck },
      { label: "Affiliation & Accreditation", href: "/about/accreditation", description: "University & NAAC status", icon: Award },
      { label: "Minority Status", href: "/about/minority-status", description: "Religious minority institution", icon: Shield },
      { label: "Committees", href: "/about/committees", description: "Internal working groups", icon: Users },
      { label: "Code of Conduct", href: "/about/code-of-conduct", description: "Rules and regulations", icon: Gavel },
      { label: "Best Practices", href: "/about/best-practices", description: "Institutional excellence", icon: CheckCircle },
      { label: "Awards", href: "/about/awards", description: "Recognition and honors", icon: Trophy },
      { label: "Women Achievers", href: "/about/women-achievers", description: "Celebrating success", icon: UserCircle },
      { label: "Gallery", href: "/about/gallery", description: "Campus life in pictures", icon: LayoutGrid },
      { label: "Teaching Staff", href: "/about/teaching-staff", description: "Faculty members", icon: UserPlus },
      { label: "Non-Teaching Staff", href: "/about/non-teaching-staff", description: "Support staff", icon: Users },
    ]
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Departments", href: "/departments", description: "Explore our faculties", icon: LayoutGrid },
      { label: "Department Details", href: "/departments/details", description: "In-depth info", icon: FileText },
      { label: "Syllabus", href: "/academics/syllabus", description: "Course curriculum", icon: BookMarked },
      { label: "Results", href: "/academics/results", description: "Examination outcomes", icon: FileOutput },
      { label: "Academic Calendar", href: "/academics/calendar", description: "Yearly schedule", icon: Calendar },
      { label: "NEP", href: "/academics/nep", description: "National Education Policy", icon: FileText },
      { label: "Library", href: "/academics/library", description: "Learning resources", icon: Library },
      { label: "DLLE", href: "/academics/dlle", description: "Lifelong learning", icon: UserPlus },
    ]
  },
  {
    label: "Admissions",
    href: "/admission",
    children: [
      { label: "Admission Programme", href: "/admission/programmes", description: "Courses offered", icon: BookOpen },
      { label: "Admission Procedure", href: "/admission/procedure", description: "Step-by-step guide", icon: ClipboardCheck },
      { label: "FY Admissions", href: "/admission/fy-admission", description: "First year enrollment", icon: UserPlus },
      { label: "University Forms", href: "/admission/forms", description: "Official documentation", icon: FileText },
      { label: "Online Guidelines", href: "/admission/guidelines", description: "Digital application help", icon: Globe },
      { label: "Prospectus", href: "/admission/prospectus", description: "Information brochure", icon: BookMarked },
      { label: "Scholarships", href: "/admission/scholarships", description: "Financial aid", icon: Award },
    ]
  },
  {
    label: "Research & Innovation",
    href: "/research",
    children: [
      { label: "Research Overview", href: "/research", description: "Research culture & vision", icon: FlaskConical },
      { label: "Avishkar Research Convention", href: "/research/avishkar", description: "Inter-collegiate competition", icon: Presentation },
      { label: "Minor Research Projects", href: "/research/projects", description: "Faculty & student projects", icon: FileSearch },
      { label: "Conferences & Seminars", href: "/research/conferences", description: "Academic gatherings", icon: Users },
      { label: "Publications", href: "/research/publications", description: "Research papers & books", icon: PenTool },
    ]
  },
  {
    label: "Quality & Accreditation",
    href: "/iqac",
    children: [
      { label: "IQAC", href: "/iqac", description: "Internal Quality Assurance Cell", icon: Shield },
      { label: "Composition", href: "/iqac/composition", description: "Committee members", icon: Users },
      { label: "Minutes & ATR", href: "/iqac/minutes", description: "Meeting records", icon: FileText },
      { label: "Strategic Plan", href: "/iqac/strategic-plan", description: "Long-term goals", icon: MapPin },
      { label: "Perspective Plan", href: "/iqac/perspective-plan", description: "Future roadmap", icon: Activity },
      { label: "Policies", href: "/iqac/policies", description: "Institutional policies", icon: Scale },
      { label: "Academic Audit", href: "/iqac/audit", description: "Performance review", icon: FileCheck },
      { label: "NAAC", href: "/naac", description: "Accreditation home", icon: Award },
      { label: "AQAR Reports", href: "/naac/aqar", description: "Annual quality reports", icon: FileText },
      { label: "SSR Documents", href: "/naac/ssr", description: "Self study report", icon: BookOpen },
      { label: "Peer Team Reports", href: "/naac/peer-team", description: "Assessment outcomes", icon: FileSearch },
      { label: "Certificates", href: "/naac/certificates", description: "Accreditation awards", icon: Award },
      { label: "NIRF", href: "/iqac/nirf", description: "National ranking", icon: Activity },
    ]
  },
  {
    label: "Student Life",
    href: "/student-life",
    children: [
      { label: "NSS", href: "/student-life/nss", description: "National Service Scheme", icon: Users },
      { label: "Gymkhana", href: "/student-life/gymkhana", description: "Sports & fitness", icon: Activity },
      { label: "Cultural Activities", href: "/student-life/cultural", description: "Arts & events", icon: Presentation },
      { label: "Student Council", href: "/student-life/council", description: "Student leadership", icon: UserCircle },
      { label: "Women Development Cell (WDC)", href: "/student-life/wdc", description: "Empowerment & safety", icon: Shield },
      { label: "Health & Fitness Center", href: "/student-life/health", description: "Wellness facilities", icon: HeartPulse },
      { label: "Grievance Redressal Cell", href: "/student-life/grievance", description: "Complaint resolution", icon: Scale },
      { label: "Anti-Ragging Policy", href: "/student-life/anti-ragging", description: "Zero tolerance policy", icon: Shield },
      { label: "Facilities", href: "/student-life/facilities", description: "Campus amenities", icon: Building },
      { label: "Feedback", href: "/student-life/feedback", description: "Student voice", icon: MessageSquare },
      { label: "Alumni", href: "/student-life/alumni", description: "Graduates network", icon: GraduationCap },
    ]
  },
  {
    label: "Contact & Connect",
    href: "/contact",
    children: [
      { label: "Contact Page", href: "/contact", description: "Get in touch", icon: Phone },
      { label: "Address & Map", href: "/contact/map", description: "Locate us", icon: MapPin },
      { label: "Phone & Email", href: "/contact/directory", description: "Directory", icon: PhoneCall },
      { label: "Admission Helpline", href: "/contact/helpline", description: "Applicant support", icon: HelpCircle },
      { label: "Alumni Registration", href: "/alumni/register", description: "Join the network", icon: UserPlus },
      { label: "Important Quick Links", href: "/contact/links", description: "Useful shortcuts", icon: Globe },
    ]
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      {/* <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+912522220123" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +91 2522 220123
            </a>
            <a href="mailto:info@gmmomincol.org" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              info@gmmomincol.org
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/admission" className="btn-accent px-4 py-1.5 rounded-full text-xs font-medium">
              Admissions Open 2026
            </Link>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-medium py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-lg md:text-xl font-bold text-primary leading-tight">
                  G.M. Momin
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Women's College
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 justify-start flex-1 ml-8">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                      location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === item.label && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <MegaMenu
                        items={item.children}
                        align={index < 3 ? "start" : "end"}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="container-custom py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-xl font-medium transition-all",
                        location.pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-1 border-l-2 border-accent/30 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
