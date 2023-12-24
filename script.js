const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Starter Variables
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let frameColumns = 6;
let gameFrames = 0;
const staggerFrame = 5;

const playerImg = new Image();
playerImg.src = "shadow_dog.png";

function drawPlayer() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //
  //   ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
  ctx.drawImage(
    playerImg,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  if (gameFrames % staggerFrame == 0) {
    if (frameX < frameColumns) frameX++;
    else frameX = 0;
  }

  requestAnimationFrame(drawPlayer);

  gameFrames++;
}
drawPlayer();
