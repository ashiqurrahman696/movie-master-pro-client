import { Link } from "react-router";

const NotFound404 = () => {
    return (
        <div className="flex items-center justify-center bg-gradient-to-b from-base-200 to-base-300 p-6 min-h-screen">
            <title>404 Not Found</title>
            <div className="max-w-4xl w-full rounded-2xl shadow-2xl bg-base-100 overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left: Illustration */}
                <div className="flex items-center justify-center p-8 bg-gradient-to-tr from-primary/10 via-secondary/5 to-transparent">
                    <div className="text-center">
                        <svg
                            width="220"
                            height="220"
                            viewBox="0 0 220 220"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                            className="mx-auto mb-4"
                        >
                            <defs>
                                <linearGradient id="g1" x1="0" x2="1">
                                    <stop offset="0%" stopColor="#7c3aed" />
                                    <stop offset="100%" stopColor="#06b6d4" />
                                </linearGradient>
                            </defs>
                            <circle cx="110" cy="110" r="100" fill="url(#g1)" opacity="0.08" />
                            <g transform="translate(44 44)">
                                <rect x="10" y="10" width="112" height="112" rx="18" fill="#fff" stroke="#e6e6f0" strokeWidth="4" />
                                <text x="66" y="76" textAnchor="middle" fontSize="44" fontWeight={800} fill="#111827">404</text>
                                <text x="66" y="102" textAnchor="middle" fontSize="12" fill="#6b7280">page not found</text>
                            </g>
                        </svg>
                        <p className="text-sm text-gray-500">Looks like you took a wrong turn.</p>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="p-8 flex flex-col justify-center gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Page not found</h1>
                        <p className="mt-2 text-lg text-gray-600">We can’t find the page you’re looking for. It may have been moved or removed.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link to="/" className="btn btn-primary btn-lg">
                            Go to Homepage
                        </Link>
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="btn btn-ghost btn-lg"
                        >
                            Go Back
                        </button>
                    </div>

                    <div className="text-sm text-gray-500 mt-2">
                        <p>
                            If you think this is a mistake, try checking the URL or contact support. You can also try searching from the main page.
                        </p>
                    </div>

                    <div className="mt-4 text-xs text-gray-400">
                        <p>Tip: keep your navigation clear — a helpful 404 improves user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound404;