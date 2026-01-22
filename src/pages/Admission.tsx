import { motion } from "framer-motion";
import { FileText, Calendar, Download, CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: 1,
    title: "Check Eligibility",
    description: "Review the eligibility criteria for your desired program",
  },
  {
    step: 2,
    title: "Fill Application",
    description: "Complete the online application form with accurate details",
  },
  {
    step: 3,
    title: "Submit Documents",
    description: "Upload required documents including marksheets and certificates",
  },
  {
    step: 4,
    title: "Pay Fees",
    description: "Complete the admission fee payment through our secure portal",
  },
  {
    step: 5,
    title: "Get Confirmed",
    description: "Receive admission confirmation and welcome kit",
  },
];

const documents = [
  "Prospectus 2026-27",
  "Admission Form",
  "Fee Structure",
  "Scholarship Form",
  "University Forms",
];

const Admission = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero 
        title="Admissions" 
        subtitle="Begin your journey towards academic excellence"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
      />
      
      {/* Admission Steps */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Admission Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to secure your admission
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2" />
            
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 relative z-10 shadow-soft">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates & Downloads */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Important Dates */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">
                  Important Dates
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { date: "January 15, 2026", event: "Admission Portal Opens" },
                  { date: "February 28, 2026", event: "Early Bird Registration Ends" },
                  { date: "March 15, 2026", event: "Merit List Announcement" },
                  { date: "April 1, 2026", event: "Classes Commence" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">{item.date}</p>
                      <p className="text-sm text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Downloads */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">
                  Downloads
                </h3>
              </div>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors group"
                  >
                    <span className="font-medium text-foreground">{doc}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-accent">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards a bright future. Apply now for the 2026-27 academic year.
          </p>
          <Button size="lg" className="btn-accent rounded-full px-8 text-lg">
            Apply Online Now
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default Admission;

