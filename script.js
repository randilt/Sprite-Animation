const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Starter Variables
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const spriteWidth = 575; // width of sprite sheet / number of frames in a row
const spriteHeight = 523; // height of sprite sheet / number of rows
let frameColumns = 0; // number of frames in a row
let gameFrames = 0;
const staggerFrame = 5; // change to slow down animation ex: 5 = 5 frames per second
let playerState = "idle"; // default player state
const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },
];
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});
// Create sprite sheet
const playerImg = new Image();
playerImg.src = "shadow_dog.png";

function drawPlayer() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // clear canvas to prevent overlapping images

  let position =
    Math.floor(gameFrames / staggerFrame) %
    spriteAnimations[playerState].loc.length; // position of sprite sheet to draw
  // ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
  let frameX = spriteWidth * position; // x position of sprite sheet to draw
  let frameY = spriteAnimations[playerState].loc[position].y; // y position of sprite sheet to draw

  ctx.drawImage(
    playerImg,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  ); //
  if (gameFrames % staggerFrame == 0) {
    // if gameFrames is divisible by staggerFrame, then increment frameX
    if (frameX < frameColumns)
      frameX++; // move to next frame only if frameX is less than the number of frames in a row (frameColumns) and if gameFrames is divisible by staggerFrame
    else frameX = 0;
  }
  gameFrames++; // increment gameFrames to keep track of how many frames have passed since the animation started (used to slow down animation) - see if statement above
  requestAnimationFrame(drawPlayer); // loop animation
}
drawPlayer(); // call function to start animation
