import { toast } from "react-toastify";

const getWatchlist = () => {
    const watchlistStr = localStorage.getItem("watchlist");
    if(watchlistStr){
        const watchlistData = JSON.parse(watchlistStr);
        return watchlistData;
    }
    return [];
}

const saveToWatchlist = watchlist => {
    const watchlistStringified = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistStringified);
}

const addToWatchlist = id => {
    const watchlistData = getWatchlist();
    if(watchlistData.includes(id)){
        toast.warn("Already in watchlist");
        return;
    }
    const newWatchlist = [...watchlistData, id];
    saveToWatchlist(newWatchlist);
    toast.success("Added to watchlist");
}

export {addToWatchlist, getWatchlist};