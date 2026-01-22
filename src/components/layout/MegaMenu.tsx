import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  items: {
    label: string;
    href: string;
    description: string;
    icon?: LucideIcon;
  }[];
  align?: "start" | "center" | "end";
}

const MegaMenu = ({ items, align = "center" }: MegaMenuProps) => {
  // Determine grid columns based on item count to handle large lists
  const gridCols = items.length > 12 ? "grid-cols-3 min-w-[800px]" : items.length > 6 ? "grid-cols-2 min-w-[600px]" : "grid-cols-1 min-w-[320px]";

  const alignmentClasses = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "absolute top-full pt-4 z-50 pointer-events-none",
        alignmentClasses[align]
      )}
    >
      <div className={cn(
        "bg-card rounded-2xl shadow-strong border border-border p-4 pointer-events-auto",
        "grid gap-2",
        gridCols
      )}>
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.03, duration: 0.2 }}
          >
            <Link
              to={item.href}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted transition-all duration-300 group h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                {item.icon ? (
                  <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                )}
              </div>
              <div className="flex-1 space-y-0.5">
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MegaMenu;
