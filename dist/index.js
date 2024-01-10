import express from "express";
import dotenv from "dotenv";
import UserRouter from "./router/userRouter.js";
//For env File
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Welcome to Express & TypeScript Server");
});
app.use("api/user", UserRouter);
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map