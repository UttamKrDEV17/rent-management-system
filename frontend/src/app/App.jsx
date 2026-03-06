import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "../routes/PrivateRoutes";
import PublicLayout from "../layout/PublicLayout";
import LandingPage from "../features/landing";
import Login from "../features/auth/pages/Login";
import Error from "../features/error";
import OwnerSignup from "../features/auth/pages/OwnerSignup";
import TenantSignUp from "../features/auth/pages/TenantSignUp";
import Landing from "../features/landing/pages/Landing";
import About from "../features/landing/pages/About";
import Contact from "../features/landing/pages/Contact";
import Pricing from "../features/landing/pages/Pricing";
import Ownerdashboard from "../features/owner/pages/Ownerdashboard";
import useRefreshOnMount from "../shared/hooks/useRefershOnMount";
import PublicOnlyRoute from "../routes/PublicOnlyRoute";

function App() {
  const isRestoring = useRefreshOnMount();

  if (isRestoring) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route element={<PublicOnlyRoute />}>
          <Route element={<PublicLayout />}>
            <Route element={<LandingPage />}>
              <Route index element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup/owner" element={<OwnerSignup />} />
            <Route path="/signup/tenant/:token" element={<TenantSignUp />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Route>

        {/* ADMIN ROUTES */}
        <Route element={<PrivateRoutes allowedRoles={["admin"]} />}></Route>

        {/* OWNER ROUTES */}
        <Route element={<PrivateRoutes allowedRoles={["owner"]} />}>
          <Route path="/owner" element={<Ownerdashboard />} />
        </Route>

        {/* TENANT ROUTES */}
        <Route element={<PrivateRoutes allowedRoles={["tenant"]} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
