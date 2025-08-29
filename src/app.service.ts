import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hey i learning nestJs wish me good luck";
  }
}
