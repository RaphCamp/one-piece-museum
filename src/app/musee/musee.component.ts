import { Component, OnInit } from '@angular/core';
import { Piece } from '../piece';
import { PIECES } from '../mock-pieces';

@Component({
  selector: 'musee',
  templateUrl: './musee.component.html',
  styleUrls: ['./musee.component.css',"../../../node_modules/bootswatch/dist/Litera/bootstrap.css"]
})
export class MuseeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pieces = PIECES;

  selectedPiece?: Piece;
onSelect(piece: Piece): void {
  this.selectedPiece = piece;
}

}
