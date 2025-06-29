
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnimationDemo from "./pages/AnimationDemo";
import Pricing from "./pages/Pricing";
import ProtectedPricing from "./pages/ProtectedPricing";
import CinematicIntro from "./components/CinematicIntro";
import CustomCursor from "./components/CustomCursor";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CustomCursor />
          <CinematicIntro />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/animation-demo" element={<AnimationDemo />} />
              <Route path="/pricing/:clientSlug" element={<Pricing />} />
              <Route path="/protected-pricing/:clientSlug" element={<ProtectedPricing />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
