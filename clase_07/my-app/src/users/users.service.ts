import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument} from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

// // definimos un array de users
// users: Array<User>


// creamos un constructor
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument> ){  }

 create(createUserDto: CreateUserDto) {
   return  this.userModel.create(createUserDto)
  }

  findAll() {
    return  this.userModel.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
