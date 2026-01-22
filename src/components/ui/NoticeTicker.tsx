import { Bell } from "lucide-react";

const notices = [
  "Admissions Open for 2026-27 Academic Year",
  "NAAC Re-accreditation Visit Scheduled",
  "Annual Sports Day on January 25th",
  "New Research Grants Available - Apply Now",
  "Scholarship Applications Due February 15th",
];

const NoticeTicker = () => {
  return (
    <div className="bg-accent text-accent-foreground py-2 overflow-hidden">
      <div className="container-custom flex items-center gap-4">
        <div className="flex items-center gap-2 font-semibold text-sm flex-shrink-0 bg-accent-foreground/10 px-3 py-1 rounded-full">
          <Bell className="w-4 h-4" />
          <span className="hidden sm:inline">Latest Updates</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee whitespace-nowrap flex gap-12">
            {[...notices, ...notices].map((notice, index) => (
              <span key={index} className="text-sm font-medium">
                {notice} •
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeTicker;
