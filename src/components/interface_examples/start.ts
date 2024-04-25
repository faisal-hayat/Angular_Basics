interface IUser{
    name: string,
    age: number,
    address: string,
    email: string
}

interface IPerson extends IUser{
    salary?: number;
}

// example of function in interface
export interface ILogin{
    Login(): IUser;
}


class Employee implements ILogin{
    
    
    Login(): IUser {
        throw new Error("Method not implemented.");
    }
    
}