import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column({
    type: 'int',
    width: 11,
    default: 0,
    transformer: {
      to(value: boolean): number {
        return value ? 1 : 0;
      },
      from(value: number): boolean {
        return value === 1;
      },
    },
  })
  hotDeal: boolean;

  @Column('text')
  longDescription: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}
