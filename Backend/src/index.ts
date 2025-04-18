import "dotenv/config";
import express from "express";
import { Response, NextFunction, Request } from "express";
import cors from "cors";
import { AppConfig } from "./config/app-config";
import { config } from "dotenv";

const app = express();
const BASE_PART = AppConfig.BASE_PATH;

app.use(express.json());

app.use(
  cors({
    origin: AppConfig.FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

app.listen(AppConfig.PORT, async () => {
  console.log(
    `Server is running on port ${AppConfig.PORT} in ${AppConfig.NODE_ENV} mode`
  );
});
