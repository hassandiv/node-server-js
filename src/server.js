const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (req.url === "/contact") {
    fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  if (req.url === "/api/users") {
    const users = [
      { name: "hassan", age: 30 },
      { name: "jack", age: 20 },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(PORT, () => console.log(`server runnign on ${PORT}`));
