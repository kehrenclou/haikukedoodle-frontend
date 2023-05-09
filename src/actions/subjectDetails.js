
//function to update state with Haiku subject to be sent to GPT API

export function updateSubjectDetails(state, payload) {
    console.log("payload",payload);
    console.log("state",state);
  return {
    ...state,
    subjectDetails: {
      ...state.subjectDetails,
      ...payload,
    },
  };
}
