import { Router } from "express";
import { CreatePost, DeletePost, ListAllPost } from "../controller/Post.js";
const router = Router();

router.get("/posts",ListAllPost);
router.post("/posts",CreatePost);
router.delete("/posts/:id",DeletePost);

export default router;
