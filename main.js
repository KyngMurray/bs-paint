/*******************
 * OUR HELPER CODE *
*******************/

const currentBrush = document.querySelector(".brush .current-brush")
const palettes = document.querySelectorAll(".palette-color")

let currentColor = "2";

function onClick(i) {
  currentBrush.className = `current-brush color-${i}`
}

for (let i = 0; i < palettes.length; i++) {
  palettes[i].addEventListener("click", () => {
    onClick(i + 1);
    currentColor = i + 1;
  });
}

const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

const squares = document.querySelectorAll(".square");

function onClick2(i) {
  console.log(squares[i]);
  squares[i].className = `square color-${currentColor}`

}
console.log(squares)

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    onClick2(i);
  });
}