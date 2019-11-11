import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeldaComponent } from './celda/celda.component';
import { TableroComponent } from './tablero/tablero.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CeldaComponent,
    TableroComponent
  ],
  exports: [
    CeldaComponent,
    TableroComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
