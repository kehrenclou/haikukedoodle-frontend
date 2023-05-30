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

export const backupAiDataArr = [
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
    subject: "dog",
    owner: "6429c1ea315c60dbbe0427a5",
    likes: ["6429c559315c60dbbe0427b3", "642a3ad895d02012f3553cb8"],
    bookmarks: [
      "6429c88b315c60dbbe0427c8",
      "6429e9493e69fc35be402bfa",
      "642a39f595d02012f3553ca1",
      "642aff09a7dbb5ddc127c6e9",
      "6429c559315c60dbbe0427b3",
    ],
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
    subject: "puppy",
    owner: "6429c559315c60dbbe0427b3",
    likes: [
      "6429c88b315c60dbbe0427c8",
      "6429e9493e69fc35be402bfa",
      "642a39f595d02012f3553ca1",
      "642aff09a7dbb5ddc127c6e9",
      "6429c559315c60dbbe0427b3",
    ],
    bookmarks: ["6429e9493e69fc35be402bfa", "642a39f595d02012f3553ca1"],
  },

  {
    id: "cmpl-7E1uJR5vQfeYU0NILMAQYq3K9PFqk",
    object: "text_completion",
    created: 1683578279,
    model: "text-davinci-003",
    choices: [
      {
        text: "\nSoft fur so warm,\nPurrs of contentment heard,\nMy loyal cat friend.\n\nC D G D C\nA D E G D\nE D C G A",
        index: 0,
        logprobs: null,
        finish_reason: "stop",
      },
    ],
    usage: { prompt_tokens: 53, completion_tokens: 39, total_tokens: 92 },
    subject: "cat",
    owner: "6429c559315c60dbbe0427b3",
    likes: [
      "6429c88b315c60dbbe0427c8",
      "6429ced2315c60dbbe0427dd",
      "642b4e41280a1b78b50b6839",
      "6429e9493e69fc35be402bfa",
    ],
    bookmarks: ["6429e9493e69fc35be402bfa", "6429c559315c60dbbe0427b3"],
  },
  {
    id: "cmpl-7E1yfvZfWNbfQOo9RrZu1c0ZDh9lb",
    object: "text_completion",
    created: 1683578549,
    model: "text-davinci-003",
    choices: [
      {
        text: "\nMonkey jumps so high\nIn the trees, playing so wild\nA joyful sight to see \n\nG Em | Am D | G Em | Am D | \nC G | Am D | G Em | Am D |\nG Em | Am D | G Em | Am D | ",
        index: 0,
        logprobs: null,
        finish_reason: "length",
      },
    ],
    usage: { prompt_tokens: 54, completion_tokens: 50, total_tokens: 104 },
    subject: "monkey",
    owner: "6429c559315c60dbbe0427b3",
    likes: [
      "6429c559315c60dbbe0427b3",
      "6429e9493e69fc35be402bfa",
      "642a39f595d02012f3553ca1",
    ],
    bookmarks: [],
  },
];
//what the response looks like:
export const resp = {
  id: "cmpl-7E1uJR5vQfeYU0NILMAQYq3K9PFqk",
  object: "text_completion",
  created: 1683578279,
  model: "text-davinci-003",
  choices: [
    {
      text: "\nSoft fur so warm,\nPurrs of contentment heard,\nMy loyal cat friend.\n\nC D G D C\nA D E G D\nE D C G A",
      index: 0,
      logprobs: null,
      finish_reason: "stop",
    },
  ],
  usage: { prompt_tokens: 53, completion_tokens: 39, total_tokens: 92 },
};
