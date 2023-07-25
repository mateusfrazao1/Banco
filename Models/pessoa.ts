export default class Pessoa {
    private nome: string;
    private cpf: string;
    private telefone:string

    constructor(n: string, c: string, t: string){
        this.nome = n;
        this.cpf = c;
        this.telefone = t;
    }

    public getNome(){
        return this.nome
    }


    public getcpf(cpf: string){
        return this.cpf
    }

    public setRenda( telefone: string){
        this.telefone = telefone;
    }
 
}