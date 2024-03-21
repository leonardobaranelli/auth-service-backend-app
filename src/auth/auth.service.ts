import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
  const user = await this.userService.findByUsername(email);  
  if (user && await bcrypt.compare(password, user.password)) {    
    return { email: user.email, userId: user.id };
  }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    process.env.ACCESS_TOKEN = this.jwtService.sign(payload);
    return  "Loggin successfully" ;
  }
}
