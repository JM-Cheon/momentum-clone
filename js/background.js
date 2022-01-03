const images = ["a.jpg", "b.jpg", "c.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("div");

bgImage.style.backgroundImage = `url("./img/${chosenImage}")`;
bgImage.style.backgroundSize = "cover";
bgImage.className = "bgImage";

document.body.appendChild(bgImage);
