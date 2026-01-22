import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FlaskConical, Briefcase, Monitor, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const departments = [
  {
    icon: BookOpen,
    name: "Arts",
    programs: ["B.A.", "M.A."],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Briefcase,
    name: "Commerce",
    programs: ["B.Com", "M.Com"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: FlaskConical,
    name: "Science",
    programs: ["B.Sc.", "M.Sc."],
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Monitor,
    name: "IT & CS",
    programs: ["BCA", "B.Sc. IT"],
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Palette,
    name: "BMS",
    programs: ["BMS", "MBA"],
    color: "from-pink-500 to-rose-600",
  },
];

const DepartmentsPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Academic Excellence
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Departments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of academic programs designed to prepare 
            students for successful careers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/departments/${dept.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block bg-card rounded-2xl p-6 text-center border border-border hover:border-accent/30 hover:shadow-medium transition-all duration-300 card-hover h-full"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {dept.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {dept.programs.join(" • ")}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/departments">
            <Button className="btn-primary rounded-full px-8 group">
              Explore All Departments
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentsPreview;
