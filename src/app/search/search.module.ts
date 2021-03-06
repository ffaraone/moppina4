import { SearchPage } from './search.page';
import { SearchModalPageModule } from '../search-modal/search-modal.module';
import { SearchModalPage } from '../search-modal/search-modal.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';



const routes: Routes = [
  {
    path: '',
    component: SearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SearchModalPageModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
