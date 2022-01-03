import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('product')
class Product {
  @PrimaryColumn()
  Id: string;

  TypeId: number;

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
