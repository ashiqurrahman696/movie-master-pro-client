import { useEffect, useState } from "react";

const Stats = ({movies}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/users").then(res => res.json()).then(data => setUsers(data));
    }, [])
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center">
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Movies</div>
                    <div className="stat-value">{movies.length}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{users.length}</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;