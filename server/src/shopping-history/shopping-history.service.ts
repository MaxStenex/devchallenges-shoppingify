import { HttpException } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemService } from "src/items/items.service";
import { Repository } from "typeorm";
import { CreateShoppingHistoryDto } from "./dto/create-shopping-history.dto";
import { ShoppingHistory } from "./shopping-history.entity";

@Injectable()
export class ShoppingHistoryService {
  constructor(
    @InjectRepository(ShoppingHistory)
    private shoppingHistoryRepository: Repository<ShoppingHistory>,
    private readonly itemsService: ItemService,
  ) {}

  async findAll(): Promise<ShoppingHistory[]> {
    return this.shoppingHistoryRepository.find({
      relations: ["items", "items.category"],
    });
  }

  async create({
    name,
    status,
    itemsIds,
  }: CreateShoppingHistoryDto): Promise<ShoppingHistory> {
    const items = await this.itemsService.findByIds(itemsIds);
    const shoppingHistoryItem = this.shoppingHistoryRepository.create({
      name: name,
      status: status,
      items,
    });
    await this.shoppingHistoryRepository
      .save(shoppingHistoryItem)
      .catch((err) => {
        // item name already taken
        if (err.code === "23505") {
          throw new HttpException(
            "This history name already taken",
            HttpStatus.BAD_REQUEST,
          );
        }
      });

    return shoppingHistoryItem;
  }
}
