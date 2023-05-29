import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
  CreateHaikuProvider,
  AuthContext,
  UserContext,
  ModalContext,
  useInitializeUserStore,
  useInitializeModalStore,
  useInitializeAuthStore,
} from "../contexts";
import { api } from "../utils/apis";

import Header from "../components/header";
import Main from "./main";
import Footer from "../components/footer/Footer";
import About from "./about";
import Create from "./create";
import Result from "./result";
import Faq from "./faq/Faq";

import { SignUpModal, LoginModal, StatusModal } from "../components/modals";

function App() {

  const location = useLocation(); //used with ScrollToTop helper
  // const navigate = useNavigation();
  /* --------------------------------- stores --------------------------------- */
  const authStore = useInitializeAuthStore();
  const modalStore = useInitializeModalStore();
  const userStore = useInitializeUserStore();

  /* ------------------------------- useEffects ------------------------------- */
  useEffect(() => {
    api.setHeaders({
      authorization: `Bearer ${authStore.token}`,
      "Content-Type": "application/json",
    });
  }, [authStore]);

  useEffect(() => {
    if (!authStore.token) {
      authStore.setIsLoggedIn(false);
      return;
    }
    // navigate("/");
  }, []);

  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        modalStore.closeAllPopups();
      }
    };
    document.addEventListener("keydown", handleEscClose, false);
    return () => {
      document.removeEventListener("keydown", handleEscClose, false);
    };
  }, []);

  return (
    <div className="page">
      <AuthContext.Provider value={authStore}>
        <UserContext.Provider value={userStore}>
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
                </Routes>
              </AnimatePresence>
              <Footer />

              <SignUpModal />
              <LoginModal />
              <StatusModal />
            </CreateHaikuProvider>
          </ModalContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
