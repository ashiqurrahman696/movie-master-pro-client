import FeatureCard from "./FeatureCard";

const AboutPlatform = () => {
    const features = [
        {
            id: 1,
            title: "🎥 Movie Explorer",
            desc: "Browse thousands of titles with genre filters, ratings, and detailed info.",
        },
        {
            id: 2,
            title: "📊 Smart Analytics",
            desc: "Track your watched movies, average ratings, and favorite genres.",
        },
        {
            id: 3,
            title: "💬 Community Reviews",
            desc: "Share opinions and discover what others think in a dynamic review hub.",
        },
        {
            id: 4,
            title: "📅 Watchlist & Reminders",
            desc: "Add movies to your list, set release reminders, and never miss a premiere.",
        },
        {
            id: 5,
            title: "🧠 AI-Powered Recommendations",
            desc: "Get personalized movie suggestions based on your viewing habits.",
        },
        {
            id: 6,
            title: "🎞️ Trailers & Behind-the-Scenes",
            desc: "Watch official trailers and explore exclusive content.",
        },
    ];
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-center font-semibold text-4xl">About the Platform</h2>
            <p className="text-center">MovieMaster Pro is your ultimate hub for discovering, reviewing, and managing everything about movies — from classics to the latest blockbusters.</p>
            <h3 className="text-center font-semibold text-3xl">Key Features</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {features.map(feature => <FeatureCard key={feature.id} feature={feature} />)}
            </div>
        </div>
    );
};

export default AboutPlatform;