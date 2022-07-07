import { Injectable } from '@nestjs/common';

export const userData = {
  1: { username: 'Maxtune', uid: 1 },
};

@Injectable()
export class TestService {
  TestSuccess(name?: string) {
    return 'Hello ' + name + ', ' + 'Test return successfully~';
  }
}

@Injectable()
export class SearchService {
  SearchService(uid: number) {
    return userData[uid] ?? 'user not found';
  }
}
