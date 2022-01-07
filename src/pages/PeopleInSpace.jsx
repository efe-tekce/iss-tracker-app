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
    <div className="container">
      <div className="astronauts"></div>
      <BeatLoader color="green" loading={isLoading} size={200} />
      {!isLoading && (
        <div className="peopleInSpace">
          {people.map((person, index) => (
            <a
              key={person.name}
              href={`https://en.wikipedia.org/wiki/${person.name}`}
              className="names"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                {person.name} <br /> Craft: {person.craft}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PeopleInSpace;
