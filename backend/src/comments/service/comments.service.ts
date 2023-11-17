
import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comments.entity';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async addCommentToProduct(userId: number, productId: number, content: string): Promise<Comment> {
    const user = await this.userRepository.findOneBy({ id: userId });
    const product = await this.productRepository.findOneBy({ id: productId });
    if (!user || !product) {
      throw new Error('User or Product not found');
    }
    const comment = this.commentsRepository.create({
      content,
      user,
      product,
    });
    await this.commentsRepository.save(comment);
    return comment;
  }

  async removeComment(userId: number, commentId: number): Promise<void> {
    const comment = await this.commentsRepository.findOne({
      where: { id: commentId },
      relations: ['user'],
    });

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    if (comment.user.id !== userId) {
      throw new UnauthorizedException('You are not authorized to delete this comment');
    }

    await this.commentsRepository.delete(commentId);
  }

  async updateComment(commentId: number, content: string, userId: number): Promise<Comment> {
    const comment = await this.commentsRepository.findOne({
      where: { id: commentId },
      relations: { user: true },
    });
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${commentId} not found`);
    }
    if (comment.user.id !== userId) {
      throw new UnauthorizedException('You are not authorized to edit this comment');
    }
    comment.content = content;
    return this.commentsRepository.save(comment);
  }
}
