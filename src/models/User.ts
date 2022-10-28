import { uuid } from "uuidv4";

class User {
    id: string;

    name: string;

    born_date: string;

    cpf: string;

    phone: string;

    creation_date: string; 

    update_date: string;

    constructor(name: string, born_date: string, cpf: string, phone: string){
        this.id = uuid();
        this.name = name;
        this.born_date = born_date;
        this.cpf = cpf;
        this.phone = phone;
        this.creation_date = (new Date()).toString();
        this.update_date = (new Date()).toString();
    }
};

export default User;