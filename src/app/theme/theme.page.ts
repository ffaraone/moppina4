import { LookAndFeelService } from '../look-and-feel.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.page.html',
  styleUrls: ['./theme.page.scss'],
})
export class ThemePage implements OnInit {

  constructor(private navCtrl: NavController, private lf: LookAndFeelService) { }

  ngOnInit() {
  }

  changeTheme(theme) {
    this.lf.setTheme(theme);
    this.navCtrl.goBack();
  }
  back() {
    this.navCtrl.goBack();
  }
}
