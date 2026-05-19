import type { ChatSender } from './chat.types';

export class SaveMessageDto {
  session_id!: string;
  message_id!: string;
  sender!: ChatSender;
  content!: string;
  timestamp!: string;
}
