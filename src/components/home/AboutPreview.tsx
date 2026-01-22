import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Our College
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Nurturing Minds, Building Futures
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              G.M. Momin Women's College has been a cornerstone of women's education 
              in Bhiwandi. Affiliated with the University of Mumbai, we offer comprehensive 
              undergraduate and postgraduate programs designed to prepare students for 
              success in their chosen fields.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our dedicated faculty, modern infrastructure, and student-centric approach 
              create an environment where academic excellence thrives alongside personal 
              growth and character development.
            </p>
            <Link to="/about">
              <Button className="btn-primary rounded-full px-6 group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {[
              {
                icon: Award,
                title: "NAAC Accredited",
                description: "Recognized for quality and excellence in higher education",
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description: "Experienced educators dedicated to student success",
              },
              {
                icon: BookOpen,
                title: "Diverse Programs",
                description: "Arts, Commerce, Science, and Management courses",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-5 p-6 bg-card rounded-2xl border border-border hover:border-accent/30 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
