import {Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, Column} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { OrderItem } from './ordersItem.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    user: User;

    @OneToMany(() => OrderItem, orderItem => orderItem.order)
    items: OrderItem[];

    @CreateDateColumn()
    orderDate: Date;

    @Column()
    status: string;
}