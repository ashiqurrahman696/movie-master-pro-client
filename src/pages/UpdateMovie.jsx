import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import NotFound404 from "./NotFound404";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateMovie = () => {
    const {setLoading, user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { _id, title, genre, releaseYear, director, cast, rating, duration, plotSummary, posterUrl, language, country, addedBy } = useLoaderData();

    if(_id === undefined){
        return <NotFound404/>;
    }

    const handleUpdateMovie = e => {
        e.preventDefault();
        const form = e.target;
        if (!form.title.value ||
            !form.genre.value ||
            !form.release_year.value ||
            !form.director.value ||
            !form.cast.value ||
            !form.rating.value ||
            !form.duration.value ||
            !form.plot_summary.value ||
            !form.poster_url.value ||
            !form.language.value ||
            !form.country.value ||
            !form.added_by.value
        ) {
            toast.error("Please fill up all field");
            return;
        }
        setLoading(true);
        const updatedMovie = {
            title: form.title.value,
            genre: form.genre.value,
            releaseYear: Number(form.release_year.value),
            director: form.director.value,
            cast: form.cast.value,
            rating: Number(form.rating.value),
            duration: Number(form.duration.value),
            plotSummary: form.plot_summary.value,
            posterUrl: form.poster_url.value,
            language: form.language.value,
            country: form.country.value,
        };

        axiosSecure.patch(`/movies/${_id}`, updatedMovie)
            .then(data => {
                setLoading(false);
                if(data.data.modifiedCount){
                    form.reset();
                    toast.success("Movie updated successfully");
                }
            }).catch(error => {
                setLoading(false);
                toast.error(error.code);
            });
    }
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-center font-semibold text-4xl">Update Movie</h1>
            <div className="card bg-base-300 w-full max-w-3xl mx-auto">
                <div className="card-body">
                    <form onSubmit={handleUpdateMovie} className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="label">Title</label>
                            <input type="text" name="title" defaultValue={title} className="input w-full" placeholder="Title" />
                        </div>
                        <div>
                            <label className="label">Genre</label>
                            <input type="text" name="genre" defaultValue={genre} className="input w-full" placeholder="Genre" />
                        </div>
                        <div>
                            <label className="label">Release Year</label>
                            <input type="text" name="release_year" defaultValue={releaseYear} className="input w-full" placeholder="Release Year" />
                        </div>
                        <div>
                            <label className="label">Director</label>
                            <input type="text" name="director" defaultValue={director} className="input w-full" placeholder="Director" />
                        </div>
                        <div>
                            <label className="label">Cast</label>
                            <input type="text" name="cast" defaultValue={cast} className="input w-full" placeholder="Cast" />
                        </div>
                        <div>
                            <label className="label">Rating</label>
                            <input type="text" name="rating" defaultValue={rating} className="input w-full" placeholder="Rating" />
                        </div>
                        <div>
                            <label className="label">Duration</label>
                            <input type="text" name="duration" defaultValue={duration} className="input w-full" placeholder="Duration" />
                        </div>
                        <div>
                            <label className="label">Poster URL</label>
                            <input type="text" name="poster_url" defaultValue={posterUrl} className="input w-full" placeholder="Poster URL" />
                        </div>
                        <div>
                            <label className="label">Language</label>
                            <input type="text" name="language" defaultValue={language} className="input w-full" placeholder="Language" />
                        </div>
                        <div>
                            <label className="label">Country</label>
                            <input type="text" name="country" defaultValue={country} className="input w-full" placeholder="Country" />
                        </div>
                        <div>
                            <label className="label">Added by</label>
                            <input type="text" disabled name="added_by" defaultValue={addedBy} className="input w-full" placeholder="Added by" />
                        </div>
                        <div className="col-span-full">
                            <label className="label">Plot Summary</label>
                            <textarea name="plot_summary" defaultValue={plotSummary} className="textarea w-full resize-none" placeholder="Plot Summary"></textarea>
                        </div>
                        <div className="col-span-full">
                            <button className="btn btn-neutral btn-block">Update Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateMovie;