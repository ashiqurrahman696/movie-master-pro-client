import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { genres } from "../utils/genres";

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [ratingValue, setRatingValue] = useState(0);
    const [option, setOption] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_baseURL}/movies`)
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    const applyRating = () => {
        if(option === "gt"){
            fetch(`${import.meta.env.VITE_baseURL}/rating-greater?rating=${ratingValue}`)
                .then(res => res.json())
                .then(data => setMovies(data));
        }
        else if(option === "lt"){
            fetch(`${import.meta.env.VITE_baseURL}/rating-less?rating=${ratingValue}`)
                .then(res => res.json())
                .then(data => setMovies(data));
        }
    }

    const filterByGenre = (e, genre) => {
        e.classList.toggle("bg-primary");
        e.classList.toggle("text-white");
        if (e.classList.contains("bg-primary") || e.classList.contains("text-white")){
            setSelectedGenres([...selectedGenres, genre]);
            
        }
        else{
            const filtered = selectedGenres.filter(selected => selected !== genre);
            setSelectedGenres(filtered);
        }
    }

    const fetchMoviesByGenre = () => {
        const query = selectedGenres.length ? `?genres=${encodeURIComponent(JSON.stringify(selectedGenres))}` : "";

        fetch(`${import.meta.env.VITE_baseURL}/movie-by-genre${query}`)
            .then(res => res.json())
            .then(data => setMovies(data));
    }

    useEffect(() => {
        fetchMoviesByGenre()
    }, [selectedGenres]);

    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-center font-semibold text-4xl">All Movies</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-start">
                <div>
                    <h2 className="font-semibold text-xl mb-4">Filter by Rating</h2>
                    <select className="select w-full" onChange={(e) => setOption(e.target.value)}>
                        <option value="" disabled selected>Select one</option>
                        <option value="gt">Greater than</option>
                        <option value="lt">Less than</option>
                    </select>
                    <input type="number" name="rating" onInput={(e) => setRatingValue(Number(e.target.value))} className="input w-full mt-2 mb-4" />
                    <button onClick={applyRating} className="btn btn-primary">Apply Rating</button>
                    <h2 className="font-semibold text-xl my-4">Filter by Genres</h2>
                    <ul className="bg-base-300 rounded-box w-full p-4 flex sm:flex-col flex-wrap justify-center gap-4">
                        {genres.map(genre => <li onClick={(e) => filterByGenre(e.target, genre.name)} key={genre.id} className={`duration-300 p-2 rounded cursor-pointer flex items-center gap-4`}>{genre.name}</li>)}
                    </ul>
                </div>
                <div className="grid lg:col-span-3 md:col-span-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {movies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
                </div>
            </div>
        </div>
    );
};

export default AllMovies;