import { MopidyService } from '../mopidy.service';
import { SearchModalPage } from '../search-modal/search-modal.page';
import { Component, NgZone, OnInit } from '@angular/core';
import { Events, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


  resultsVisible = false;
  results: any;
  loadingArts = true;

  searchModal: any;

  query = '';

  constructor(
    private zone: NgZone,
    private events: Events,
    private modalCtrl: ModalController,
    public mp: MopidyService) {
  }

  ngOnInit(): void {
    this.events.subscribe('moppina:search', (query) => {
      this.query = query;
      this.searchModal.dismiss();
      this.search();
    });
  }

  search() {
    if (this.query) {
      this.loadingArts = true;
      this.mp.search(this.query).then((res) => {
        console.log(res);
        for (const r of res) {
          if (r.uri.startsWith('tunein:search')) {
            r.title = 'TuneIn';
          } else if (r.uri.startsWith('local:search')) {
            r.title = 'Local library';
          } else if (r.uri.startsWith('spotify:search')) {
            r.title = 'Spotify';
          }
        }
        this.results = res;
        const promises = [];
        for (const r of this.results) {
          if (r.artists) {
            promises.push(this.getArts(r.artists));
          }
          if (r.albums) {
            promises.push(this.getArts(r.albums));
          }
          if (r.tracks) {
            promises.push(this.getArts(r.tracks));
          }
        }
        console.log('promises '  + promises.length);
        Promise.all(promises).then(() => {
          console.log('loading arts finished');
          this.zone.run(() => {
            this.loadingArts = false;
          });
        });
      });
    }
  }
  onKeyboardStateChange(state) {
    this.resultsVisible = state === 'hide';
  }
  private getArts(refs): Promise<null> {
    return new Promise<null>((resolve, reject) => {
      this.mp.getAlbumArts(refs.map(val => val.uri)).then(images => {
        // this.zone.run(() => {
          for (const r of refs) {
            // const sanitizedUri = this.fixSpotifyWebUris(r.uri);
            if (r.uri in images && images[r.uri].length > 0) {
              this.zone.run(() => {
                r.albumArt = images[r.uri][0].uri;
              });
              // r.albumArt = images[r.uri][0].uri;
            }
          }
          resolve();
        });
      // });
    });
  }
  async showModal() {
    this.searchModal = await this.modalCtrl.create({
      component: SearchModalPage
    });
    return await this.searchModal.present();
  }
}
