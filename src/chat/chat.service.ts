import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  saveMessage(message: any) {
    // Implemente aqui a lógica de persistência, se necessário.
    console.log('Mensagem recebida:', message);
  }
}
