import { Category } from "src/categories/categories.entity";
import { ShoppingHistory } from "src/shopping-history/shopping-history.entity";
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: "" })
  note: string;

  @Column({ nullable: true })
  imageUrl: string;

  @ManyToOne(() => Category, (category) => category.items)
  category: Category;

  @ManyToMany(() => ShoppingHistory, (shoppingHistory) => shoppingHistory.items)
  shoppingHistories: ShoppingHistory[];
}
