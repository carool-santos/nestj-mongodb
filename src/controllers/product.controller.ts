import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Product } from 'src/schemas/products.schema';
import { AppService } from '../app.service';

@ApiTags('Product')


@Controller('product')
export class ProductController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createProduct(@Body()product: Product): Promise<Product>{
    return this.appService.createProduct(product)
  }

  @Get('products')
  async getProducts(): Promise<Product[]> {
    return await this.appService.getProducts();
  }

  @Get(':id')
  async getProduct(
    @Param('id') id: string ): Promise<Product> {
    return await this.appService.getProductById(id);
  }


  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body()product: Product): Promise<Product> {
    return await this.appService.updateProduct(id, product);
  }

  @Patch('/:id/status')
  async updateStatusProduct(@Param('id') id: string, @Body()product: Product): Promise<Product> {
    return await this.appService.updateProduct(id, product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id')id: string){
    return await this.appService.deleteProduct(id);
  }
}
