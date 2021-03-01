import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateItemDto } from "./dto/create-item.dto";
import { Item } from "./items.entity";
import { ItemService } from "./items.service";

@Controller("items")
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Post("create")
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }
}
