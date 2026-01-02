const FeatureCard = ({feature}) => {
    const {title, desc} = feature;
    return (
        <div className="card bg-base-300">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default FeatureCard;