// controllers/comments.controller.ts
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
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

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:commentId')
  async removeComment(
      @Req() req,
      @Param('commentId') commentId: number,
  ): Promise<void> {
    const userId = req.user.id;
    return this.commentsService.removeComment(userId, commentId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('edit/:commentId')
  updateComment(
      @Req() req,
      @Param('commentId') commentId: number,
      @Body('content') content: string,
  ) {
    console.log(commentId)
    const userId = req.user.id;
    return this.commentsService.updateComment(commentId, content, userId);
  }
}
