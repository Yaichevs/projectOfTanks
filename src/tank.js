//танк, егор направление и поведение

export default class Tank {
    direction = 0;
    x = 64;
    y = 192;
    animationFrame = 0;
    frames = [
        [0 * 32, 0 * 32, 32, 32],
        [1 * 32, 0 * 32, 32, 32],
        [6 * 32, 0 * 32, 32, 32],
        [7 * 32, 0 * 32, 32, 32],
        [4 * 32, 0 * 32, 32, 32],
        [5 * 32, 0 * 32, 32, 32],
        [2 * 32, 0 * 32, 32, 32],
        [3 * 32, 0 * 32, 32, 32],
    ];

    get sprite() {
        return this.frames[this.direction * 2 + this.animationFrame];
    } 

    update(activekeys) {
        if(activekeys.has('ArrowUp')) {
            this._move(0, 'y', -1);
         } else if(activekeys.has('ArrowRight')) {
            this._move(3, 'x', 1);
         } else if(activekeys.has('ArrowDown')) {
            this._move(2, 'y', 1);
         } else if(activekeys.has('ArrowLeft')) {
            this._move(1, 'x', -1);
         } 
    }

    _move(direction, axis,  value) {
        this.direction = direction;
        this[axis] += value;
        this.animationFrame ^= 1;
    }
}