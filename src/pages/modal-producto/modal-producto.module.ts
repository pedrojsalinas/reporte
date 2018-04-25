import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalProductoPage } from './modal-producto';

@NgModule({
  declarations: [
    ModalProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalProductoPage),
  ],
})
export class ModalProductoPageModule {}
