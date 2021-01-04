import { Server as SocketServer } from 'socket.io';
import { Server } from 'http';

class SocketService extends SocketServer {
  constructor(httpServer: Server) {
    super(httpServer, {
      cors: {
        origin: '*:*',
      },
    });
  }
}

export default SocketService;
export { SocketService };
