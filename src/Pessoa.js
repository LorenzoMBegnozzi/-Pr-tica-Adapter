export class Pessoa {
    constructor(nome, idade, email) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
    }
  
    getNome() {
      return this.nome;
    }
  
    getIdade() {
      return this.idade;
    }
  
    getEmail() {
      return this.email;
    }
  }
  