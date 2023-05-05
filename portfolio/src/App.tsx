import React, { useState, useEffect } from "react";
import "./components/Style/App.css";
import Header from "./components/header/Header";
import contextDarkMod from "./components/context/contextDarkMod";


const App: React.FC = () => {
  const [IsdarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleIsDarkMode = (): void => {
    localStorage.setItem("isDarkMode", JSON.stringify(!IsdarkMode));
    setIsDarkMode(!IsdarkMode);
  };

  useEffect(() => {
    const isDark: boolean = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(isDark);
  }, [IsdarkMode]);

  return (
    <contextDarkMod.Provider value={{ IsdarkMode, toggleIsDarkMode }}>
      <div className="App">
        <Header />
      </div>
    </contextDarkMod.Provider>
  );
};

export default App;
