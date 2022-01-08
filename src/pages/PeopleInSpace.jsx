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
    <div className="container min-h-screen min-w-full   flex justify-center items-center bg-[url('./Starman.svg')] bg-no-repeat bg-center bg-contain">
      <BeatLoader
        color="teal"
        loading={isLoading}
        size={100}
        className="text-center"
      />
      {!isLoading && (
        <div className="peopleInSpace flex flex-col text-center font-bold text-slate-300 ">
          {people.map((person, index) => (
            <a
              key={person.name}
              href={`https://en.wikipedia.org/wiki/${person.name}`}
              className="names p-4 bg-fuchsia-400 m-4 rounded-lg hover:scale-110 transition duration-300 opacity-70"
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
