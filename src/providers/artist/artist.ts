import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ItunesService } from '../../services/itunes.service';
/*
  Generated class for the ArtistProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ArtistProvider {
	artist: string;
	constructor(public http: Http, public itunesService: ItunesService) {
  	}
}
