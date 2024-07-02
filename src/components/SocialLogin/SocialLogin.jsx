import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import { TfiGithub } from "react-icons/tfi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const SocialLogin = ({from}) => {
  const { googleSignIn, signInWithGithub } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Google Sign-In Successful",
          text: "You have successfully signed in with Google!",
        });
      });
    });
  };
  const handleGithubSignIn = async () => {
    signInWithGithub().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "GitHub Sign-In Successful",
          text: "You have successfully signed in with GitHub!",
        });
      });
    });
  };
  return (
    <div className="p-8">
      <div className="divider"></div>
      <div className="flex justify-center gap-x-10">
        <button onClick={handleGoogleSignIn} className="text-[#1a73e8]">
          <FcGoogle className="lg:w-24 w-12 lg:h-24 h-12 border lg:p-5 p-1 border-gray-300 hover:border-[#26374d]" />
        </button>
        <button onClick={handleGithubSignIn} className="text-[#333]">
          <TfiGithub className="lg:w-24 w-12 lg:h-24 h-12 border lg:p-5 p-1 border-gray-300 hover:border-[#26374d]" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
