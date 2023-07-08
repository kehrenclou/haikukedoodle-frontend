export const FAQS = [
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
    question: "How did you decide on the prompt to send to openAI?",
    answer:
      "It took lots of trial and error to try and get a consistant result.  This is the prompt being used currently:  Write a 'haiku' about  #subject# with the first line has 5 syllables, the second line has 7 syllables, the third line has 5 syllables.next, write three lines of guitar chords to accompany the haiku.",
  },
  {
    question: "How do you connect to openAI",
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
      "Why am I getting a message that I have reached my daily limit of Haikus?",
    answer:
      "The number of daily requests to openai is 1 for an Anonymous User and 5 for a Registered User.  Limits will reset within one day. I put a limit on it since I am paying for every request.",
  },
  {
    question:
      "Why are you asking for my email?",
    answer:
      "Your email will not be shared, sold or otherwise. The request for email is to only to ensure some level of accountability to prevent misuse of the site.",
  },


];
