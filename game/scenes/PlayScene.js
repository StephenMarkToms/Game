import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' })
  }

  create() {
    this.add.image(400, 300, 'sky')
    this.cameras.main.setBackgroundColor('#4488AA')
  }

  update() {}
}
