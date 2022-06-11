/**
 * this file purpose to update rewrites for firebase
 * as we are generating static website so we need to map /blog to /blog.html
 * if we don't do then it will open 404 page
 *
 * This file read all html files from output and prepare rewrite
 */
const fs = require("fs");
const path = require("path");

const EXTENSION = ".html";
const dirpath = path.join(__dirname, "../out");
const pageDirectory = path.join(__dirname, "../pages");
const allPageRoutes = fs.readdirSync(pageDirectory);
const directoryInPages = allPageRoutes.filter((route) =>
  fs.statSync(pageDirectory + "/" + route).isDirectory()
);
const outputFiles = fs.readdirSync(dirpath);
const htmlFiles = outputFiles.filter((el) => path.extname(el) === EXTENSION);
directoryInPages.forEach((directoryPath) => {
  const folderPath = `${dirpath}/${directoryPath}`;
  if (fs.existsSync(folderPath)) {
    const html = fs.readdirSync(folderPath);
    html.forEach((htmlFile) => {
      htmlFiles.push(`${directoryPath}/${htmlFile}`);
    });
  }
});

const firebasePath = path.join(__dirname, "../firebase.json");
try {
  const jsonString = fs.readFileSync(firebasePath);
  const firebaseConfig = JSON.parse(jsonString);
  firebaseConfig.hosting.rewrites = htmlFiles.map((path) => ({
    source: `/${path.replace(".html", "")}`,
    destination: `/${path}`,
  }));
  fs.writeFileSync(firebasePath, JSON.stringify(firebaseConfig));
} catch (err) {
  console.log(err);
}
