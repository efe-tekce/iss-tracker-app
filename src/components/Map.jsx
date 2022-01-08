import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = ({ coordinates }) => {
  return (
    <div className="">
      <MapContainer
        style={{ height: "100vh", width: "100vw" }}
        center={coordinates}
        zoom={8}
        scrollWheelZoom={true}
        dragging={true}
        minZoom={1.75}
        className="min-w-full min-h-screen"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            The ISS is currently at {coordinates[1]}, {coordinates[0]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
