import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { PokeResultModel } from '../../interfaces/poke-result.model';
import { PokeListModel } from '../../interfaces/poke-list.model';

@Injectable({
  providedIn: 'root',
})
export class ListServices {
  getPokeList():HttpResourceRef<PokeListModel | undefined>{
    return httpResource<PokeListModel>(()=>`${environment.apiPokeUrl}/pokemon?limit=4`)
  }
}
