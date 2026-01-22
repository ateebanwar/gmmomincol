import { motion } from "framer-motion";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { 
  UserPlus, 
  Star, 
  Users,
  ArrowRight,
  Linkedin,
  Mail,
  Quote,
  GraduationCap,
  Building,
  MapPin
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const alumniSections = [
  {
    name: "Alumni Registration",
    description: "Join our alumni network and stay connected",
    icon: UserPlus,
    href: "/alumni/registration",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Success Stories",
    description: "Inspiring journeys of our accomplished alumni",
    icon: Star,
    href: "/alumni/success-stories",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Alumni Directory",
    description: "Connect with fellow alumni worldwide",
    icon: Users,
    href: "/alumni/directory",
    color: "from-purple-500 to-violet-600",
  },
];

// Sub-page Components
const Registration = () => (
  <SubPageLayout title="Alumni Registration" section="Alumni">
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="font-heading text-2xl font-bold text-primary mb-4">Join Our Alumni Network</h3>
        <p className="text-muted-foreground mb-6">
          Stay connected with your alma mater and fellow alumni. Register to receive updates, 
          participate in events, and access exclusive alumni benefits.
        </p>
        <div className="space-y-4">
          {[
            "Networking opportunities with fellow alumni",
            "Invitations to alumni meets and events",
            "Career mentorship programs",
            "Access to college facilities and library",
            "Alumni newsletter and updates",
            "Opportunity to give back through scholarships",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                <Star className="w-3 h-3 text-accent" />
              </div>
              <span className="text-muted-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
        <h4 className="font-heading text-xl font-bold text-primary mb-6">Registration Form</h4>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <Input placeholder="Enter first name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <Input placeholder="Enter last name" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <Input type="email" placeholder="Enter email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <Input type="tel" placeholder="Enter phone number" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Graduation Year</label>
              <Input placeholder="e.g., 2020" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Department</label>
              <Input placeholder="e.g., Commerce" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Current Organization</label>
            <Input placeholder="Enter your workplace" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Designation</label>
            <Input placeholder="Enter your current role" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Current Location</label>
            <Input placeholder="City, Country" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message (Optional)</label>
            <Textarea placeholder="Share your journey or any message for your alma mater..." rows={3} />
          </div>
          <Button className="w-full">Register as Alumni</Button>
        </form>
      </div>
    </div>
  </SubPageLayout>
);

const SuccessStories = () => (
  <SubPageLayout title="Success Stories" section="Alumni">
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
        Our alumni have gone on to achieve remarkable success across various fields. 
        Their journeys inspire current students and reflect the quality of education at G.M. Momin Women's College.
      </p>
      
      <div className="grid gap-8">
        {[
          {
            name: "Dr. Fatima Ansari",
            batch: "2008",
            department: "Science",
            role: "Senior Scientist",
            company: "ISRO",
            location: "Bangalore",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
            story: "Starting from a small-town girl to working on India's space missions, my journey has been incredible. The foundation laid at G.M. Momin Women's College shaped my scientific thinking and determination.",
            linkedin: "#"
          },
          {
            name: "Ayesha Sheikh",
            batch: "2012",
            department: "Commerce",
            role: "Vice President",
            company: "Goldman Sachs",
            location: "Mumbai",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
            story: "The commerce department at G.M. Momin gave me not just knowledge but confidence. Today, leading a team at a global investment bank, I still apply the values instilled during my college days.",
            linkedin: "#"
          },
          {
            name: "Rukhsar Patel",
            batch: "2015",
            department: "Computer Science",
            role: "Tech Lead",
            company: "Google",
            location: "California, USA",
            image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop",
            story: "From coding in the college computer lab to leading engineering teams at Google, every step of my journey traces back to the strong fundamentals I gained at G.M. Momin.",
            linkedin: "#"
          },
          {
            name: "Dr. Nadia Khan",
            batch: "2010",
            department: "Arts",
            role: "Associate Professor",
            company: "JNU Delhi",
            location: "New Delhi",
            image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
            story: "The liberal arts education and research culture at our college inspired me to pursue academia. Today, I'm proud to be shaping the next generation of scholars.",
            linkedin: "#"
          },
        ].map((alumni, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={alumni.image} 
                  alt={alumni.name}
                  className="w-32 h-32 rounded-2xl object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <h4 className="font-heading text-2xl font-bold text-primary">{alumni.name}</h4>
                    <p className="text-accent font-medium">{alumni.role} at {alumni.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Batch of {alumni.batch}
                    </span>
                    <a href={alumni.linkedin} className="p-2 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" /> {alumni.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4" /> {alumni.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {alumni.location}
                  </span>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <Quote className="w-6 h-6 text-accent mb-2" />
                  <p className="text-muted-foreground italic">{alumni.story}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-muted-foreground mb-4">Want to share your success story?</p>
        <Link to="/alumni/registration">
          <Button>Register & Share Your Journey</Button>
        </Link>
      </div>
    </div>
  </SubPageLayout>
);

const Directory = () => (
  <SubPageLayout title="Alumni Directory" section="Alumni">
    <div className="space-y-8">
      <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
        <div className="flex flex-col md:flex-row gap-4">
          <Input placeholder="Search by name, batch, or company..." className="flex-1" />
          <select className="px-4 py-2 rounded-lg border border-border bg-background">
            <option>All Departments</option>
            <option>Arts</option>
            <option>Commerce</option>
            <option>Science</option>
            <option>Computer Science</option>
            <option>Management</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-border bg-background">
            <option>All Years</option>
            <option>2020-2024</option>
            <option>2015-2019</option>
            <option>2010-2014</option>
            <option>2005-2009</option>
            <option>Before 2005</option>
          </select>
          <Button>Search</Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Zara Ahmed", batch: "2022", dept: "Commerce", company: "Deloitte", location: "Mumbai" },
          { name: "Sana Merchant", batch: "2021", dept: "IT", company: "TCS", location: "Pune" },
          { name: "Ayesha Qureshi", batch: "2020", dept: "Science", company: "Cipla", location: "Mumbai" },
          { name: "Fatima Shaikh", batch: "2019", dept: "Arts", company: "Times of India", location: "Delhi" },
          { name: "Nazia Patel", batch: "2018", dept: "Commerce", company: "HDFC Bank", location: "Mumbai" },
          { name: "Rukhsar Momin", batch: "2017", dept: "Management", company: "McKinsey", location: "Bangalore" },
        ].map((alumni, idx) => (
          <div key={idx} className="bg-card rounded-xl p-5 shadow-soft border border-border hover:border-accent/30 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                {alumni.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{alumni.name}</h4>
                <p className="text-sm text-muted-foreground">Batch of {alumni.batch}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-4 h-4" /> {alumni.dept}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building className="w-4 h-4" /> {alumni.company}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" /> {alumni.location}
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 px-3 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium flex items-center justify-center gap-1">
                <Mail className="w-3 h-3" /> Connect
              </button>
              <button className="px-3 py-2 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Not registered yet? Join our alumni network to appear in the directory.
        </p>
        <Link to="/alumni/registration">
          <Button variant="outline">Register Now</Button>
        </Link>
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
      subtitle={`${section} - Stay Connected`}
      breadcrumb={[{ label: "Home", href: "/" }, { label: section, href: `/${section.toLowerCase()}` }, { label: title }]}
    />
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  </motion.div>
);

// Main Alumni Page
const AlumniHome = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageHero 
      title="Alumni" 
      subtitle="Celebrating Our Accomplished Graduates"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Alumni" }]}
    />
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground">
            Our alumni network spans across the globe, with graduates making their mark in diverse fields. 
            Join our community to stay connected, network, and give back to your alma mater.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-primary/5 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">10,000+</p>
            <p className="text-muted-foreground">Alumni Worldwide</p>
          </div>
          <div className="bg-accent/5 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-accent mb-2">25+</p>
            <p className="text-muted-foreground">Countries</p>
          </div>
          <div className="bg-purple-500/5 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">500+</p>
            <p className="text-muted-foreground">Companies</p>
          </div>
          <div className="bg-green-500/5 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-green-600 mb-2">50+</p>
            <p className="text-muted-foreground">Years of Legacy</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {alumniSections.map((section, index) => (
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
                  <span>Learn More</span>
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

const Alumni = () => {
  const location = useLocation();
  
  if (location.pathname === '/alumni') {
    return <AlumniHome />;
  }
  
  return (
    <Routes>
      <Route path="registration" element={<Registration />} />
      <Route path="success-stories" element={<SuccessStories />} />
      <Route path="directory" element={<Directory />} />
    </Routes>
  );
};

export default Alumni;
