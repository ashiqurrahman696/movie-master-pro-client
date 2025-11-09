import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

const Home = () => {
    const movies = useLoaderData();
    return (
        <div>
            <Hero movies={movies} />
            <Stats movies={movies} />
        </div>
    );
};

export default Home;