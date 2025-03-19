import express from 'express';

const router = express.Router();

import {index, show, destroy, storeReview} from "../controllers/movieController.js"

//Rotte per i film

//index
router.get("/", index);

//show
router.get("/:id", show);

//destroy
router.delete("/:id", destroy);

//storeReview
router.post("/:id/reviews", storeReview);


export default router
