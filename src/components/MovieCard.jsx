import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const MovieCard = ({movie}) => {
    const {_id, title, posterUrl, genre, rating, releaseYear} = movie;
    return (
        <div className="card bg-base-300 shadow-sm">
            <figure className="px-4 pt-4">
                <img
                    src={posterUrl}
                    alt={title}
                    className="rounded-xl w-full sm:h-96 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title} ({releaseYear})</h2>
                <p className="badge badge-accent">{genre}</p>
                <div className="flex items-center gap-2">
                    <FaStar/>
                    <p>{rating}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/movies/${_id}`} className="btn btn-info">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;