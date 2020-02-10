import express from "express";
import * as Controllers from "../controllers/notes";
const router = express.Router();

router
  .route("/")
  .get(Controllers.getAll)
  .post(Controllers.createNew);

router
  .route("/:note_id")
  .put(Controllers.updateOne)
  .delete(Controllers.deleteOne);

export default router;
