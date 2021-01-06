import React, { createContext, useState, useEffect } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)
  return (
    <AppContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
        value,
        setValue,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
