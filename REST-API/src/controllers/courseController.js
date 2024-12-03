import { Router } from "express";
import courseService from "../services/courseService.js";

const courseController = Router();

courseController.get('/courses', async (req, res) => {
    const courses = await courseService.getAll();

    res.json(courses);
});

courseController.post('/create', async (req, res) => {
    const userId = req.user._id;
    const courseData = req.body;
    const course = await courseService.create(courseData, userId);
    
    res.json(course);
});

courseController.get('/:courseId', async (req, res) => {
    const course = await courseService.getOne(req.params.courseId);

    res.json(course);
});

courseController.delete('/:courseId', async (req, res) => {
    await courseController.delete(req.params.courseId);

    res.status(204).end();
});

courseController.put('/:courseId', async (req, res) => {
    const courseData = req.body;
    const courseId = req.params.courseId;

    const updatedData = await courseController.update(courseId, courseData);

    res.json()
});

export default courseController;