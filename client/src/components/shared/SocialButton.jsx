import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialButton = ({
  icon,
  text,
  bgColor,
  textColor,
  onClick,
}) => {
    const {signInWithGoogle} =useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(res => {
            console.log(res);
            const userInfo ={
                name: res.user?.displayName,
                email: res.user?.email
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                navigate('/');
            })
        })
    }
  return (
    <button
      onClick={handleGoogleSignIn}
      className={`btn ${bgColor} ${textColor} `}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  );
};

export default SocialButton;
