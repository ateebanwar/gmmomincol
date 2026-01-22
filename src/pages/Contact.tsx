import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/ui/PageHero";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["G.M. Momin Women's College", "Bhiwandi, Thane District", "Maharashtra - 421302"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 2522 220123", "+91 2522 220124"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@gmmomincol.org", "admission@gmmomincol.org"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHero 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-soft border border-border">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and we'll get back to you shortly.
                </p>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input placeholder="Your name" className="rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" className="rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input placeholder="+91 XXXXX XXXXX" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="How can we help?" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Your message..." 
                      className="rounded-xl min-h-[120px]" 
                    />
                  </div>
                  <Button className="w-full btn-accent rounded-xl py-6 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <div className="space-y-1">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="bg-card rounded-2xl overflow-hidden border border-border h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.123456789!2d73.0583!3d19.2965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE3JzQ3LjQiTiA3M8KwMDMnMjkuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;

