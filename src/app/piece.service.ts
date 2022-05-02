import { Injectable } from '@angular/core';
import {InMemoryDataService} from './in-memory-data.service';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Piece } from './piece';
import { PIECES } from './mock-pieces';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
//pieces : PIECES[] = [

  constructor(
    private messageService: MessageService,
    private http : HttpClient
  ) { }

    /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PieceService: ${message}`);
  }

  private piecesUrl = 'api/pieces';

  getPieces() : Observable<Piece[]> {
    const pieces = this.http.get<Piece[]>(this.piecesUrl).pipe(tap(_ => this.log('fetched pieces')),catchError(this.handleError<Piece[]>('getPieces',[]))
    );
    
    return pieces;
  }

  getPiece(id:number) : Observable<Piece> {
    const url = `${this.piecesUrl}/${id}`;
    return this.http.get<Piece>(url).pipe(tap(_ => this.log(`fetched piece id=${id}`)),catchError(this.handleError<Piece>(`getPiece id=${id}`)));
  }



  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updatePiece(piece:Piece) : Observable<any> {
    return this.http.put(this.piecesUrl,piece,this.httpOptions).pipe(
      tap(_ => this.log(`updated piece id=${piece.id}`)),
      catchError(this.handleError<any>('updatePiece'))
    );
  }

  addPiece(piece:Piece):Observable<any> {
    return this.http.post<Piece>(this.piecesUrl,piece,this.httpOptions).pipe(
      tap((newPiece:Piece)=>this.log(`added pice w/ id=${newPiece.id}`)),
      catchError(this.handleError<Piece>("addPiece"))
    );
  }

  deletePiece(id: number): Observable<Piece> {
    const url = `${this.piecesUrl}/${id}`;
  
    return this.http.delete<Piece>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted piece id=${id}`)),
      catchError(this.handleError<Piece>('deletePiece'))
    );
  }

    /* GET heroes whose name contains search term */
  searchPieces(term: string): Observable<Piece[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Piece[]>(`${this.piecesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found pieces matching "${term}"`) :
        this.log(`no pieces matching "${term}"`)),
      catchError(this.handleError<Piece[]>('searchPieces', []))
    );
  }


  private filter = new BehaviorSubject('');
  currentFilter = this.filter.asObservable();

  changeFilter(message:string) {
    this.filter.next(message)
  }


}