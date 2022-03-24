import { ApiProperty } from "@nestjs/swagger";

export class getProductDto{
    @ApiProperty()
    productId = '';

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    value: number;

}