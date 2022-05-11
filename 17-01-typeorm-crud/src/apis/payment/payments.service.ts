import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { Payment } from './entities/payment.entity';
@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}
  // async findAll() {
  //   return await this.orderRepository.find();
  // }
  // // async findOne({ reviewId }) {
  // //   return await this.reviewRepository.findOne({ where: { id: reviewId } });
  // // }
  // async create({ createOrderInput }) {
  //   const { productId, ...order } = createOrderInput;
  //   const result1 = await this.productRepository.findOne({
  //     id: productId,
  //   });
  //   const result2 = await this.orderRepository.save({
  //     ...order,
  //     product: result1,
  //   });
  //   return result2;
  // }
}
