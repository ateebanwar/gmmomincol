import { motion } from "framer-motion";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { 
  Users, 
  Shield, 
  Heart, 
  Building, 
  Stethoscope, 
  MessageSquare,
  Trophy,
  BookOpen,
  Flag,
  Wallet,
  Crown,
  Palette,
  ClipboardCheck,
  UserCheck,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Download,
  Clock
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const studentSections = [
  { name: "UGC Induction", icon: Users, href: "/student-corner/ugc-induction", color: "from-blue-500 to-indigo-600", description: "Universal Human Values program" },
  { name: "Anti-Ragging", icon: Shield, href: "/student-corner/anti-ragging", color: "from-red-500 to-rose-600", description: "Zero tolerance anti-ragging policy" },
  { name: "DLLE", icon: Heart, href: "/student-corner/dlle", color: "from-pink-500 to-rose-500", description: "Department of Lifelong Learning" },
  { name: "Facilities", icon: Building, href: "/student-corner/facilities", color: "from-emerald-500 to-teal-600", description: "Campus amenities and infrastructure" },
  { name: "Health Center", icon: Stethoscope, href: "/student-corner/health-center", color: "from-cyan-500 to-blue-600", description: "Medical facilities and first aid" },
  { name: "Grievance Cell", icon: MessageSquare, href: "/student-corner/grievance", color: "from-amber-500 to-orange-600", description: "Address your concerns" },
  { name: "Gymkhana", icon: Trophy, href: "/student-corner/gymkhana", color: "from-purple-500 to-violet-600", description: "Sports and athletics" },
  { name: "Library", icon: BookOpen, href: "/student-corner/library", color: "from-indigo-500 to-purple-600", description: "Knowledge resource center" },
  { name: "NSS", icon: Flag, href: "/student-corner/nss", color: "from-orange-500 to-red-600", description: "National Service Scheme" },
  { name: "Scholarship", icon: Wallet, href: "/student-corner/scholarship", color: "from-green-500 to-emerald-600", description: "Financial aid and scholarships" },
  { name: "Student Council", icon: Crown, href: "/student-corner/student-council", color: "from-yellow-500 to-amber-600", description: "Student governance body" },
  { name: "Cultural", icon: Palette, href: "/student-corner/cultural", color: "from-fuchsia-500 to-pink-600", description: "Arts and cultural activities" },
  { name: "Feedback", icon: ClipboardCheck, href: "/student-corner/feedback", color: "from-teal-500 to-cyan-600", description: "Share your feedback" },
  { name: "WDC", icon: UserCheck, href: "/student-corner/wdc", color: "from-rose-500 to-red-600", description: "Women Development Cell" },
];

// Individual Sub-pages
const UGCInduction = () => (
  <SubPageLayout title="UGC Induction Program" section="Student Corner">
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
        <h3 className="font-heading text-2xl font-bold mb-4">Deeksharambh - Student Induction Program</h3>
        <p className="text-primary-foreground/90">
          A mandatory program for all first-year students to help them feel comfortable in their new environment, 
          understand the ethos of the institution, and prepare for academic success.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Universal Human Values", desc: "Sessions on ethics, values, and character building" },
          { title: "Mentoring Sessions", desc: "One-on-one guidance from senior faculty members" },
          { title: "Campus Tour", desc: "Familiarization with college infrastructure and facilities" },
          { title: "Soft Skills Training", desc: "Communication, leadership, and personality development" },
        ].map((item, idx) => (
          <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const AntiRagging = () => (
  <SubPageLayout title="Anti-Ragging Cell" section="Student Corner">
    <div className="space-y-8">
      <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
        <div className="flex items-center gap-4 mb-4">
          <Shield className="w-12 h-12 text-red-500" />
          <div>
            <h3 className="font-heading text-2xl font-bold text-red-600">Zero Tolerance Policy</h3>
            <p className="text-red-600/80">Ragging in any form is strictly prohibited</p>
          </div>
        </div>
        <p className="text-muted-foreground">
          G.M. Momin Women's College maintains a zero-tolerance policy against ragging as per UGC regulations 
          and the Maharashtra Prohibition of Ragging Act. Any incident of ragging will result in strict 
          disciplinary action including expulsion.
        </p>
      </div>
      <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
        <h4 className="font-heading text-xl font-bold text-primary mb-6">Anti-Ragging Committee</h4>
        <div className="space-y-4">
          {[
            { name: "Dr. Yasmin Shaikh", role: "Chairperson", contact: "+91 98765 43210" },
            { name: "Prof. Fatima Khan", role: "Coordinator", contact: "+91 98765 43211" },
            { name: "Dr. Nazia Siddiqui", role: "Member", contact: "+91 98765 43212" },
          ].map((member, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
              <a href={`tel:${member.contact}`} className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> {member.contact}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-muted/50 rounded-xl p-6">
        <h4 className="font-semibold mb-4">Report Ragging</h4>
        <div className="flex flex-wrap gap-4">
          <a href="tel:1800-180-5522" className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium">
            National Helpline: 1800-180-5522
          </a>
          <a href="mailto:antiragging@gmmomincol.org" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium">
            Email: antiragging@gmmomincol.org
          </a>
        </div>
      </div>
    </div>
  </SubPageLayout>
);

const DLLE = () => (
  <SubPageLayout title="DLLE" section="Student Corner">
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground">
        The Department of Lifelong Learning and Extension (DLLE) of the University of Mumbai 
        encourages students to engage in community service while earning credits.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Career Oriented Course", students: 45 },
          { title: "Science & Technology", students: 30 },
          { title: "Women & ICT", students: 25 },
        ].map((program, idx) => (
          <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border text-center">
            <h4 className="font-semibold text-primary mb-2">{program.title}</h4>
            <p className="text-3xl font-bold text-accent">{program.students}</p>
            <p className="text-sm text-muted-foreground">Students Enrolled</p>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const Facilities = () => (
  <SubPageLayout title="Campus Facilities" section="Student Corner">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: "Computer Labs", desc: "3 well-equipped labs with 150+ computers" },
        { name: "Science Laboratories", desc: "Physics, Chemistry, Biology, and Microbiology labs" },
        { name: "Smart Classrooms", desc: "15 classrooms with projectors and audio systems" },
        { name: "Auditorium", desc: "500-seater AC auditorium for events" },
        { name: "Seminar Hall", desc: "100-seater hall for workshops and seminars" },
        { name: "Cafeteria", desc: "Hygienic food court with varied cuisine" },
        { name: "Common Room", desc: "Recreation area for students" },
        { name: "Wi-Fi Campus", desc: "High-speed internet across campus" },
        { name: "Parking", desc: "Secure parking for two and four wheelers" },
      ].map((facility, idx) => (
        <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border hover:border-accent/30 transition-colors">
          <Building className="w-8 h-8 text-primary mb-4" />
          <h4 className="font-semibold text-foreground mb-2">{facility.name}</h4>
          <p className="text-sm text-muted-foreground">{facility.desc}</p>
        </div>
      ))}
    </div>
  </SubPageLayout>
);

const HealthCenter = () => (
  <SubPageLayout title="Health Center" section="Student Corner">
    <div className="space-y-8">
      <div className="bg-cyan-500/10 rounded-2xl p-8 border border-cyan-500/30">
        <div className="flex items-center gap-4 mb-4">
          <Stethoscope className="w-12 h-12 text-cyan-600" />
          <div>
            <h3 className="font-heading text-2xl font-bold text-cyan-700">First Aid & Medical Support</h3>
            <p className="text-cyan-600/80">Available during college hours</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
          <h4 className="font-semibold text-primary mb-4">Services Available</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>• First aid and emergency care</li>
            <li>• Basic health check-ups</li>
            <li>• Medical counseling</li>
            <li>• Health awareness programs</li>
            <li>• Yoga and wellness sessions</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
          <h4 className="font-semibold text-primary mb-4">Contact</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span>Mon-Sat: 9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span>+91 2522 220123 (Ext: 105)</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span>Ground Floor, Main Building</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SubPageLayout>
);

const Grievance = () => (
  <SubPageLayout title="Grievance Redressal Cell" section="Student Corner">
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground">
        The Grievance Redressal Cell addresses student concerns regarding academics, 
        administration, infrastructure, and other matters in a fair and timely manner.
      </p>
      <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
        <h4 className="font-heading text-xl font-bold text-primary mb-6">How to Submit a Grievance</h4>
        <div className="space-y-4">
          {[
            { step: 1, title: "Submit Written Complaint", desc: "Fill the grievance form and submit to the cell" },
            { step: 2, title: "Acknowledgement", desc: "Receive acknowledgement within 2 working days" },
            { step: 3, title: "Investigation", desc: "Committee investigates the matter" },
            { step: 4, title: "Resolution", desc: "Resolution communicated within 15 days" },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 p-4 bg-muted/50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h5 className="font-semibold">{item.title}</h5>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium flex items-center gap-2">
          <Download className="w-4 h-4" /> Download Grievance Form
        </button>
        <a href="mailto:grievance@gmmomincol.org" className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium flex items-center gap-2">
          <Mail className="w-4 h-4" /> Email: grievance@gmmomincol.org
        </a>
      </div>
    </div>
  </SubPageLayout>
);

const Gymkhana = () => (
  <SubPageLayout title="Gymkhana" section="Student Corner">
    <div className="space-y-8">
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Sports Events", value: "25+" },
          { label: "State Level Players", value: "15" },
          { label: "University Colors", value: "8" },
          { label: "Sports Offered", value: "12" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-primary/5 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {["Basketball", "Volleyball", "Badminton", "Table Tennis", "Chess", "Carrom", "Kabaddi", "Athletics", "Yoga"].map((sport, idx) => (
          <div key={idx} className="bg-card rounded-xl p-4 shadow-soft border border-border text-center">
            <Trophy className="w-6 h-6 text-accent mx-auto mb-2" />
            <span className="font-medium">{sport}</span>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const Library = () => (
  <SubPageLayout title="Library" section="Student Corner">
    <div className="space-y-8">
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Books", value: "45,000+" },
          { label: "Journals", value: "100+" },
          { label: "E-Resources", value: "5,000+" },
          { label: "Reading Capacity", value: "150" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-indigo-500/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
          <h4 className="font-semibold text-primary mb-4">Services</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Book lending and reference</li>
            <li>• Digital library access (INFLIBNET)</li>
            <li>• Previous year question papers</li>
            <li>• Newspaper and magazine section</li>
            <li>• Photocopy facility</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
          <h4 className="font-semibold text-primary mb-4">Timings</h4>
          <div className="space-y-2 text-muted-foreground">
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 8:00 AM - 2:00 PM</p>
            <p className="text-accent font-medium mt-4">Online resources available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  </SubPageLayout>
);

const NSS = () => (
  <SubPageLayout title="NSS" section="Student Corner">
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
        <Flag className="w-12 h-12 mb-4" />
        <h3 className="font-heading text-2xl font-bold mb-2">National Service Scheme</h3>
        <p className="text-white/90">"Not Me But You" - Developing student personality through community service</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Blood Donation Camps", count: "4 per year" },
          { title: "Village Adoption", count: "2 villages" },
          { title: "NSS Volunteers", count: "200+" },
          { title: "Annual Camps", count: "7 days" },
        ].map((item, idx) => (
          <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
            <p className="text-2xl font-bold text-accent">{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const Scholarship = () => (
  <SubPageLayout title="Scholarships" section="Student Corner">
    <div className="space-y-8">
      <div className="grid gap-6">
        {[
          { name: "Government of India Scholarships", type: "Central", eligibility: "Minority students with income < 2.5 LPA" },
          { name: "State Government Scholarships", type: "State", eligibility: "Domicile of Maharashtra" },
          { name: "Freeship", type: "Institution", eligibility: "Economically backward students" },
          { name: "Merit Scholarships", type: "Trust", eligibility: "Top performers in each department" },
          { name: "Maulana Azad Scholarship", type: "Central", eligibility: "Girl students from minority communities" },
        ].map((scholarship, idx) => (
          <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    scholarship.type === 'Central' ? 'bg-blue-500/10 text-blue-600' :
                    scholarship.type === 'State' ? 'bg-green-500/10 text-green-600' :
                    scholarship.type === 'Institution' ? 'bg-purple-500/10 text-purple-600' :
                    'bg-amber-500/10 text-amber-600'
                  }`}>{scholarship.type}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{scholarship.name}</h4>
                <p className="text-sm text-muted-foreground"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
              </div>
              <Wallet className="w-8 h-8 text-accent flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-muted/50 rounded-xl p-6">
        <h4 className="font-semibold mb-2">Need Help?</h4>
        <p className="text-muted-foreground text-sm mb-4">Contact the Scholarship Cell for application guidance</p>
        <a href="mailto:scholarship@gmmomincol.org" className="text-primary hover:text-accent transition-colors font-medium">
          scholarship@gmmomincol.org
        </a>
      </div>
    </div>
  </SubPageLayout>
);

const StudentCouncil = () => (
  <SubPageLayout title="Student Council" section="Student Corner">
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground">
        The Student Council represents the student body and works closely with the administration 
        to address student needs and organize college activities.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { position: "General Secretary", name: "Fatima Khan", dept: "B.Com" },
          { position: "Joint Secretary", name: "Ayesha Patel", dept: "B.Sc" },
          { position: "Cultural Secretary", name: "Zainab Shaikh", dept: "BA" },
          { position: "Sports Secretary", name: "Rukhsar Ali", dept: "BMS" },
        ].map((member, idx) => (
          <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl mb-4">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h4 className="font-semibold text-foreground">{member.name}</h4>
            <p className="text-primary font-medium text-sm">{member.position}</p>
            <p className="text-xs text-muted-foreground">{member.dept}</p>
          </div>
        ))}
      </div>
    </div>
  </SubPageLayout>
);

const Cultural = () => (
  <SubPageLayout title="Cultural Activities" section="Student Corner">
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Annual Fest", date: "February", desc: "Three-day mega cultural event" },
          { name: "Traditional Day", date: "August", desc: "Celebrating Indian heritage" },
          { name: "Talent Hunt", date: "September", desc: "Platform for hidden talents" },
        ].map((event, idx) => (
          <div key={idx} className="bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 rounded-xl p-6 border border-fuchsia-500/30">
            <Palette className="w-8 h-8 text-fuchsia-600 mb-4" />
            <h4 className="font-semibold text-foreground mb-1">{event.name}</h4>
            <p className="text-sm text-accent mb-2">{event.date}</p>
            <p className="text-sm text-muted-foreground">{event.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
        <h4 className="font-semibold text-primary mb-4">Clubs & Societies</h4>
        <div className="flex flex-wrap gap-3">
          {["Drama Club", "Music Society", "Dance Troupe", "Literary Club", "Fine Arts", "Photography Club"].map((club) => (
            <span key={club} className="px-4 py-2 bg-muted rounded-full text-sm">{club}</span>
          ))}
        </div>
      </div>
    </div>
  </SubPageLayout>
);

const Feedback = () => (
  <SubPageLayout title="Student Feedback" section="Student Corner">
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground">
        Your feedback helps us improve. Share your thoughts on curriculum, teaching, 
        infrastructure, and overall college experience.
      </p>
      <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
        <h4 className="font-heading text-xl font-bold text-primary mb-6">Feedback Form</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="w-full px-4 py-2 rounded-lg border border-border bg-background">
              <option>Academics</option>
              <option>Infrastructure</option>
              <option>Administration</option>
              <option>Library</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Your Feedback</label>
            <textarea className="w-full px-4 py-3 rounded-lg border border-border bg-background min-h-[150px]" placeholder="Share your feedback..." />
          </div>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  </SubPageLayout>
);

const WDC = () => (
  <SubPageLayout title="Women Development Cell" section="Student Corner">
    <div className="space-y-8">
      <div className="bg-rose-500/10 rounded-2xl p-8 border border-rose-500/30">
        <UserCheck className="w-12 h-12 text-rose-600 mb-4" />
        <h3 className="font-heading text-2xl font-bold text-rose-700 mb-2">Empowering Women, Enabling Success</h3>
        <p className="text-muted-foreground">
          The Women Development Cell works towards creating awareness about women's rights, 
          health, and safety while providing a safe platform for addressing gender-related issues.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Self-Defense Workshops", desc: "Regular training sessions on personal safety" },
          { title: "Legal Awareness", desc: "Know your rights - sessions on women-centric laws" },
          { title: "Health Camps", desc: "Regular health check-ups and awareness programs" },
          { title: "Counseling Services", desc: "Professional counseling for personal issues" },
        ].map((activity, idx) => (
          <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <h4 className="font-semibold text-primary mb-2">{activity.title}</h4>
            <p className="text-sm text-muted-foreground">{activity.desc}</p>
          </div>
        ))}
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
      subtitle={`${section} - Student Support Services`}
      breadcrumb={[{ label: "Home", href: "/" }, { label: section, href: "/student-corner" }, { label: title }]}
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

// Main Student Corner Page
const StudentCornerHome = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageHero 
      title="Student Corner" 
      subtitle="Your Gateway to Campus Life and Support Services"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Student Corner" }]}
    />
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {studentSections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={section.href}
                className="group block bg-card rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border border-border hover:border-accent/30 card-hover h-full"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {section.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {section.description}
                </p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:text-accent transition-colors">
                  <span>View</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

const StudentCorner = () => {
  const location = useLocation();
  
  if (location.pathname === '/student-corner') {
    return <StudentCornerHome />;
  }
  
  return (
    <Routes>
      <Route path="ugc-induction" element={<UGCInduction />} />
      <Route path="anti-ragging" element={<AntiRagging />} />
      <Route path="dlle" element={<DLLE />} />
      <Route path="facilities" element={<Facilities />} />
      <Route path="health-center" element={<HealthCenter />} />
      <Route path="grievance" element={<Grievance />} />
      <Route path="gymkhana" element={<Gymkhana />} />
      <Route path="library" element={<Library />} />
      <Route path="nss" element={<NSS />} />
      <Route path="scholarship" element={<Scholarship />} />
      <Route path="student-council" element={<StudentCouncil />} />
      <Route path="cultural" element={<Cultural />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="wdc" element={<WDC />} />
    </Routes>
  );
};

export default StudentCorner;
