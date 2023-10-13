var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");
var verification;

function jump() {
  if (!perso.classList.contains("animation")) {
    perso.classList.add("animation");
  }
  setTimeout(function () {
    perso.classList.remove("animation");
  }, 500);
}

function startGame() {
  obstacles.style.animationPlayState = "running";
  verification = setInterval(checkCollisions, 10);
}

function checkCollisions() {
  var persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top")
  );
  var obstaclesLeft = parseInt(
    window.getComputedStyle(obstacles).getPropertyValue("left")
  );

  if (obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130) {
    obstacles.style.animationPlayState = "paused";
    clearInterval(verification);
    alert("GAME OVER");
  }
}
