import { useEffect, useState } from "react";
import Stats from "../../components/Stats";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const AdminDashboardHome = () => {
    const [movies, setMovies] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_baseURL}/movies`).then(res => res.json()).then(data => {
            setMovies(data);
        });
    }, []);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_baseURL}/users`).then(res => res.json()).then(data => {
            setUsers(data);
        });
    }, []);
    const data = [
        {
            name: "Total Movies",
            value: movies.length
        },
        {
            name: "Total Users",
            value: users.length
        },
    ];
    return (
        <div className="space-y-4">
            <h2 className="text-5xl">Admin Dashboard</h2>
            <BarChart
                style={{ width: '100%', maxWidth: '1000px', maxHeight: '50vh', aspectRatio: 1.6 }}
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#0a4567" />
            </BarChart>
        </div>
    );
};

export default AdminDashboardHome;