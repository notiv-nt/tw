import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
  transports: ['websocket'],
});

const MAIN_SIZE = 40;

const player = {
  pos: { x: 0, y: 0 },
  width: 40,
  height: 40,
};

socket.on('pos', (pos: { x: number; y: number }) => {
  player.pos = pos;
});

const view: HTMLCanvasElement = document.querySelector('#view') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = view.getContext('2d') as CanvasRenderingContext2D;

view.width = window.innerWidth;
view.height = window.innerHeight;

function loop() {
  ctx.clearRect(0, 0, view.width, view.height);

  let prev_strokeStyle = ctx.fillStyle;

  ctx.beginPath();
  ctx.fillStyle = '#25292D';
  ctx.rect(player.pos.x, player.pos.y, player.width, player.height);
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = prev_strokeStyle;

  // drawCollisionRectangle(i.x, i.y);

  // for (let i of this.drawCollisions) {
  //   // console.log(i.x, i.y);
  //   drawCollisionRectangle(i.x, i.y);
  // }

  function drawCollisionRectangle(x: number, y: number) {
    let prevStrokeStyle = ctx.strokeStyle;
    let prevlineWidth = ctx.lineWidth;

    ctx.strokeStyle = 'rgba(234, 44, 80, 1)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, MAIN_SIZE, MAIN_SIZE);
    ctx.strokeStyle = prevStrokeStyle;
    ctx.lineWidth = prevlineWidth;
  }

  requestAnimationFrame(loop);
}

loop();
