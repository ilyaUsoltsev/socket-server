import { Router, Request, Response} from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'All good1!'
    })
});
router.post('/messages', (req: Request, res: Response) => {

    const name = req.body.name;
    const id = req.body.id;

    res.json({
        name, id, ok: true
    })
});

router.post('/messages/:id', (req: Request, res: Response) => {

    const name = req.body.name;
    const id = req.params.id;

    res.json({
        name, id, ok: true
    })
});

export default router;


