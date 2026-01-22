import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import IQAC from "./pages/IQAC";
import NAAC from "./pages/NAAC";
import Research from "./pages/Research";
import Alumni from "./pages/Alumni";
import StudentCorner from "./pages/StudentCorner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about/*" element={<About />} />
              <Route path="/departments/*" element={<Departments />} />
              <Route path="/admission/*" element={<Admission />} />
              <Route path="/iqac/*" element={<IQAC />} />
              <Route path="/naac/*" element={<NAAC />} />
              <Route path="/research/*" element={<Research />} />
              <Route path="/alumni/*" element={<Alumni />} />
              <Route path="/student-corner/*" element={<StudentCorner />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
