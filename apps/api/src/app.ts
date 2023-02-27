import path from "path";
import dotenv from "dotenv";
import express from "express";

import { apisRoutes } from "./routes/apis.route";

// Init
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.use(express.static(path.join(__dirname, "../../web/dist")));
app.use("/api", apisRoutes);

// Start the server
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
