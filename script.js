const NUMBER_OF_BALLS = 50;
const HEIGHT = 901;
const WIDTH = 1801;
const WIDTH_EXTREMES = [0, 1800];
const HEIGHT_EXTREMES = [0, 900];
let FLAG = 0;
const SIZE = ["15px", "30px", "20px", "35px", "25px"];
const BINARY = [0, 1];
const OPACITY = [
  "0.1",
  "0.2",
  "0.3",
  "0.4",
  "0.5",
  "0.6",
  "0.7",
  "0.8",
  "0.9",
  "1",
];

const animate = () => {
  for (let i = 0; i < NUMBER_OF_BALLS; i++) {
    if (FLAG) {
      let element = document.getElementById(`${i}`);
      element.style.top = HEIGHT_EXTREMES[Math.floor(Math.random() * 2)] + "px";
      element.style.left = Math.floor(Math.random() * WIDTH) + "px";
    } else {
      let element = document.getElementById(`${i}`);
      element.style.top = Math.floor(Math.random() * HEIGHT) + "px";
      element.style.left = WIDTH_EXTREMES[Math.floor(Math.random() * 2)] + "px";
    }

    FLAG = BINARY[Math.floor(Math.random() * 2)];
  }
};

const generateRandomBalls = () => {
  for (let i = 0; i < NUMBER_OF_BALLS; i++) {
    const element = document.createElement("div");
    element.setAttribute("id", `${i}`);
    element.setAttribute("class", "heart");
    element.style.opacity = OPACITY[Math.floor(Math.random() * 10)];
    element.style.width = SIZE[Math.floor(Math.random() * 5)];
    element.style.top = Math.floor(Math.random() * HEIGHT) + "px";
    element.style.left = Math.floor(Math.random() * WIDTH) + "px";
    document.querySelector(".container").append(element);
  }
  setTimeout(() => {
    animate();
  }, 1000);
  setInterval(() => {
    animate();
  }, 60000);
};

generateRandomBalls();
