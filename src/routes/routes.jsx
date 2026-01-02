import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddMovie from "../pages/AddMovie";
import PrivateRoute from "./PrivateRoute";
import AllMovies from "../pages/AllMovies";
import MovieDetail from "../pages/MovieDetail";
import UpdateMovie from "../pages/UpdateMovie";
import MyCollections from "../pages/MyCollections";
import MyWatchList from "../pages/MyWatchList";
import NotFound404 from "../pages/NotFound404";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Profile from "../pages/dashboard/Profile";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import AdminRoute from "./AdminRoute";
import MovieList from "../pages/dashboard/MovieList";
import AddNewMovie from "../pages/dashboard/AddNewMovie";
import MovieUpdate from "../pages/dashboard/MovieUpdate";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch(`${import.meta.env.VITE_baseURL}/movies`)
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/my-watchlist",
                Component: MyWatchList,
                loader: () => fetch(`${import.meta.env.VITE_baseURL}/movies`)
            },
            {
                path: "/movies",
                Component: AllMovies,
            },
            {
                path: "/my-collection",
                element: <PrivateRoute>
                    <MyCollections/>
                </PrivateRoute>
            },
            {
                path: "/add-movie",
                element: <PrivateRoute>
                    <AddMovie/>
                </PrivateRoute>,
            },
            {
                path: "/movies/update/:id",
                element: <PrivateRoute>
                    <UpdateMovie/>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_baseURL}/movies/${params.id}`)
            },
            {
                path: "/movies/:id",
                Component: MovieDetail,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_baseURL}/movies/${params.id}`), 
                errorElement: <NotFound404/>
            },
            {
                path: "*",
                Component: NotFound404,
            },
        ],
    },

    // Dashboard routes
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <DashboardLayout/>
        </PrivateRoute>,
        children: [
            {
                index: true,
                Component: DashboardHome,
            },
            {
                path: "my-profile",
                Component: Profile,
            },
            {
                path: "update-profile",
                Component: UpdateProfile,
            },
            {
                path: "movie-list",
                element: <AdminRoute>
                    <MovieList/>
                </AdminRoute>
            },
            {
                path: "add-movie",
                element: <AdminRoute>
                    <AddNewMovie/>
                </AdminRoute>
            },
            {
                path: "update-movie/:id",
                element: <AdminRoute>
                    <MovieUpdate/>
                </AdminRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_baseURL}/movies/${params.id}`)
            },
        ],
    },
]);