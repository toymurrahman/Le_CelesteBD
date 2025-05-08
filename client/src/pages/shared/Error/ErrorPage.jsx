import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorLottie from "../../../../public/404.json";
import AllButtons from "../../../components/shared/AllButtons";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <Lottie animationData={errorLottie} loop className="w-96 h-96" />

      <h1 className="text-3xl font-semibold text-gray-800 mt-6">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist. <br /> Let’s guide you back.
      </p>

      <div className="mt-6 flex gap-4">
        <Link>
          {" "}
          <AllButtons
            text="Home"
            className=" border-emerald-400 bg-white border-2"
          />
        </Link>
        <Link>
          <AllButtons text="Contact us" className="bg-emerald-100 text-white border-2" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
