import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  //   const links = (
  //     <>
  //       <li>
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link to="/Link2">Contact Us</Link>
  //       </li>
  //       <li>
  //         <Link to="/Link3">Dashboard </Link>
  //       </li>
  //       <li>
  //         <Link to="/Link4">OUR MENU</Link>
  //       </li>
  //       <li>
  //         <Link to="/Link5">OUR SHOP</Link>
  //       </li>
  //     </>
  //   );

  //simplified links using map
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact Us" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/our-menu", label: "OUR MENU" },
    { path: "/our-shop", label: "OUR SHOP" },
  ];
  const links = navItems.map((link, index) => (
    <li>
      <Link key={index} to={link.path}>
        {link.label}
      </Link>
    </li>
  ));
  return (
    <div className="navbar fixed z-10 text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user ? (
          <span className="btn btn-success">logout</span>
        ) : (
          <span className="btn btn-success">Login</span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
