const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Constants
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const spriteWidth = 575;
const spriteHeight = 523;

const playerImg = new Image();
playerImg.src = "shadow_dog.png";

function drawPlayer() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //
  //   ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
  ctx.drawImage(
    playerImg,
    0,
    0,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
  requestAnimationFrame(drawPlayer);
}
drawPlayer();
