import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png"

const Navbar = () => {
    const links = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/movies">All Movies</NavLink>
        </li>
        <li>
            <NavLink to="/movies/my-collection">My Collection</NavLink>
        </li>
    </>;
    return (
        <div className="drawer">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-100 dark:bg-base-300 shadow-sm">
                    <div className="navbar-start">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl">
                            <img src={logo} className="w-10" />
                            <h2 className="text-xl font-semibold">MovieMaster Pro</h2>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-3">
                        <Link to="/login" className="btn btn-info">Login</Link>
                        <Link to="/register" className="btn btn-success">Register</Link>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-70 p-4">
                    {/* Sidebar content here */}
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;