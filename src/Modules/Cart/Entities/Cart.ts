import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Customers from '../../Users/Entities/Customer';

@Entity()
class Carts {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column()
  CustomerId: string;

  @OneToOne(() => Customers)
  @JoinColumn({ name: 'CustomerId' })
  user: Customers;

  @Column()
  Purchased: number;
}

export default Carts;
