import { TabsPage } from './tabs.page';
import { BrowsePage } from '../browse/browse.page';
import { NowPlayingPage } from '../now-playing/now-playing.page';
import { QueuePage } from '../queue/queue.page';
import { SearchPage } from '../search/search.page';
import { SettingsPage } from '../settings/settings.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(now-playing:now-playing)',
        pathMatch: 'full',
      },
      {
        path: 'browse',
        outlet: 'browse',
        component: BrowsePage
      },
      {
        path: 'search',
        outlet: 'search',
        component: SearchPage
      },
      {
        path: 'now-playing',
        outlet: 'now-playing',
        component: NowPlayingPage
      },
      {
        path: 'queue',
        outlet: 'queue',
        component: QueuePage
      },
      {
        path: 'settings',
        outlet: 'settings',
        component: SettingsPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(now-playing:now-playing)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
