import { createContext, useCallback, useMemo, useState } from "react";

export const CreateHaikuContext = createContext();

export const CreateHaikuProvider = ({ children }) => {
  const [state, updateState] = useState({
    subject: "",
    terms: false,
  });

  const updateSubject = useCallback(
    (subject) => {
      updateState({
        ...state,
        subject: subject,
      });
    },
    [state]
  );
  const updateTerms = useCallback((terms) => {
    updateState({
      ...state,
      terms: terms,
    });
  });

  const updateSubjectTerms=useCallback((subject,terms)=>{
    updateState({
        ...state,
        subject:subject,
        terms:terms,
    })
  })
 
  const store = useMemo(() => {
    return { state, updateSubject, updateTerms, updateSubjectTerms };
  }, [state, updateSubject, updateTerms,updateSubjectTerms]);

  return (
    <CreateHaikuContext.Provider value={store}>
      {children}
    </CreateHaikuContext.Provider>
  );
};
