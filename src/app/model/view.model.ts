export class ViewModel{
    status : string;
    errors : any;
    data : any;
    constructor(status , errors , data){
        this.status = status;
        this.errors = errors;
        this.data = data;
    }
}