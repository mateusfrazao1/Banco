export default class endereço {
   private logradouro: string;
   private cep: string;
   private numero:string;
   private complemento: string;
   private cidade: string;
   private uf:string;

    constructor(logradouro: string, cep: string, numero: string, complemento: string, cidade: string, uf:string){
        this.logradouro = logradouro;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }

    public getlog(){
        return this.logradouro
    }

    public getcep(){
        return this.cep
    }

    public getnum(){
        return this.numero
    }

    public getcomp (){
        return this.complemento
    }


    public getcidade(){
        return this.cidade 
    }

}