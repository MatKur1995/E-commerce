import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Comment } from "../../comments/entities/comments.entity"

@Entity()
export class CommentReplies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @ManyToOne(() => User, user => user.replies)
  user: User;


  @ManyToOne(() => Comment, comment => comment.replies, { eager: false })
  comment: Comment;

}
