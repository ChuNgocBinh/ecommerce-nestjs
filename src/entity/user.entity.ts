import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  user_name: string;

  @Column({ length: 255, nullable: false })
  email: string;

  @Column({ length: 255, nullable: false })
  password: string;

  @Column({ length: 255, nullable: false })
  phone_number: string;

  @Column({ length: 255, nullable: true })
  address: string;

  @Column({ length: 1000, nullable: true })
  access_token: string;

  @Column({ length: 1000, nullable: true })
  refresh_token: string;

  @Column({ default: 0, nullable: false })
  isActive: number;

  @Column({ length: 255, nullable: true })
  access_key_email: string;

  @Column({ length: 255, nullable: true })
  profile_picture: string;

  @Column({ nullable: true })
  gg_sso: number;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}
