import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
  CreateHaikuProvider,
  AuthContext,
  UserContext,
  ModalContext,
  CardContext,
  useInitializeUserStore,
  useInitializeModalStore,
  useInitializeAuthStore,
  useInitializeCardStore,
} from "../contexts";
import { api } from "../utils/apis";

import Header from "../components/header";
import Main from "./main";
import Footer from "../components/footer";
import About from "./about";
import Create from "./create";
import Result from "./result";
import Read from "./read";
import Faq from "./faq";
import NotFound from "./notFound";



import {

  StatusModal,
  DeniedAccessModal,
  ProfanityAlertModal,
} from "../components/modals";

function App() {
  const location = useLocation(); //used with ScrollToTop helper
  const navigate = useNavigate();
  /* --------------------------------- stores --------------------------------- */

  const modalStore = useInitializeModalStore();

  const cardStore = useInitializeCardStore();

  /* ------------------------------- useEffects ------------------------------- */




  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        modalStore.closeAllModals();
        modalStore.setIsLoading(false);
      }
    };
    document.addEventListener("keydown", handleEscClose, false);
    return () => {
      document.removeEventListener("keydown", handleEscClose, false);
    };
  }, []);

  return (
    <div className="page">


          <ModalContext.Provider value={modalStore}>
            <CardContext.Provider value={cardStore}>
              <CreateHaikuProvider>
                <Header />
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.key}>
                    <Route path="/" element={<Main />} />
                    <Route path="/read" element={<Read />} />
                    <Route path="/create" element={<Create />} />

                 
                      <Route path="/result" element={<Result />} />
             

                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
                <Footer />

           
                <StatusModal />
                <DeniedAccessModal />
                <ProfanityAlertModal/>
              </CreateHaikuProvider>
            </CardContext.Provider>
          </ModalContext.Provider>
   
    </div>
  );
}

export default App;
