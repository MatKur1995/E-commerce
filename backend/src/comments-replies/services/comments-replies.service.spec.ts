import { Test, TestingModule } from '@nestjs/testing';
import { CommentsRepliesService } from './comments-replies.service';

describe('CommentsRepliesService', () => {
  let service: CommentsRepliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsRepliesService],
    }).compile();

    service = module.get<CommentsRepliesService>(CommentsRepliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
