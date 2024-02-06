import React from "react";
import { SContainer } from "./App.styled";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <SContainer>
      <Header />
      <Banner />
      <Footer />
    </SContainer>
  );
}

export default App;
