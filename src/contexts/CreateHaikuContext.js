import React, { createContext, useCallback, useMemo, useState } from "react";

export const CreateHaikuContext = createContext();

export const CreateHaikuProvider = ({ children }) => {
  const [state, updateState] = useState({
    subject: "",
    terms: false,
    haikuLines: [],
    chordLines: [],
    createdOn: "",
    aiId:"",
    choices:[],
    usage:{},
    created:"",
    owner:"",
  
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
  const updateTerms = useCallback(
    (terms) => {
      updateState({
        ...state,
        terms: terms,
      });
    },
    [state]
  );
  const resetAll = useCallback(() => {
    updateState({
      subject: "",
      terms: false,
      haikuLines: [],
      chordLines: [],
      createdOn: "",
    });
  });
  const updateAll = useCallback((subject, terms, data, response, owner) => {
    updateState({
      subject: subject,
      terms: terms,
      haikuLines: data.haikuLines,
      chordLines: data.chordLines,
      createdOn: data.createdOn,
      created:response.created,
      aiId:response.id,
      choices:response.choices,
      usage:response.usage,
      owner:owner._id,
    });
  });
  const store = useMemo(() => {
    return {
      state,
      resetAll,
      updateSubject,
      updateTerms,
      updateAll,
    };
  }, [state, resetAll, updateSubject, updateTerms, updateAll]);

  return (
    <CreateHaikuContext.Provider value={store}>
      {children}
    </CreateHaikuContext.Provider>
  );
};
