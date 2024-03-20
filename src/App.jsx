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
import FreelancerDashboard from "./Pages/FreelancerDashboard/FreelancerDashboard.jsx";
import Proposals from "./Pages/Proposals/Proposals.jsx";
import SubmittedProjects from "./Pages/SubmittedProjects/SubmittedProjects.jsx";
import FreelancerLayout from "./Features/Freelancer/FreelancerLayout.jsx";
import ProtectedRoute from "./UI/ProtectedRoute.jsx";
import NotAccess from './Pages/NotAccess/NotAccess.jsx'
import AdminLayout from "./Features/Admin/AdminLayout.jsx";
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard.jsx'

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
            <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
            
            </Route>
            <Route path="/owner" element={<ProtectedRoute><OwnerLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
            </Route>
            <Route path="/freelancer" element={<ProtectedRoute><FreelancerLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to="dashboard" replace />}/>
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="projects" element={<SubmittedProjects />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/notAccess" element={<NotAccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
