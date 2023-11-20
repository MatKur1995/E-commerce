import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '../../comments/entities/comments.entity';
import { Repository } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { CommentReplies } from '../entities/comments-replies.entity';

@Injectable()
export class CommentsRepliesService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    @InjectRepository(CommentReplies)
    private commentsRepliesRepository: Repository<CommentReplies>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async addReplyToComment(userId: number, commentId: number, content: string): Promise<CommentReplies> {
    const user = await this.userRepository.findOneBy({ id: userId });
    const comment = await this.commentsRepository.findOneBy({ id: commentId });
    if (!user || !comment) {
      throw new Error('User or Comment not found');
    }
    const commentReply = this.commentsRepliesRepository.create({
      content,
      user,
      comment,
    });
    await this.commentsRepliesRepository.save(commentReply);
    return commentReply;
  }

  async removeReply(userId: number, replyId: number): Promise<void> {
    const reply = await this.commentsRepliesRepository.findOne({
      where: { id: replyId },
      relations: ['user'],
    });

    if (!reply) {
      throw new NotFoundException('Comment not found');
    }

    if (reply.user.id !== userId) {
      throw new UnauthorizedException('You are not authorized to delete this comment');
    }

    await this.commentsRepliesRepository.delete(replyId);
  }

  async updateReply(replyId: number, content: string, userId: number): Promise<CommentReplies> {
    const reply = await this.commentsRepliesRepository.findOne({
      where: { id: replyId },
      relations: { user: true },
    });
    if (!reply) {
      throw new NotFoundException(`Reply with ID ${reply} not found`);
    }
    if (reply.user.id !== userId) {
      throw new UnauthorizedException('You are not authorized to edit this reply.');
    }
    reply.content = content;
    return this.commentsRepliesRepository.save(reply);
  }

}
