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

  deleteGame(game?: Game, index?: number):void {
    console.log("The Game removed is: ");
    console.log(game);
    console.log("The GameList is now: ");
    console.log(this.gameList);
    
    
    if(game){
      this.gameList.splice(this.gameList.indexOf(game),1);
      if(this.gameList.length){
        this.lastAddedGame = this.gameList[this.gameList.length - 1];
      }
      else{
        this.lastAddedGame = new Game();
      }
    }

    else if(index){
      this.gameList.splice(index, 1);
      if(this.gameList.length){
        this.lastAddedGame = this.gameList[this.gameList.length - 1];
      }
      else{
        this.lastAddedGame = new Game();
      }
    }
  }

}

