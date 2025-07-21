window.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");

  // Click on Enter key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      startButton.click();
    }
  });
});

document.getElementById("start-button").addEventListener("click", function () {
  // Hide intro
  document.getElementById("start-img").style.display = "none";

  // Show game
  document.getElementById("container").style.display = "block";

  // Initialize game
  startGame();
});

function startGame() {
  const charOneStand = document.getElementById("charOneStand"); // idle
  const charOneForward = document.getElementById("charOneForward"); // Forward
  const charOneBackward = document.getElementById("charOneBackward"); // backward
  const charOneAction = document.getElementById("charOneAction"); // action
  const charTwoStand = document.getElementById("charTwoStand"); // character two stand
  const boom = document.getElementById("boomEffect"); // boom effect

  let x = 5; // initial position

  // Set initial left for all characters
  charOneStand.style.left = x + "px";
  charOneForward.style.left = x + "px";
  charOneBackward.style.left = x + "px";
  charOneAction.style.left = x + "px";
  charTwoStand.style.right = x + "px";
  boom.style.display = "none";

  // for colliding
  function isColliding(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
  }


  // keydown function
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      charOneStand.style.display = "block";
      charOneAction.style.display = "none";
      charOneForward.style.display = "none";
      charOneBackward.style.display = "none";

      // Add jump animation class
      charOneStand.classList.add("jump-animate");

      // Remove it after animation completes so you can reuse it
      setTimeout(() => {
        charOneStand.classList.remove("jump-animate");
      }, 500); // same as CSS animation duration
    }

    // Movement (left/right/space)
    if (e.key === "ArrowRight") {
      x += 10;
      charOneForward.style.display = "block";
      charOneStand.classList.remove("jump-animate");
    }
    if (e.key === "ArrowLeft") {
      x -= 10;
      charOneBackward.style.display = "block";
      charOneStand.classList.remove("jump-animate");
    }
    if (e.key === " ") {
      x += 15;
      charOneAction.style.display = "block";
      charOneStand.classList.remove("jump-animate");
    }

    // after colliding
    if (isColliding(charOneStand, charTwoStand)) {
      charTwoStand.style.display = "none";
      // 💥 showing Boom effect
      boom.style.display = "block";

      setTimeout(() => {
      const winScreen = document.getElementById("winScreen");
      const playAgainBtn = document.getElementById("playAgainBtn");

      winScreen.style.display = "block";

      // Start scaling effect
      setTimeout(() => {
        winScreen.classList.add("show");
      }, 100);

      // Play Again Button Function
      playAgainBtn.addEventListener("click", function () {
        location.reload(); // Reload game
      });

      }, 2000); // 2 second delay after boom
    }
    else if (isColliding(charOneForward, charTwoStand)) {
      charTwoStand.style.display = "none";
      // 💥 showing Boom effect
      boom.style.display = "block";

      setTimeout(() => {
      const winScreen = document.getElementById("winScreen");
      const playAgainBtn = document.getElementById("playAgainBtn");

      winScreen.style.display = "block";

      // Start scaling effect
      setTimeout(() => {
        winScreen.classList.add("show");
      }, 100);

      // Play Again Button Function
      playAgainBtn.addEventListener("click", function () {
        location.reload(); // Reload game
      });

      }, 2000); // 2 second delay after boom
    }
    else if (isColliding(charOneAction, charTwoStand)) {
      charTwoStand.style.display = "none";
      // 💥 showing Boom effect
      boom.style.display = "block";

      setTimeout(() => {
      const winScreen = document.getElementById("winScreen");
      const playAgainBtn = document.getElementById("playAgainBtn");

      winScreen.style.display = "block";

      // Start scaling effect
      setTimeout(() => {
        winScreen.classList.add("show");
      }, 100);

      // Play Again Button Function
      playAgainBtn.addEventListener("click", function () {
        location.reload(); // Reload game
      });

      }, 2000); // 2 second delay after boom
    }

    // working by enter key
    if (e.key === "Enter") {

      const playAgainBtn = document.getElementById("playAgainBtn");
      if (playAgainBtn && playAgainBtn.offsetParent !== null) {
        playAgainBtn.click(); // Simulate button click
      }

    }

    // Show action while moving
    charOneStand.style.display = "none";

    // Update all positions
    charOneStand.style.left = x + "px";
    charOneForward.style.left = x + "px";
    charOneBackward.style.left = x + "px";
    charOneAction.style.left = x + "px";
  });

  // keyup function
  document.addEventListener("keyup", function() {
    charOneStand.style.display = "block";
    charOneForward.style.display = "none";
    charOneBackward.style.display = "none";
    charOneAction.style.display = "none";

  });
}