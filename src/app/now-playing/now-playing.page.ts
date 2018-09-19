import { LookAndFeelService } from '../look-and-feel.service';
import { MopidyService } from '../mopidy.service';
import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.page.html',
  styleUrls: ['./now-playing.page.scss'],
})
export class NowPlayingPage {

  mopidyOnline = true;
  backgroundImage = '/src/assets/imgs/turntable.jpg';

  constructor(
    private events: Events,
    public mp: MopidyService,
    public lf: LookAndFeelService) {
      console.log(mp);
    this.lf.getBackgroundImage().subscribe(val => this.backgroundImage = val);
    this.events.subscribe('mopidy:connection:offline', () => this.mopidyOnline = false);
    this.events.subscribe('mopidy:connection:online', () => this.mopidyOnline = true);
  }

}
