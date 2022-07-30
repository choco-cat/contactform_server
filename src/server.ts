const app = require("./app.ts");

app.listen(process.env["PORT"] || 3000, () =>
  console.log(`App is running ${process.env["PORT"] || 3000}`)
);
