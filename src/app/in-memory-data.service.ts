import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Piece } from './piece';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pieces : Piece[] = [
      { id: 11, name: 'Luffy', desc: 'banpresto',photo: "../../images/Akainu.jpg", prix: 50, note: 10,date:'Janvier 2020',galerie:["../../images/Akainu.jpg","../../images/Akainu.jpg"] },
      { id: 12, name: 'Zoro', desc: 'banpresto',photo: "../../images/Akainu.jpg", prix: 50, note: 10,date:'Janvier 2020',galerie:["../../images/Akainu.jpg","../../images/Akainu.jpg"] },
      { id: 13, name: 'Nami', desc: 'banpresto',photo: "../../images/Akainu.jpg", prix: 50, note: 10,date:'Janvier 2020',galerie:["../../images/Akainu.jpg","../../images/Akainu.jpg"] },
      { id: 14, name: 'Usopp', desc: 'banpresto',photo: "../../images/Akainu.jpg", prix: 50, note: 10,date:'Janvier 2020',galerie:["../../images/Akainu.jpg","../../images/Akainu.jpg"] },
      { id: 15, name: 'Sanji', desc: 'banpresto',photo: "../../images/Akainu.jpg", prix: 50, note: 10,date:'Janvier 2020',galerie:["../../images/Akainu.jpg","../../images/Akainu.jpg"] },
      { id: 16, name: 'Chopper', desc: 'banpresto',photo: "../../images/Akainu.jpg", prix: 50, note: 10,date:'Janvier 2020',galerie:["../../images/Akainu.jpg","../../images/Akainu.jpg"] },
      { id: 17, name: 'Robin', desc: 'banpresto',photo: "../../images/Akainu.jpg", prix: 50, note: 10,date:'Janvier 2020',galerie:["../../images/Akainu.jpg","../../images/Akainu.jpg"] },
      { id: 18, name: 'Franky', desc: 'banpresto',photo: "../../images/Akainu.jpg", prix: 50, note: 10,date:'Janvier 2020',galerie:["../../images/Akainu.jpg","../../images/Akainu.jpg"] },
      { id: 19, name: 'Brook', desc: 'banpresto',photo: "../../images/Akainu.jpg", prix: 50, note: 10,date:'Janvier 2020',galerie:["../../images/Akainu.jpg","../../images/Akainu.jpg"] },
      { id: 20, name: 'Jimbe', desc: 'banpresto',photo: "../../images/Akainu.jpg", prix: 50, note: 10,date:'Janvier 2020',galerie:["../../images/Akainu.jpg","../../images/Akainu.jpg"] },
  ];
      return {pieces};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(pieces: Piece[]): number {
    return pieces.length > 0 ? Math.max(...pieces.map(piece => piece.id)) + 1 : 11;
  }
}