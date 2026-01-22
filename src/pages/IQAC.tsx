import { motion } from "framer-motion";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { 
  Calendar, 
  FileCheck, 
  Users, 
  FileText, 
  Target, 
  Eye, 
  GitBranch, 
  Award, 
  Shield,
  Download,
  ArrowRight
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const iqacSections = [
  {
    name: "Academic Calendar",
    description: "Yearly academic schedule and important dates",
    icon: Calendar,
    href: "/iqac/academic-calendar",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Audit",
    description: "Internal and external audit reports",
    icon: FileCheck,
    href: "/iqac/audit",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Composition",
    description: "IQAC committee members and structure",
    icon: Users,
    href: "/iqac/composition",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Minutes & ATR",
    description: "Meeting minutes and action taken reports",
    icon: FileText,
    href: "/iqac/minutes",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Strategic Plan",
    description: "Long-term institutional development strategy",
    icon: Target,
    href: "/iqac/strategic-plan",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Perspective Plan",
    description: "Future growth and development roadmap",
    icon: Eye,
    href: "/iqac/perspective-plan",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Organogram",
    description: "Organizational structure and hierarchy",
    icon: GitBranch,
    href: "/iqac/organogram",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "NIRF",
    description: "National Institutional Ranking Framework",
    icon: Award,
    href: "/iqac/nirf",
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Policies",
    description: "Institutional policies and guidelines",
    icon: Shield,
    href: "/iqac/policies",
    color: "from-rose-500 to-pink-600",
  },
];

// Sub-page Components
const AcademicCalendar = () => (
  <SubPageLayout title="Academic Calendar" section="IQAC">
    <div className="space-y-8">
      <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
        <h3 className="font-heading text-2xl font-bold text-primary mb-6">Academic Year 2025-26</h3>
        <div className="space-y-4">
          {[
            { month: "June 2025", events: ["Admission Process Begins", "Faculty Orientation"] },
            { month: "July 2025", events: ["Academic Session Starts", "Induction Program"] },
            { month: "August 2025", events: ["Independence Day Celebration", "Internal Assessment I"] },
            { month: "September 2025", events: ["Mid-Semester Break", "Cultural Week"] },
            { month: "October 2025", events: ["Internal Assessment II", "Diwali Vacation"] },
            { month: "November 2025", events: ["Sports Week", "NSS Camp"] },
            { month: "December 2025", events: ["Semester End Exams", "Winter Break"] },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 p-4 bg-muted/50 rounded-xl">
              <div className="w-32 font-semibold text-primary">{item.month}</div>
              <div className="flex-1">
                <ul className="list-disc list-inside text-muted-foreground">
                  {item.events.map((event, i) => <li key={i}>{event}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DownloadCard title="Download Full Calendar" filename="Academic_Calendar_2025-26.pdf" />
    </div>
  </SubPageLayout>
);

const Audit = () => (
  <SubPageLayout title="Audit Reports" section="IQAC">
    <div className="grid md:grid-cols-2 gap-6">
      {["2024-25", "2023-24", "2022-23", "2021-22", "2020-21"].map((year) => (
        <div key={year} className="bg-card rounded-2xl p-6 shadow-soft border border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-xl font-bold text-primary">Audit Report {year}</h3>
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">{year}</span>
          </div>
          <p className="text-muted-foreground mb-4">Annual audit report including financial statements and compliance reviews.</p>
          <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      ))}
    </div>
  </SubPageLayout>
);

const Composition = () => (
  <SubPageLayout title="IQAC Composition" section="IQAC">
    <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
      <h3 className="font-heading text-2xl font-bold text-primary mb-6">Committee Members</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 font-semibold text-primary">Sr. No.</th>
              <th className="text-left py-4 px-4 font-semibold text-primary">Name</th>
              <th className="text-left py-4 px-4 font-semibold text-primary">Designation</th>
              <th className="text-left py-4 px-4 font-semibold text-primary">Role in IQAC</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Dr. Yasmin Shaikh", designation: "Principal", role: "Chairperson" },
              { name: "Dr. Fatima Khan", designation: "Vice Principal", role: "Coordinator" },
              { name: "Prof. Ayesha Patel", designation: "Associate Professor", role: "Member" },
              { name: "Dr. Nazia Siddiqui", designation: "Assistant Professor", role: "Member" },
              { name: "Mr. Ahmed Momin", designation: "Management Representative", role: "Member" },
              { name: "Dr. Sarah Thomas", designation: "External Expert", role: "Member" },
              { name: "Ms. Rukhsar Ali", designation: "Student Representative", role: "Member" },
              { name: "Mr. Imran Sheikh", designation: "Alumni Representative", role: "Member" },
            ].map((member, idx) => (
              <tr key={idx} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                <td className="py-4 px-4 text-muted-foreground">{idx + 1}</td>
                <td className="py-4 px-4 font-medium">{member.name}</td>
                <td className="py-4 px-4 text-muted-foreground">{member.designation}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    member.role === 'Chairperson' ? 'bg-primary/10 text-primary' :
                    member.role === 'Coordinator' ? 'bg-accent/10 text-accent' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {member.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </SubPageLayout>
);

const Minutes = () => (
  <SubPageLayout title="Minutes & ATR" section="IQAC">
    <div className="space-y-6">
      <h3 className="font-heading text-2xl font-bold text-primary">Meeting Minutes & Action Taken Reports</h3>
      <div className="grid gap-4">
        {[
          { date: "15 March 2025", topic: "Annual Quality Review Meeting", hasATR: true },
          { date: "10 January 2025", topic: "Academic Audit Planning", hasATR: true },
          { date: "20 November 2024", topic: "NAAC Preparation Meeting", hasATR: true },
          { date: "05 September 2024", topic: "Curriculum Enhancement Discussion", hasATR: false },
          { date: "12 July 2024", topic: "New Session Planning", hasATR: true },
        ].map((meeting, idx) => (
          <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-muted-foreground">{meeting.date}</span>
                {meeting.hasATR && (
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-600 rounded text-xs font-medium">ATR Available</span>
                )}
              </div>
              <h4 className="font-semibold text-foreground">{meeting.topic}</h4>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium">
                Minutes
              </button>
              {meeting.hasATR && (
                <button className="px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors text-sm font-medium">
                  ATR
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const StrategicPlan = () => (
  <SubPageLayout title="Strategic Plan" section="IQAC">
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
        <h3 className="font-heading text-2xl font-bold mb-4">Vision 2030</h3>
        <p className="text-primary-foreground/90 text-lg">
          To emerge as a leading institution for women's higher education, fostering academic excellence, 
          research innovation, and holistic development while maintaining our commitment to inclusive education.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Academic Excellence", goals: ["NAAC A++ accreditation", "New PG programs", "Industry collaborations"] },
          { title: "Research & Innovation", goals: ["Research center establishment", "Patent filings", "Faculty development"] },
          { title: "Infrastructure", goals: ["Smart classrooms", "Library expansion", "Sports complex"] },
          { title: "Student Development", goals: ["Skill enhancement programs", "Placement cell strengthening", "International exposure"] },
        ].map((pillar, idx) => (
          <div key={idx} className="bg-card rounded-2xl p-6 shadow-soft border border-border">
            <h4 className="font-heading text-xl font-bold text-primary mb-4">{pillar.title}</h4>
            <ul className="space-y-2">
              {pillar.goals.map((goal, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-accent" /> {goal}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const PerspectivePlan = () => (
  <SubPageLayout title="Perspective Plan" section="IQAC">
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground">
        Our perspective plan outlines the roadmap for institutional growth over the next decade, 
        aligned with national education policies and emerging global trends.
      </p>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
        {[
          { year: "2025-26", title: "Foundation Phase", items: ["Complete NAAC documentation", "Launch new certificate courses", "Establish research committees"] },
          { year: "2026-27", title: "Growth Phase", items: ["Start 2 new PG programs", "Industry MoUs", "Faculty exchange programs"] },
          { year: "2027-28", title: "Expansion Phase", items: ["International collaborations", "Innovation hub setup", "Community outreach programs"] },
          { year: "2028-30", title: "Excellence Phase", items: ["Research publications increase by 50%", "Student placement rate 90%+", "Alumni network strengthening"] },
        ].map((phase, idx) => (
          <div key={idx} className="relative pl-20 pb-8">
            <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <span className="text-sm text-accent font-medium">{phase.year}</span>
              <h4 className="font-heading text-xl font-bold text-primary mt-1 mb-3">{phase.title}</h4>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const Organogram = () => (
  <SubPageLayout title="Organogram" section="IQAC">
    <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
      <div className="text-center mb-8">
        <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-bold text-xl">
          Governing Body
        </div>
      </div>
      <div className="text-center mb-8">
        <div className="w-0.5 h-8 bg-primary mx-auto" />
        <div className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-xl font-heading font-bold text-lg">
          Principal
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {["Vice Principal", "IQAC Coordinator", "Registrar"].map((role) => (
          <div key={role} className="text-center">
            <div className="w-0.5 h-8 bg-accent/50 mx-auto" />
            <div className="bg-muted px-4 py-3 rounded-lg font-medium">{role}</div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-5 gap-4">
        {["Arts Dept", "Commerce Dept", "Science Dept", "IT Dept", "Management Dept"].map((dept) => (
          <div key={dept} className="text-center">
            <div className="w-0.5 h-6 bg-border mx-auto" />
            <div className="bg-muted/50 px-3 py-2 rounded-lg text-sm text-muted-foreground">{dept}</div>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const NIRF = () => (
  <SubPageLayout title="NIRF" section="IQAC">
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 text-accent-foreground">
        <h3 className="font-heading text-2xl font-bold mb-2">National Institutional Ranking Framework</h3>
        <p className="text-accent-foreground/90">Participating in India's premier ranking system for higher education institutions.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {["2025", "2024", "2023", "2022"].map((year) => (
          <div key={year} className="bg-card rounded-2xl p-6 shadow-soft border border-border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading text-xl font-bold text-primary">NIRF {year}</h4>
              <Award className="w-8 h-8 text-accent" />
            </div>
            <p className="text-muted-foreground mb-4">Complete NIRF submission data and documentation.</p>
            <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium">
              <Download className="w-4 h-4" /> View Report
            </button>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const Policies = () => (
  <SubPageLayout title="Policies" section="IQAC">
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { title: "Academic Policy", desc: "Guidelines for curriculum, assessment, and academic conduct" },
        { title: "Research Policy", desc: "Framework for research activities and ethics" },
        { title: "Anti-Harassment Policy", desc: "Zero tolerance policy for harassment and discrimination" },
        { title: "Green Campus Policy", desc: "Environmental sustainability initiatives" },
        { title: "IT Policy", desc: "Guidelines for technology use and data security" },
        { title: "Grievance Redressal Policy", desc: "Procedures for addressing student and staff concerns" },
        { title: "Code of Ethics", desc: "Professional conduct guidelines for all stakeholders" },
        { title: "Examination Policy", desc: "Rules and regulations for examinations" },
      ].map((policy, idx) => (
        <div key={idx} className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-accent/30 transition-colors">
          <Shield className="w-10 h-10 text-primary mb-4" />
          <h4 className="font-heading text-lg font-bold text-primary mb-2">{policy.title}</h4>
          <p className="text-muted-foreground text-sm mb-4">{policy.desc}</p>
          <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      ))}
    </div>
  </SubPageLayout>
);

// Helper Components
const SubPageLayout = ({ title, section, children }: { title: string; section: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageHero 
      title={title} 
      subtitle={`${section} - Quality Assurance and Accreditation`}
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

const DownloadCard = ({ title, filename }: { title: string; filename: string }) => (
  <div className="bg-muted/50 rounded-xl p-6 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <FileText className="w-10 h-10 text-primary" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{filename}</p>
      </div>
    </div>
    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium flex items-center gap-2">
      <Download className="w-4 h-4" /> Download
    </button>
  </div>
);

// Main IQAC Page
const IQACHome = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageHero 
      title="IQAC" 
      subtitle="Internal Quality Assurance Cell - Committed to Excellence"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "IQAC" }]}
    />
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground text-center">
            The Internal Quality Assurance Cell (IQAC) is a significant administrative body of the College 
            that works towards realization of the goals of quality enhancement and sustenance. It channelizes 
            all efforts and measures towards promoting academic excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iqacSections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={section.href}
                className="group block bg-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-500 border border-border hover:border-accent/30 card-hover h-full"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {section.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {section.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:text-accent transition-colors text-sm">
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

const IQAC = () => {
  const location = useLocation();
  
  if (location.pathname === '/iqac') {
    return <IQACHome />;
  }
  
  return (
    <Routes>
      <Route path="academic-calendar" element={<AcademicCalendar />} />
      <Route path="audit" element={<Audit />} />
      <Route path="composition" element={<Composition />} />
      <Route path="minutes" element={<Minutes />} />
      <Route path="strategic-plan" element={<StrategicPlan />} />
      <Route path="perspective-plan" element={<PerspectivePlan />} />
      <Route path="organogram" element={<Organogram />} />
      <Route path="nirf" element={<NIRF />} />
      <Route path="policies" element={<Policies />} />
    </Routes>
  );
};

export default IQAC;
