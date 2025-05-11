import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import AllButtons from "../../components/shared/AllButtons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialButton from "../../components/shared/SocialButton";
import "@lottiefiles/lottie-player";
import signLottie from "../../../public/signinLottie.json";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error("Signup error:", err.message);
      });
  };

  return (
    <section>
      <Helmet>
        <title>Signup | Le CélesteBD</title>
      </Helmet>
      <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-0 md:p-8 flex flex-col md:flex-row-reverse w-full max-w-4xl overflow-hidden">
          {/* Lottie Animation */}
          <div className="hidden md:flex flex-1 justify-center items-center bg-base-100 dark:bg-gray-700">
            <lottie-player
              src={signLottie}
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>

          {/* Signup Form */}
          <div className="flex-1 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
              Sign Up Now!
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
                {errors.name && (
                  <span className="text-sm text-red-500">Name is required</span>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <span className="text-sm text-red-500">Email is required</span>
                )}
              </div>

              {/* Photo URL */}
              <div>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
                {errors.photoURL && (
                  <span className="text-sm text-red-500">
                    Photo URL is required
                  </span>
                )}
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                    pattern: /(?=.*[A-Za-z])(?=.*[^A-Za-z0-9]).{6,}$/,
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
                {errors.password?.type === "required" && (
                  <span className="text-sm text-red-500">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-sm text-red-500">
                    At least 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-sm text-red-500">
                    Must be less than 12 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-sm text-red-500">
                    Must contain 1 letter & 1 special character
                  </span>
                )}
              </div>

              <AllButtons
                type="submit"
                text="Sign-Up"
                variant="common-button"
                className="w-full"
              />

              <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                Already have an account?{" "}
                <Link to="/login" className="hover:text-blue-600">
                  Please Sign In
                </Link>
              </p>
            </form>

            <div className="divider">Or sign up with</div>
            <div className="flex justify-center gap-4 text-xl">
              <SocialButton
                text="Login with Google"
                icon={
                  <FaGoogle className="cursor-pointer hover:text-blue-500" />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
