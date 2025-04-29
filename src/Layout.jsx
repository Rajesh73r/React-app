import { Link, Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
      <Toaster />
    </main>
  );
};

export default Layout;
