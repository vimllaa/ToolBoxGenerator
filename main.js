const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});
left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});
right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});
right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

var up = document.getElementById("GFG_UP");
var down = document.getElementById("GFG_DOWN");

var arr = ["GFG_1", "GeeksForGeeks", "Geeks", "Computer Science Portal"];

up.innerHTML =
  "Click on the button to check " + "the type of element.<br><br>" + arr;

function GFG_Fun() {
  down.innerHTML = arr[Math.floor(Math.random() * arr.length)];
}
