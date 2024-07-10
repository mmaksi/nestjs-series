import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePizzasDto } from './dto/create-pizzas.dto';

@Controller('pizzas')
export class PizzasController {
  @Get()
  getAllPizzas() {
    return `All pizzas`;
  }

  @Get(':id')
  getOnePizza(@Param() params: { id: string }) {
    const { id: pizzaId } = params;
    return `Pizza with ID: ${pizzaId}`;
  }

  @Post()
  createPizza(@Body() body: CreatePizzasDto) {
    return body;
  }

  @Patch(':id')
  updatePizza(@Param() params: { id: string }, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deletePizza(@Param() params: { id: string }) {
    const { id: pizzaId } = params;
    return `Deleting pizza with ID: ${pizzaId}`;
  }
}
