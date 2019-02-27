


export class Contact{
    constructor(public _name:string , public _email:string ,public _cell:string){

    }

    public get name():string{
        return this._name;
    }

    public set name(nm:string){
        this._name = nm;
    }

    public get email():string{
        return this._email;
    }

    public set email(em:string){
        this._email = em;
    }

    public get cell():string{
        return this._cell;
    }

    public set cell(cm:string){
        this._cell = cm;
    }
    
}