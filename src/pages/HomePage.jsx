import React from "react";
import { Link } from "react-router-dom";
import PeopleInSpace from "./PeopleInSpace";

const HomePage = () => {
  return (
    <div className="container homepage min-h-screen min-w-full md:flex items-center justify-evenly  space-x-48 text-3xl text-fuchsia-300 font-bold bg-[url('./Astronaut.svg')] bg-no-repeat bg-center bg-contain">
      <div className="card p-24 h-96  rounded-full shadow-lg hover:scale-125 transition duration-700 cursor-pointer bg-[url('./people.svg')] bg-cover flex items-center opacity-70">
        <Link to="/people" className="link">
          People In Space
        </Link>
      </div>
      <div className="card p-24 h-96 rounded-full shadow-lg hover:scale-125 transition duration-700 cursor-pointer bg-[url('./spaceship.svg')] bg-cover flex items-center opacity-70">
        <Link to="/tracker" className="link">
          Where Is The ISS?
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
