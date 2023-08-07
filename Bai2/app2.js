const colorBox = document.getElementById("colorBox");
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");

function generateRandomColor() {
  const randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase();
  return randomColor;
}
function updateColorBox(color) {
  colorBox.style.background = `linear-gradient(to bottom, ${color}, ${color})`;
  colorBox.querySelector("#colorHex").textContent = color;
}
function copyColor() {
  const colorHex = colorBox.querySelector("#colorHex").textContent;
  const tempInput = document.createElement("input");
  tempInput.value = colorHex;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert(`Copied: ${colorHex}`);
}
generateButton.addEventListener("click", () => {
  const randomColor = generateRandomColor();
  updateColorBox(randomColor);
});

copyButton.addEventListener("click", copyColor);
