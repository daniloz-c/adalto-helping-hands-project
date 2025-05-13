
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* These routes will be created in the future */}
          <Route path="/nossa-historia" element={<NotFound />} />
          <Route path="/como-ajudar" element={<NotFound />} />
          <Route path="/nossos-servicos" element={<NotFound />} />
          <Route path="/depoimentos" element={<NotFound />} />
          <Route path="/noticias" element={<NotFound />} />
          <Route path="/noticias/:slug" element={<NotFound />} />
          <Route path="/doe" element={<NotFound />} />
          <Route path="/transparencia" element={<NotFound />} />
          <Route path="/parceiros" element={<NotFound />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
