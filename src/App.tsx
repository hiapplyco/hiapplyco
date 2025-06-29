
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnimationDemo from "./pages/AnimationDemo";
import Pricing from "./pages/Pricing";
import ProtectedPricing from "./pages/ProtectedPricing";
import CustomCursor from "./components/CustomCursor";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CustomCursor />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/animation-demo" element={<AnimationDemo />} />
            <Route path="/pricing/:clientSlug" element={<Pricing />} />
            <Route path="/protected-pricing/:clientSlug" element={<ProtectedPricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
