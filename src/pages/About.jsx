// src/pages/About.js
// import React from "react";
// import abhishek from "../assets/abhishek.jpg";

const About = () => {
  return (
    <div className="max-w-screen-xl   mx-auto px-4 mt-20">
      <div className="mt-1">
        <h1 className="font-Poppins text-5xl font-semibold">
          About <span className="text-[#01b43e]">ElderlyCare</span>
        </h1>
      </div>
      <div className="font-Poppins  leading-8 text-xl">
        <div className="mt-16">
          At ElderlyCare, we are dedicated to creating a supportive platform for
          senior citizens, offering solutions that address challenges unique to
          them and enable a more engaged, independent lifestyle. Our primary
          mission is to empower seniors by providing opportunities for community
          interaction, easy online and offline transactions, and access to
          curated services designed specifically for their needs.
        </div>
        <div className="mt-8">
          In response to the growing need for senior care, ElderlyCare now
          offers an elderly care platform, where families can hire a trusted
          caretaker on an hourly basis. This service allows seniors to receive
          personalized assistance, whether they need help with daily activities,
          companionship, or specialized support. Each caretaker is carefully
          selected to ensure they bring a compassionate, patient approach that
          respects seniors’ dignity and preferences.
        </div>
        <div className="mt-8">
          Our platform also connects seniors with senior-specific products and
          services, partnering with trusted providers to curate offerings that
          enhance well-being and simplify everyday tasks. Through ElderlyCare,
          families can ensure their loved ones enjoy a fulfilling, secure aging
          experience supported by a reliable network of community, care, and
          convenience.
        </div>
      </div>
      <div className="mt-12">
        <h1 className="font-Poppins text-5xl font-semibold">
          Hear From the <span className="text-[#01b43e]">Founder </span>
        </h1>
      </div>
      <div className="bg-white w-full shadow-md flex gap-4 mt-14 px-4 py-4">
        <div className="w-1/2 flex flex-col gap-4">
          <img
            src="https://ripple-app-storage.s3.ap-south-1.amazonaws.com/balance_test/assets/abhishek.JPG"
            alt="Fpunder of ElderlCare"
            className="rounded-2xl h-[470px]"
          />
          <h1 className="flex text-center justify-center text-xl">
            Abhishek Kumar Singh
          </h1>
        </div>
        <div className="w-1/2 font-Poppins text-xl flex flex-col gap-2 leading-normal">
          <h1>I am a Junior Software Engineer in a Healthcare Startup</h1>
          <h1>
            The concept for ElderlyCare was born from a personal experience when
            my mother, who lives in my hometown, needed assistance during a
            health check-up at AIIMS in Gorakhpur. As I am the only child and
            live in Gurgaon, I realized that there was no one available to
            accompany her during her hospital visit. She needed someone to guide
            her, assist her with the journey, and ensure she was taken care of
            until she was back home.
          </h1>
          <h1>
            This experience led me to create ElderlyCare, a platform where
            families can easily connect with professional caretakers on an
            hourly or weekly basis. This service allows seniors to get the
            support they need, whether it’s for doctor visits, daily activities,
            or any other form of assistance, all tailored to their unique
            requirements.
          </h1>
        </div>
      </div>
      <div className="-mt-[1600px]"></div>
    </div>
  );
};

export default About;
