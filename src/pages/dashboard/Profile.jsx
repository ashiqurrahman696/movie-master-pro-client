import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    const { photoURL, displayName, email } = user;
    return (
        <div className="max-w-5xl mx-auto">
            <div className="card bg-base-300">
                <div className="card-body items-center">
                    <img src={photoURL} alt={displayName} className="w-40 rounded-full" />
                    <div className="space-y-5">
                        <div>
                            <p>Name:</p>
                            <p className="font-bold">{displayName}</p>
                        </div>
                        <div>
                            <p>Email:</p>
                            <p className="font-bold">{email}</p>
                        </div>
                        <Link to="/dashboard/update-profile" className="btn btn-info">Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;