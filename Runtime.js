gameCanvas = document.getElementById("gamearea");
ctx = gameCanvas.getContext("2d");
// you can edit FPS to any number below 250. Beyond this, and it will probably break the game.
FPS = 30
frametime = 1000 / FPS

export function tick() {
  ctx.reset()
}

export function drawBitmap(x, y, path) {
  let img = new Image();
  img.src = path;
  img.onload = function() {
    ctx.drawImage(img, x, y)
  };
}


while (true) {
  setInterval(() => {
    tick();
  }, frametime);
}
