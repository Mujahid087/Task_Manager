import express from "express"
import { isAdminRoute, protectRoute } from "../middlewares/authMiddleware.js"
import { createsubTask, createTask, dashboardStatistics, duplicateTask, getTask, getTasks, postTaskActivity } from "../controllers/taskControllers.js"

const router =express.Router()

router.post("/create",protectRoute,isAdminRoute,createTask)
router.post("/duplicate/:id",protectRoute,isAdminRoute,duplicateTask)
router.post("/activity/:id",protectRoute,postTaskActivity)

router.get("/dashboard",protectRoute,dashboardStatistics);
router.get("/",protectRoute,getTasks)
router.get("/:id",protectRoute,getTask)

router.put("/create-subtask/:id",protectRoute,isAdminRoute,createsubTask)
router.put("/update/:id",protectRoute,isAdminRoute,updateTask)
router.put("/:id",protectRoute,isAdminRoute,trashTask)


export default router