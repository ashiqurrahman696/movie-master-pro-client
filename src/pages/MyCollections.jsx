import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyCollections = () => {
    const {user} = useAuth();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        if(user?.email){
            fetch(`http://localhost:3000/my-collection?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setMovies(data);
                    console.log(data);
                })
        }
    }, [user]);

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
                fetch(`http://localhost:3000/movies/${id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount){
                            Swal.fire({
                                title: "Movie removed!",
                                text: "Your movie has been removed.",
                                icon: "success"
                            });
                            const remainingMovies = movies.filter(movie => movie._id !== id);
                            setMovies(remainingMovies);
                        }
                    })
                    .catch(error => {
                        toast.error(error);
                    })
            }
        });
    }
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-center font-semibold text-4xl">My Collection</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Genre</th>
                            <th>Quick Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie, index) => <tr key={movie._id}>
                            <th>{index + 1}</th>
                            <td>{movie.title}</td>
                            <td>
                                <img src={movie.posterUrl} className="w-12" alt={movie.title} />
                            </td>
                            <td>{movie.genre}</td>
                            <td>
                                <div className="flex gap-2">
                                    <Link to={`/movies/update/${movie._id}`} className="btn btn-info">Edit</Link>
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

export default MyCollections;