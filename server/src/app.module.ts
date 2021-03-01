import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Item } from "./items/items.entity";
import { ItemModule } from "./items/items.module";
import { CategoriesModule } from "./categories/categories.module";
import { Category } from "./categories/categories.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "shoppingify",
      entities: [Item, Category],
      synchronize: true,
    }),
    ItemModule,
    CategoriesModule,
  ],
})
export class AppModule {}
