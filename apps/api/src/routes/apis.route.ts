import { Router } from "express";

import { booksRoutes } from "./books.route";

const router = Router();

// Routes
router.use("/books", booksRoutes);

export const apisRoutes = router;
