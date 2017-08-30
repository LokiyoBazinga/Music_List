import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, JsonpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlbumsPage } from '../pages/albums/albums';
import { ArtistPage } from '../pages/artist/artist';
import { SongsPage } from '../pages/songs/songs';
import {TabsPage}    from '../pages/tabs/tabs';

import {ItunesService} from '../services/itunes.service';
import { ArtistProvider } from '../providers/artist/artist';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlbumsPage,
    ArtistPage,
    SongsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    JsonpModule,
    HttpModule,
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlbumsPage,
    ArtistPage,
    SongsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItunesService,
    ArtistProvider
  ]
})
export class AppModule {}
