import fs from 'fs';
import path from 'path';
import { Pessoa } from './Pessoa.js';
import { RepositorioDePessoas } from './RepositorioDePessoas.js';

export class PessoaCsvAdapter extends RepositorioDePessoas {
  constructor(caminhoArquivo) {
    super();
    this.caminhoArquivo = caminhoArquivo;
  }

  listarPessoas() {
    const conteudo = fs.readFileSync(this.caminhoArquivo, 'utf-8');
    const linhas = conteudo.trim().split('\n');
    const pessoas = [];

    for (let i = 1; i < linhas.length; i++) {
      const [nome, idade, email] = linhas[i].split(',');

      const pessoa = new Pessoa(nome.trim(), parseInt(idade.trim()), email.trim());
      pessoas.push(pessoa);
    }

    return pessoas;
  }
}
