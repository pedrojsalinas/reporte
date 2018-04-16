import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProductoPage } from './edit-producto';

@NgModule({
  declarations: [
    EditProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProductoPage),
  ],
})
export class EditProductoPageModule {}
