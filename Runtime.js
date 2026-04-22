let gameCanvas = document.getElementById("gamearea");
let ctx = gameCanvas.getContext("2d");
export function tick() {
  ctx.reset()
}

while (true) {
  setInterval(() => {
    tick();
  }, 33);
}
