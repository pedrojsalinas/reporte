import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {Producto} from '../../models/producto/producto.model';
import {ProductoListService} from '../../services/producto/producto-list.service'
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-modal-producto-list',
  templateUrl: 'modal-producto-list.html',
})
export class ModalProductoListPage {
	producto :Producto={
	    nombre:'',
	    descripcion: '',
	    pc: null,
	    pv: null
	  };
	productoList$: Observable<Producto[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private productoService: ProductoListService,
    public viewCtrl: ViewController) {
  	 this.productoList$ = this.productoService
      .getProductoList().snapshotChanges().map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalProductoListPage');
  }
    itemClicked(producto){
      this.viewCtrl.dismiss(producto);
    }
}
