import React, { createContext, useCallback, useMemo, useState } from "react";

export const CreateHaikuContext = createContext();

export const CreateHaikuProvider = ({ children }) => {
  const [state, updateState] = useState({
    subject: "",
    terms: false,
    haikuLines: [],
    chordLines: [],
    createdOn: "",
    aiId: "",
    choices: [],
    usage: {},
    created: "",
    owner: "",
    author: "",
    _id: "",
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
  const updateAuthorOwner = useCallback(
    (author, owner) => {
      updateState({
        ...state,
        author: author,
        owner: owner,
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
      aiId: "",
      choices: [],
      usage: {},
      created: "",
      owner: "",
      author: "",
      _id: "",
    });
  }, [state]);

  const updateAll = useCallback((data, response) => {
    updateState({
      subject: response.subject,
      terms: response.terms,
      haikuLines: data.haikuLines,
      chordLines: data.chordLines,
      createdOn: data.createdOn,
      created: response.created,
      aiId: response.aiId,
      choices: response.choices,
      usage: response.usage,
      owner: response.owner,
      author: response.author,
      _id: response._id,
    });
  },[state]);

  const store = useMemo(() => {
    return {
      state,
      updateState,

      resetAll,
      updateSubject,
      updateTerms,
      updateAuthorOwner,
      updateAll,
    };
  }, [
    state,
    updateState,

    resetAll,
    updateSubject,
    updateAuthorOwner,
    updateTerms,
    updateAll,
  ]);

  return (
    <CreateHaikuContext.Provider value={store}>
      {children}
    </CreateHaikuContext.Provider>
  );
};
