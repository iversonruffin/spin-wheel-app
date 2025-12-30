const spinner = document.getElementById("spinner");
const pushBtn = document.getElementById("pushBtn");
const promptModal = document.getElementById("promptModal");
const promptTitle = document.getElementById("promptTitle");
const promptText = document.getElementById("promptText");
const closeModal = document.getElementById("closeModal"); 
let headerText = document.getElementById("headerText");  

const infoIcon = document.getElementById("infoIcon");
const infoModal = document.getElementById("infoModal");
const closeInfo = document.getElementById("closeInfo");
let prompt = "";
const headerTextList = ["Dare to Push?", "PUSH THE RED BUTTON!", "What will it be?", "Take a Chance!", "Spin the Wheel!",
  "It can't be that bad!", "Fortune Favors the Bold!", "Your Fate Awaits!", "Go on, Push it!", "Spin that MF WHEEL!"];

let rotation = 0;

const prompts = {
  terribleJoke: "Tell a terrible joke!",
  buyADrink: "Buy the next person you make eye contact with a drink",
  addSong: "Add your favorite song to the last player's playlist!",
  compliment: "Compliment somebody's nose or eyes!",
  rockPaperScissors: "Challenge someone to rock-paper-scissors. If you lose, buy them a drink.",
  bestMomentYear: "Best moment of your year?",
  partyTrick: "Show off your best party trick!",
  childhoodMemory: "Best or Worst childhood memory?",
  dreamVacation: "What's your dream vacation destination?",
  worstGift: "Best or Worst Christmas gift you've ever received?",
  superpower: "If you could have any superpower, what would it be?",
  tongueTwister: "Say this tongue twister three times fast: \"She sells seashells by the seashore.\"",
  villainOrigin: "Tell us your villain origin story!",
  fictionalSwap: "If you could swap lives with any fictional character, who would it be and why?",
  pushAgain: "Push the button again!",
  movieLine: "Act out or recite your favorite line from a movie or TV show.",
  masterSkill: "If you could instantly master any skill, what would it be?",
  travelShot: "Take a shot if you have ever traveled outside your home country.",
  nativeQuote: "Tell a favorite quote in your mother (native/first) language.",
  tedTalk: "Give a 1-minute TED talk on a topic you're passionate about.",
  adventure: "What's the most adventurous thing you've ever done?",
  reliveMoment: "What is a moment or event in your life you would love to relive?",
  perspectiveShift: "What is a moment in your life that shifted your perspective significantly?",
  passTurn: "Pass your next turn to someone of your choice.",
  lifeLesson: "What's a lesson you would teach your great grandkids about life?",
  tootsiePop: "How many licks does it take to get to the tootsie center of a tootsie pop (Guess the over or under)?",
  hiddenTalent: "What's a hidden talent or skill you have that most people don't know about?",
  historicalDinner: "If you could have dinner with any historical figure, who would it be and why?",
  takeAShot: "Take a shot!!!",
  auxCord: "This person should not be trusted with the aux cord!",
  threeDrinks: "This person turns into a menace after drink #3",
  surviveApocalypse: "This person would die first in an apocalypse",
  memoryTrigger: "A memory of yours trigged by music",
  somethingSmall: "Something small that ended up mattering a lot to you",
  noExplanation: "Something you stopped explaining to people",
  memorableCompliment: "A compliment you received that stuck with you",
  phoneCheck: "If you checked your phone in the last 5 minutes, take a drink",
  bigNigga: "This guy is a BIG GUY",
  greenFlag: "What's an instant green flag when meeting new people?",
  redFlag: "What's an instant red flag when meeting new people?",
  petPeeve: "What's your biggest pet peeve?",
  lieDetector: "Tell us something about yourself and we'll guess if it's true or false. Whoever guesses wrong, take a drink!",
  lastPhoto: "Show us the last photo you took on your phone and tell us the story behind it.",
  conspiracy: "What's a conspiracy theory you secretly think might be true?",
  pushAgain: "Push the button again!",
  panthersPlayoffs: "Will the Panthers make the playoffs this year? Take a drink for YES, two drinks for NO.",
  colorCombo: "What color do you get from mixing red and blue?",
  stripperName: "What's your stripper name?",
  terribleJoke: {
    title: "ICE BREAKER",
    text: "Tell a terrible joke!"
  },

  


};

const promptValues = Object.values(prompts);

pushBtn.addEventListener("click", () => {
  pushBtn.disabled = true;
  let timeToWait = 2600; //time to wait before showing prompt

  //controls how much the wheel spins
  const spinAmount = Math.floor(Math.random() * 3000) + 5000;
  rotation += spinAmount;

  //applies rotation to spinner
  spinner.style.transform = `rotate(${rotation}deg)`;

  //waits for spin to finish before showing prompt
  setTimeout(() => {
    prompt = promptValues["terribleJoke"];

    if(prompt?.title){
      promptTitle.textContent = prompt.title;
    }
        
    promptText.textContent = prompt.text;
    promptModal.classList.remove("hidden");
    pushBtn.disabled = false;
  }, timeToWait);
});

// info modal functionality
infoIcon.addEventListener("click", () => {
  infoModal.classList.remove("hidden");
});

closeInfo.addEventListener("click", () => {
  infoModal.classList.add("hidden");
});

// tap outside closes modal
infoModal.addEventListener("click", (e) => {
  if (e.target === infoModal) {
    infoModal.classList.add("hidden");
  }
});

closeModal.addEventListener("click", () => {
  headerText.textContent = headerTextList[Math.floor(Math.random() * headerTextList.length)];
  promptModal.classList.add("hidden");
});

