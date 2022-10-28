import { uuid } from "uuidv4";

class Piu {
    piu_id: string;

    user_id: string;

    txt: string;

    piu_creation_date: string; 

    piu_update_date: string;

    constructor( user_id: string, txt: string ){
        this.piu_id = uuid();
        this.user_id = user_id;
        this.txt = txt;
        this.piu_creation_date = (new Date()).toString();
        this.piu_update_date = (new Date()).toString();
    }
};

export default Piu;