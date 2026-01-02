import error404 from "../assets/error-404.png"

const NotFound404 = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center bg-gradient-to-b from-base-200 to-base-300 p-6 min-h-screen">
            <title>404 Not Found</title>
            <img src={error404} />
            <h3 className="font-semibold text-3xl">Page Not Found</h3>
            <p className="opacity-70">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        </div>
    );
}

export default NotFound404;