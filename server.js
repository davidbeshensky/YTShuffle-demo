const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const helmet = require("helmet");
const crypto = require("crypto");

// Security settings
app.use(
  helmet({
    contentSecurityPolicy: false, // may need to disable for inline scripts
    crossOriginOpenerPolicy: { policy: "same-origin" }, // Secure your site by isolating your origin's
  })
);

// Enable All CORS Requests for testing purposes
app.use(cors());

// Serve static files from the public directory
app.use(express.static("public"));

// Route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000; // Set port to 3000
app.listen(PORT, "localhost", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
