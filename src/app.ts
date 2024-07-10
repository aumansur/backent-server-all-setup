import express, { Request, Response } from "express";

import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";

const app = express();

app.use(express());
app.use(express.json());

//! install and setup server
// app.use("/api/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("hey  Sports facility  server is running 😎");
});

app.use(globalErrorHandler);

app.use(notFound);
export default app;
