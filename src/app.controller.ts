import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('Users')
  getAllUser(): { message: string } {
    return { message: 'here is all the users' };
  }

  @Get('Users/myid')
  getMyId(): { message: string } {
    return { message: 'my id is 1234' };
  }

  @Get('admin')
  getAdmin(): { message: string } {
    return { message: 'here is the admin panel' };
  }
}
