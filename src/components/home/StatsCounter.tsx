import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Users, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 3000,
    suffix: "+",
    label: "Students",
  },
  {
    icon: GraduationCap,
    value: 15,
    suffix: "+",
    label: "Departments",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Awards Won",
  },
  {
    icon: Calendar,
    value: 50,
    suffix: "+",
    label: "Years of Excellence",
  },
];

const CountUpNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Our Achievements at a Glance
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence in education
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <stat.icon className="w-10 h-10 text-accent" />
              </div>
              <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                <CountUpNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-primary-foreground/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
