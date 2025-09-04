import express, { Request, Response } from 'express';
import helloRouter from './routes/hello';

const app = express();
const port = process.env.PORT || 3000;

app.use('/hello', helloRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Express+TypeScript Server is running!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
