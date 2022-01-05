import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import ProductType from './ProductType';

@Entity('product')
class Product {
  @PrimaryColumn()
  Id: string;

  @ManyToOne((type) => ProductType, (p) => p.Id)
  @JoinColumn({
    name: 'TypeId',
    referencedColumnName: 'Id',
  })
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
