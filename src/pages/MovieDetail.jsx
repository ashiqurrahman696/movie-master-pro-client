import { Link, useLoaderData } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { addToWatchlist } from "../utils/localStorage";
import NotFound404 from "./NotFound404";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MovieDetail = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {_id, title, genre, releaseYear, director, cast, rating, duration, plotSummary, posterUrl, language, country, addedBy} = useLoaderData();

    if(_id === undefined){
        return <NotFound404/>;
    }

    const handleAddToWatchlist = id => {
        addToWatchlist(id);
    }

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
                axiosSecure.delete(`http://localhost:3000/movies/${id}`)
                    .then(data => {
                        if(data.data.deletedCount){
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
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-5">
            <div className="grid md:grid-cols-2 gap-5 place-items-center">
                <img src={posterUrl} className="w-full rounded-md" />
                <div className="space-y-4 w-full">
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
                    <div className="flex gap-2">
                        <button onClick={() => handleAddToWatchlist(_id)} className="btn btn-accent">Add to watchlist</button>
                        {user?.email === addedBy && <>
                            <Link to={`/movies/update/${_id}`} className="btn btn-info">Edit</Link>
                            <button onClick={() => handleDeleteMovie(_id)} className="btn btn-error">Delete</button>
                        </>}
                    </div>
                </div>
            </div>
            <form className="space-y-5">
                <h3 className="font-semibold text-3xl">Rate the movie</h3>
                <div className="rating gap-1">
                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="2 star" />
                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" />
                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" />
                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" />
                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="6 star" />
                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="7 star" />
                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="8 star" />
                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="9 star" />
                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="10 star" />
                </div>
                <h3 className="font-semibold text-3xl">Your Review</h3>
                <textarea className="textarea w-full resize-none" rows={10} placeholder="Write your review..."></textarea>
                <button className="btn btn-neutral">Submit</button>
            </form>
        </div>
    );
};

export default MovieDetail;