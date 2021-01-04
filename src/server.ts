import express from 'express';
import { createServer } from 'http';
import GameServer from './core/GomeServer';
import Player from './core/Player';
import SocketService from './services/SocketService';

function main() {
  const app = express();
  const httpServer = createServer(app);
  const socketService = new SocketService(httpServer);
  const gameServer = new GameServer();

  socketService.on('connection', (socket) => {
    const player = new Player({
      // id: socket.id,
      socket,
    });

    gameServer.players.push(player);
  });

  gameServer.start();

  httpServer.listen(3000, () => console.log('Listening on http://localhost:3000'));
}

main();
