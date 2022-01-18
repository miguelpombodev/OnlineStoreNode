import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import ProductColors from './ProductColors';
import ProductType from './ProductType';

@Entity('Product')
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

  @OneToMany((type) => ProductColors, (color) => color.Product)
  Colors: ProductColors[];

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}

export default Product;
