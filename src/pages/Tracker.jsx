import axios from "axios";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Map from "../components/Map";

const Tracker = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coordinates, setCoordinates] = useState([]);
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          `${
            process.env.NODE_ENV === "production"
              ? "/api"
              : "http://api.open-notify.org"
          }/iss-now.json`
        );

        const { latitude, longitude } = response.data.iss_position;

        setCoordinates([latitude, longitude]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };

    fetchLocation();
    const fetcher = setInterval(() => fetchLocation(), 5000);
    return () => {
      clearInterval(fetcher);
    };
  }, []);

  return (
    <div>
      <BeatLoader color="green" loading={isLoading} size={200} />
      {!isLoading && <Map coordinates={coordinates} />}
    </div>
  );
};

export default Tracker;
