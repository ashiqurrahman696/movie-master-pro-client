import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MovieList = () => {
    const axiosSecure = useAxiosSecure();
    const {data: movies = [], refetch} = useQuery({
        queryKey: ['movies'],
        queryFn: async() => {
            const result = await axios(`${import.meta.env.VITE_baseURL}/movies`);
            return result.data;
        }
    });

    const handleDeleteMovie = id => {
            Swal.fire({
                title: "Are you sure to delete?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "dodgerblue",
                cancelButtonColor: "crimson",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/movies/${id}`)
                        .then(data => {
                            if(data.data.deletedCount){
                                Swal.fire({
                                    title: "Movie removed!",
                                    text: "Your movie has been removed.",
                                    icon: "success"
                                });
                                refetch();
                            }
                        })
                        .catch(error => {
                            toast.error(error);
                        })
                }
            });
        }
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
                <h2 className="text-5xl">Movie List</h2>
                <Link to="/dashboard/add-movie" className="btn btn-accent">Add New Movie</Link>
            </div>
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
                                    <Link to={`/dashboard/update-movie/${movie._id}`} className="btn btn-info">Update</Link>
                                    <button onClick={() => handleDeleteMovie(movie._id)} className="btn btn-error">Delete</button>
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