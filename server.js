import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
// import cors from "cors";
import cookieParser from "cookie-parser";

//routers
import authRouter from "./routes/authRouter.js";
import crisesRouter from "./routes/crisesRouter.js";
import donationsRouter from "./routes/donationsRouter.js";
import inventoryRouter from "./routes/inventoryRouter.js";
import volunteerRouter from "./routes/volunteerRouter.js";
import userRouter from "./routes/userRouter.js";

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//middlewares
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(morgan("dev"));
// app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(errorHandlerMiddleware);
//dashboard or homepage
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "Hello World" });
});

//dashboard or homepage
app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

//register and login route
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/crisis", crisesRouter);
app.use("/api/v1/donations", donationsRouter);
app.use("/api/v1/inventory", inventoryRouter);
app.use("/api/v1/volunteers", volunteerRouter);

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on ${port}...`);
});
