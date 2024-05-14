import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/reg">Register</Link>
      <Link to="/login">Login</Link>
      

      <hr size="4" color="red" />

      <Outlet />

      <hr size="4" color="red" />
      www.@cybrom
    </div>
  );
};

export default Layout;
