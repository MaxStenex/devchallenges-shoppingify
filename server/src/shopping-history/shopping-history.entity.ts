import { Item } from "src/items/items.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
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

  @JoinTable()
  @ManyToMany(() => Item, (item) => item.shoppingHistories)
  items: Item[];
}
