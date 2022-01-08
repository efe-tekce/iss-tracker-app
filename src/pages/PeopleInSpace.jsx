import React, { useEffect, useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const PeopleInSpace = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(
          `${
            process.env.NODE_ENV === "production"
              ? "/api"
              : "http://api.open-notify.org"
          }/astros.json`
        );
        console.log(response.data);
        setPeople(response.data.people);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };
    fetchPeople();
  }, []);

  return (
    <div className="container min-h-screen min-w-full   flex justify-center items-center bg-gradient-to-br from-cyan-300 to-indigo-500">
      <BeatLoader
        color="teal"
        loading={isLoading}
        size={100}
        className="text-center"
      />
      {!isLoading && (
        <div className="peopleInSpace flex flex-col text-center font-bold text-slate-500 ">
          {people.map((person, index) => (
            <a
              key={person.name}
              href={`https://en.wikipedia.org/wiki/${person.name}`}
              className="names p-4 bg-teal-300 m-4 rounded-lg hover:scale-110 transition duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                {person.name} <br /> Craft: {person.craft}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PeopleInSpace;
