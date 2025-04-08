// server.js or dev.js (optional local entry point)
const app = require("./app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
