import { Module } from '@nestjs/common';
import { CommentsRepliesController } from './comments-replies.controller';
import { CommentsRepliesService } from './services/comments-replies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '../comments/entities/comments.entity';
import { User } from '../users/entities/user.entity';
import { CommentReplies } from './entities/comments-replies.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentReplies, Comment, User]),
  ],
  controllers: [CommentsRepliesController],
  providers: [CommentsRepliesService],
})
export class CommentsRepliesModule {}
