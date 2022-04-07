import { Injectable } from '@angular/core';
import {InMemoryDataService} from './in-memory-data.service';
import { Observable, of } from 'rxjs';

import { Piece } from './piece';
import { PIECES } from './mock-pieces';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
//pieces : PIECES[] = [

  constructor() { }

  getPieces() : Observable<Piece[]> {
    const pieces = of(PIECES);
    return pieces;
  }
}