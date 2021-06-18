import { Injectable } from '@angular/core';
import { Game } from './shared/game-model';

@Injectable({
  providedIn: 'root'
})

export class GameDataService {

  gameList:Game[] = [
    {title: 'UtherParty', description: 'Minigames', itemNumber: 0},
    {title: 'Dota', description: 'MOBA style', itemNumber: 1},
    {title: 'Footman Frenzy', description: 'Brawl arena', itemNumber: 2}
  ];
  
  lastAddedGame: Game = this.gameList[this.gameList.length - 1];
  
  constructor() {}

  addGame (newGame:Game) {
    if((newGame.title.length !== 0) && (newGame.description.length !== 0)){
      newGame.itemNumber = this.gameList.length; 
      this.gameList.push({title: newGame.title, description: newGame.description, itemNumber: newGame.itemNumber});
    }
    this.lastAddedGame = this.gameList[this.gameList.length - 1];
  }

  deleteLastGame(){
    (this.gameList.length === 0) ? this.lastAddedGame = this.gameList.pop() : this.lastAddedGame = {title: '', description: ''};

  }

}


// console.log(`Game List:`);
// console.log(this.gameList);
// console.log(`Last Added Game:}`);
// console.log(this.lastAddedGame);