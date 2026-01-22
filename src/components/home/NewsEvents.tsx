import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "Annual Convocation Ceremony 2026",
    date: "January 20, 2026",
    category: "Events",
    excerpt: "Join us for the grand annual convocation ceremony celebrating our graduates' achievements.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
  },
  {
    title: "NAAC Peer Team Visit Scheduled",
    date: "January 15, 2026",
    category: "Accreditation",
    excerpt: "The NAAC peer team will visit our campus for the re-accreditation assessment.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
  },
  {
    title: "Women in Science Workshop",
    date: "January 10, 2026",
    category: "Workshop",
    excerpt: "Inspiring the next generation of women scientists through hands-on learning experiences.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600",
  },
];

const NewsEvents = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Stay Updated
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              News & Events
            </h2>
          </div>
          <Link to="/news">
            <Button variant="outline" className="rounded-full group">
              View All News
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-medium transition-all duration-300 card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-accent transition-colors group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
