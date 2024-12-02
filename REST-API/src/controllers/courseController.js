import { Router } from "express";
import courseService from "../services/courseService.js";

const courseController = Router();

courseController.get('/courses', async (req, res) => {
    const courses = await courseService.getAll();
    res.json(courses);
});

courseController.post('/create', async (req, res) => {
    const course = await courseService.create(req.body);
    
    res.json(course);
});

courseController.get('/:courseId', async (req, res) => {
    const course = await courseService.getOne(req.params.courseId);
    res.json(course);
})

export default courseController;