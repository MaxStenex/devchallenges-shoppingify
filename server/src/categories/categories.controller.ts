import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Category } from "./categories.entity";
import { CategoriesService } from "./categories.service";

@Controller("categories")
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Category[]> {
    const categories = await this.categoriesService.findAll();
    return categories;
  }
}
