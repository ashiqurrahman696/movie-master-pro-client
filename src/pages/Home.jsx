import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import TopRatedMovies from "../components/TopRatedMovies";
import RecentMovies from "../components/RecentMovies";
import AboutPlatform from "../components/AboutPlatform";

const Home = () => {
    const movies = useLoaderData();
    return (
        <div>
            <Hero movies={movies} />
            <Stats movies={movies} />
            <TopRatedMovies/>
            <RecentMovies/>
            <AboutPlatform/>
        </div>
    );
};

export default Home;