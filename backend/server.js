import express from "express";
import cors from "cors";
import predictRoute from "./route/predictRoute.js"; 


const app = express();


app.use(cors());
app.use(express.json());

app.use("/api", predictRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});