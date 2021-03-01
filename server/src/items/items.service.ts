import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesService } from "src/categories/categories.service";
import { Repository } from "typeorm";
import { CreateItemDto } from "./dto/create-item.dto";
import { Item } from "./items.entity";

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
    private readonly categoriesService: CategoriesService,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const categoryTitle = createItemDto.categoryTitle;
    const createdItem = this.itemsRepository.create({ ...createItemDto });
    let category = await this.categoriesService.findCategory(categoryTitle);
    if (!category) {
      category = await this.categoriesService.createCategory(categoryTitle);
    }
    createdItem.category = category;

    await this.itemsRepository.save(createdItem).catch((err) => {
      // item name already taken
      if (err.code === "23505") {
        throw new HttpException(
          "This product name already exists",
          HttpStatus.BAD_REQUEST,
        );
      }
    });
    return createdItem;
  }
}
