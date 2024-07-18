window.onload = function() {
  const app = new PIXI.Application({
    width: 500,
    height: 500
  });

  document.getElementById('mainbox').appendChild(app.view);

const wheelContainer = new PIXI.Container();
app.stage.addChild(wheelContainer);

const sliceTextures = [];
for (let i = 0; i < 11; i++) {
  const sliceTexture = PIXI.Texture.fromURL(`./img/slice${i}.png`); // Adjust image paths
  sliceTextures.push(sliceTexture);
}

const slices = [];
for (let i = 0; i < sliceTextures.length; i++) {
  const sliceSprite = new PIXI.Sprite(sliceTextures[i]);
  sliceSprite.anchor.set(0.5, 0.5); // Set anchor point to center
  wheelContainer.addChild(sliceSprite);

  // Adjust slice positions based on your design
  sliceSprite.x = app.renderer.width / 2; // Center horizontally
  sliceSprite.y = app.renderer.height / 2; // Center vertically
}

const imageTextures = [];
for (let i = 0; i < 11; i++) {
  const imageTexture = PIXI.Texture.fromURL(`./img/image${i}.png`); // Adjust image paths
  imageTextures.push(imageTexture);
}

for (let i = 0; i < slices.length; i++) {
  const imageSprite = new PIXI.Sprite(imageTextures[i]);
  imageSprite.anchor.set(0.5, 0.5); // Center the image within the slice
  slices[i].addChild(imageSprite);

  // Adjust image positions within each slice sprite
}

let currentAngle = 0;
const spinSpeed = 0.1;
let isSpinning = false;

function spin() {
  if (!isSpinning) {
    isSpinning = true;

    const box = document.getElementById('box');
    const randomRotation = Math.floor(Math.random() * 360) + 3600; // Random rotation between 0 and 360, plus multiple full spins

    box.style.transition = 'transform 4s ease-out';
    box.style.transform = `rotate(${randomRotation}deg)`;

    setTimeout(() => {
      isSpinning = false;
      const finalRotation = randomRotation % 360; // Get the final angle after multiple spins
      box.style.transition = 'none';
      box.style.transform = `rotate(${finalRotation}deg)`;
    }, 4000);
  }
}

document.querySelector('.spin').addEventListener('click', spin);
}
