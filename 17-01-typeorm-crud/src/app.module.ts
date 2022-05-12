import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';
import { ProductModule } from './apis/products/product.module';
import { CustomModule } from './apis/custom/customs.module';
import { ReviewModule } from './apis/review/reviews.module';
import { OrderModule } from './apis/order/orders.module';
import { PaymentModule } from './apis/payment/payments.module';
import { UserModule } from './apis/user/users.module';
import { AuthModule } from './apis/auth/auth.module';
import { CouponModule } from './apis/coupon/coupon.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    CouponModule,
    CustomModule,
    OrderModule,
    PaymentModule,
    ProductCategoryModule,
    ProductModule,
    ReviewModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'team',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
