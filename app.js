const container = document.querySelector(".container");

function etch() {
  this.classList.add("etched");
}

for (let i=256; i > 0; i--) {
  const div = document.createElement("div");
  div.addEventListener("pointerenter", etch);
  container.appendChild(div);
}