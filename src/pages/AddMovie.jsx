import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const AddMovie = () => {
    const {setLoading} = useAuth();
    const handleAddMovie = e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const newMovie = {
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
            addedBy: form.added_by.value,
            createdAt: new Date(),
        }
        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setLoading(false);
                    form.reset();
                    toast.success("Movie added successfully");
                }
            });
    }
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-center font-semibold text-4xl">Add Movie</h1>
            <div className="card bg-base-300 w-full max-w-3xl mx-auto">
                <div className="card-body">
                    <form onSubmit={handleAddMovie} className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="label">Title</label>
                            <input type="text" name="title" className="input w-full" placeholder="Title" />
                        </div>
                        <div>
                            <label className="label">Genre</label>
                            <input type="text" name="genre" className="input w-full" placeholder="Genre" />
                        </div>
                        <div>
                            <label className="label">Release Year</label>
                            <input type="text" name="release_year" className="input w-full" placeholder="Release Year" />
                        </div>
                        <div>
                            <label className="label">Director</label>
                            <input type="text" name="director" className="input w-full" placeholder="Director" />
                        </div>
                        <div>
                            <label className="label">Cast</label>
                            <input type="text" name="cast" className="input w-full" placeholder="Cast" />
                        </div>
                        <div>
                            <label className="label">Rating</label>
                            <input type="text" name="rating" className="input w-full" placeholder="Rating" />
                        </div>
                        <div>
                            <label className="label">Duration</label>
                            <input type="text" name="duration" className="input w-full" placeholder="Duration" />
                        </div>
                        <div>
                            <label className="label">Poster URL</label>
                            <input type="text" name="poster_url" className="input w-full" placeholder="Poster URL" />
                        </div>
                        <div>
                            <label className="label">Language</label>
                            <input type="text" name="language" className="input w-full" placeholder="Language" />
                        </div>
                        <div>
                            <label className="label">Country</label>
                            <input type="text" name="country" className="input w-full" placeholder="Country" />
                        </div>
                        <div>
                            <label className="label">Added by</label>
                            <input type="text" name="added_by" className="input w-full" placeholder="Added by" />
                        </div>
                        <div className="col-span-full">
                            <label className="label">Plot Summary</label>
                            <textarea name="plot_summary" className="textarea w-full resize-none" placeholder="Plot Summary"></textarea>
                        </div>
                        <div className="col-span-full">
                            <button className="btn btn-neutral btn-block">Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMovie;