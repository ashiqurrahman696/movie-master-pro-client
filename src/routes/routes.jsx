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
                element: <PrivateRoute>
                    <MovieDetail/>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_baseURL}/movies/${params.id}`), 
                errorElement: <NotFound404/>
            },
        ],
    },
    {
        path: "*",
        Component: NotFound404,
    },
]);