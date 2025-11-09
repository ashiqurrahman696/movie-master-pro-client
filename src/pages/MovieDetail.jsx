import { Link, useLoaderData } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MovieDetail = () => {
    const {user} = useAuth();
    const {_id, title, genre, releaseYear, director, cast, rating, duration, plotSummary, posterUrl, language, country, addedBy} = useLoaderData();

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
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount){
                            Swal.fire({
                                title: "Movie removed!",
                                text: "Your movie has been removed.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        toast.error(error);
                    })
            }
        });
    }
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-5">
            <img src={posterUrl} className="w-full rounded-md" />
            <div className="space-y-4">
                <h2 className="font-semibold text-5xl">{title}</h2>
                <p>{plotSummary}</p>
                <p><strong>Genre:</strong> {genre}</p>
                <p><strong>Release year:</strong> {releaseYear}</p>
                <p><strong>Director:</strong> {director}</p>
                <p><strong>Cast:</strong> {cast}</p>
                <p><strong>Duration:</strong> {duration >= 60 ? `${parseInt(duration / 60)}hr ${duration % 60}min` : `${duration}min`}</p>
                <p><strong>Rating:</strong> {rating}</p>
                <p><strong>Language:</strong> {language}</p>
                <p><strong>Country:</strong> {country}</p>
                <p><strong>Added by:</strong> {addedBy}</p>
                {user?.email === addedBy && <div className="flex gap-2">
                    <Link to={`/movies/update/${_id}`} className="btn btn-info">Edit</Link>
                    <button onClick={() => handleDeleteMovie(_id)} className="btn btn-error">Delete</button>
                </div>}
            </div>
        </div>
    );
};

export default MovieDetail;