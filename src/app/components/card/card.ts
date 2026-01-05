import { Component, input } from '@angular/core';
import { PokeResultModel } from '../../interfaces/poke-result.model';
import {  TitleCasePipe } from '@angular/common';
import { PokeImgPipe } from './poke-img/poke-img-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [TitleCasePipe,PokeImgPipe, RouterLink ,  ],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
readonly pokeResultI = input.required<PokeResultModel>()
}
