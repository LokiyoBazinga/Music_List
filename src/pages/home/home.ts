import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ItunesService} from '../../services/itunes.service';
import { ArtistProvider } from '../../providers/artist/artist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ItunesService, ArtistProvider]
})
export class HomePage {
 searchResults: Array<any> = [];
  artistId: number = 0;

  selectedArtist: string;

  constructor(public navCtrl: NavController, private itunesService: ItunesService, public artistProvider: ArtistProvider) { }

  search(searchTerm: string) {
    this.itunesService.search(searchTerm).then(results => {
      this.searchResults = results;
    });
    this.itunesService.setAlbums(searchTerm);
  }
}
