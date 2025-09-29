const express = require("express");
const cors = require("cors");

require("dotenv").config();

const contactRoute = require("./routes/contactRoutes");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use("/api/contact", contactRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server connected ${PORT}`);
});
