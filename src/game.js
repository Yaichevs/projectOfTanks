

export default class Game {
    constructor({ world, view, levels }) {
        this.world = world;
        this.view = view;
        this.levels = levels;
        this.activekeys = new Set();
        this.level = 0;
        this.loop = this.loop.bind(this);
    }

    async init() {
        this.view.init();
        this.world.setLevel(this.levels[this.level]);

        document.addEventListener('keydown', event => {
            event.preventDefault();
            switch(event.code) {
                case 'ArrowUp':                                   
                case 'ArrowRight':                
                case 'ArrowDown':          
                case 'ArrowLeft':
                case 'Space':
                case 'Enter':
                    this.activekeys.add(event.code);

            }
            this.key = event.code;
        });

        document.addEventListener('keyup', event => {
            event.preventDefault();
            switch(event.code) {
                case 'ArrowUp':   
                case 'ArrowRight': 
                case 'ArrowDown':     
                case 'ArrowLeft':   
                case 'Space':
                case 'Enter':
                    this.activekeys.delete(event.code);

            }
            this.key = '';
        });
    }

    start() {
        requestAnimationFrame(this.loop);
    }

    loop() {
    //get input, update world, view
        this.world.update(this.activekeys);
        this.view.update(this.world);
        requestAnimationFrame(this.loop);
    }

}
