import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    shortDescription: string;

    @Column()
    platform: string;

    @Column()
    category: string;

    @Column()
    image: string;

    @Column('text')
    longDescription: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

}
