import { Component, OnInit } from '@angular/core';
import { Piece } from '../piece';
import { PIECES } from '../mock-pieces';
import { PieceService } from '../piece.service';

@Component({
  selector: 'musee',
  templateUrl: './musee.component.html',
  styleUrls: ['./musee.component.css',"../../../node_modules/bootswatch/dist/Litera/bootstrap.css"]
})
export class MuseeComponent implements OnInit {

  constructor(private pieceService: PieceService) { }

  ngOnInit(): void {
    this.getPieces();
  }

  pieces : Piece[] = [];

  getPieces() : void {
    this.pieceService.getPieces().subscribe(pieces => this.pieces = pieces);
  }

  add(name : string) : void {
    name = name.trim();
    if (!name) {return;}
    this.pieceService.addPiece({name} as Piece).subscribe(piece => {this.pieces.push(piece);
    });
  }


}
