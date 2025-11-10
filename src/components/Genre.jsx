const Genre = () => {
    const genres = [
        {
            id: 1,
            name: "Sci-Fi",
        },
        {
            id: 2,
            name: "Drama",
        },
        {
            id: 3,
            name: "Thriller",
        },
        {
            id: 4,
            name: "Animation",
        },
        {
            id: 5,
            name: "Romance",
        },
        {
            id: 6,
            name: "Musical",
        },
    ];
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
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