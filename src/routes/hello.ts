import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
    res.send("Hello bot is runnig...")
});

export default router;
