import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, ClipboardList, GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const quickLinks = [
  {
    icon: FileText,
    title: "Prospectus",
    description: "Download course details",
    href: "/admission/prospectus",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: ClipboardList,
    title: "Admission Form",
    description: "Apply online now",
    href: "/admission",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Award,
    title: "Scholarships",
    description: "Financial aid options",
    href: "/student-corner/scholarship",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: GraduationCap,
    title: "Results",
    description: "Check your results",
    href: "/results",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    description: "Important dates",
    href: "/iqac/academic-calendar",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Learning resources",
    href: "/student-corner/library",
    color: "from-cyan-500 to-blue-600",
  },
];

const QuickLinks = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Quick Access
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
            Useful Links
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={link.href}
                className="group block h-full bg-card rounded-2xl p-6 text-center border border-border hover:border-accent/30 hover:shadow-medium transition-all duration-300 card-hover"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
