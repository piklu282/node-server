// Import Node.js core modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Define server port
const PORT = 3000;

// Helper function to serve files
function serveFile(filePath, contentType, res, statusCode = 200) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(statusCode, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

// Create HTTP server
const server = http.createServer((req, res) => {
  console.log("Requested URL:", req.url);

  // ROUTING
  if (req.url === "/" || req.url === "/home") {
    serveFile("./pages/home.html", "text/html", res);
  } 
  else if (req.url === "/about") {
    serveFile("./pages/about.html", "text/html", res);
  } 
  else if (req.url === "/contact") {
    serveFile("./pages/contact.html", "text/html", res);
  } 
  else if (req.url === "/style.css") {
    serveFile("./public/style.css", "text/css", res);
  } 
  else {
    serveFile("./pages/invalid.html", "text/html", res, 404);
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
