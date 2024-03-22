import { Navigate, Outlet, useLocation } from "react-router-dom";

export const Root = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/home" />;
  }

  return (
    <main className="max-w-7xl mx-auto h-screen px-6 py-4">
      <Outlet />
    </main>
  );
};
