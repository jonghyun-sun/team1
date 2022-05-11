import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QueryBuilder } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentService } from './payments.service';

@Resolver()
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation(() => Payment)
  async createPayment(@Args('price') price: number) {
    return await this.paymentService.payment({ price });
  }
  // @Query(() => [Order])
  // fetchOrder() {
  //   return this.orderService.findAll();
  // }
  // @Query(() => String)
  // fetchOrders() {
  //   return 'hello';
  // }
  // // @Query(() => Review)
  // // fetchReview(@Args('reviewId') reviewId: string) {
  // //   return this.reviewService.findOne({ reviewId });
  // // }
  // @Mutation(() => Order)
  // createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
  //   return this.orderService.create({ createOrderInput });
  // }
}
