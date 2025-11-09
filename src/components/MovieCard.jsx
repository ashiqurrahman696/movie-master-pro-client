import { FaStar } from "react-icons/fa6";

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
                    <button className="btn btn-info">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;