import express from "express";
import { PORT } from "./config.js";
import cors from "cors";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import projectsRoutes from "./routes/projects.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(projectsRoutes);
app.use(taskRoutes);
app.listen(PORT);

console.log(`server listening on port ${PORT}`);
