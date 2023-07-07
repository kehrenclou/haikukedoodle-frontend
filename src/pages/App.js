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

import ProtectedRoutes from "../utils/protectedRoutes";

import { SignUpModal, LoginModal, StatusModal, DeniedAccessModal } from "../components/modals";

function App() {
  const location = useLocation(); //used with ScrollToTop helper
  const navigate = useNavigate();
  /* --------------------------------- stores --------------------------------- */
  const authStore = useInitializeAuthStore();
  const modalStore = useInitializeModalStore();
  const userStore = useInitializeUserStore();
  const cardStore = useInitializeCardStore();

  /* ------------------------------- useEffects ------------------------------- */
  useEffect(() => {
    if (!authStore.token) {
      authStore.setIsLoggedIn(false);
      return;
    }
    navigate("/");
  }, []);

  useEffect(() => {
    if(!authStore.isLoggedIn){
      return;
    }
    api.setHeaders({
      authorization: `Bearer ${authStore.token}`,
      "Content-Type": "application/json",
    });
  }, [authStore.token]);

  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        modalStore.closeAllModals();
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
            <CardContext.Provider value={cardStore}>
              <CreateHaikuProvider>
                <Header />
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.key}>
                    <Route path="/" element={<Main />} />
                    <Route path="/read" element={<Read />} />
                    <Route path="/create" element={<Create />} />

                    <Route element={<ProtectedRoutes />}>
                      <Route path="/result" element={<Result />} />
                    </Route>

                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
                <Footer />

                <SignUpModal />
                <LoginModal />
                <StatusModal />
                <DeniedAccessModal/>
              </CreateHaikuProvider>
            </CardContext.Provider>
          </ModalContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
