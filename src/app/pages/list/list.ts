import { Component, inject } from '@angular/core';
import { ListServices } from '../../services/list/list.services';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
readonly pokemonService = inject(ListServices) 

protected readonly pokeListResource = this.pokemonService.getPokeList();
}
