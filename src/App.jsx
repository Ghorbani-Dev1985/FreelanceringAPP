import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfile from "./Pages/CompleteProfile/CompleteProfile";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import OwnerDashboard from "./Pages/OwnerDashboard/OwnerDashboard";
import Projects from "./Pages/Projects/Projects";
import Project from "./Pages/Project/Project";
import { DarkModeProvider } from "./Context/DarkModeContext.jsx";
import OwnerLayout from "./Features/Owner/OwnerLayout.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/completeProfile" element={<CompleteProfile />} />
            <Route path="/owner" element={<OwnerLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <main className="container xl:max-w-screen-xl"></main>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
