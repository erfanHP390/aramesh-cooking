import React from "react";
import Banner from "../banner/Banner";
import Profile from "../profile/Profile";
import Services from "../services/Services";
import Statistic from "../statistic/Statistic";
import Team from "../team/Team";
import Latest from "../latest/Latest";
import Contact from "../contact/Contact";
import connectToDB from "@/configs/db";
import DepartmentModel from "@/models/Department"

async function Main() {


  connectToDB()
  const departments = await DepartmentModel.find({}).sort({_id: -1})

  return (
    <>
      <Banner id="home" />
      <div id="about">
        <Profile />
      </div>
      <div id="services" style={{ position: 'relative', top: '-60px', paddingTop: '60px' }}>
        <Services />
      </div>
      <div id="statistic" style={{ position: 'relative', top: '-60px', paddingTop: '60px' }}>
        <Statistic />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="latest">
        <Latest />
      </div>
      <div id="contact">
        <Contact  departments={departments} />
      </div>
    </>
  );
}

export default Main;