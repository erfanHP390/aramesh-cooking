import React from "react";
import Banner from "../banner/Banner";
import Profile from "../profile/Profile";
import Services from "../services/Services";
import Statistic from "../statistic/Statistic";
import Team from "../team/Team";
import Latest from "../latest/Latest";
import Contact from "../contact/Contact";

function Main() {
  return (
    <>
      <Banner />
      <Profile />
      <Services />
      <Statistic />
      <Team />
      <Latest />
      <Contact />
    </>
  );
}

export default Main;
