import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Advantages from "../components/Advantages";
import CtaBanner from "../components/CtaBanner";
import Pricing from "../components/Pricing";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Feature />
    <Advantages />
    <CtaBanner />
    <Pricing />
  </React.StrictMode>
);
