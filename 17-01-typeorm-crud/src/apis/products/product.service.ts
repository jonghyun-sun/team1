import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductTag } from '../productsTag/entities/productTag.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ) {}
  async findAll() {
    return await this.productRepository.find();
  }
  async findOne({ productId }) {
    return await this.productRepository.findOne({ where: { id: productId } });
  }
  async create({ createProductInput }) {
    // 상품을 데이터베이스에 저장
    const { productTags, ...product } = createProductInput;
    console.log('-----------------');
    console.log(productTags);
    console.log('---------------');
    //productTags 저장
    const result2 = [];
    for (let i = 0; productTags.length > i; i++) {
      const tagname = productTags[i].replace('#', '');
      console.log(tagname);
      //이미 등록된 태그인지 확인
      const prevTag = await this.productTagRepository.findOne({
        tag: tagname,
      });
      //기존에 존재
      if (prevTag) {
        result2.push(prevTag);
        //기존에 태그가 없었다면
      } else {
        const newTag = await this.productTagRepository.save({ tag: tagname });
        result2.push(newTag);
      }
    }
    return await this.productRepository.save({
      ...product,
      productTags: result2,
    });
  }
}
