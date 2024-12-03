import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import mongoose from 'mongoose';
import { authMiddleware } from './middlewares/authMiddleware.js';

try {
    await mongoose.connect('mongodb://localhost:27017', { dbName: 'the-window-of-knowledge' });
    console.log('Connected to the database!');
} catch (err) {
    console.log('Cannot connect to the database!');
    
}

const app = express();

app.use(express.json());
app.use(cors());
app.use(authMiddleware);
// app.use(corsMiddleware);
app.use(routes);

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))