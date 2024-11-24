// let http = require("http");
// let url = require("url");
// let fs = require("fs");

// http
//   .createServer(function (req, res) {
//     let q = url.parse(req.url, true);
//     let filename = "." + q.pathname;

//     if (filename === "./") {
//       fs.readFile("./index.html", function (err, data) {
//         if (err) {
//           res.writeHead(404, { "Content-Type": "text/html" });
//           return res.end("404 Not Found");
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     } else if (filename === "./contact-me") {
//       fs.readFile("./contact-me.html", function (err, data) {
//         if (err) {
//           res.writeHead(404, { "Content-Type": "text/html" });
//           return res.end("404 Not Found");
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     } else if (filename === "./about") {
//       fs.readFile("./about.html", function (err, data) {
//         if (err) {
//           res.writeHead(404, { "Content-Type": "text/html" });
//           return res.end("404 Not Found");
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     } else {
//       fs.readFile("./404.html", function (err, data) {
//         if (err) {
//           res.writeHead(404, { "Content-Type": "text/html" });
//           return res.end("404 Not Found");
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     }
//   })
//   .listen(8080);

const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile("/index.html", { root: __dirname }));
app.get("/contact-me", (req, res) =>
  res.sendFile("/contact-me.html", { root: __dirname })
);
app.get("/about", (req, res) =>
  res.sendFile("/about.html", { root: __dirname })
);
app.get("/:name", (req, res) => res.sendFile("/404.html", { root: __dirname }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
