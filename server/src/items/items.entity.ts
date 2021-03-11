import { Category } from "src/categories/categories.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

  @Column({ nullable: true })
  countInShoppingList: number;

  @ManyToOne(() => Category, (category) => category.items)
  category: Category;
}
