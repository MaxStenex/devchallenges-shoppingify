import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemModule } from "src/items/items.module";
import { ShoppingHistoryController } from "./shopping-history.controller";
import { ShoppingHistory } from "./shopping-history.entity";
import { ShoppingHistoryService } from "./shopping-history.service";

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingHistory]), ItemModule],
  controllers: [ShoppingHistoryController],
  providers: [ShoppingHistoryService],
})
export class ShoppingHistoryModule {}
