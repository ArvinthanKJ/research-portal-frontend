import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axios";
import { useHistory } from "react-router";
import { Labs } from "../../interfaces/projects";
import NoResults from "../NoResults/NoResults";
import './highlights.css';

const Bulletin = () => {
  const history = useHistory();

  useEffect(() => {}, []);

  const noResult = () => {
    return <NoResults flag={2} />;
  };

  return (
    <div>
      <p className="text-center text-red-500 xl:text-5xl lg:text-4xl md:text-3xl text-2xl pb-3 font-bold publication-head">Publications</p>
      <div className="border-solid border-4 border-red-200 m-1 publication-box">
        <div className="bg-white p-6 rounded-lg shadow-lg m-0.5 pub-div">
          <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-gray-800 font-semibold pub-div-head">Insert Publication Name</h2>
          <h3 className="xl:text-xl lg:text-lg md:text-sm text-xs text-gray-700 pub-div-author">Author</h3>
          <p className="pub-div-ref"><a href="/">Reference Link</a></p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg m-0.5 pub-div">
          <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-gray-800 font-semibold pub-div-head">Insert Publication Name</h2>
          <h3 className="xl:text-xl lg:text-lg md:text-sm text-xs text-gray-700 pub-div-author">Author</h3>
          <p className="pub-div-ref"><a href="/">Reference Link</a></p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg m-0.5 pub-div">
          <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-gray-800 font-semibold pub-div-head">Insert Publication Name</h2>
          <h3 className="xl:text-xl lg:text-lg md:text-sm text-xs text-gray-700 pub-div-author">Author</h3>
          <p className="pub-div-ref"><a href="/">Reference Link</a></p>
        </div>
      </div>
    </div>
  );
};

export default Bulletin;
