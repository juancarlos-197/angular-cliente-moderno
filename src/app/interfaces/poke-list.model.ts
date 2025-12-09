import { PokeResultModel } from "./poke-result.model";

export interface PokeListModel {
     count:number;
    next: string;
    previous?: string;
    results: PokeResultModel[];

}
