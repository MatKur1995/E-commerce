// controllers/comments.controller.ts
import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { CommentsService } from './service/comments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Comment } from '../comments/entities/comments.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('add/:userId/:productId')
  async addCommentToProduct(
    @Param('userId') userId: number,
    @Param('productId') productId: number,
    @Body('content') content: string,
  ): Promise<Comment> {
    return this.commentsService.addCommentToProduct(userId, productId, content);
  }
}
