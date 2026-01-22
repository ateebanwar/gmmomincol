import { motion } from "framer-motion";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { 
  FileText, 
  Award, 
  Shield, 
  Users,
  Download,
  ArrowRight,
  CheckCircle,
  Calendar
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const naacSections = [
  {
    name: "AQAR",
    description: "Annual Quality Assurance Reports",
    icon: FileText,
    href: "/naac/aqar",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "SSR",
    description: "Self Study Reports for accreditation",
    icon: Award,
    href: "/naac/ssr",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Certifications",
    description: "NAAC accreditation certificates",
    icon: Shield,
    href: "/naac/certifications",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Peer Team Reports",
    description: "Assessment and evaluation reports",
    icon: Users,
    href: "/naac/peer-team",
    color: "from-orange-500 to-red-600",
  },
];

// Sub-page Components
const AQAR = () => (
  <SubPageLayout title="AQAR" section="NAAC">
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground">
        Annual Quality Assurance Reports submitted to NAAC documenting yearly quality initiatives and achievements.
      </p>
      <div className="grid gap-4">
        {[
          { year: "2024-25", status: "Current", submitted: "In Progress" },
          { year: "2023-24", status: "Submitted", submitted: "15 July 2024" },
          { year: "2022-23", status: "Submitted", submitted: "20 July 2023" },
          { year: "2021-22", status: "Submitted", submitted: "18 July 2022" },
          { year: "2020-21", status: "Submitted", submitted: "15 July 2021" },
          { year: "2019-20", status: "Submitted", submitted: "20 July 2020" },
        ].map((report, idx) => (
          <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  report.status === 'Current' ? 'bg-amber-500/10' : 'bg-green-500/10'
                }`}>
                  {report.status === 'Current' ? (
                    <Calendar className="w-6 h-6 text-amber-600" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-primary">AQAR {report.year}</h4>
                  <p className="text-sm text-muted-foreground">
                    {report.status === 'Current' ? 'Currently in preparation' : `Submitted on ${report.submitted}`}
                  </p>
                </div>
              </div>
              {report.status !== 'Current' && (
                <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const SSR = () => (
  <SubPageLayout title="Self Study Report" section="NAAC">
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
        <h3 className="font-heading text-2xl font-bold mb-4">SSR 2024 - Cycle 3</h3>
        <p className="text-primary-foreground/90 mb-4">
          Comprehensive self-study report prepared for the third cycle of NAAC accreditation, 
          covering all seven criteria of institutional quality.
        </p>
        <button className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl transition-colors font-medium flex items-center gap-2">
          <Download className="w-4 h-4" /> Download Complete SSR
        </button>
      </div>
      
      <h3 className="font-heading text-2xl font-bold text-primary">SSR Criteria</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { num: 1, title: "Curricular Aspects", desc: "Curriculum design, delivery, and enrichment" },
          { num: 2, title: "Teaching-Learning & Evaluation", desc: "Student enrollment, learning resources, and assessment" },
          { num: 3, title: "Research, Innovations & Extension", desc: "Research ecosystem and community engagement" },
          { num: 4, title: "Infrastructure & Learning Resources", desc: "Physical facilities and library resources" },
          { num: 5, title: "Student Support & Progression", desc: "Student welfare and career guidance" },
          { num: 6, title: "Governance, Leadership & Management", desc: "Institutional vision and quality culture" },
          { num: 7, title: "Institutional Values & Best Practices", desc: "Gender equity, environment, and innovations" },
        ].map((criteria) => (
          <div key={criteria.num} className="bg-card rounded-xl p-5 shadow-soft border border-border hover:border-accent/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold flex-shrink-0">
                {criteria.num}
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{criteria.title}</h4>
                <p className="text-sm text-muted-foreground">{criteria.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="font-heading text-2xl font-bold text-primary mt-8">Previous SSR Documents</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {["SSR 2019 - Cycle 2", "SSR 2014 - Cycle 1"].map((ssr, idx) => (
          <div key={idx} className="bg-muted/50 rounded-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FileText className="w-10 h-10 text-primary" />
              <span className="font-medium">{ssr}</span>
            </div>
            <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const Certifications = () => (
  <SubPageLayout title="NAAC Certifications" section="NAAC">
    <div className="space-y-8">
      <motion.div 
        className="bg-gradient-to-br from-accent via-accent/90 to-accent/80 rounded-2xl p-8 text-center text-accent-foreground"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Award className="w-20 h-20 mx-auto mb-4" />
        <h3 className="font-heading text-3xl font-bold mb-2">NAAC Accredited</h3>
        <p className="text-5xl font-bold mb-2">A Grade</p>
        <p className="text-accent-foreground/80">Valid until 2029</p>
      </motion.div>
      
      <h3 className="font-heading text-2xl font-bold text-primary">Accreditation History</h3>
      <div className="space-y-4">
        {[
          { cycle: "Cycle 3 (2024)", grade: "A", cgpa: "3.15", valid: "2024-2029", current: true },
          { cycle: "Cycle 2 (2019)", grade: "A", cgpa: "3.02", valid: "2019-2024", current: false },
          { cycle: "Cycle 1 (2014)", grade: "B++", cgpa: "2.85", valid: "2014-2019", current: false },
        ].map((cert, idx) => (
          <div key={idx} className={`rounded-2xl p-6 shadow-soft border ${
            cert.current ? 'bg-accent/5 border-accent/30' : 'bg-card border-border'
          }`}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl ${
                  cert.current ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {cert.grade}
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-primary">{cert.cycle}</h4>
                  <p className="text-sm text-muted-foreground">CGPA: {cert.cgpa} | Valid: {cert.valid}</p>
                </div>
              </div>
              <div className="flex gap-3">
                {cert.current && (
                  <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-medium">
                    Current
                  </span>
                )}
                <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium flex items-center gap-2">
                  <Download className="w-4 h-4" /> Certificate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const PeerTeam = () => (
  <SubPageLayout title="Peer Team Reports" section="NAAC">
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground">
        Reports from NAAC peer team visits documenting institutional assessment and recommendations.
      </p>
      {[
        { 
          cycle: "Cycle 3", 
          date: "March 2024", 
          team: "Dr. Ramesh Kumar (Chairperson), Dr. Sunita Sharma, Dr. K.V. Rao",
          highlights: ["Strong academic environment", "Good research initiatives", "Excellent student support systems"]
        },
        { 
          cycle: "Cycle 2", 
          date: "February 2019", 
          team: "Dr. S.P. Gupta (Chairperson), Dr. Meera Desai, Dr. A.K. Singh",
          highlights: ["Improved infrastructure", "Quality enhancement initiatives", "Community engagement programs"]
        },
      ].map((report, idx) => (
        <div key={idx} className="bg-card rounded-2xl p-6 shadow-soft border border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-heading text-xl font-bold text-primary">{report.cycle} Peer Team Visit</h4>
              <p className="text-sm text-muted-foreground">{report.date}</p>
            </div>
            <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium flex items-center gap-2">
              <Download className="w-4 h-4" /> Full Report
            </button>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-1">Team Members:</p>
            <p className="text-sm text-muted-foreground">{report.team}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-2">Key Highlights:</p>
            <ul className="space-y-1">
              {report.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" /> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
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
      subtitle={`${section} - National Assessment and Accreditation Council`}
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

// Main NAAC Page
const NAACHome = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageHero 
      title="NAAC" 
      subtitle="National Assessment and Accreditation Council"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "NAAC" }]}
    />
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Award className="w-5 h-5 text-accent" />
            <span className="font-medium text-accent">NAAC 'A' Grade Accredited Institution</span>
          </div>
          <p className="text-lg text-muted-foreground">
            G.M. Momin Women's College is proud to be accredited by the National Assessment and 
            Accreditation Council (NAAC) with 'A' Grade, reflecting our commitment to quality 
            education and continuous improvement.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {naacSections.map((section, index) => (
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
                  <span>View Details</span>
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

const NAAC = () => {
  const location = useLocation();
  
  if (location.pathname === '/naac') {
    return <NAACHome />;
  }
  
  return (
    <Routes>
      <Route path="aqar" element={<AQAR />} />
      <Route path="ssr" element={<SSR />} />
      <Route path="certifications" element={<Certifications />} />
      <Route path="peer-team" element={<PeerTeam />} />
    </Routes>
  );
};

export default NAAC;
