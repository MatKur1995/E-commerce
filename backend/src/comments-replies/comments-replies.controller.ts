import { Body, Controller, Delete, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { CommentsRepliesService } from './services/comments-replies.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Comment } from '../comments/entities/comments.entity';
import { CommentReplies } from './entities/comments-replies.entity';

@Controller('comments-replies')
export class CommentsRepliesController {
  constructor(private readonly commentsRepliesService: CommentsRepliesService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post('add-reply/:commentId')
  async addReplyToComment(
    @Req() req,
    @Param('commentId') commentId: number,
    @Body('content') content: string,
  ): Promise<CommentReplies> {
    const userId = req.user.id;
    return this.commentsRepliesService.addReplyToComment(userId, commentId, content);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete-reply/:commentId')
  async removeReply(
    @Req() req,
    @Param('replyId') replyId: number,
  ): Promise<void> {
    const userId = req.user.id;
    return this.commentsRepliesService.removeReply(userId, replyId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('edit-reply/:commentId')
  updateReply(
    @Req() req,
    @Param('replyId') replyId: number,
    @Body('content') content: string,
  ): Promise<CommentReplies> {
    const userId = req.user.id;
    return this.commentsRepliesService.updateReply(replyId, content, userId);
  }


}
