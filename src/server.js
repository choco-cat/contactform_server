const app = require("./app.js");

app.listen(process.env["PORT"] || 4000, () =>
  console.log(`App is running ${process.env["PORT"] || 4000}`)
);
