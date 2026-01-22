import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const PrincipalMessage = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                alt="Principal"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                  Dr. Principal Name
                </h3>
                <p className="text-primary-foreground/80">
                  Principal, G.M. Momin Women's College
                </p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl bg-accent/20" />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Principal's Message
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">
              A Message of Inspiration
            </h2>

            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-16 h-16 text-accent/20" />
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 relative z-10">
                  "Education is the most powerful weapon which you can use to change 
                  the world. At G.M. Momin Women's College, we are committed to 
                  providing an environment that nurtures intellectual curiosity, 
                  fosters creativity, and builds character.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our goal is not just to impart knowledge, but to empower young 
                  women to become confident leaders, critical thinkers, and 
                  responsible citizens who will make meaningful contributions to society.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I invite you to join our vibrant community and embark on a 
                  transformative educational journey that will shape your future 
                  and help you realize your dreams."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
