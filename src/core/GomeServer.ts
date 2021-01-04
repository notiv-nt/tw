import Player from './Player';

class GameServer {
  public players: Player[] = [];

  start() {
    this.tick();
  }

  tick() {
    this.fpsCounter();

    this.players.forEach((player) => {
      player.tick();
    });

    setTimeout(() => this.tick(), 1000);
    // setTimeout(() => this.tick(), 15);
  }

  private fps: number = 0;
  private lastTime: number = Date.now();
  fpsCounter() {
    let currentTime = Date.now();

    // Every sec
    if (currentTime - this.lastTime >= 1000) {
      console.log('FPS', this.fps, currentTime);

      this.lastTime = currentTime;
      this.fps = 0;
    }

    this.fps++;
  }
}

export default GameServer;
export { GameServer };
