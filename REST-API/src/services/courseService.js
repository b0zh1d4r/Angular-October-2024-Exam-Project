import Course from "../models/Course.js"

const courseService = {
    getAll() {
        return Course.find();
    },
    create(courseData) {
        return Course.create(courseData);
    }
}

export default courseService;