import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(private navCtrl: NavController) { }

  changeBackground() {
    this.navCtrl.navigateForward('/background');
  }
  changeTheme() {
    this.navCtrl.navigateForward('/theme');
  }
}
