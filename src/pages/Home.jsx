import { useLoaderData } from "react-router";
import Hero from "../components/Hero";

const Home = () => {
    const movies = useLoaderData();
    return (
        <div>
            <Hero movies={movies} />
        </div>
    );
};

export default Home;