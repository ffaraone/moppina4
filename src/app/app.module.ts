import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyTextPipe } from './key-text.pipe';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MopidyService } from './mopidy.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SearchPopoverComponent } from './search-popover/search-popover.component';

@NgModule({
  declarations: [AppComponent, KeyTextPipe, KeyboardComponent, SearchPopoverComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot({
    mode: 'ios',
  }), IonicStorageModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MopidyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
