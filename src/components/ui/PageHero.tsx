import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  className?: string;
}

const PageHero = ({ title, subtitle, breadcrumb, className }: PageHeroProps) => {
  return (
    <section className={cn(
      "relative py-20 md:py-28 bg-primary overflow-hidden",
      className
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-6">
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link 
                    to={item.href} 
                    className="hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground">{item.label}</span>
                )}
                {index < breadcrumb.length - 1 && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
