import { Item } from "src/items/items.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
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

  @OneToMany(() => Item, (item) => item.shoppingHistory)
  items: Item[];
}
