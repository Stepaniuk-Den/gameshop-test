import React, { useContext } from "react";

import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";
import { lightTheme, darkTheme } from "../src/themes/theme";
import { GlobalStyles } from "../src/themes/global";

import { SContainer } from "./App.styled";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import SidebarIcons from "./components/SidebarIcons";
import { useMediaQuery } from "react-responsive";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDesktop = useMediaQuery({ minWidth: 1250 });
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <SContainer>
        {isDesktop && <SidebarIcons />}
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Banner />
        <Footer />
      </SContainer>
    </ThemeProvider>
  );
}

export default App;
