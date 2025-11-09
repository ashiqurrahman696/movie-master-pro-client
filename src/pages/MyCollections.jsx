import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";

const MyCollections = () => {
    const {user} = useAuth();
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        if(user?.email){
            fetch(`http://localhost:3000/my-collection?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setCollections(data);
                    console.log(data);
                })
        }
    }, [user]);
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-center font-semibold text-4xl">My Collection</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Genre</th>
                            <th>Quick Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collections.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item.title}</td>
                            <td>
                                <img src={item.posterUrl} className="w-12" alt={item.title} />
                            </td>
                            <td>{item.genre}</td>
                            <td>
                                <div className="flex gap-2">
                                    <Link to={`/movies/update/${item._id}`} className="btn btn-info">Edit</Link>
                                    <button className="btn btn-error">Delete</button>
                                </div>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCollections;