import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {
  errorResponseHandler,
  invalidPathHandler,
} from "./middleware/errorHandeler.js";

//Routers
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(invalidPathHandler);
app.use(errorResponseHandler);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
