const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Constants
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImg = new Image();
playerImg.src = "images/shadow_dog.png";

function drawPlayer() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(50, 50, 100, 100);
  requestAnimationFrame(drawPlayer);
}
drawPlayer();
