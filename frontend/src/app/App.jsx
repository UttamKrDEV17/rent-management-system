import {BrowserRouter,Routes,Route} from "react-router-dom"
import PrivateRoutes from "../routes/PrivateRoutes";
import PublicLayout from "../layout/PublicLayout";
import LandingPage from "../features/landing";
import Login from "../features/auth/pages/Login";
import Error from "../features/error";
import OwnerSignup from "../features/auth/pages/OwnerSignup";
import TenantSignUp from "../features/auth/pages/TenantSignUp";

function App() {
  return (
   <BrowserRouter>
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/owner" element={<OwnerSignup />} />
        <Route path="/signup/tenant/:token" element={<TenantSignUp />} />
        <Route path="*" element={<Error />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route element={<PrivateRoutes allowedRoles={['admin']} />}>

      </Route>

      {/* OWNER ROUTES */}
      <Route element={<PrivateRoutes allowedRoles={['owner']} />}>
      
      </Route>

      {/* TENANT ROUTES */}
      <Route element={<PrivateRoutes allowedRoles={['tenant']} />}>

      </Route>

    </Routes>
   </BrowserRouter>
  );
}

export default App;
