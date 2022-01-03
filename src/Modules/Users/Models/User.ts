import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class User {
  @PrimaryColumn()
  Id: string;

  @Column()
  Name: string;

  @Column()
  Surname: string;

  @Column()
  CPF: string;

  @Column()
  Email: string;

  @Column()
  Password: string;

  @Column()
  Cellphone: string;

  @Column()
  Address: string;

  @Column()
  Neighborhood: string;

  @Column()
  City: string;
  @Column()
  UF: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}

export default User;
