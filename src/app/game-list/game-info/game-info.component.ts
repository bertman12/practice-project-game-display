import { Component } from '@angular/core';
import { GameDataService } from 'src/app/game-data.service';


@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent {

  constructor(public readonly gameData: GameDataService) {}

  onDeleteGame(){
    this.gameData.deleteLastGame();
  }
}
