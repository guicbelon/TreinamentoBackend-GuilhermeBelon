import { Router } from "express";
import PiusRepository from '../repositories/piusRepository'

const piusRouter = Router();
const piusRepository = new PiusRepository;

piusRouter.get('/',(req,res) =>{
    const pius = piusRepository.all_pius();
    return res.json(pius);
});

piusRouter.get('/:id',(req,res) =>{
    const { id } = req.params;
    const piu = piusRepository.get_piu(id);
    if (!piu) return res.status(404).json({message: "Piu not found!"});
    return res.json(piu);
});

piusRouter.post('/', (req,res) =>{
    const { user_id, txt } = req.body;
    if (piusRepository.no_txt({ txt })) {return res.status(400).json({message: "You must right something to post this piu!"});}
    if (piusRepository.too_long({ txt })) {return res.status(400).json({message: "This piu ultapasses the limit of 140 characters!"});}
    const piu = piusRepository.create( user_id, txt)
    return res.json(piu);
})

piusRouter.post('/:id', (req,res) =>{
    const { txt } = req.body;
    const { id }= req.params;
    if (piusRepository.no_txt({ txt })) {return res.status(400).json({message: "You must right something to post this piu!"});}
    if (piusRepository.too_long({ txt })) {return res.status(400).json({message: "This piu ultapasses the limit of 140 characters!"});}
    const get_piu = piusRepository.get_piu(id.toString());
    if (get_piu){
        get_piu.txt = txt;
        get_piu.piu_update_date = (new Date()).toString()
        return res.json(get_piu);
    }
    else{
        return res.status(400).json({message: "Piu not found!"})
    };
});

piusRouter.delete('/:id',(req,res) =>{
    const { id } = req.params;
    const piu = piusRepository.delete_piu(id);
    if (!piu) return res.status(404).json({message: "Piu not found!"});
    return res.json(piu);
});

export default piusRouter;