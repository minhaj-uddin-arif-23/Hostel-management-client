import React from 'react'
import useAuth from '../Hook/useAuth';
import useAdmin from '../Hook/useAdmin';
import { useLocation } from 'react-router-dom';

function AdminRoute({children}) {
  const { user, loading } = useAuth();
  const [isAdmin,isAdminPending] = useAdmin()
  const location = useLocation();
  if (loading || isAdminPending) {
    return (
      <span className="loading loading-dots loading-lg min-h-screen my-20"></span>
    );
  }
  if (user && isAdmin) return children;
  return (
    <Navigate to={`/login`} state={{ from: location }} replace></Navigate>
  );
}
 


export default AdminRoute