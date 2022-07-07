/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { userData } from './test.service';

@Injectable()
export class PostSearchUserService {
  PostSearchUserService(uid: number) {
    return userData[uid] ?? 'user not found';
  }
}
