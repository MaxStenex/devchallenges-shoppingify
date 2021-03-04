import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./categories.entity";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findCategory(title: string): Promise<Category | null> {
    const category = await this.categoryRepository.findOne({
      where: { title },
    });
    if (!category) {
      return null;
    }
    return category;
  }

  async createCategory(title: string): Promise<Category> {
    const category = this.categoryRepository.create({ title });
    await this.categoryRepository.save(category);
    return category;
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find({ relations: ["items"] });
  }

  async deleteCategory(categoryId: number): Promise<boolean> {
    await this.categoryRepository.delete(categoryId);
    return true;
  }
}
