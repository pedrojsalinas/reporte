import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Producto } from '../../models/producto/producto.model';
import {ProductoListService} from '../../services/producto/producto-list.service';

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
	producto: Producto ={
		nombre:'',
		descripcion: '',
		pc: null,
		pv: null,

	}

  constructor(public navCtrl: NavController, public navParams: NavParams, public productoSerrvice: ProductoListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }
  btnAgregar(producto:Producto){
		this.productoSerrvice.addProducto(producto);
		this.navCtrl.pop();
	}

}
