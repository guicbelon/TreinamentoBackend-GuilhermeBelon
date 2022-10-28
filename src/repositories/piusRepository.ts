import Piu from "../models/Piu";

class PiusRepository{
    private pius: Piu[];

    constructor(){
        this.pius=[];
    }

    public all_pius(): Piu[] {
        return this.pius;
    }

    public no_txt({ txt }: { txt: string; }): boolean{
        if (txt == null || txt.length ==0){ return true}
        else{ return false}
    }

    public too_long({ txt }: { txt: string; }): boolean {
        if (txt.length >= 140){ return true }
        else{ return false}
    }

    public get_piu(id: String): Piu | null {
        const id_to_serach = id;
        const find_piu = this.pius.find( Piu => id_to_serach == Piu.piu_id );
        return find_piu || null;
    }

    public delete_piu(id:string) {
        const find_piu = this.get_piu(id);
        if (!find_piu){return null}
        else{
            const piu_index = this.pius.indexOf(find_piu);
            this.pius.splice(piu_index, 1);
            return { find_piu } 
        }
    }

    public create(user_id: string, txt: string ): Piu{
        const piu = new Piu( user_id, txt );
        this.pius.push(piu);
        return piu
    }
}
export default PiusRepository;