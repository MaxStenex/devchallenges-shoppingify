import { Controller } from "@nestjs/common";
import { ShoppingHistoryService } from "./shopping-history.service";

@Controller("shopping-history")
export class ShoppingHistoryController {
  constructor(private shoppingHistoryService: ShoppingHistoryService) {}
}
