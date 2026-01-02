import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import TopRatedMovies from "../components/TopRatedMovies";
import RecentMovies from "../components/RecentMovies";
import AboutPlatform from "../components/AboutPlatform";
import Genre from "../components/Genre";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";

const Home = () => {
    const movies = useLoaderData();
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <div>
            <Hero/>
            <Stats movies={movies} />
            <TopRatedMovies/>
            <RecentMovies/>
            <Genre/>
            <AboutPlatform/>
            <Newsletter/>
            <FAQ/>
        </div>
    );
};

export default Home;