import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesModule } from "src/categories/categories.module";
import { ItemController } from "./items.controller";
import { Item } from "./items.entity";
import { ItemService } from "./items.service";

@Module({
  imports: [TypeOrmModule.forFeature([Item]), CategoriesModule],
  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule {}
