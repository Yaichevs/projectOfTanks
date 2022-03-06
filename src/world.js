import Tank from './tank.js';

const CELL_SIZE = 32;

export default class World {
    level = null;
    player1 = new Tank();
    player2 = null;
    enemyTanks = [];

    

    setLevel(data) {
          this.level = data.map((blocks, y) => {
               return blocks.map((block, x) => {
                   return {
                       x: x *  CELL_SIZE,
                       y: y *  CELL_SIZE,
                       sprite: block
                    };
                });
            });
        }

    update(activekeys) {
      this.player1.update(activekeys);
    }
    
}