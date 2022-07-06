import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  TestSuccess() {
    return 'Test return successfully~';
  }
}
