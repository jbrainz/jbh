import React, { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)
  const [item, setItem] = useState("")
  const sendWhatsapp = (msg) => {
    const newWindow = window.open(
      `//api.whatsapp.com/send?phone=+2348139714746&text=${msg}`,
      "_blank",
      "noopener,noreferrer",
    )
    if (newWindow) newWindow.opener = null
  }

  return (
    <AppContext.Provider
      value={{
        item,
        setItem,
        selectedIndex,
        setSelectedIndex,
        value,
        setValue,
        open,
        handleClickOpen: () => {
          setOpen(true)
        },
        handleClose: () => {
          setOpen(false)
        },
        sendWhatsapp,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
