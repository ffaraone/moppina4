import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'background', loadChildren: './background/background.module#BackgroundPageModule' },
  { path: 'browse', loadChildren: './browse/browse.module#BrowsePageModule' },
  { path: 'browse-results', loadChildren: './browse-results/browse-results.module#BrowseResultsPageModule' },
  { path: 'now-playing', loadChildren: './now-playing/now-playing.module#NowPlayingPageModule' },
  { path: 'queue', loadChildren: './queue/queue.module#QueuePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'search-popover', loadChildren: './search-popover/search-popover.module#SearchPopoverPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'theme', loadChildren: './theme/theme.module#ThemePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
