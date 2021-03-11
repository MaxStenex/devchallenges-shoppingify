import { Category } from "src/categories/categories.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class ShoppingHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => Category, (category) => category.items)
  category: Category;
}
