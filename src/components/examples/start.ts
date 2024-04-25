class Employee {
    private id!: number;
    private _name!: string;
    private _address!: string;

    constructor(id: number, name: string, address: string){
        this.id = id;
        this._name = name;
        this._address = address;
    }
    // #region get, set for name
    set name(value: string){
        if(!value){
            throw new Error("name can't be empty");
        }
        this._name = this.name
    }

    get name(): string {
        return this._name;
    }
    // #endregion
    
    // #region set, get address
    set address(value: string){
        if(!value){
            throw new Error("address can't be empty");
        }
        this._address = value;
    }

    get address(): string{
        return `${this._address}`;
    }
    // #endregion

}