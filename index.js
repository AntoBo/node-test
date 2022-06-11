// import path from "path";
// import { promises as fs } from "fs";
const fs = require("fs").promises;

// console.log(process.pid);

(async () => {
  await fs.writeFile("./bin.txt", "bin");
  const read = await fs.readFile("./bin.txt", "utf-8");
  console.log(read);
})();

// fs.writeFile("./binary.txt", "binary", "binary")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// fs.readFile("./binary.txt", "binary")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
//or
// fs.readFile("./text.txt")
//   .then((data) => console.table(data.toString()))
//   .catch((err) => console.error(err.toString()));

// console.log("__dirname is ", __dirname);

// fs.stat("./text.txt").then((stat) => console.log(stat));
// const userName = "Anto";

// console.log(`Hello, ${userName}`);

// console.log(process.env);
// const [, , a, b] = process.argv;
// console.log(process.argv);
// console.log(parseInt(a) + parseInt(b));

// console.log(__dirname);
// console.log(__filename);

// const path = require("path");
// const resolve = path.resolve("package.json");
// console.log(resolve);

// () => console.log("cb!");
// (() => {
//   console.log("weird cb");
// })();

// console.error("err text");
// process.nextTick(() => {
//   console.log("NextTick callback");
// });
