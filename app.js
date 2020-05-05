const canvas = document.getElementById("jscanvas");
const color = document.getElementsByClassName("color");
const range = document.getElementById("jsinput");

const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 450;
ctx.lineWidth = 1.0;
ctx.strokeStyle = "#2f2f2f";
let painting = false;

function HandleMousemove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (painting == false) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function HandleColor(e) {
  const currentColor = e.target.style.backgroundColor;
  ctx.strokeStyle = currentColor;
}

function HandleInput() {
  const currentRange = range.value;
  ctx.lineWidth = currentRange;
}

function init() {
  canvas.addEventListener("mousemove", HandleMousemove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
}
if (color) {
  Array.from(color).forEach((color) =>
    color.addEventListener("click", HandleColor)
  );
}
if (range) {
  range.addEventListener("input", HandleInput);
}

init();
