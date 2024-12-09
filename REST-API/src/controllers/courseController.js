import { Router } from "express";
import courseService from "../services/courseService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const courseController = Router();

courseController.get("/courses", async (req, res) => {
  const courses = await courseService.getAll();
  res.json(courses);
});

courseController.post("/create", async (req, res) => {
  try {
    const userId = await req.cookies.auth.user._id;

    const courseData = {
      ...req.body,
      ownerId: userId
    };

    const course = await courseService.create(courseData, userId);
    res.json(course).status(200);
  } catch (err) {
    const error = getErrorMessage(err);
    res.status(500).json({ message: error });
  }
});

courseController.get("/courses/:courseId", async (req, res) => {
  const course = await courseService.getOne(req.params.courseId);
  res.json(course);
});

courseController.delete("/courses/:courseId/delete", async (req, res) => {
  await courseService.delete(req.params.courseId);
  res.status(204).end();
});

courseController.put("/courses/:courseId/edit", async (req, res) => {
  const courseData = req.body;
  const courseId = req.params.courseId;
  
  const updatedData = await courseController.update(courseId, courseData);
  res.json(updatedData);
});

export default courseController;
