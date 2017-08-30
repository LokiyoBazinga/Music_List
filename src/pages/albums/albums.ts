import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ItunesService} from '../../services/itunes.service';
import { ArtistProvider } from '../../providers/artist/artist';
/**
 * Generated class for the AlbumsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
  providers: [ItunesService, ArtistProvider]
})
export class AlbumsPage {
	
  	selectedArtist: string;
   constructor(public navCtrl: NavController, public navParams: NavParams, private itunesService: ItunesService, public artistProvider: ArtistProvider) {
   	this.selectedArtist = itunesService.setAlbums();
   }

}