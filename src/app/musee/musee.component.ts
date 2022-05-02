import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Piece } from '../piece';
import { PIECES } from '../mock-pieces';
import { PieceService } from '../piece.service';

import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

import { filter } from "rxjs/operators";
import { interval, of, timer } from "rxjs";

import { Observable , Subject} from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'musee',
  templateUrl: './musee.component.html',
  styleUrls: ['./musee.component.css',"../../../node_modules/bootswatch/dist/Litera/bootstrap.css"]
})
export class MuseeComponent implements OnInit {

  constructor(
    private pieceService: PieceService,
    private route : ActivatedRoute,
    
    ) { }


  ngOnInit(): void {
    this.pieceService.currentFilter.subscribe(message => this.messageChild = message);
    this.getPieces();

  }
  messageChild! : string;
  //@Input()  messageChild! : string;
  //ngOnChanges(changes: SimpleChanges): void {
  //  console.log(changes);
  //  this.getPieces();

  //}

  pieces : Piece[] = [];
  //pieces$!: Observable<Piece[]>;
 // private searchTerms = new Subject<string>();

  getPieces() : void {
    console.log('Tableau chargé' + this.messageChild);

    this.pieceService.getPieces().subscribe(pieces => this.pieces = pieces);
    //.filter(pieces => pieces.name.includes(this.message))
  }

  filteredPieces() : Piece[] {
    return this.pieces.filter(pieces => pieces.name.toLowerCase().includes(this.messageChild.toLowerCase()));
  }

  add(name : string) : void {
    name = name.trim();
    if (!name) {return;}
    this.pieceService.addPiece({name} as Piece).subscribe(piece => {this.pieces.push(piece);
    });
  }

}
