import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { TestDto, userDto } from './dtos/test.dto';
import { PostSearchUserService } from './postsearchuser.service';
import { SearchService, TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(
    private readonly testService: TestService,
    private readonly searchService: SearchService,
    private readonly postSearchService: PostSearchUserService,
  ) {}
  @Get('check')
  check(@Query('name') name: string) {
    return this.testService.TestSuccess(name);
  }
  @Get('search')
  search(@Query('uid', ParseIntPipe) uid: number) {
    return this.searchService.SearchService(uid);
  }
  @Post('postcheck')
  postcheck(@Body() Test: TestDto) {
    return this.testService.TestSuccess(Test.name);
  }
  @Post('postsearch')
  postsearch(@Body() Test: userDto) {
    return this.postSearchService.PostSearchUserService(Test.uid);
  }
}
