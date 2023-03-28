const http = require("http");
const PORT = 9000;

const server = http.createServer((req, res) => {
  //write response
  res.write("hello world");
  res.end();
});

server.listen(PORT, () => console.log(`server runnign on ${PORT}`));
