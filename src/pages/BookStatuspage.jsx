import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PaymentOptions from "./PaymentOptions";

const BookStatuspage = () => {
  const { id } = useParams(); // Make sure the route path has :id as the parameter

  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    imageUrl: "",
    age: "",
    email: "",
    userprice: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/ordernow/${id}`
        );
        // Access `user` from response.data
        const {
          firstname,
          lastname,
          phonenumber,
          imageUrl,
          age,
          email,
          userprice,
        } = response.data.user;
        setUserDetails({
          firstname,
          lastname,
          phonenumber,
          imageUrl,
          age,
          email,
          userprice,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (id) fetchUserDetails(); // Only fetch if id is available
  }, [id]);

  return (
    <div className="container mx-auto px-4 h-full max-w-screen-xl ">
      <div className="mt-8">
        <h1 className="flex justify-center text-xl font-Poppins leading-4">
          Thank You For booking our Caretaker,I hope you will give the review
          after the completion
        </h1>
        <div className="flex  mt-14  ">
          <div>
            <h1 className="font-Poppins text-xl">
              Our Caretaker is on the way
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-14 gap-10 bg-white shadow-md px-14 py-14">
        <div className="">
          <img src={userDetails.imageUrl} alt="" className="w-[500px]" />
        </div>
        <div className="flex font-Poppins text-xl flex-col gap-5">
          <h1>
            Please call the caretaker before the 10 Min of our Booking for
            accurate timing
          </h1>
          <p>First Name: {userDetails.firstname}</p>
          <p>Last Name: {userDetails.lastname}</p>
          <p>Phone Number: {userDetails.phonenumber}</p>
          <p>Age: {userDetails.age}</p>
          <p>Email: {userDetails.email}</p>
          <p>
            <strong>Price:</strong> {userDetails.userprice.slice(-1)[0]} &#8377;
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-10">
        <div>
          <h1 className="font-Poppins text-xl">Payment Mode </h1>
        </div>
        <div>
          <PaymentOptions />
        </div>
      </div>
      <div className="mt-[-1500px]"></div>
    </div>
  );
};

export default BookStatuspage;
