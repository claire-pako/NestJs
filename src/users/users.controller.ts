import { Body, Controller, Post, Get, Query, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { Serialize } from '../interceptors/serialize.interceptor';
import { CreateUserDto } from './dtos/create-user.dto';
import { updateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { UserDto } from './user-dto';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
    constructor(private userSservice : UsersService){}

    @Post('/signup')
    creatUser(@Body() body : CreateUserDto){
        //console.log(body);
        this.userSservice.create(body.email, body.password);
    }

    @Get('/:id')
    async findUser(@Param('id') id: string){
        const user = await this.userSservice.findOne(parseInt(id));
        if(!user){
            throw new NotFoundException('not found user');
        }

        return user;
    }

    @Get()
    findAllUsers(@Query('email') email: string){
        return this.userSservice.find(email);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string){
        return this.userSservice.remove(parseInt(id));
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: updateUserDto){
        return this.userSservice.update(parseInt(id), body);
    }


}
