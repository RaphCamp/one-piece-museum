import { Component, OnInit, Input } from '@angular/core';

import { Piece } from '../piece';
import { PieceSearchComponent } from '../piece-search/piece-search.component';



@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css', "../../../node_modules/bootswatch/dist/Litera/bootstrap.css"]
})
export class DetailViewComponent implements OnInit {

  @Input() piece? : Piece;

  constructor() { }

  ngOnInit(): void {
  }


}
