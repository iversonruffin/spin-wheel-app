const spinner = document.getElementById("spinner");
const pushBtn = document.getElementById("pushBtn");
const modal = document.getElementById("modal");
const promptText = document.getElementById("promptText");
const closeModal = document.getElementById("closeModal");                                   

let rotation = 0;

const prompts = [
  "Tell a terrible joke",
  "Buy the next person you make eye contact with a drink",
  "Add your favorite song to the playlist",
  "Compliment somebody's nose",
  "Challenge someone to rock paper scissors",
  "Best moment of your year"
];

pushBtn.addEventListener("click", () => {
  pushBtn.disabled = true;

  const spinAmount = Math.floor(Math.random() * 2000) + 2000;
  rotation += spinAmount;

  spinner.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
     prompt =
      prompts[Math.floor(Math.random() * prompts.length)];
      console.log(prompt);

    promptText.textContent = prompt;
    modal.classList.remove("hidden");
    pushBtn.disabled = false;
  }, 2600);
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
