import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'background', loadChildren: './background/background.module#BackgroundPageModule' },
  { path: 'browse', loadChildren: './browse/browse.module#BrowsePageModule' },
  { path: 'browse-results/:id', loadChildren: './browse-results/browse-results.module#BrowseResultsPageModule' },
  { path: 'now-playing', loadChildren: './now-playing/now-playing.module#NowPlayingPageModule' },
  { path: 'queue', loadChildren: './queue/queue.module#QueuePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'theme', loadChildren: './theme/theme.module#ThemePageModule' },
  { path: 'search-modal', loadChildren: './search-modal/search-modal.module#SearchModalPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
