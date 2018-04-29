import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarVentaPage } from './agregar-venta';

@NgModule({
  declarations: [
    AgregarVentaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarVentaPage),
  ],
})
export class AgregarVentaPageModule {}
