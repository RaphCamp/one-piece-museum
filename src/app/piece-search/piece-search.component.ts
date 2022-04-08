import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Piece } from '../piece';
import { PieceService } from '../piece.service';

@Component({
  selector: 'app-piece-search',
  templateUrl: './piece-search.component.html',
  styleUrls: [ './piece-search.component.css' ]
})
export class PieceSearchComponent implements OnInit {

  pieces$!: Observable<Piece[]>;

  private searchTerms = new Subject<string>();

  constructor(private pieceService: PieceService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pieces$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.pieceService.searchPieces(term)),
    );
  }
}