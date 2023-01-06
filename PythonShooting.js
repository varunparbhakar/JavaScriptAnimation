class PythonShooting {
    constructor(game) {
        var width = 99
        var height = 128
        var frameCount = 4
        var frameDuration = 0.15
        this.game = game;
        this.x = -50
        this.y = 25;
        this.speed = 100;
        var path = "./Python Shooting Aimed.png";
        this.animator = new Animator(ASSET_MANAGER.getAsset(path),0,0,width, height, frameCount, frameDuration)
    };

    update() {
        this.x += this.speed * this.game.clockTick
        if(this.x + 450 > 1024) {
            this.x = 0;
        }
    }
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y)
        // ctx.drawImage(ASSET_MANAGER.getAsset("./Python Shooting Aimed.png"),0,0)
    }
}