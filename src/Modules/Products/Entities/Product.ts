import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import ProductType from './ProductType';

@Entity('product')
class Product {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column()
  TypeId: number;

  @ManyToOne(() => ProductType)
  @JoinColumn({ name: 'TypeId' })
  ProductType: ProductType;

  @Column()
  Sku: string;

  @Column()
  Name: string;

  @Column()
  Value: number;

  @Column()
  StockAmount: number;

  @Column()
  ProductUrl: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}

export default Product;
