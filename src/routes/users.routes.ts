import { Router } from "express";
import UsersRepository from '../repositories/usersRepository'

const usersRouter = Router();
const usersRepository = new UsersRepository;

usersRouter.get('/',(req,res) =>{
    const users = usersRepository.all_users();
    console.log((new Date()).toString());
    return res.json(users);
});

usersRouter.get('/:id',(req,res) =>{
    const { id } = req.params;
    const user = usersRepository.get_profile(id);
    if (!user) return res.status(404).json({message: "User not found!"});
    return res.json(user);
});

usersRouter.post('/', (req,res) =>{
    const { name, born_date, cpf, phone } = req.body;

    const find_empty_spaces = usersRepository.find_empty_spaces(name, born_date, cpf, phone);
    if (find_empty_spaces) {
        return res.status(400).json({message: "There are missing informations"});
    }

    if (usersRepository.findByCpf(cpf)) {
        return res.status(400).json({message: "This profile already exists!"});
    }

    const user = usersRepository.create(name,
        born_date,
        cpf,
        phone)
    return res.json(user);
});

usersRouter.post('/:id', (req,res) =>{
    const { name, born_date, cpf, phone } = req.body;
    const { id }= req.params;
    const find_empty_spaces = usersRepository.find_empty_spaces(name, born_date, cpf, phone);
    if (find_empty_spaces) {
        return res.status(400).json({message: "There are missing informations"});
    }
    const get_user = usersRepository.get_profile(id.toString());
    if (get_user){
        get_user.name = name;
        get_user.born_date = born_date;
        get_user.cpf = cpf;
        get_user.phone = phone;
        get_user.update_date = (new Date()).toString()
        return res.json(get_user);
    }
    else{
        return res.status(400).json({message: "User not found!"})
    };
});

usersRouter.delete('/:id',(req,res) =>{
    const { id } = req.params;
    const user = usersRepository.delete_user(id);
    if (!user) return res.status(404).json({message: "User not found!"});
    return res.json(user);
});

export default usersRouter;