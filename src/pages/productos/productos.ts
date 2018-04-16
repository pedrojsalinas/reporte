import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Producto} from '../../models/producto/producto.model';
import {ProductoListService} from '../../services/producto/producto-list.service'
import {Observable} from 'rxjs/Observable';
import {ProductoPage} from '../producto/producto'
/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
	 	producto :Producto={
	    nombre:'',
	    descripcion: '',
	    pc: null,
	    pv: null
	  };
	productoList$: Observable<Producto[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productoService: ProductoListService) {

  	 this.productoList$ = this.productoService
      .getProductoList().snapshotChanges().map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
  }

  ionViewDidLoad() {
  }
  addProductoPage(){
  	this.navCtrl.push(ProductoPage);
  }



}
