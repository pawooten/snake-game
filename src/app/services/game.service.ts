import * as CONFIG from '../sprites.config';

import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

    image: HTMLImageElement = null;
    context: CanvasRenderingContext2D;

    loadAssets(canvasElement: HTMLCanvasElement): Promise<void> {
      this.context = canvasElement.getContext('2d');
      return new Promise((resolve, reject) => {
        this.image = new Image();
        this.image.src = CONFIG.spritesPath;
        this.image.width = 58;
        this.image.height = 128;
        this.image.onload = () => { resolve(); };
      });
    }

    startGameLoop() {
      const spriteX = 0;
      const spriteY = 0;
      const spriteWidth = 130;
      const spriteHeight = 180;
      const x = 20;
      const y = 20;
      this.context.drawImage(this.image, spriteX, spriteY, spriteWidth, spriteHeight, x, y, 100, 100);
    }
}
