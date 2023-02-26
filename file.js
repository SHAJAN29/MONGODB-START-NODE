const fs = require("fs");

const [, , celcius] = process.argv;

const quate = "hellove shajan";

// gen(celcius);
// function gen(celcius) {
//   if (celcius > 100) {
//     console.log("maxium");
//     return;
//   }

//   for (let index = 1; index <= celcius; index++) {
//     fs.writeFile(`./backep/awsome${index}.html`, quate, () => {
//       console.log("clicked");
//     });
//   }
// }
for (let index = 0; index <= celcius; index++) {
  fs.unlink(`./backep/awsome${index}.html`, (err) => {
    console.log("deleted");
  });
}
