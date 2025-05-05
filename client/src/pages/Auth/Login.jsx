import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import loginImg from "../../assets/auth/authentication.gif";
import AllButtons from "../../components/shared/AllButtons";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialButton from "../../components/shared/SocialButton";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(2);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Captcha Valid:", !disable);
    // Prevent login if captcha is not validated
    if (disable) {
      alert("Please validate the CAPTCHA before logging in.");
      return;
    }

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((res) => {
      const user = res.user;
      Swal.fire({
        icon: "success",
        title: "Login Success",
      });
      navigate(from, { replace: true });
    });
  };

  const handleCaptchaValidation = () => {
    const userCaptcha = captchaRef.current?.value;
    const isValid = validateCaptcha(userCaptcha);
    setDisable(!isValid);

    if (!isValid) {
      alert("Invalid CAPTCHA. Please try again.");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Login | Le CélesteBD </title>
      </Helmet>
      <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-xl p-0 md:p-8 flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          {/* Left Side */}
          <div className="hidden md:flex flex-1 justify-center items-center bg-base-100">
            <img src={loginImg} alt="Login Illustration" />
          </div>

          {/* Right Side Form */}
          <div className="flex-1 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
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

              {/* Captcha Section */}
              <div className="space-y-2">
                <div className="captcha-container font-mono text-lg font-semibold bg-gray-100 p-2 text-center rounded-md tracking-widest">
                  <LoadCanvasTemplate />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    ref={captchaRef}
                    name="captcha"
                    placeholder="Enter Captcha"
                    className="input input-bordered w-full"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleCaptchaValidation}
                    className="btn btn-outline"
                  >
                    Validate
                  </button>
                </div>
              </div>

              <AllButtons
                type="submit"
                disable={disable}
                text="Login"
                variant="common-button"
                className="w-full"
              />

              {/* Register Link */}
              <p className="text-sm text-center">
                New here?{" "}
                <Link to="/signup" className="hover:text-blue-600">
                  Create a New Account
                </Link>
              </p>
            </form>

            {/* Social Logins */}
            <div className="divider">Or sign in with</div>
            <div className="flex justify-center gap-4 text-xl">
              <SocialButton  text='Login with Google' icon={ <FaGoogle className="cursor-pointer hover:text-blue-500" /> } />

              {/* <FaFacebook className="cursor-pointer hover:text-blue-600" />
              <FaGithub className="cursor-pointer hover:text-gray-700" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
