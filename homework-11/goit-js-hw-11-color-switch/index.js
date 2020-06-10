const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const refs = {
  start: document.querySelector('button[data-action ="start"]'),
  stop: document.querySelector('button[data-action ="stop"]'),
  body: document.querySelector("body"),
};

const body = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bgColor = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.color = setInterval(() => {
      let color = colors[randomIntegerFromInterval(0, colors.length - 1)];
      body.style.backgroundColor = color;
    }, 1000);
  },
  stop() {
    clearInterval(this.color);
    this.isActive = false;
  },
};
refs.start.addEventListener("click", bgColor.start.bind(bgColor));
refs.stop.addEventListener("click", bgColor.stop.bind(bgColor));
