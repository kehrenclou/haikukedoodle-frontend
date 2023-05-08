//file to have back up data if openaiApi fails or is busy
export const songs = [
  {
    subject: "haiku",
    result:
      "\nPen and paper,\nWriting with a flourish,\nFilling the world words.\n\nC D G Em\nD Bm A G\nD Bm A D",
  },

  {
    subject: "Kinkajoo",
    result:
      "\nKinkajoo so sweet\nIn the forest, so quiet and shy\nClimbing fast and high\n\nG Em C D\nG C D Em\nG Em Am D",
  },
  {
    subject: "Dogcatcher",
    result:
      "\nNet ensnares pup\nCries begging for release \nLonely dogcatcher \nG   Am   F   G\nF   Am   G   C\nG   Am   F   G",
  },
  {
    subject: "Coding",
    result:
      "Coding puzzles,\nA challenge of the mind;\nRewards of skillful play.\n\nC  G  Am  F\nD  C  G  D\nG  Am  F  C",
  },
];

export const aiResponse = [
  {
    id: "cmpl-7DzCJigfD6xreVOE5GrKOoAd2DBMw",
    object: "text_completion",
    created: 1683567863,
    model: "text-davinci-003",
    choices: [
      {
        text: "Furry friend so true,\nBringing joy and laughter too,\nLoyalty and love.\n\nG C Am D\nC Am Em D\nG C D G",
        index: 0,
        logprobs: null,
        finish_reason: "stop",
      },
    ],
    usage: { prompt_tokens: 58, completion_tokens: 37, total_tokens: 95 },
  },
  {
    id: "cmpl-7DzGecCDG9dvUaLjt5uWuODbkiejJ",
    object: "text_completion",
    created: 1683568132,
    model: "text-davinci-003",
    choices: [
      {
        text: "\nFurry pup so small\nBarks at the birds in the sky\nJoyful pup at play\n\nG, C, D, G\nD, A, Bm, G\nA, D, G, D",
        index: 0,
        logprobs: null,
        finish_reason: "stop",
      },
    ],
    usage: { prompt_tokens: 53, completion_tokens: 47, total_tokens: 100 },
  },
  {
    id: "cmpl-7E0HHmXkHWnAqeQnmmH6Mnq9x9AUe",
    object: "text_completion",
    created: 1683572015,
    model: "text-davinci-003",
    choices: [
      {
        text: "\nFurry friend so sweet\nLoyal companion and joy\nMy loyal pup, love deep \n\nChords: Em, A, D, G, Bm, Em",
        index: 0,
        logprobs: null,
        finish_reason: "stop",
      },
    ],
    usage: { prompt_tokens: 53, completion_tokens: 37, total_tokens: 90 },
  },
];
