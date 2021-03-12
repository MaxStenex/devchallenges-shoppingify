import { HttpStatus } from "@nestjs/common";
import { HttpCode } from "@nestjs/common";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ShoppingHistory } from "./shopping-history.entity";
import { ShoppingHistoryService } from "./shopping-history.service";
import { CreateShoppingHistoryDto } from "./dto/create-shopping-history.dto";

@Controller("shopping-history")
export class ShoppingHistoryController {
  constructor(private shoppingHistoryService: ShoppingHistoryService) {}

  @Get("")
  findAll(): Promise<ShoppingHistory[]> {
    return this.shoppingHistoryService.findAll();
  }

  @Post("")
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() createShoppingHistoryDto: CreateShoppingHistoryDto,
  ): Promise<ShoppingHistory> {
    return this.shoppingHistoryService.create(createShoppingHistoryDto);
  }
}
