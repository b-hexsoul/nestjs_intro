import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateCatDto } from "./create-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "../interfaces/cat.interface";

@Controller('cats')
export class CatsController {
  // below allows us to both declare and intialize the catsService member immediately
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string): string {
    return `Here is cat number ${id}`
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Put('id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} cat`;
  }

  @Delete('id')
  delete(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}