import { ClimbingBoxLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <ClimbingBoxLoader color="#fcbd00" size={30} />
        </div>
    );
};

export default Loader;