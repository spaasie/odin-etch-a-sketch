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

function resetGrid() {
  const div = document.querySelectorAll(".container div");
  div.forEach(
    (element) => {
      element.remove();
    }
  )
}

window.onload = createPixels(16);

const btnReset = document.querySelector("#btn-reset");
btnReset.addEventListener("click", () => {
  const userInput = parseInt(prompt("Choose amount of pixels"));
  if (userInput > 100) {
    return alert("cant choose above 100 pixels");
  } else if (isNaN(userInput)) {
    return alert("can only use numbers");
  } else {
    resetGrid();
    createPixels(userInput);
  }
})