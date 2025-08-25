import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import TeamPage from "@/pages/team";
import ProblemStatementsPage from "@/pages/problem-statements";
import GuidelinesPage from "@/pages/guidelines";

function Router() {
  return (
           <Switch>
         <Route path="/" component={Home} />
         <Route path="/team" component={TeamPage} />
         <Route path="/problem-statements" component={ProblemStatementsPage} />
         <Route path="/guidelines" component={GuidelinesPage} />
         <Route component={NotFound} />
       </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
