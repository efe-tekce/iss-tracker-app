import React from "react";
import { Link } from "react-router-dom";
import PeopleInSpace from "./PeopleInSpace";

const HomePage = () => {
  return (
    <div className="container homepage min-h-screen min-w-full md:flex items-center justify-evenly bg-gradient-to-br from-indigo-600 via-blue-400 to-orange-200 space-x-48 text-3xl text-orange-300 font-bold ">
      <div className="card p-24 h-96 bg-slate-300 rounded-xl shadow-lg hover:scale-125 transition duration-700 cursor-pointer bg-[url('./people.svg')] bg-cover flex items-center">
        <Link to="/people" className="link">
          People In Space
        </Link>
      </div>
      <div className="card p-24 h-96 bg-slate-200 rounded-xl shadow-lg hover:scale-125 transition duration-700 cursor-pointer bg-[url('./spaceship.svg')] bg-cover flex items-center">
        <Link to="/tracker" className="link">
          Where Is The ISS?
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
