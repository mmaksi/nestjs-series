import { Module } from '@nestjs/common';
import { PizzasModule } from './pizzas/pizzas.module';

@Module({
  imports: [PizzasModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
