import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AppService } from './services/app.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('canvas') public canvas: ElementRef;
  subscription: any;

  constructor( private appService: AppService, private gameService: GameService ) {
  }

  public ngAfterViewInit(): void {
    const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;
    this.appService.createPlayGround(canvasElement);
    this.subscription = this.appService.getImageLoadEmitter()
    .subscribe(() => {
      // this.showLoader = false;
      this.gameService.startGameLoop();
    });
  }
}
