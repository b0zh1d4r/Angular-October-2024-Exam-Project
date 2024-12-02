import { Schema, Types, model } from 'mongoose';

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 2
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100
    },
    startDate: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//
    },
    price: {
        type: Number,
        min: 0
    },
    signedOut: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Course = model('Course', courseSchema);

export default Course;