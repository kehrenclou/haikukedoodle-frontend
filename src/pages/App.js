import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { CreateHaikuProvider, AuthProvider, UserProvider } from "../contexts";

import Header from "../components/header";
import Main from "./main";
import Footer from "../components/footer/Footer";
import About from "./about";
import Create from "./create";
import Result from "./result";
import Faq from "./faq/Faq";
import Loader from "./loader/Loader";
import ModalWithForm from "../components/modal/ModalWithForm";

/* ---------------------------------- store --------------------------------- */

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="page">
      <AuthProvider>
        <UserProvider>
          <CreateHaikuProvider>
            <Header />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.key}>
                <Route path="/" element={<Main />} />
                <Route path="/create" element={<Create />} />
                <Route path="/result" element={<Result />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/loader" element={<Loader />} />
              </Routes>
            </AnimatePresence>
            <Footer />

            <ModalWithForm isOpen={isOpen} />
          </CreateHaikuProvider>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
