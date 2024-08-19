const app = require('./app'); // Importer l'application depuis app.js

const port = 5000;

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
