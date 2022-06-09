import React, { useState } from "react";

export default function ImagePreview({ nasaPicture, title, description }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <img src={nasaPicture} alt={description} onClick={() => setShow(true)} />
      <div className="description">{title}</div>
      <div className="modal" onHide={() => setShow(false)} show={show}>
        <img src={nasaPicture} alt={description} />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
