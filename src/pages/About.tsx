import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero 
        title="About Us" 
        subtitle="Discover our legacy of empowering women through education"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Legacy of Excellence
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                G.M. Momin Women's College stands as a beacon of women's education in Bhiwandi, 
                dedicated to nurturing future leaders, thinkers, and change-makers. Our institution 
                has been at the forefront of providing quality higher education to women from 
                diverse backgrounds.
              </p>
              <p>
                Affiliated with the University of Mumbai, we offer a comprehensive range of 
                undergraduate and postgraduate programs across Arts, Commerce, Science, and 
                Management disciplines. Our commitment to academic excellence, combined with 
                a focus on holistic development, prepares our students for success in their 
                chosen fields.
              </p>
              <p>
                With state-of-the-art facilities, experienced faculty, and a supportive 
                learning environment, we continue to uphold our founding vision of empowering 
                women through education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;

