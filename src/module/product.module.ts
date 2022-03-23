import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from '../controllers/product.controller';
import { ProductSchema } from '../schemas/products.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mongo:mongo@cluster0.omkt4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{
      name:'Product',
      schema: ProductSchema
    }])
  ],
  controllers: [ProductController],
  providers: [AppService],
})
export class ProductModule {}
