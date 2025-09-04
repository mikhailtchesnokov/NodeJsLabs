import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello from the /hello route!' });
});

router.get('/:name', (req: Request, res: Response) => {
    const { name } = req.params;
    res.json({ message: `Hello, ${name}!` });
});

export default router;
