import { Navigate, Outlet, useLocation } from "react-router-dom";

export const Root = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/home" />;
  }

  return (
    <main className="h-screen w-full bg-default p-4">
      <Outlet />
    </main>
  );
};
