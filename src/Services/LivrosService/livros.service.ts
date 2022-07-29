/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livros } from '../../livros.model';

@Injectable()
export class LivroService {
  constructor(
    @InjectModel(Livros)
    private livrosModel: typeof Livros
  ) {}

  async obterTodos(): Promise<Livros[]> {
    return this.livrosModel.findAll();
  }

  async obterUm(id: number): Promise<Livros> {
    return this.livrosModel.findByPk(id);
  }

  async criar(livro: Livros) {
    this.livrosModel.create(livro);
  }

  async atualizar(id: number, livro: Livros): Promise<any> {
    return this.livrosModel.update(livro, { where: { id } });
  }

  async apagar(id: number) {
    const livro: Livros = await this.obterUm(id);
    livro.destroy();
  }
}
