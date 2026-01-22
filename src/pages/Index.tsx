import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import QuickLinks from "@/components/home/QuickLinks";
import StatsCounter from "@/components/home/StatsCounter";
import NewsEvents from "@/components/home/NewsEvents";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import DepartmentsPreview from "@/components/home/DepartmentsPreview";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutPreview />
      <QuickLinks />
      <StatsCounter />
      <DepartmentsPreview />
      <PrincipalMessage />
      <NewsEvents />
    </motion.div>
  );
};

export default Index;

