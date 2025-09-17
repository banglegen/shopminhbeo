// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000; // có thể đổi thành 5000 hoặc 8080

// phục vụ file tĩnh (HTML, CSS, JS, ảnh...)
app.use(express.static(path.join(__dirname)));

// route mặc định
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
});
