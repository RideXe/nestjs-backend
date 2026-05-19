import { Injectable } from '@nestjs/common';
import { MessageRecord, SessionRecord } from './chat.types';

@Injectable()
export class ChatService {
  private readonly sessions = new Map<string, SessionRecord>();
  private readonly messages = new Map<string, MessageRecord[]>();

  saveMessage(message: MessageRecord): MessageRecord {
    if (!this.sessions.has(message.session_id)) {
      this.sessions.set(message.session_id, {
        session_id: message.session_id,
        created_at: message.timestamp,
      });
    }

    const sessionMessages = this.messages.get(message.session_id) ?? [];
    sessionMessages.push(message);
    this.messages.set(message.session_id, sessionMessages);

    return message;
  }

  getHistory(sessionId: string): MessageRecord[] {
    const sessionMessages = this.messages.get(sessionId) ?? [];

    return [...sessionMessages].sort((a, b) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    });
  }
}
