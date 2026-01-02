import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MovieList = () => {
    const {data: movies = []} = useQuery({
        queryKey: ['movies'],
        queryFn: async() => {
            const result = await axios(`${import.meta.env.VITE_baseURL}/movies`);
            return result.data;
        }
    });
    return (
        <div className="space-y-4">
            <h2 className="text-5xl">Movie List</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Poster</th>
                            <th>Genre</th>
                            <th>Duration</th>
                            <th>Release Year</th>
                            <th>Language</th>
                            <th>Country</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie, index) => <tr key={movie._id}>
                            <th>{index + 1}</th>
                            <td>{movie.title}</td>
                            <td>
                                <img src={movie.posterUrl} alt={movie.title} className="w-20" />
                            </td>
                            <td>{movie.genre}</td>
                            <td>{movie.duration >= 60 ? `${parseInt(movie.duration / 60)}hr ${movie.duration % 60}min` : `${movie.duration}min`}</td>
                            <td>{movie.releaseYear}</td>
                            <td>{movie.language}</td>
                            <td>{movie.country}</td>
                            <td>
                                <div className="flex gap-2">
                                    <button className="btn btn-info">Update</button>
                                    <button className="btn btn-error">Delete</button>
                                </div>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MovieList;