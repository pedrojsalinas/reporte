import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Producto} from '../../models/producto/producto.model';
import {ProductoListService} from '../../services/producto/producto-list.service';

@IonicPage()
@Component({
  selector: 'page-edit-producto',
  templateUrl: 'edit-producto.html',
})
export class EditProductoPage {

	producto:Producto;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productoService: ProductoListService) {
  }

  ionViewWillLoad() {
    this.producto = this.navParams.get('producto');
  }
  btnAgregar(producto:Producto){
  	this.productoService.editProducto(producto).then(()=>{
  		this.navCtrl.pop();
  	});
  }
  btnEliminar(producto:Producto){
  	this.productoService.removeProducto(producto).then(()=>{
  		this.navCtrl.pop();
  	});
  }
}
