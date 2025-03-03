# PandaPlay Backend

Este é o backend do PandaPlay, um serviço de streaming de vídeos desenvolvido com NestJS. Ele fornece APIs REST para autenticação e gerenciamento de filmes, integração com Auth0 para login via Google, conexão com MongoDB para armazenamento de dados, integração com AWS S3 para busca de arquivos para streaming e WebSockets para suporte via chat em tempo real.

## Tecnologias Utilizadas
- **Node.js** (v18)
- **NestJS**
- **MongoDB**
- **Auth0** (Login via Google e email/senha)
- **AWS S3** (Armazenamento de arquivos)
- **WebSocket** (Chat em tempo real)

## Configuração do Ambiente
Antes de rodar o projeto, é necessário criar um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
PORT=3000
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/pandaplay
AUTH0_DOMAIN=seu-auth0-domain
AUTH0_CLIENT_ID=seu-client-id
AUTH0_CLIENT_SECRET=seu-client-secret
AWS_ACCESS_KEY_ID=sua-chave-aws
AWS_SECRET_ACCESS_KEY=sua-chave-secreta
AWS_S3_BUCKET=seu-bucket
JWT_SECRET=sua-chave-secreta
```

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/pandaplay-backend.git
   cd pandaplay-backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute o projeto em modo desenvolvimento:
   ```sh
   docker-compose up | podman-compose up
   ```
   ou
   ```sh
   npm run start:dev
   ```
4. A API estará disponível em `http://localhost:3000`
