import { useEffect, useState } from "react";
import AOS from "aos";
import { BiCameraMovie } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

const Stats = ({movies}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_baseURL}/users`).then(res => res.json()).then(data => {
            setUsers(data);
            AOS.refresh();
        });
    }, [])
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center" data-aos="fade-left">
            <div className="flex gap-5 flex-wrap justify-center">
                <div className="card bg-base-300 w-80 shadow-sm">
                    <div className="card-body flex-row items-center gap-4">
                        <BiCameraMovie size={56} />
                        <div>
                            <h2 className="card-title">Total movies</h2>
                            <p className="text-4xl font-bold">{movies.length}</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-300 w-80 shadow-sm">
                    <div className="card-body flex-row items-center gap-4">
                        <FaUsers size={56} />
                        <div>
                            <h2 className="card-title">Total users</h2>
                            <p className="text-4xl font-bold">{users.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;