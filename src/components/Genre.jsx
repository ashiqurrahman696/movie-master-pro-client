import { genres } from "../utils/genres";

const Genre = () => {
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6" data-aos="zoom-in-right">
            <h1 className="text-center font-semibold text-4xl">Genres</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {genres.map(genre => <div key={genre.id} className="card bg-base-300">
                    <div className="card-body">
                        <h2 className="card-title">{genre.name}</h2>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Genre;