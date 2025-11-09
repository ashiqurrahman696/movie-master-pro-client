import { useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { singInWithGoogle, user, createUser, updateUser, setUser, setLoading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user?.email) navigate(`${location.state ? location.state : "/"}`);
    }, [navigate, user, location]);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const min6Pattern = /^.{6,}$/;
    const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageURL = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        if(!name){
            toast.error("Name can't be empty");
            return;
        }

        else if(!imageURL){
            toast.error("Image URL can't be empty");
            return;
        }

        else if(!email){
            toast.error("Email can't be empty");
            return;
        }

        else if(!emailPattern.test(email)){
            toast.error("Invalid email");
            return;
        }

        else if(!min6Pattern.test(password)){
            toast.error("Password must be at least 6 characters long");
            return;
        }

        else if(!casePattern.test(password)){
            toast.error("Password must contain at least one uppercase and one lowercase letter");
            return;
        }

        createUser(email, password)
            .then((result) => {
                const userInfo = result.user;
                updateUser(name, imageURL).then(() => {
                    const newUser = {
                        name: userInfo.displayName,
                        email: userInfo.email,
                        image: userInfo.photoURL
                    }
                    fetch("http://localhost:3000/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.message) {
                                toast.warn(data.message);
                                return;
                            }
                            setUser(userInfo);
                            setLoading(false);
                            toast.success("Registered successfully");
                        })
                })
            }).catch(error => {
                toast.error(error.code);
            });
    }

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then((result) => {
                const userInfo = result.user;
                const newUser = {
                    name: userInfo.displayName,
                    email: userInfo.email,
                    image: userInfo.photoURL
                }
                fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        setUser(userInfo);
                        setLoading(false);
                        toast.success("Google signup successful");
                    })
            }).catch(error => {
                toast.error(error.code);
            });
    }
    return (
        <div className="space-y-5 max-w-7xl mx-auto px-4 py-6">
            <div className="card bg-base-300 w-full max-w-sm mx-auto">
                <div className="card-body gap-4">
                <h1 className="text-center font-semibold text-4xl">Register</h1>
                <p className="text-center">Already have an account? Please <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input w-full" placeholder="Name" />
                        </div>
                        <div>
                            <label className="label">Image URL</label>
                            <input type="text" name="image" className="input w-full" placeholder="Image URL" />
                        </div>
                        <div>
                            <label className="label">Email</label>
                            <input type="text" name="email" className="input w-full" placeholder="Email" />
                        </div>
                        <div className="relative">
                            <label className="label">Password</label>
                            <input type={showPassword ? "text" : "password"} name="password" className="input w-full mt-1" placeholder="Password" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute text-2xl right-2 bottom-2 z-10 cursor-pointer">
                                {showPassword ? <LuEyeOff /> : <LuEye />}
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-neutral btn-block">Register</button>
                        </div>
                    </form>
                    <div>
                        <button onClick={handleGoogleSignIn} className="btn btn-block bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;