import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RegionProvider } from "@/contexts/RegionContext";
import Index from "./pages/Index.tsx";

const RightsPage = lazy(() => import("./pages/RightsPage.tsx"));
const EmergencyPage = lazy(() => import("./pages/EmergencyPage.tsx"));
const ChatPage = lazy(() => import("./pages/ChatPage.tsx"));
const IssuePage = lazy(() => import("./pages/IssuePage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const routeFallback = <div className="min-h-screen bg-background" aria-hidden="true" />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RegionProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={routeFallback}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/rights" element={<RightsPage />} />
              <Route path="/emergency" element={<EmergencyPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/issue/:issueId" element={<IssuePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </RegionProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
