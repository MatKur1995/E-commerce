import { Test, TestingModule } from '@nestjs/testing';
import { CommentsRepliesController } from './comments-replies.controller';

describe('CommentsRepliesController', () => {
  let controller: CommentsRepliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsRepliesController],
    }).compile();

    controller = module.get<CommentsRepliesController>(CommentsRepliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
