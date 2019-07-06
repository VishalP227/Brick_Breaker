export default class Hearts {
  constructor(game, position) {
    this.image = document.getElementById("hearts");
    this.game = game;
    this.position = position;
    this.width = 18;
    this.height = 18;
  }

  update(deltaTime) {
    //pass
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
