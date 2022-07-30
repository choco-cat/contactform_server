const app = require("./app.ts");

app.listen(process.env.PORT || 3000, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
