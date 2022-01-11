import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import Product from './Product';

@Entity()
class ProductType {
  @PrimaryColumn()
  Id: number;

  @Column()
  Description: string;

  @Column()
  Name: string;

  // @OneToMany(() => Product, (prod) => prod.TypeId)
  // Products: Product[];

  @CreateDateColumn()
  CreatedAt: string;

  @UpdateDateColumn()
  UpdatedAt: string;
}

export default ProductType;
