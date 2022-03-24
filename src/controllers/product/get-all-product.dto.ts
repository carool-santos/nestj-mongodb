import { ApiProperty } from '@nestjs/swagger'
import {Document} from 'mongoose'


export class getAllProductsDto extends Document{

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    value: number;


}