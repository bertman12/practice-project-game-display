import { Component } from '@angular/core';
import { GameDataService } from '../game-data.service';
import { Game } from '../shared/game-model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent {
  title:string = "";
  description:string = "";

  constructor(public readonly gameData: GameDataService) {}

  onAddGame () {
    this.gameData.addGame({title: this.title, description: this.description});
  }
  
  getColor(){
    let red  = 30;
    let green  = this.gameData.gameList.length * 50;
    let blue  = 20;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onDeleteGame(game:Game){
    this.gameData.deleteGame(game);
  }
  
}
