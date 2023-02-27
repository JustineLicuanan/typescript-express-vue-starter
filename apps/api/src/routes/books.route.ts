import { Router } from "express";

import { booksController } from "../controllers/books.controller";

const router = Router();

// Routes
router.post("/", booksController.create);
router.get("/", booksController.findAll);
router.get("/:id", booksController.findOne);
router.patch("/:id", booksController.update);
router.delete("/:id", booksController.remove);

export const booksRoutes = router;
