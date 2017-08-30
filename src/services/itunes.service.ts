import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const API = {
  SEARCH: 'https://itunes.apple.com/search?',
  LOOKUP: 'https://itunes.apple.com/lookup?'
}

@Injectable()
export class ItunesService {

  searchTerm: string = "";

  private _albums: Array<any> = [];
  private _artistId: number = 0;
  public term: string = "";

  constructor(private jsonp: Jsonp) {
  }

  public search(searchTerm: string): Promise<any> {
    return this.jsonp.get(`${API.SEARCH}callback=JSONP_CALLBACK&media=music&term=${searchTerm}&limited=50`)
      .toPromise()
      .then(data => data.json().results)
      .catch(this.handleError)
  }

  public setAlbums(term: string){
 	this.term = term;
  }

  public getAlbums(){
  	
  	console.log(this.term);
  }
  
  public getAlbums(artistId: number): Promise<any> {
    
    if (artistId == this._artistId) return new Promise(resolve => resolve(this._albums));

    this._artistId = artistId;

    return this.jsonp.get(`${API.LOOKUP}callback=JSONP_CALLBACK&entity=album&id=${artistId}`)   
    .toPromise()
    .then(data => {
      this._albums = data.json().results.filter((results: any) => {
        return results.wrapperType == 'collection'
      });

      return this._albums;
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message || error);
  }
}