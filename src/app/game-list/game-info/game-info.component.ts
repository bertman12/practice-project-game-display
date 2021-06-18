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
    this.gameData.deleteGame(this.gameData.gameList[this.gameData.gameList.length - 1]);
    console.log('The last added game is: ')
    console.log(this.gameData.lastAddedGame);
    console.log('====================================');
  }
}
