import React, { useState } from "react";
import "../../App.css";
import "../../styles/home.css";
import NavBar from "../components/NavBar";
import astronautImage from "../../img/astronaut_image.png";
import Earth_Background from "../../img/Pexels Videos 4482.mp4";
import ImagePreview from "./ImagePreview";

export default function HomePage({ items }) {
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState(items);

  return (
    <>
      <div className="Home">
        <video className="Video_Background" autoPlay loop muted>
          <source src={Earth_Background} type="video/mp4" />
        </video>
        <div>
          <NavBar />
          <div>
            <h1 className="TitleHome">Hello, citizents of the Earth!</h1>
            <p className="PHome">
              Here you can find photos of our planet, the other planets and
              galaxies too!
            </p>
            <input
              className="SearchBarHome"
              id="nasaSearch"
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for an image"
            ></input>
            <button
              className="button"
              disabled={search === ""}
              onClick={async () => {
                const results = await fetch(
                  `https://images-api.nasa.gov/search?media_type=image&q=${search}`
                );
                const previews = await results.json();
                setPhotos(await previews.collection.items);
              }}
            >
              Search
            </button>
            <div>
              {photos &&
                photos.map((preview) => (
                  <ImagePreview
                    key={preview.data[0].nasa_id}
                    nasaPicture={preview.links[0].href}
                    title={preview.data[0].title}
                    description={preview.data[0].description}
                  />
                ))}
            </div>
            <img
              className="side_image"
              alt="astronaut"
              src={astronautImage}
              height="300px"
            />
          </div>
        </div>
      </div>
    </>
  );
}
