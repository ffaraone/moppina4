import { MopidyService } from '../mopidy.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  constructor(private navCtrl: NavController, private mp: MopidyService) { }

  ngOnInit() {
    this.mp.browseState.reset();
  }

  browse(backend) {
    this.mp.browseState.push(backend);
    this.navCtrl.navigateForward('/tabs/(browse:browse-results/1)');
  }
}
