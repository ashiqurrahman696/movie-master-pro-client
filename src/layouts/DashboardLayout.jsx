import { Link, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { GoHome } from "react-icons/go";
import { MdOutlineMovie } from "react-icons/md";

const DashboardLayout = () => {
    const { user, signOutUser, setUser } = useAuth();
    const handleLogOut = () => {
        signOutUser().then(() => {
            setUser(null);
        }).catch((error) => {
            toast.error(error.code);
        });
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4 flex justify-between items-center w-full">
                        <span>MovieMaster Pro</span>
                        <div>
                            {user ? <>
                                <div tabIndex={0} role="button" className="btn btn-ghost avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <Link to="/dashboard/my-profile">
                                        <img
                                            className="w-10 rounded-full"
                                            alt={user.displayName}
                                            src={user.photoURL} />
                                    </Link>
                                </div>
                                <button onClick={handleLogOut} className="btn btn-error">Logout</button>
                            </> : <>
                                <Link to="/login" className="btn btn-info">Login</Link>
                                <Link to="/register" className="btn btn-success">Register</Link>
                            </>}
                        </div>
                    </div>
                </nav>
                {/* Page content here */}
                <div className="p-4">
                    <Outlet/>
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <Link to="/dashboard" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard Home">
                                {/* Home icon */}
                                <GoHome />
                                <span className="is-drawer-close:hidden">Dashboard Home</span>
                            </Link>
                        </li>
                        {/* List item */}
                        <li>
                            <Link to="/dashboard/movie-list" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Movie List">
                                {/* Movie icon */}
                                <MdOutlineMovie />
                                <span className="is-drawer-close:hidden">Movie List</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;