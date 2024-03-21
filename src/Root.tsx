import { Navigate, Outlet, useLocation } from "react-router-dom";

export const Root = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/home" />;
  }

  return (
    <main className="h-screen bg-gray-primary p-4">
      <Outlet />
    </main>
  );
};
