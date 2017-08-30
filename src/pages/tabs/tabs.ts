import { Component } from '@angular/core';

import { HomePage } from '../../pages/home/home';
import { AlbumsPage } from '../../pages/albums/albums';
import { ArtistPage } from '../../pages/artist/artist';
import { SongsPage } from '../../pages/songs/songs';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  artistRoot = HomePage;
  albumsRoot = AlbumsPage;
  songsRoot =  SongsPage;


  constructor() {}

}
