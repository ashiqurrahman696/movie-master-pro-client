import { Link } from "react-router";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-neutral px-4 py-10 text-white">
            <footer className="footer md:grid-cols-3 max-w-7xl mx-auto">
                <aside>
                    <img src={logo} alt="MovieMaster Pro logo" className="w-10" />
                    <h2 className="text-2xl font-semibold">MovieMaster Pro</h2>
                    <p className="mt-2">
                        Discover reviews, trailers, showtimes, and personalized recommendations to help you find the perfect movie.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover" href="/about">About us</a>
                    <a className="link link-hover" href="/contact">Contact</a>
                    <a className="link link-hover" href="/terms">Terms and Conditions</a>
                    <a className="link link-hover" href="/privacy-policy">Privacy Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://facebook.com">
                            <FaFacebookF size={24} />
                        </Link>
                        <Link to="https://x.com">
                            <BsTwitterX size={24} />
                        </Link>
                        <Link to="https://instagram.com">
                            <FaInstagram size={26} />
                        </Link>
                        <Link to="https://youtube.com">
                            <FaYoutube size={28} />
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;