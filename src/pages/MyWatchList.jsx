const MyWatchList = () => {
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
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
                        <tr>
                            <th>1</th>
                            <td>The Lion King</td>
                            <td>
                                <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg" className="w-12" alt="The Lion King" />
                            </td>
                            <td>Animation</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWatchList;