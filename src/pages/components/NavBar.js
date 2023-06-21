<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import * as ReactBootstrap from "react-bootstrap";
import NASA_logo from "../../img/NASA_logo.png";
import "../../App.css";
import "../../styles/home.css";

export default function NavBar() {
  return (
    <>
    <div className="Navbar">
      <ReactBootstrap.Navbar className="Navbar" expand="lg" variant="dark">
        <ReactBootstrap.Navbar.Brand>
          {" "}
          <a href="/">
            <img
              src={NASA_logo}
              alt={""}
              className="Logo_Nasa"
              width="180"
              height="150"
            />
          </a>
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle />
        <ReactBootstrap.Navbar.Collapse>
          <Navbar>
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.Nav.Link href="/" className="Button_Home_Nav">
                Home
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link
                href="AnyPhoto"
                className="Button_Home_Nav"
              >
                Astronomy Picture of the Day
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link
                href="HomeVideo"
                className="Button_Home_Nav"
              >
                Videos
              </ReactBootstrap.Nav.Link>
              {/* <ReactBootstrap.Nav.Link href="#credits"className="Button_Home_Nav">Credits</ReactBootstrap.Nav.Link> */}
            </ReactBootstrap.Nav>
          </Navbar>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
    </>
  );
}
const Navbar = styled.div`
`;
=======
import React from "react";
import styled from "styled-components";
import * as ReactBootstrap from "react-bootstrap";
import NASA_logo from "../../img/NASA_logo.png";
import "../../App.css";
import "../../styles/home.css";

export default function NavBar() {
  return (
    <>
    <div className="Navbar">
      <ReactBootstrap.Navbar className="Navbar" expand="lg" variant="dark">
        <ReactBootstrap.Navbar.Brand>
          {" "}
          <a href="/">
            <img
              src={NASA_logo}
              alt={""}
              className="Logo_Nasa"
              width="180"
              height="150"
            />
          </a>
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle />
        <ReactBootstrap.Navbar.Collapse>
          <Navbar>
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.Nav.Link href="/" className="Button_Home_Nav">
                Home
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link
                href="AnyPhoto"
                className="Button_Home_Nav"
              >
                Astronomy Picture of the Day
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link
                href="HomeVideo"
                className="Button_Home_Nav"
              >
                Videos
              </ReactBootstrap.Nav.Link>
              {/* <ReactBootstrap.Nav.Link href="#credits"className="Button_Home_Nav">Credits</ReactBootstrap.Nav.Link> */}
            </ReactBootstrap.Nav>
          </Navbar>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
    </>
  );
}
const Navbar = styled.div`
`;
>>>>>>> ba348ed1b9f61f5c5e47069bd26faaa6297439e8
