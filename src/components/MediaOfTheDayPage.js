import React, { useEffect, useState } from "react";
import background_space from '../media/background_space.mp4';
import astronaut_image from '../media/astronaut_image.png';

// This script displayes the image/video of the day from NASA.

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function MediaOfTheDayPage(){
  const[photoData, setPhotoData]=useState(null);
  useEffect(()=>{
    fetchData();

     async function fetchData(){
       const res=await fetch(
         `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
       );
       const data=await res.json();
       setPhotoData(data);
    }
  },[]);
  if(!photoData){
    return <div />
  };
const renderMediaType=()=>{
  if(photoData.media_type==='image'){
    return <img src={photoData.url} alt={photoData.title} />
  }else{
    return <iframe title="space-video" src={photoData.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen className="photo" />
  }
};

return(
  <>
    <video className="bacground_video" autoPlay loop muted>
      <source src={background_space} type="video/mp4"/>
    </video>
  <div className="MediaOfTheDayPage_container">
    <h1 className="date header">{photoData.date}</h1>
    <div className="MediaOfTheDayPage_image">
      {renderMediaType()}
    </div>
    <h1 className="title header">{photoData.title}</h1>
    <p className="text">{photoData.explanation}</p>
  </div>
  </>
)
}