import Course from "../models/Course.js"

const courseService = {
    getAll() {
        return Course.find();
    },
    getOne(courseId) {
        return Course.findById(courseId);
    },
    create(courseData) {
        return Course.create(courseData);
    },

}

export default courseService;