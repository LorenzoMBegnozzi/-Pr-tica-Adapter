# 🧩 **PessoaCsvAdapter** - Projeto com o Padrão de Design Adapter

Este projeto implementa o padrão de design **Adapter**, permitindo a conversão de dados de um arquivo `.csv` para objetos da classe `Pessoa`. O objetivo é adaptar o formato de dados CSV para um formato de objetos que pode ser utilizado por outros componentes do sistema.

## 📁 **Estrutura do Projeto**

- **`Pessoa.js`**: Classe que representa uma pessoa.
- **`RepositorioDePessoa.js`**: Interface abstrata para listar pessoas.
- **`PessoaCsvAdapter.js`**: Adaptador que lê dados de um arquivo CSV e converte em objetos `Pessoa`.
- **`TesteAdapter.js`**: Script de teste que verifica o funcionamento do adaptador.
- **`dados.csv`**: Arquivo CSV com os dados das pessoas.

## 🧱 **Padrão de Design: Adapter**

O **Adapter** é um padrão estrutural que permite que interfaces incompatíveis trabalhem juntas. Neste projeto, usamos um adaptador (`PessoaCsvAdapter`) para converter o conteúdo de um arquivo CSV em objetos da classe `Pessoa`.

---

## 🧩 **Classes Criadas**

### 1. **Classe `Pessoa`**

Classe que representa uma pessoa com os seguintes atributos:

- `nome` (string)
- `idade` (número)
- `email` (string)

```js
class Pessoa {
  constructor(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
}

```

### 2. **Classe `RepositorioDePessoa`**
```js
class RepositorioDePessoa {
  listarPessoas() {
    throw new Error('Método não implementado');
  }
}

```
### 3. **Classe `PessoaCsvAdapter`**
```js
import fs from 'fs';
import { Pessoa } from './Pessoa.js';
import { RepositorioDePessoa } from './RepositorioDePessoa.js';

class PessoaCsvAdapter extends RepositorioDePessoa {
  constructor(caminhoArquivo) {
    super();
    this.caminhoArquivo = caminhoArquivo;
  }

  listarPessoas() {
    const conteudo = fs.readFileSync(this.caminhoArquivo, 'utf-8');
    const linhas = conteudo.trim().split('\n').slice(1); // Ignora o cabeçalho

    return linhas.map(linha => {
      const [nome, idade, email] = linha.split(',');
      return new Pessoa(nome.trim(), parseInt(idade.trim()), email.trim());
    });
  }
}
```
### **Script de Teste TesteAdapter**
```js
import { PessoaCsvAdapter } from './PessoaCsvAdapter.js';

const adapter = new PessoaCsvAdapter('./dados.csv');
const pessoas = adapter.listarPessoas();

console.log('Lista de pessoas:');
pessoas.forEach((pessoa, index) => {
  console.log(`${index + 1}. Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Email: ${pessoa.email}`);
});
```
### **Exemplo de `Arquivo dados.csv`**
## Nome,Idade,Email
- **`João,25,joao@example.com`**
- **`Maria,30,maria@example.com`**
- **`Carlos,35,carlos@example.com`**

