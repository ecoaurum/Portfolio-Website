import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/dbConnect.js';
import appsRouter from './routes/appRouter.js';
import websiteRouter from './routes/websitesRouter.js';

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//App router
app.use('/api/apps', appsRouter);
//Websites router
app.use('/api/websites', websiteRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});
app.get('/', (req, res) => {
    res.send('<h3>Main Page</h3>');
});

//Server
const start = async () => {
    try {
        connectDB();
        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Server starting on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Error starting the server:', err);
    };
};
start();