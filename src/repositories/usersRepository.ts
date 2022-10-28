import User from "../models/User";

class UsersRepository{
    private users: User[];
    constructor(){
        this.users=[{ "id": "padrao", "name": "padrao", "born_date": "padrao", "cpf": "padrao", "phone": "padrao", "creation_date": "padrao", "update_date": "padrao"}];
    }
    public all_users(): User[] {
        return this.users;
    }

    public find_empty_spaces(name: string, born_date: string, cpf: string, phone: string) {
        if (name == null ||  born_date == null || cpf== null || phone== null ){
            return true
        }
        else{ return false}
    }

    public findByCpf(cpf: String): User | null {
        const this_cpf = cpf;
        const find_user_same_cpf = this.users.find( User => this_cpf == User.cpf);
        return find_user_same_cpf || null;
    }

    public get_profile(id: String): User | null {
        const id_to_serach = id;
        const find_profile = this.users.find( User => id_to_serach == User.id );
        return find_profile || null;
    }

    public delete_user(id:string) {
        const find_user = this.get_profile(id);
        if (!find_user){return null}
        else{
            const user_index = this.users.indexOf(find_user);
            this.users.splice(user_index, 1);
            return { find_user } 
        }
    }
    
    public create(name: string, born_date: string, cpf: string, phone: string ): User{
        const user = new User(name, born_date, cpf, phone );
        this.users.push(user);
        return user
    }
}
export default UsersRepository;