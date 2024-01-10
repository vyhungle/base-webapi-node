import express from "express";
const router = express.Router();
router.get("/", async (req, res) => {
    try {
        res.status(200).json({
            success: true,
        });
    }
    catch (error) { }
});
export default router;
//# sourceMappingURL=userRouter.js.map