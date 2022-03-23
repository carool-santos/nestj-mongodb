import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Product } from './schemas/products.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>
  ){}

  async createProduct(product: Product){
    const createProduct = new this.productModel(product);
    return await createProduct.save()
  }

  async getProducts() {
  return await this.productModel.find().exec();
  }

  async getProductById(id: string){
    return await this.productModel.findById(id).exec();
  }

  async updateProduct(id: string, product: Product){
     await this.productModel.updateOne({_id: id}, product).exec();
     return this.getProductById(id)
  }

  async updateStatusProduct(id: string, product: Product){
    await this.productModel.updateOne({_id: id}, product).exec();
    return this.getProductById(id)
 }
   async deleteProduct(id: string){
    return await this.productModel.findByIdAndDelete({_id:id}).exec();
  }
}
