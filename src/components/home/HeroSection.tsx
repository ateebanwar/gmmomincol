import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 100, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="G.M. Momin Women's College Campus" 
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 backdrop-blur-sm border border-accent/30">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Admissions Open 2026-27
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Empowering Women Through{" "}
            <span className="text-gradient">Education</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl"
          >
            Join Maharashtra's premier women's college, where academic excellence 
            meets holistic development. Shape your future with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/admission">
              <Button size="lg" className="btn-accent rounded-full px-8 py-6 text-lg group">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/departments">
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Explore Programs
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>

      {/* Glass Card Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:block absolute bottom-20 right-8 xl:right-20"
      >
        <div className="glass rounded-3xl p-6 min-w-[280px]">
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "50+", label: "Years of Excellence" },
              { value: "5000+", label: "Alumni Network" },
              { value: "15+", label: "Departments" },
              { value: "A+", label: "NAAC Grade" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-heading text-2xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
