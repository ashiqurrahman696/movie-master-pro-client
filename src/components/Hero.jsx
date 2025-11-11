import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_baseURL}/top-movies`).then(res => res.json()).then(data => {
            setMovies(data);
        });
    }, []);
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {movies.map(movie => <SwiperSlide key={movie._id}>
                    <div className="relative w-full h-100">
                        <img src={movie.posterUrl} className="size-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 p-4 text-white text-center flex flex-col justify-center items-center gap-3">
                            <h2 className="font-bold text-5xl">{movie.title}</h2>
                            <p className="text-xl">{movie.plotSummary}</p>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Hero;