import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
export default function ImagePreview({ videoPreview, videoPlay, title, description,vid}) {
  const [show, setShow] = useState(false);
  return (
    <>
    <div className="responsive" >  
    <div className="galleryVideo">       
          <img src={videoPreview} className="Img_Grid"
          onClick={() => setShow(true)}/>
          <div className="desc">{title}</div> 
          <div>{vid}</div>
    </div>
    </div>
    <Modal
        show={show}
        onHide={() => setShow(false)}
        className="Modal"
       >
            <video 
            src= {videoPlay}
            width='100%'
            height='100%'
            controls
            playing
            />
          <div className="container-Modal">
          <h1 className="Title_Modal">{title}</h1>
          <p className="description_Modal">{description}</p>
          </div>
      </Modal>
  </>
  );
}