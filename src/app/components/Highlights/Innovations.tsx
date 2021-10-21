import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axios";
import { useHistory } from "react-router";
import { Labs } from "../../interfaces/projects";
import NoResults from "../NoResults/NoResults";

const Innovations = () => {
  const history = useHistory();

  useEffect(() => {}, []);

  const noResult = () => {
    return <NoResults flag={2} />;
  };

  return (
    <div className="wrapper mt-10 mb-10 p-2">
      <p className="text-center text-red-500 xl:text-5xl lg:text-4xl md:text-3xl text-2xl pb-3 font-bold innovation-heading">
        INNOVATIONS
      </p>
      <div className="border-solid border-4 border-red-200 m-1 innovation-box">
        <div className="bg-white p-6 rounded-lg shadow-lg m-0.5 inn-div">
          <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-gray-800 font-semibold inn-div-head">
            Insert cool Heading
          </h2>
          <p className="xl:text-xl lg:text-lg md:text-sm text-xs text-gray-700 inn-div-des">
            This is my cool description!
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg m-0.5 inn-div">
          <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-gray-800 font-semibold inn-div-head">
            Insert cool Heading
          </h2>
          <p className="xl:text-xl lg:text-lg md:text-sm text-xs text-gray-700 inn-div-des">
            This is my cool description!
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg m-0.5 inn-div">
          <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-gray-800 font-semibold inn-div-head">
            Insert cool Heading
          </h2>
          <p className="xl:text-xl lg:text-lg md:text-sm text-xs text-gray-700 inn-div-des">
            This is my cool description!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Innovations;
