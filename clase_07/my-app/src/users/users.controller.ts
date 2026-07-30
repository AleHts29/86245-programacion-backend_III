import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
 async create(@Body() createUserDto: CreateUserDto) {
    // Validamos
    if(!createUserDto.first_name || !createUserDto.email) throw new HttpException('datos incompletos', HttpStatus.BAD_REQUEST )
    const result = await this.usersService.create(createUserDto);
    return {status: 'Success', message: `Usuario con ID:${result} de forma exitosa!!`}
  }

  @Get()
   async findAll() {
    const users =  await this.usersService.findAll();
    return {status: 'Success', payload: users}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
