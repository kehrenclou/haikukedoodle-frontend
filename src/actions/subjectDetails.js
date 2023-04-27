//actions/subjectDetails.js
//function to update state with Haiku subject to be sent to GPT API

export function updateSubjectDetails(state, payload) {
    console.log("payload",payload)
  return {
    ...state,
    subjectDetails: {
      ...state.subjectDetails,
      ...payload,
    },
  };
}
