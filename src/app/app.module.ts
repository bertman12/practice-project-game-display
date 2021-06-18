import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameInfoComponent } from './game-list/game-info/game-info.component';
import { FooterComponent } from './footer/footer.component';
import { GameDataService } from './game-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameListComponent,
    GameInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
