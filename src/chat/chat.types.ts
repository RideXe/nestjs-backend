export type ChatSender = 'user' | 'ai';

export interface SessionRecord {
  session_id: string;
  created_at: string;
}

export interface MessageRecord {
  message_id: string;
  session_id: string;
  sender: ChatSender;
  content: string;
  timestamp: string;
}
