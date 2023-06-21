import React from "react";
import { BrowserRouter, Route } from "../../node_modules/react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import "../App.css";
import dailyImage from "../pages/dailyImage/dailyImage";
import HomeVideo from "../pages/HomeVideo/HomeVideo";
// require('dotenv').config()


export const Router = () => {

  return (
    <BrowserRouter>
          <Route component={HomePage} path="/" exact />
          <Route component={dailyImage} path="/dailyImage" />
          <Route component={HomeVideo} path="/HomeVideo" />
    </BrowserRouter>
  );
};