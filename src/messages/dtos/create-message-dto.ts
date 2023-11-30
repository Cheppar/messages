import { IsString } from 'class-validator';

export class CreateMessageDto {

    // validation rule: ensure content in the body is 'string'
    @IsString()
    content: string
}