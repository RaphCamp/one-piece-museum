import { Component, OnInit, Input } from '@angular/core';

import { Piece } from '../piece';
import { PieceSearchComponent } from '../piece-search/piece-search.component';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PieceService } from '../piece.service';



@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css', "../../../node_modules/bootswatch/dist/Litera/bootstrap.css"]
})
export class DetailViewComponent implements OnInit {

  @Input() piece? : Piece;

  constructor(
    private route : ActivatedRoute,
    private pieceService : PieceService,
    private location : Location
  ) { }

  ngOnInit(): void {
    this.getPiece();
  }

  getPiece():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pieceService.getPiece(id).subscribe(piece => this.piece = piece);
  }

  goBack() : void {
    this.location.back();
  }

  save():void {
    if (this.piece) {
      this.pieceService.updatePiece(this.piece).subscribe(() => this.goBack());
    }
  }

  delete(piece : Piece) : void {
    this.pieceService.deletePiece(piece.id).subscribe(() => this.goBack());
  }

}
