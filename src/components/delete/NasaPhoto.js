import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;
export default function NasaPhoto() {
  // const API_KEY = `guVBEtVj4PH3bpaE3KUdpNuwyHajKSpxCt4pdlKo`;
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    fetchData();

    async function fetchData() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);
  if (!photoData) return <div>Loading...</div>;

  const renderMediaType = () => {
    if (photoData.media_type === "image") {
      return <img src={photoData.url} alt={photoData.title} />;
    } else {
      return (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      );
    }
  };

  return (
    <>
      <NavBar />
      <div  className="MediaOfTheDayPage_container">
        <h1>{photoData.title}</h1>
        <h1>{photoData.date}</h1>
        <div>{renderMediaType()}</div>
        <p>{photoData.explanation}</p>
      </div>
    </>
  );
}
