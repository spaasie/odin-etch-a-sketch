const container = document.querySelector(".container");

function etch() {
  this.classList.add("etched");
}

function createPixels(num) {
  for (let i = num*num; i > 0; i--) {
    const div = document.createElement("div");
    div.addEventListener("pointerenter", etch);
    container.appendChild(div);
  }
  const columns = `repeat(${num}, 1fr)`;
  container.style["grid-template-columns"] = columns;
}
