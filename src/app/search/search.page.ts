import { MopidyService } from '../mopidy.service';
import { Component, NgZone } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  resultsVisible = false;
  results: any;
  loadingArts = true;

  query = '';

  constructor(
    private zone: NgZone,
    private popCtrl: PopoverController,
    public mp: MopidyService) {
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
  async showPopover(event) {
    console.log(event);
    const popover = await this.popCtrl.create({
      component: 'app-search-popover',
      event: event
    });
    popover.onDidDismiss().then(a => {
      console.log(a);
    });
    /*
(data) => {
      this.query = data;
      this.search();
    }
    */
    await popover.present();
  }
}
