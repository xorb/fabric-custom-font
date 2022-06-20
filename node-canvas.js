const fs = require("fs");
const { registerFont, createCanvas } = require("canvas");

registerFont(__dirname + "/fixtures/Ubuntu-Regular.ttf", {
  family: "Ubuntu",
  weight: "regular",
  style: "normal",
});

const canvas = createCanvas(500, 500);
const ctx = canvas.getContext("2d");

ctx.font = '52px "Ubuntu"';
ctx.fillText("Everyone hates this font :(", 50, 110);

const out = fs.createWriteStream(__dirname + "/customfont.png");
const stream = canvas.createPNGStream();

stream.on("data", function (chunk) {
  out.write(chunk);
});
