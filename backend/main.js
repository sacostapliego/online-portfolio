import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import path from 'path';

import projectRoutes from './routes/project.route.js';

dotenv.config();

console.log('hi')

const app = express();
const PORT = process.env.PORT || 8081;

const __dirname = path.resolve();

app.use(express.json());

app.use('/api/projects', projectRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server strated at http://localhost:`+ PORT);
    connectDB();

});