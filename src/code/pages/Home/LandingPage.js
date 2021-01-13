import React from "react"
import WhyUs from "./WhyUs"
import SlideMenu from "./SlideMenu"
import Gallery from "./Gallery"
import { tileData } from "../data/data"
import Contact from "./Contact"
import Header from "../../layouts/Header"
import imgback from "../../assets/img/back2.jpg"
const datas = tileData.meatData

const LandingPage = () => {
  return (
    <>
      <Header back={imgback} />
      <SlideMenu />
      <WhyUs />
      <Gallery
        tileData={datas}
        header="Special Meat Delicases"
        direction="row"
      />
      <Contact />
    </>
  )
}

export default LandingPage
