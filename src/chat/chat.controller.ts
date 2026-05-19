import { BadRequestException, Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ChatService } from './chat.service';
import { SaveMessageDto } from './chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  saveMessage(@Body() body: SaveMessageDto) {
    const { session_id, message_id, sender, content, timestamp } = body;

    if (!session_id || !message_id || !sender || !content || !timestamp) {
      throw new BadRequestException('Missing required fields');
    }

    if (sender !== 'user' && sender !== 'ai') {
      throw new BadRequestException('sender must be either user or ai');
    }

    return this.chatService.saveMessage(body);
  }

  @Get('history')
  getHistory(@Query('session_id') sessionId?: string) {
    if (!sessionId) {
      throw new BadRequestException('session_id is required');
    }

    return this.chatService.getHistory(sessionId);
  }
}
