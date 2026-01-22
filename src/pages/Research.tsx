import { motion } from "framer-motion";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { 
  Lightbulb, 
  Trophy, 
  BookOpen, 
  FileText,
  Download,
  ArrowRight,
  Users,
  Calendar,
  ExternalLink
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const researchSections = [
  {
    name: "Research Projects",
    description: "Ongoing and completed research initiatives",
    icon: Lightbulb,
    href: "/research/projects",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Avishkar",
    description: "Inter-collegiate research competition",
    icon: Trophy,
    href: "/research/avishkar",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Conferences",
    description: "Academic conferences and seminars",
    icon: Users,
    href: "/research/conferences",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Publications",
    description: "Faculty and student research publications",
    icon: BookOpen,
    href: "/research/publications",
    color: "from-emerald-500 to-teal-600",
  },
];

// Sub-page Components
const Projects = () => (
  <SubPageLayout title="Research Projects" section="Research">
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-primary/5 rounded-2xl p-6 text-center">
          <p className="text-4xl font-bold text-primary mb-2">15+</p>
          <p className="text-muted-foreground">Ongoing Projects</p>
        </div>
        <div className="bg-accent/5 rounded-2xl p-6 text-center">
          <p className="text-4xl font-bold text-accent mb-2">45+</p>
          <p className="text-muted-foreground">Completed Projects</p>
        </div>
        <div className="bg-green-500/5 rounded-2xl p-6 text-center">
          <p className="text-4xl font-bold text-green-600 mb-2">₹25L+</p>
          <p className="text-muted-foreground">Research Funding</p>
        </div>
      </div>
      
      <h3 className="font-heading text-2xl font-bold text-primary">Current Research Projects</h3>
      <div className="space-y-4">
        {[
          { 
            title: "Impact of Digital Learning on Student Outcomes", 
            pi: "Dr. Fatima Khan", 
            dept: "Education",
            funding: "UGC Minor Research Grant",
            duration: "2024-2026",
            status: "Ongoing"
          },
          { 
            title: "Sustainable Development Practices in Urban Areas", 
            pi: "Dr. Nazia Siddiqui", 
            dept: "Environmental Science",
            funding: "CSIR",
            duration: "2023-2025",
            status: "Ongoing"
          },
          { 
            title: "Women Entrepreneurship in Maharashtra", 
            pi: "Prof. Ayesha Patel", 
            dept: "Commerce",
            funding: "ICSSR",
            duration: "2024-2025",
            status: "Ongoing"
          },
          { 
            title: "AI Applications in Healthcare Diagnostics", 
            pi: "Dr. Sarah Thomas", 
            dept: "Computer Science",
            funding: "DST-SERB",
            duration: "2023-2026",
            status: "Ongoing"
          },
        ].map((project, idx) => (
          <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border hover:border-accent/30 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-600 rounded text-xs font-medium">{project.status}</span>
                  <span className="text-xs text-muted-foreground">{project.duration}</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-primary mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Principal Investigator:</strong> {project.pi} ({project.dept})
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Funding:</strong> {project.funding}
                </p>
              </div>
              <Lightbulb className="w-8 h-8 text-accent flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const Avishkar = () => (
  <SubPageLayout title="Avishkar" section="Research">
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
        <Trophy className="w-16 h-16 mb-4" />
        <h3 className="font-heading text-2xl font-bold mb-2">Avishkar Research Convention</h3>
        <p className="text-white/90">
          Annual inter-university research competition organized by the University of Mumbai, 
          promoting research culture among students and faculty.
        </p>
      </div>
      
      <h3 className="font-heading text-2xl font-bold text-primary">Our Achievements</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { year: "2024-25", gold: 3, silver: 5, bronze: 8, total: 16 },
          { year: "2023-24", gold: 2, silver: 4, bronze: 6, total: 12 },
          { year: "2022-23", gold: 4, silver: 3, bronze: 7, total: 14 },
          { year: "2021-22", gold: 2, silver: 6, bronze: 5, total: 13 },
        ].map((year, idx) => (
          <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <h4 className="font-heading text-xl font-bold text-primary mb-4">{year.year}</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="w-12 h-12 mx-auto rounded-full bg-yellow-500/20 flex items-center justify-center mb-2">
                  <span className="text-xl">🥇</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{year.gold}</p>
                <p className="text-xs text-muted-foreground">Gold</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full bg-gray-300/20 flex items-center justify-center mb-2">
                  <span className="text-xl">🥈</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{year.silver}</p>
                <p className="text-xs text-muted-foreground">Silver</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-600/20 flex items-center justify-center mb-2">
                  <span className="text-xl">🥉</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{year.bronze}</p>
                <p className="text-xs text-muted-foreground">Bronze</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">{year.total}</p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="font-heading text-2xl font-bold text-primary">Recent Winners</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { name: "Zainab Khan", project: "AI-based Crop Disease Detection", category: "Science", medal: "🥇" },
          { name: "Fatima Shaikh", project: "Women's Financial Literacy Study", category: "Commerce", medal: "🥇" },
          { name: "Ayesha Patel", project: "Traditional Art Preservation", category: "Arts", medal: "🥈" },
        ].map((winner, idx) => (
          <div key={idx} className="bg-muted/50 rounded-xl p-5">
            <span className="text-3xl mb-2 block">{winner.medal}</span>
            <h4 className="font-semibold text-foreground">{winner.name}</h4>
            <p className="text-sm text-muted-foreground mb-1">{winner.project}</p>
            <span className="text-xs text-accent">{winner.category}</span>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const Conferences = () => (
  <SubPageLayout title="Conferences & Seminars" section="Research">
    <div className="space-y-8">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">All</span>
        <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">National</span>
        <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">International</span>
        <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">Workshops</span>
      </div>
      
      <div className="space-y-6">
        {[
          { 
            title: "National Conference on Women in STEM",
            date: "15-16 March 2025",
            type: "National",
            status: "Upcoming",
            venue: "College Auditorium",
            registration: "Open"
          },
          { 
            title: "International Seminar on Sustainable Development Goals",
            date: "20-21 January 2025",
            type: "International",
            status: "Completed",
            venue: "Virtual + Hybrid",
            papers: 45
          },
          { 
            title: "Workshop on Research Methodology",
            date: "10 December 2024",
            type: "Workshop",
            status: "Completed",
            venue: "Seminar Hall",
            participants: 120
          },
          { 
            title: "National Seminar on Digital Transformation in Education",
            date: "5-6 November 2024",
            type: "National",
            status: "Completed",
            venue: "College Auditorium",
            papers: 38
          },
        ].map((conf, idx) => (
          <div key={idx} className="bg-card rounded-2xl p-6 shadow-soft border border-border">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    conf.status === 'Upcoming' ? 'bg-green-500/10 text-green-600' : 'bg-muted text-muted-foreground'
                  }`}>{conf.status}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    conf.type === 'International' ? 'bg-purple-500/10 text-purple-600' :
                    conf.type === 'National' ? 'bg-blue-500/10 text-blue-600' :
                    'bg-amber-500/10 text-amber-600'
                  }`}>{conf.type}</span>
                </div>
                <h4 className="font-heading text-xl font-bold text-primary mb-2">{conf.title}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {conf.date}
                  </span>
                  <span>{conf.venue}</span>
                </div>
              </div>
              {conf.status === 'Upcoming' && conf.registration === 'Open' && (
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium">
                  Register Now
                </button>
              )}
              {conf.status === 'Completed' && (
                <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium flex items-center gap-2">
                  <Download className="w-4 h-4" /> Proceedings
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const Publications = () => (
  <SubPageLayout title="Publications" section="Research">
    <div className="space-y-8">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-primary/5 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-primary">125+</p>
          <p className="text-sm text-muted-foreground">Journal Papers</p>
        </div>
        <div className="bg-accent/5 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-accent">45+</p>
          <p className="text-sm text-muted-foreground">Conference Papers</p>
        </div>
        <div className="bg-purple-500/5 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-purple-600">12</p>
          <p className="text-sm text-muted-foreground">Books/Chapters</p>
        </div>
        <div className="bg-green-500/5 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-green-600">3</p>
          <p className="text-sm text-muted-foreground">Patents</p>
        </div>
      </div>
      
      <h3 className="font-heading text-2xl font-bold text-primary">Recent Publications</h3>
      <div className="space-y-4">
        {[
          { 
            title: "Impact of E-Learning on Academic Performance: A Case Study",
            authors: "Khan, F., Siddiqui, N., Patel, A.",
            journal: "Journal of Educational Technology",
            year: "2024",
            type: "UGC Care Listed",
            doi: "10.1234/jet.2024.001"
          },
          { 
            title: "Women Entrepreneurship and Economic Growth in Maharashtra",
            authors: "Patel, A., Shaikh, Y.",
            journal: "Indian Journal of Commerce",
            year: "2024",
            type: "Scopus Indexed",
            doi: "10.1234/ijc.2024.015"
          },
          { 
            title: "Machine Learning Applications in Healthcare: A Review",
            authors: "Thomas, S., Khan, Z.",
            journal: "International Journal of Computer Science",
            year: "2023",
            type: "Web of Science",
            doi: "10.1234/ijcs.2023.089"
          },
          { 
            title: "Traditional Art Forms of Western India: A Cultural Study",
            authors: "Desai, M., Ahmed, R.",
            journal: "Journal of Indian Culture",
            year: "2023",
            type: "Peer Reviewed",
            doi: "10.1234/jic.2023.042"
          },
        ].map((pub, idx) => (
          <div key={idx} className="bg-card rounded-xl p-5 shadow-soft border border-border hover:border-accent/30 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    pub.type === 'Scopus Indexed' ? 'bg-purple-500/10 text-purple-600' :
                    pub.type === 'Web of Science' ? 'bg-blue-500/10 text-blue-600' :
                    pub.type === 'UGC Care Listed' ? 'bg-green-500/10 text-green-600' :
                    'bg-muted text-muted-foreground'
                  }`}>{pub.type}</span>
                  <span className="text-xs text-muted-foreground">{pub.year}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{pub.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                <p className="text-sm text-primary italic">{pub.journal}</p>
              </div>
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-xl p-6 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-foreground">Complete Publications List</h4>
          <p className="text-sm text-muted-foreground">Download the full list of faculty publications</p>
        </div>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium flex items-center gap-2">
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </div>
    </div>
  </SubPageLayout>
);

// Helper Component
const SubPageLayout = ({ title, section, children }: { title: string; section: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageHero 
      title={title} 
      subtitle={`${section} - Innovation and Discovery`}
      breadcrumb={[{ label: "Home", href: "/" }, { label: section, href: `/${section.toLowerCase()}` }, { label: title }]}
    />
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  </motion.div>
);

// Main Research Page
const ResearchHome = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageHero 
      title="Research" 
      subtitle="Fostering Innovation and Academic Excellence"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Research" }]}
    />
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground">
            G.M. Momin Women's College is committed to promoting a vibrant research culture. 
            Our faculty and students actively engage in research across various disciplines, 
            contributing to knowledge creation and societal development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {researchSections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={section.href}
                className="group block bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 border border-border hover:border-accent/30 card-hover h-full"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {section.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {section.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:text-accent transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

const Research = () => {
  const location = useLocation();
  
  if (location.pathname === '/research') {
    return <ResearchHome />;
  }
  
  return (
    <Routes>
      <Route path="projects" element={<Projects />} />
      <Route path="avishkar" element={<Avishkar />} />
      <Route path="conferences" element={<Conferences />} />
      <Route path="publications" element={<Publications />} />
    </Routes>
  );
};

export default Research;

