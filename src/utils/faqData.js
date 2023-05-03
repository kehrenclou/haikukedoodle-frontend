export const faqs = [
  {
    question: "What is a haiku?",
    answer:
      "A haiku is a Japanese poem of 17 syllables, in three lines of five, seven and five, tradtionally evoking images of the natural world.",
  },
  {
    question: "How does this app work?",
    answer:
      "The app takes the subject that the user enters in the create haiku form and inserts it into a request, then sends it to the openai API.  It creates, then returns the haiku back to the app.",
  },
  {
    question: "How did you decide on the prompt to send to openai?",
    answer:
      "It took lots of trial and error to try and get a consistant result.  This is the prompt being used currently:  Write a 'haiku' about  #subject# with the first line has 5 syllables, the second line has 7 syllables, the third line has 5 syllables.next, write three lines of guitar chords to accompany the haiku.",
  },
  {
    question: "How do you connect to openai?",
    answer:
      "Go to https://openai.com/ and click on the developers tab.  Here you will find all of the information to get started including a tutorial with a quick start repo you can clone.",
  },
  {
    question: "Is the API free to access?",
    answer:
      "No.  Price depends on which model is accessed.  For instance the text-davinci-003 model charges $.002/1K tokens",
  },
  {
    question:
      "Why am I getting a message that I am getting previously created data?",
    answer:
      "It is possible that the api is busy, or the number of daily requests to openai has been exceeded.  I put a limit on it since I am paying for every request.",
  },


];
