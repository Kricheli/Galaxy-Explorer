<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ImagePreview({ nasaPicture, title, description }) {
  const [show, setShow] = useState(false);
  return (
    <main class="grid">
      <div class="responsive">
        <div class="gallery">
          <img
            alt={title}
            src={nasaPicture}
            class="Img_Grid"
            onClick={() => setShow(true)}
          />
          <div class="desc">{title}</div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-110w"
        aria-labelledby="example-custom-modal-styling-title"
        className="Modal"
      >
        <img alt={title} src={nasaPicture} />
        <div className="container-Modal">
          <h1 className="Title_Modal">{title}</h1>
          <p className="description_Modal">{description}</p>
        </div>
      </Modal>
    </main>
  );
}
>>>>>>> ba348ed1b9f61f5c5e47069bd26faaa6297439e8
