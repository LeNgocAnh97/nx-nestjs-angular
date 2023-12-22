import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Loại cơ sở dữ liệu
      host: 'localhost',
      port: 3306, // Port mặc định của MySQL
      username: 'root',
      password: 'password',
      database: 'my_database',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true, // Đặt false trong môi trường sản xuất
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
