import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading Session...</div>; // Prevent flicker

  return (
    user && allowedRoles.includes(user.role) 
      ? <Outlet />  // Renders the child route
      : <Navigate to="/login" replace />
  );
};

export default PrivateRoute;