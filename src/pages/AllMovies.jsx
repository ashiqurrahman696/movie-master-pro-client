import { useLoaderData } from "react-router";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
    const movies = useLoaderData();
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-center font-semibold text-4xl">All Movies</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {movies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
            </div>
        </div>
    );
};

export default AllMovies;