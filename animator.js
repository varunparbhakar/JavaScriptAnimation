class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});

        this.elaspedTime = 0;
        this.totalTime = frameCount * frameDuration;

    };
    drawFrame(tick, ctx, x, y) {
        var scale = 5.8
        this.elaspedTime += tick
        if(this.elaspedTime > this.totalTime) {
            this.elaspedTime = 0;
        }

        const frame = this.currentFrame();

        ctx.drawImage(this.spritesheet,
            this.xStart + this.width * frame, this.yStart,
            this.width, this.height,
            x, y,
            this.width * scale, this.height * scale
        )
    };

    currentFrame() {
        return Math.floor(this.elaspedTime / this.frameDuration);
    };

    isDone() {
        return (this.elaspedTime >= this.totalTime);
    }

}