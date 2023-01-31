import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import HeaderComponent from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponentComponent } from './pokemon-list-component/pokemon-list-component.component';
import { PokemonCardDetailsComponent } from './pokemon-card-details/pokemon-card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonCardComponent,
    PokemonListComponentComponent,
    PokemonCardDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
