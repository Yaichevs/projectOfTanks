const CELL_SIZE = 32;

export default class View {
    constructor(canvas, sprite) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.sprite = sprite;
    }
   async init() {
        await this.sprite.load();
    }

    update(world) {
       this.clearScreen();
       this.renderLevel(world.level);
       this.renderPlayer1(world.player1);
    }

    renderLevel(level) {
        for(let i = 0; i < level.length; i++) {
            for(let j = 0; j < level.length; j++) {
                 const object = level[i][j];
                 const [x, y, width, height] = this.sprite.get(object.sprite);
                     this.context.drawImage(
                         this.sprite.image,
                         x, y, width, height,
                         j * CELL_SIZE, i * CELL_SIZE, width, height
                     );
            }
        }
    }
    
    renderPlayer1(player1) {
       this.context.drawImage(
        this.sprite.image, 
        ...player1.sprite,
        player1.x, player1.y, 32, 32,
     );
    }

    clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}