import { LookAndFeelService } from '../look-and-feel.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-background',
  templateUrl: './background.page.html',
  styleUrls: ['./background.page.scss'],
})
export class BackgroundPage  {

  backgrounds: any[] = [
    {
      name: 'Queen',
      path: '/src/assets/imgs/queen.jpg'
    },
    {
      name: 'Earphones',
      path: '/src/assets/imgs/earphones.jpg'
    },
    {
      name: 'Napoli',
      path: '/src/assets/imgs/napoli.jpg'
    },
    {
      name: 'Turntable',
      path: '/src/assets/imgs/turntable.jpg'
    },
    {
      name: 'Vinyl shop',
      path: '/src/assets/imgs/vinyl-shop.jpg'
    },
  ];

  constructor(private navCtrl: NavController, private lf: LookAndFeelService) { }

  setBackground(bg) {
    this.lf.setBackgroundImage(bg.path);
    this.navCtrl.goBack();
  }
  back() {
    this.navCtrl.goBack();
  }
}
