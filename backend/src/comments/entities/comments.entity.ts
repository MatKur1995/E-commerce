import {
  Column,
  Entity,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';
import { CommentReplies } from '../../comments-replies/entities/comments-replies.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Product, product => product.comments, { eager: false })
  product: Product;

  @OneToMany(() => CommentReplies, reply => reply.comment)
  replies: CommentReplies[];
}
