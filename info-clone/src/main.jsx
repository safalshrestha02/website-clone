import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Advantages from "../components/Advantages";
import CtaBanner from "../components/CtaBanner";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
// import NavBar from "../components/NavBar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <NavBar /> */}
    <Header />
    <Banner />
    <Feature />
    <Advantages />
    <CtaBanner />
    <Pricing />
    <Testimonial />
    <GetStarted />
    <Footer />
  </React.StrictMode>
);
