import { Router } from "express";
import courseService from "../services/courseService.js";

const courseController = Router();

courseController.get("/courses", async (req, res) => {
  const courses = await courseService.getAll();
  res.json(courses);
});

courseController.post("/create", async (req, res) => {
  try {
    const userId = await req.cookies.auth.user._id;
    console.log(req.body);

    const courseData = {
      ...req.body,
      ownerId: userId
    };

    const course = await courseService.create(courseData, userId);
    res.json(course).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

courseController.get("/:courseId", async (req, res) => {
  const course = await courseService.getOne(req.params.courseId);
  res.json(course);
});

courseController.delete("/:courseId", async (req, res) => {
  await courseController.delete(req.params.courseId);
  res.status(204).end();
});

courseController.put("/:courseId", async (req, res) => {
  const courseData = req.body;
  const courseId = req.params.courseId;

  const updatedData = await courseController.update(courseId, courseData);
  res.json(updatedData);
});

export default courseController;
