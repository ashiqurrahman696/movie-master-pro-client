import { useEffect, useState } from "react";
import { getWatchlist } from "../utils/localStorage";
import { useLoaderData } from "react-router";

const MyWatchList = () => {
    const [watchlist, setWatchlist] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        const wlist = getWatchlist();
        const myWatchlist = data.filter(movie => wlist.includes(movie._id));
        setWatchlist(myWatchlist);
    }, []);
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
            <title>My Watchlist</title>
            <h1 className="text-center font-semibold text-4xl">My Watchlist</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlist.map((movie, index) => <tr key={movie._id}>
                            <th>{index + 1}</th>
                            <td>{movie.title}</td>
                            <td>
                                <img src={movie.posterUrl} className="w-12" alt={movie.title} />
                            </td>
                            <td>{movie.genre}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWatchList;