import express from "express";
import calculatorRouter from "./routes/calculator.js";

const app = express();
const PORT = 8086;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Router
app.use("/api", calculatorRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // logger.info(`Server running on port ${PORT}`)
});