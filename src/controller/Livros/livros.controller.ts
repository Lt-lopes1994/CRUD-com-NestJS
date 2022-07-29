import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LivroService } from '../../Services/LivrosService/livros.service';
import { Livros } from '../../livros.model';

@Controller('livros')
export class LivrosController {
  constructor(private livroservice: LivroService) {}

  @Get()
  async obterLivros(): Promise<Livros[]> {
    return this.livroservice.obterTodos();
  }

  @Get(':id')
  async obterLivro(@Param() params): Promise<Livros> {
    return this.livroservice.obterUm(params.id);
  }

  @Post()
  async cadastrarLivro(@Body() livro: Livros) {
    this.livroservice.criar(livro);
  }

  @Put()
  async alterarLivro(@Body() livro: Livros): Promise<Livros> {
    return this.livroservice.atualizar(livro.id, livro);
  }

  @Delete(':id')
  async excluirLivro(@Param() params) {
    this.livroservice.apagar(params.id);
  }
}
