import { SearchModalPage } from './search-modal.page';
import { ComponentsModule } from '../components.module';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';



const routes: Routes = [
  {
    path: '',
    component: SearchModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [SearchModalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModalPageModule {}
