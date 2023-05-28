import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
  CreateHaikuProvider,
  AuthProvider,
  UserProvider,
  ModalContext,
  useInitializeModalStore,
} from "../contexts";

import Header from "../components/header";
import Main from "./main";
import Footer from "../components/footer/Footer";
import About from "./about";
import Create from "./create";
import Result from "./result";
import Faq from "./faq/Faq";
import Loader from "./loader/Loader";
import { SignUpModal, LoginModal, StatusModal } from "../components/modal";

function App() {
  const location = useLocation(); //used with ScrollToTop helper
  const modalStore = useInitializeModalStore();

  return (
    <div className="page">
      <AuthProvider>
        <UserProvider>
          <ModalContext.Provider value={modalStore}>
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

              <SignUpModal />
              <LoginModal />
              <StatusModal />
            </CreateHaikuProvider>
          </ModalContext.Provider>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
