import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { CreateHaikuProvider } from "../context";

import Header from "../components/header";
import Main from "./main";
import Footer from "../components/footer/Footer";
import About from "./about";
import Create from "./create";
import Faq from "./faq/Faq";
import ModalWithForm from "../components/modal/ModalWithForm";

/* ---------------------------------- store --------------------------------- */

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="page">
      <CreateHaikuProvider>
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Main />} />
            <Route path="/create" element={<Create />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </AnimatePresence>
        <Footer />

        <ModalWithForm isOpen={isOpen} />
      </CreateHaikuProvider>
    </div>
  );
}

export default App;
