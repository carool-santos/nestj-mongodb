import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Product } from '../schemas/products.schema';
import { AppService } from '../app.service';
import { CreateProductDto } from './product/create-product.dto';
import { UpdateProductDto } from './product/update-product.dto';
import { getAllProductsDto } from './product/get-all-product.dto';


@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createProduct(@Body()createProductDto: CreateProductDto): Promise<Product>{
    return this.appService.createProduct(createProductDto)
  }

  @Get('products')
  async getProducts(
    @Query() query: getAllProductsDto
  ): Promise<Product[]> {
    return await this.appService.getProducts();
  }

  @Get(':id')
  async getProduct(
    @Param('id') id: string ): Promise<Product> {
    return await this.appService.getProductById(id);
  }


  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body()updateProductDto: UpdateProductDto): Promise<Product> {
    return await this.appService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id')id: string){
    return await this.appService.deleteProduct(id);
  }
}
