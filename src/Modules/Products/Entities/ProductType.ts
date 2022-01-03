import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class ProductType {
  @PrimaryColumn()
  Id: string;

  @Column()
  Description: string;

  @Column()
  Name: string;

  @CreateDateColumn()
  CreatedAt: string;

  @UpdateDateColumn()
  UpdatedAt: string;
}

export default ProductType;
