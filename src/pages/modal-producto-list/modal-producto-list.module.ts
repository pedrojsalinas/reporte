import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalProductoListPage } from './modal-producto-list';

@NgModule({
  declarations: [
    ModalProductoListPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalProductoListPage),
  ],
})
export class ModalProductoListPageModule {}
