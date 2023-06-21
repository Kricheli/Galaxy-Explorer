import React, { useState, useEffect } from "react";
import '../../App.css';
import '../../styles/home.css';
import '../../styles/AnyPhoto.css';
import NavBar from '../components/NavBar';
import Earth_Background from '../../img/Pexels Videos 4482.mp4';

const My_Key_NASA = "exLhcO4Kmc3eWUy38Bgp7Lc1hAk5iieYpGs4Q8Hs";
  
  export default function AnyPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
      fetchPhotoDay();

      async function fetchPhotoDay() {
        const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${My_Key_NASA}`
        );
        const data = await res.json();
        setPhotoData(data);
        console.log(data);
      }
    }, []);
    if (!photoData) return <div />;
    

      return (
        <>
          <NavBar />
          <video className="Video_Background" autoPlay loop muted >
             <source src={Earth_Background} type="video/mp4"/>
            </video>
          <div className="AnyPhoto"> 
          <div>
        <div>
         </div>
        <h1 className="date">{photoData.date}</h1>
        <div className="Photo_Day">
        {photoData.media_type === "image" ? (
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      ) : (

        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />

      )}
      <div>
        
        <h1>{photoData.title}</h1>
        <br/> 
        <p className="explanation">{photoData.explanation}</p>
      </div>
      </div>
        </div>
        </div>
        </>
    )
}

// const Home2 = styled.div`

// `;

 
 
