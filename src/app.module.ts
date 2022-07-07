import { PostSearchUserService } from './test/postsearchuser.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { SearchService, TestService } from './test/test.service';
import { TestModule } from './test/test.module';

@Module({
  imports: [TestModule],
  controllers: [AppController, TestController],
  providers: [PostSearchUserService, AppService, TestService, SearchService],
})
export class AppModule {}
