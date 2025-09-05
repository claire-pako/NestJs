import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MesagesController {
    @Get()
    listMessage() {}

    @Post()
    createMessage(@Body() body : CreateMessageDto) {
        console.log(typeof body);
    }

    @Get('/:id')
    getMessage(@Param('id') id : string) {
        console.log(id);
    }

}
