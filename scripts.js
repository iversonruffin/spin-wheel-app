const spinner = document.getElementById("spinner");
const pushBtn = document.getElementById("pushBtn");
const promptModal = document.getElementById("promptModal");
const promptText = document.getElementById("promptText");
const closeModal = document.getElementById("closeModal"); 
var headerText = document.getElementById("headerText");                                  

let rotation = 0;

const prompts = {
  terribleJoke: "Tell a terrible joke",
  buyADrink: "Buy the next person you make eye contact with a drink",
  addSong: "Add your favorite song to the playlist!",
  compliment: "Compliment somebody's nose or eyes!",
  rockPaperScissors: "Challenge someone to rock-paper-scissors. If you lose, buy them a drink.",
  bestMomentYear: "Best moment of your year?",
  partyTrick: "Show off your best party trick!",
  childhoodMemory: "Best or Worst childhood memory?",
  dreamVacation: "What's your dream vacation destination?",
  worstGift: "Worst Christmas gift you've ever received?",
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
  tootsiePop: "How many licks does it take to get to the tootsie center of a tootsie pop?",
  hiddenTalent: "What's a hidden talent or skill you have that most people don't know about?",
  historicalDinner: "If you could have dinner with any historical figure, who would it be and why?",
  takeAShot: "Take a shot!"

};

const promptValues = Object.values(prompts);



pushBtn.addEventListener("click", () => {
  pushBtn.disabled = true;
  timeToWait = 2600; //time to wait before showing prompt

  //controls how much the wheel spins
  const spinAmount = Math.floor(Math.random() * 3000) + 5000;
  rotation += spinAmount;

  //applies rotation to spinner
  spinner.style.transform = `rotate(${rotation}deg)`;

  //waits for spin to finish before showing prompt
  setTimeout(() => {
    prompt = promptValues[Math.floor(Math.random() * promptValues.length)];
        
    promptText.textContent = prompt;
    promptModal.classList.remove("hidden");
    pushBtn.disabled = false;
  }, timeToWait);
});

closeModal.addEventListener("click", () => {
  promptModal.classList.add("hidden");
});

const infoIcon = document.getElementById("infoIcon");
const infoModal = document.getElementById("infoModal");
const closeInfo = document.getElementById("closeInfo");

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

