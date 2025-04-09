import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </main>
  );
};

export default Layout;
