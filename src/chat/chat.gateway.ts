import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinChat')
  joinChat(
    @MessageBody() data: { email: string; googleId?: string },
    @ConnectedSocket() client: Socket,
  ) {
    // Define o tipo de usuário: suporte se o email termina com @suporte.com; caso contrário, cliente.
    let userType = 'client';
    if (data.email && data.email.endsWith('@suporte.com')) {
      userType = 'support';
    }
    client.data.userType = userType;
    // Faz o join de todos na mesma sala (pode ser customizado conforme a lógica do sistema)
    client.join('chat-room');
    // Notifica os demais da sala que um novo usuário entrou
    this.server
      .to('chat-room')
      .emit('userJoined', { clientId: client.id, userType });
  }

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data: { message: string },
    @ConnectedSocket() client: Socket,
  ) {
    const userType = client.data.userType || 'client';
    const payload = {
      message: data.message,
      sender: client.id,
      userType,
      timestamp: new Date(),
    };
    // Aqui você pode, por exemplo, persistir a mensagem via ChatService
    this.chatService.saveMessage(payload);
    // Envia a mensagem para todos na sala
    this.server.to('chat-room').emit('message', payload);
  }
}
