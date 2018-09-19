import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs.router.module';
import { BrowseResultsPageModule } from '../browse-results/browse-results.module';
import { BrowsePageModule } from '../browse/browse.module';
import { NowPlayingPageModule } from '../now-playing/now-playing.module';
import { QueuePageModule } from '../queue/queue.module';
import { SearchPageModule } from '../search/search.module';
import { SettingsPageModule } from '../settings/settings.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    BrowsePageModule,
    BrowseResultsPageModule,
    SearchPageModule,
    NowPlayingPageModule,
    QueuePageModule,
    SettingsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
