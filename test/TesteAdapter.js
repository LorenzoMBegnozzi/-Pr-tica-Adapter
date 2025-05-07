import path from 'path';
import { PessoaCsvAdapter } from '../src/PessoaCsvAdapter.js';

const caminhoCsv = path.resolve('data/pessoas.csv');
const adaptador = new PessoaCsvAdapter(caminhoCsv);

const pessoas = adaptador.listarPessoas();

console.log("Lista de pessoas:");
pessoas.forEach((pessoa, index) => {
  console.log(`${index + 1}. Nome: ${pessoa.getNome()}, Idade: ${pessoa.getIdade()}, Email: ${pessoa.getEmail()}`);
});
