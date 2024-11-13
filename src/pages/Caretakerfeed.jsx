// ===========================
import { useEffect, useState } from "react";
import home from "../assets/feed.png";

import { useNavigate } from "react-router";
import CaretakerProfile from "./CaretakerProfile";

// import { Shimmer } from "react-shimmer";

const StepCard = ({ stepNumber, title, description, imgSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md p-4 rounded-lg font-Poppins">
      <div className="text-2xl font-bold text-gray-800 mb-2">{stepNumber}</div>
      <img src={imgSrc} alt={title} className="w-54 h-54 mb-4" />
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Caretakerfeed = () => {
  const [caretakers, setCaretakers] = useState([]);
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleBookNow = (id) => {
    navigate(`/userfeed/${id}`);
  };

  const steps = [
    {
      stepNumber: 1,
      title: "Go Down",
      description: "Please wait for the book to arrive",
      imgSrc:
        "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/Register_on_app_4372ed1276.svg", // Replace with actual image path
    },
    {
      stepNumber: 2,
      title: "Select Your User",
      description: "Once the Book arrives open and see all the data of user",
      imgSrc:
        "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/select_your_service_7ba59dddd5.svg", // Replace with actual image path
    },
    {
      stepNumber: 3,
      title: "Choose the Preferences",
      description: "select the accept button or reject button ",
      imgSrc:
        "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/make_payment_50309d2915.svg", // Replace with actual image path
    },
    {
      stepNumber: 4,
      title: "Get a User",
      description:
        "After selected on accept call the user to let them know that you accepted",
      imgSrc:
        "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/Get_a_cook_b0e201f46a.svg", // Replace with actual image path
    },
  ];

  // Handle search button click

  return (
    <section className=" ">
      <div
        className=""
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover", // Ensures the image covers the entire width and height
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          width: "100%", // Ensures it fits the container width
          height: "100vh", // Makes the background image cover the full viewport height
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 h-full ">
          <div className="flex flex-col gap-4 text-start justify-center h-full font-Poppins">
            {/* <p className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"> */}
            <p className="text-sm uppercase w-96 h-8 font-semibold  text-[#fff] bg-[#593f62] font-Poppins px-2 py-2 rounded-lg">
              Now available across Delhi and Gurgaon
            </p>
            <p className="text-5xl font-semibold  text-white font-Poppins">
              Choose your caretaker <br></br>
              <span className="text-5xl">
                online and give the best services
              </span>
            </p>
            <h1 className="text-xl text-green-500 font-light font-Poppins">
              Find Your Perfect Elderly
            </h1>
            <div className=" flex flex-row justify-start gap-16">
              <button className=" w-52 h-10 bg-[#0c376f] text-white font-Poppins text-xl rounded-md">
                Download App
              </button>
            </div>
          </div>
          {/* adding affordable section  */}
          <div className="mt-12">
            <div>
              {/* <div className="flex justify-center font-Poppins font-semibold text-2xl">
                <h1>How it Works</h1>
              </div> */}
            </div>
            <div className="flex flex-row justify-between">
              <div className="max-w-6xl  mx-auto py-10 px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                  How It Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                  {steps.map((step, index) => (
                    <StepCard
                      key={index}
                      stepNumber={step.stepNumber}
                      title={step.title}
                      description={step.description}
                      imgSrc={step.imgSrc}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =============== */}
          <div className="mt-32">
            <div className="flex w-full  bg-white">
              <CaretakerProfile />
            </div>
          </div>
          {/* =============== */}
        </div>
      </div>
      <div className="mt-[400px] h-[450px]"></div>
    </section>
  );
};

export default Caretakerfeed;
