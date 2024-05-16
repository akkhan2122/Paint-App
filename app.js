// console.log(window.innerWidth);
let canvas = document.querySelector("#myCanvas")
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 250;

let ctx = canvas.getContext("2d");
let startColur = "grey";
ctx.fillStyle = startColur;
ctx.fillRect(0, 0, canvas.width, canvas.height);

let drawColor = "white";
let drawWidth = "2";
let is_drawing = false;


canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
  is_drawing = true;
  ctx.beginPath();
  ctx.moveTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
  event.preventDefault();
}

function draw(event) {
  if (is_drawing) {
    ctx.lineTo(
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop
    );
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = drawWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
  event.preventDefault();
}
function stop(event) {
  if (is_drawing) {
    ctx.stroke();
    is_drawing = false;
  }
  event.preventDefault();
}

function clearSketch() {
  ctx.fillStyle = startColur;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function download() {
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.download = "drawing.jpeg";
  link.click();
}