import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, FlaskConical, Monitor, Briefcase } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const departments = [
  {
    name: "Arts",
    description: "Humanities, languages, and social sciences",
    icon: BookOpen,
    href: "/departments/arts",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Commerce",
    description: "Business, accounting, and economics",
    icon: Briefcase,
    href: "/departments/commerce",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Science",
    description: "Physics, chemistry, biology, and mathematics",
    icon: FlaskConical,
    href: "/departments/science",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Computer Science",
    description: "Information technology and programming",
    icon: Monitor,
    href: "/departments/computer-science",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Management Studies",
    description: "BMS and MBA programs",
    icon: Users,
    href: "/departments/management",
    color: "from-pink-500 to-rose-600",
  },
];

const Departments = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero 
        title="Departments" 
        subtitle="Explore our diverse academic departments and programs"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Departments" }]}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={dept.href}
                  className="group block bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 border border-border hover:border-accent/30 card-hover"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {dept.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:text-accent transition-colors">
                    <span>Explore Department</span>
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
};

export default Departments;

