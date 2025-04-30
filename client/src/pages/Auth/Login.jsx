import React, { useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import loginImg from "../../assets/auth/authentication.gif";
import AllButtons from "../../components/shared/AllButtons";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-0 md:p-8 flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Lottie Left Side */}
        <div className="hidden md:flex flex-1 justify-center items-center bg-base-100">
          <img src={loginImg} alt="" />
        </div>

        {/* Form Right Side */}
        <div className="flex-1 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />

            {/* Captcha */}
            <div className="space-y-2">
              <div className="font-mono text-lg font-semibold bg-gray-100 p-2 text-center rounded-md tracking-widest">
                <LoadCanvasTemplate />
              </div>
              <input
                type="text"
                name="captcha"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                <legend className="fieldset-legend">Login options</legend>
                <label className="label">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  Remember me
                </label>
              </fieldset>
            </div>

            <AllButtons
              text="Login"
              variant="common-button"
              className="w-full"
            ></AllButtons>

            <p className="text-sm text-center">
              New here?{" "}
              <a href="/register" className="hover:text-blue-600 ">
                Create a New Account
              </a>
            </p>
          </form>

          {/* Social Login */}
          <div className="divider">Or sign in with</div>
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

export default Login;
