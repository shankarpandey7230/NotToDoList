import express from 'express';
import taskRouter from './src/routers/taskRouter.js';
import morgan from 'morgan';

import { connectMongodb } from './src/config/dbConfig.js';

connectMongodb();

const app = express();
const PORT = 8000;

// connect MongoDB

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
