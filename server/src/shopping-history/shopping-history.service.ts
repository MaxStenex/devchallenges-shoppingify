import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ShoppingHistory } from "./shopping-history.entity";

@Injectable()
export class ShoppingHistoryService {
  constructor(
    @InjectRepository(ShoppingHistory)
    private shoppingHistoryRepository: Repository<ShoppingHistory>,
  ) {}
}
