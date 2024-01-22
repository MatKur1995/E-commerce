import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class DiscountCode {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    codeCreateDate: Date;

    @Column()
    code: string;

    @Column({ type: 'float' })
    discountPercentage: number;
}
