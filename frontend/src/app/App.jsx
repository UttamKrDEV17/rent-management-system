import {BrowserRouter,Routes,Route} from "react-router-dom"
import PrivateRoutes from "../routes/PrivateRoutes";
import PublicLayout from "../layout/PublicLayout";
import LandingPage from "../features/landing";
import Login from "../features/auth/pages/Login";
import Error from "../features/error";
import SignUp from "../features/auth/pages/SignUp";

function App() {
  return (
   <BrowserRouter>
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
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
