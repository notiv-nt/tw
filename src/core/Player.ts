import { Socket } from 'socket.io';
import Vector from '../utils/Vector';

interface PlayerOptions {
  socket: Socket;
}

class Player {
  public pos: Vector = new Vector();
  public socket: Socket;
  public width: number = 40;
  public height: number = 40;

  constructor(options: PlayerOptions) {
    this.socket = options.socket;
  }

  tick() {
    this.socket.emit('pos', this.pos);
  }
}

export default Player;
export { Player };
