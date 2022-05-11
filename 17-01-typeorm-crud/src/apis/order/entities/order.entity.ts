import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => Int)
  count: number;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => String)
  address: string;

  @Column()
  @Field(() => String)
  recieverName: string;

  @Column()
  @Field(() => String)
  recieverPhone: string;

  @ManyToOne(() => Product)
  product: Product;
}
