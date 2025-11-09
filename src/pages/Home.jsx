import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import TopRatedMovies from "../components/TopRatedMovies";

const Home = () => {
    const movies = useLoaderData();
    return (
        <div>
            <Hero movies={movies} />
            <Stats movies={movies} />
            <TopRatedMovies/>
        </div>
    );
};

export default Home;