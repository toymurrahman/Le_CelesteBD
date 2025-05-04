import { Helmet } from "react-helmet-async";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import AllButtons from "../../components/shared/AllButtons";
import signupImg from "../../assets/auth/authentication.gif";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const SignUp = () => {
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
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then(()=>{
          console.log('Updated');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
        })
        .catch(err => console.log(err))
        reset();
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
      <div className="min-h-screen bg-base-200 flex  items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-xl p-0 md:p-8 flex flex-col md:flex-row-reverse w-full max-w-4xl overflow-hidden">
          <div className="hidden md:flex flex-1 justify-center items-center bg-base-100">
            <img src={signupImg} alt="signup Illustration" />
          </div>

          <div className="flex-1 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Sign Up Now!
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                />
                {errors.name && (
                  <span className="text-sm text-red-500 ">
                    Name is required
                  </span>
                )}
              </div>
              {/* Email Field */}
              <div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />
                {errors.email && (
                  <span className="text-sm text-red-500 ">
                    Email is required
                  </span>
                )}
              </div>
              {/* Photo */}
              <div>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  required
                />
                {errors.photoURL && (
                  <span className="text-sm text-red-500 ">
                    Photo URL is required
                  </span>
                )}
              </div>

              {/* Password Field */}
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
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-sm text-red-500 ">
                    Password must be 6-12 character
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-sm text-red-500 ">
                    Password atleast 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-sm text-red-500 ">
                    Password must be less than 12 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-sm text-red-500 ">
                    Password must have 1 letter 1 special character
                  </span>
                )}
              </div>

              <AllButtons
                type="submit"
                text="Sign-Up"
                variant="common-button"
                className="w-full"
              />

              <p className="text-sm text-center">
                Already Have a Account?{" "}
                <Link to="/login" className="hover:text-blue-600">
                  Please Signin
                </Link>
              </p>
            </form>

            <div className="divider">Or sign up with</div>
            <div className="flex justify-center gap-4 text-xl">
              <FaFacebook className="cursor-pointer hover:text-blue-600" />
              <FaGoogle className="cursor-pointer hover:text-red-500" />
              <FaGithub className="cursor-pointer hover:text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
