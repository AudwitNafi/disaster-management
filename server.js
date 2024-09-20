import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";
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
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(errorHandlerMiddleware);
//dashboard or homepage
app.get("/", (req, res) => {
  res.send("Hello World");
});

//dashboard or homepage
app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

//register and login route
app.use("/auth", authRouter);
app.use("/users", authenticateUser, userRouter);
app.use("/crises", crisesRouter);
app.use("/donations", donationsRouter);
app.use("/inventory", inventoryRouter);
app.use("/volunteers", volunteerRouter);

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on ${port}...`);
});
