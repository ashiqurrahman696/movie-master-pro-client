import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [ratingValue, setRatingValue] = useState(0);
    const [option, setOption] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/movies")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    const applyRating = () => {
        if(option === "gt"){
            fetch(`http://localhost:3000/rating-greater?rating=${ratingValue}`)
                .then(res => res.json())
                .then(data => setMovies(data));
        }
        else if(option === "lt"){
            fetch(`http://localhost:3000/rating-less?rating=${ratingValue}`)
                .then(res => res.json())
                .then(data => setMovies(data));
        }
    }

    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-center font-semibold text-4xl">All Movies</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div>
                    <h2 className="font-semibold text-xl mb-4">Filter by Rating</h2>
                    <select className="select w-full" onChange={(e) => setOption(e.target.value)}>
                        <option value="" disabled selected>Select one</option>
                        <option value="gt">Greater than</option>
                        <option value="lt">Less than</option>
                    </select>
                    <input type="number" name="rating" onInput={(e) => setRatingValue(Number(e.target.value))} className="input w-full mt-2 mb-4" />
                    <button onClick={applyRating} className="btn btn-primary">Apply Rating</button>
                </div>
                <div className="grid lg:col-span-3 md:col-span-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {movies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
                </div>
            </div>
        </div>
    );
};

export default AllMovies;