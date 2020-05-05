const canvas = document.getElementById("jscanvas");
const color = document.getElementsByClassName("color");
const range = document.getElementById("jsinput");
const fill = document.getElementById("jsfill");
const save = document.getElementById("jssave");

const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 450;
let isFill = false;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
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
  if (isFill == true) {
    ctx.fillStyle = currentColor; //클릭한 색을 fill할 컬러로 지정
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function HandleInput() {
  const currentRange = range.value;
  ctx.lineWidth = currentRange;
}

function HandleFill() {
  if (fill.innerText == "FILL") {
    isFill = true;
    fill.innerText = "PAINT";
  } else {
    fill.innerText = "FILL";
    isFill = false;
  }
}

function HandleRightMouse(event) {
  event.preventDefault();
}

function init() {
  canvas.addEventListener("mousemove", HandleMousemove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
  fill.addEventListener("click", HandleFill);
  canvas.addEventListener("contextmenu", HandleRightMouse);
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
