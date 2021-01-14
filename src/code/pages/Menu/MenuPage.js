import React from "react"
import Menu from "./Menu"
import { menus } from "../data/data"
import Header from "../../layouts/Header"
import imgBack from "../../assets/img/menuback.jpg"
const menu = menus

const MenuPage = () => {
  return (
    <>
      <Header header="Our Menu" button={false} back={imgBack} />
      <div>
        {menu.map((data) => (
          <Menu
            disc={data.disc}
            infoData={data.info}
            alt={data.alt}
            type={data.type}
          />
        ))}
      </div>
    </>
  )
}

export default MenuPage
