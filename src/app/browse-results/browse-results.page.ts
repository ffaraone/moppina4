import { MopidyService } from '../mopidy.service';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  NgZone,
  OnInit,
  ViewChild
  } from '@angular/core';
import { ActionSheetController, Content, NavController } from '@ionic/angular';

@Component({
  selector: 'app-browse-results',
  templateUrl: './browse-results.page.html',
  styleUrls: ['./browse-results.page.scss'],
})
export class BrowseResultsPage implements OnInit {


  @ViewChild(Content) content: Content;

  refs: any[] = [];
  loadingArts = true;

  constructor(
    private navCtrl: NavController,
    private zone: NgZone,
    private asCtrl: ActionSheetController,
    public mp: MopidyService) { }

  ngOnInit() {
    this.browseUri();
  }
  private fixSpotifyWebUris(uri) {
    if (!uri.startsWith('spotifyweb')) {
      return uri;
    }
    const pieces = uri.split(':');
    if (pieces.length >= 2) {
      const res = ['spotify'];
      res.push(...pieces.splice(pieces.length - 2));
      return res.join(':');
    }
    return uri;
  }
  private getArts(): Promise<null> {
    return new Promise<null>((resolve, reject) => {
      this.mp.getAlbumArts(this.refs.map(val => val.uri)).then(images => {
        console.log(images);
        this.zone.run(() => {
          for (const r of this.refs) {
            const sanitizedUri = this.fixSpotifyWebUris(r.uri);
            if (sanitizedUri in images && images[sanitizedUri].length > 0) {
              r.albumArt = images[sanitizedUri][0].uri;
            }
          }
          this.loadingArts = false;
        });
      });
    });
  }

  browseUri() {
    this.mp.browse(this.mp.browseState.current.uri).then(refs => {
      for (const r of refs) {
        r.albumArt = '';
      }
      this.refs = refs;
      this.getArts();
    });
  }

  async showOptions(ref) {
    const actionSheet = await this.asCtrl.create({
      header: 'What you want to do ?',
      buttons: [
        {
          text: 'Add to queue',
          handler: () => {
            this.mp.appendQueue(ref.uri);
          }
        },
        {
          text: 'Clear queue and play',
          handler: () => {
            this.mp.clearAndPlayQueue(ref.uri);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }
  browseOrPlay(ref) {
    if (ref.type === 'directory' || ref.type === 'album' || ref.type === 'artist') {
      this.mp.browseState.push(ref);
      this.navCtrl.navigateForward(`/tabs/(browse:browse-results/${this.mp.browseState.length})`);
    } else {
      this.mp.appendAndPlay(ref.uri);
    }
  }
  back() {
    this.mp.browseState.pop();
    if (this.mp.browseState.current) {
      this.navCtrl.navigateBack(`/tabs/(browse:browse-results/${this.mp.browseState.length})`);
    } else {
      this.navCtrl.navigateBack('/tabs/(browse:browse)');
    }
  }
}
