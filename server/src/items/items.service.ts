import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesService } from "src/categories/categories.service";
import { getConnection, Repository } from "typeorm";
import { CreateItemDto } from "./dto/create-item.dto";
import { Item } from "./items.entity";

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
    private readonly categoriesService: CategoriesService,
  ) {}

  async findByIds(ids: number[]): Promise<Item[]> {
    return this.itemsRepository.findByIds(ids);
  }

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

  async findOne(itemId: number): Promise<Item> {
    const item = await this.itemsRepository.findOne(itemId, {
      relations: ["category"],
    });
    return item;
  }

  async deleteOne(itemId: number): Promise<HttpStatus> {
    try {
      const item = await this.itemsRepository.findOne(itemId, {
        relations: ["category"],
      });
      await this.itemsRepository.delete(item);
      const categoryItems = await getConnection().query(
        `SELECT *
        FROM category c
        INNER JOIN item i ON c.id = i."categoryId"
        WHERE c.id = ${item.category.id};`,
      );
      if (categoryItems.length < 1) {
        await this.categoriesService.deleteCategory(item.category.id);
      }

      return HttpStatus.OK;
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
