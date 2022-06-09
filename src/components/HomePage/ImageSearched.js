import React from "react";


export default function Img_Searched({photo}){
  return(
    <>
    <PictureNASA>
      <div>
        <div className="Imagecontainer">
          <>
          <Image width={960} priority heifht={540} src={photo}/>
          </>
        </div>
        <div className="Imagecontainer">
          <a className="homeButton">
            <button className="button">Go Home</button>
          </a>
        </div>
      </div>
    </PictureNASA>
    </>
  )
}