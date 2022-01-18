import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import Product from './Product';

@Entity('ProductColors')
class ProductColors {
  @PrimaryColumn()
  Id: number;

  @Column()
  ProductColorUrl: string;

  @Column()
  Name: string;

  @ManyToOne((type) => Product, (prod) => prod.Colors)
  Product: Product;

  @CreateDateColumn()
  CreatedAt: string;

  @UpdateDateColumn()
  UpdatedAt: string;
}

export default ProductColors;
