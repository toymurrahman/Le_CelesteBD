import React from 'react';
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import AllButtons from "../../components/shared/AllButtons";
import loginImg from "../../assets/auth/authentication.gif";
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <div className="min-h-screen bg-base-200 flex  items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-xl p-0 md:p-8 flex flex-col md:flex-row-reverse w-full max-w-4xl overflow-hidden">
          {/* Left Side */}
          <div className="hidden md:flex flex-1 justify-center items-center bg-base-100">
            <img src={loginImg} alt="Login Illustration" />
          </div>
  
          {/* Right Side Form */}
          <div className="flex-1 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up Now!</h2>
            <form  className="space-y-4">
              {/* Name Field */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
              {/* Email Field */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
  
              {/* Password Field */}
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
  
  
              <AllButtons
                type="submit"
                text="Sign-Up"
                variant="common-button"
                className="w-full"
              />
  
              <p className="text-sm text-center">
              Already Have a Account?{" "}
                <Link to='/signin' className="hover:text-blue-600">
                Please Signin
                </Link>
              </p>
            </form>
  
            {/* Social Logins */}
            <div className="divider">Or sign up with</div>
            <div className="flex justify-center gap-4 text-xl">
              <FaFacebook className="cursor-pointer hover:text-blue-600" />
              <FaGoogle className="cursor-pointer hover:text-red-500" />
              <FaGithub className="cursor-pointer hover:text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;