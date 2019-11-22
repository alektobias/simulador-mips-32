import {Router} from 'express';
import InstructionTranslate from './App/middlewares/InstructionTranslate';
import InitializeRegisters from './App/middlewares/InitializeRegisters';
import InitializeOperations from './App/middlewares/InitializeOperations';
const router = Router();



router.route('/').get((req, res) => res.send('foi mais uma vez'));
router.route('/instruction').post(InstructionTranslate, (req, res) => {return res.json(req.reg)});

export default router;