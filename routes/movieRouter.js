import express from 'express';

const router = express.Router();

import {index, show, destroy} from "../controllers/movieController.js"

//Rotte per i film

//index
router.get("/", index);

//show
router.get("/:id", show);

//destroy
router.delete("/:id", destroy);

export default router
