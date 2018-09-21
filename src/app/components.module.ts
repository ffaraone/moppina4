import { KeyboardComponent } from './keyboard/keyboard.component';
import { PipesModule } from './pipes.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [KeyboardComponent],
    imports: [CommonModule, IonicModule.forRoot(), HttpClientModule, PipesModule],
    exports: [KeyboardComponent]
})
export class ComponentsModule {}
