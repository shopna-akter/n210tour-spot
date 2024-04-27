import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { ToastContainer, toast } from "react-toastify";
import { Link , useNavigate} from "react-router-dom";
const Login = () => {
    const { SignIn, user } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    console.log(user);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const auth = getAuth(app)
    const SignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                toast.success('Login Successful with google')
                console.log(result);
            })
            .catch(error => {
                toast.error('Login Failed with google')
                console.error(error.message);
            })
    }
    const SignInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                toast.success('Login Successful with github')
                console.log(result);
            })
            .catch(error => {
                toast.error('Login Failed with github')
                console.error(error.message);
            })
    }
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const password = form.password.value;
        const email = form.email.value;
        console.log(password, email);
        SignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Loged In succesfuly')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message);
                toast.error('Invalid email or password');
                if (user) {
                    toast.error('you are already logged in')
                }
            });
    };
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen ">
                <ToastContainer></ToastContainer>
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/PDNThss/13.jpg" className="md:h-[500px] md:w-[600px]" alt="" />
                    <div className="card shrink-0 text-center w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className="text-4xl font-bold mt-2">Login!</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    className="rounded-md relative w-full px-3 py-3 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-4 bottom-28 pr-3 flex items-center"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <button onClick={SignInWithGoogle} className="flex btn mb-2 bg-yellow-300 hover:bg-orange-400">Sign in with <FaGoogle></FaGoogle></button>
                                <button onClick={SignInWithGithub} className="flex btn btn-neutral">Sign in with <FaGithub></FaGithub></button>
                                <h2>Dont have an account ? <Link to='/Register' className="btn-link">Register</Link></h2>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;