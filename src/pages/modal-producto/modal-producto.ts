import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Producto} from '../../models/producto/producto.model';
import {VentaListService} from '../../services/venta/venta-list.service';
import {Observable} from 'rxjs/Observable';
import {Venta } from '../../models/venta/venta.model';

@IonicPage()
@Component({
  selector: 'page-modal-producto',
  templateUrl: 'modal-producto.html',
})

export class ModalProductoPage {


	venta: Venta={
	id_producto: '',
	fecha_compra: '',
	estado: ''}
	cliente:any;

	  ventaList$: Observable<Venta[]>;
	  productoList$: Observable<Producto[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private ventaService: VentaListService) {
    this.cliente = this.navParams.get('cliente');
         this.ventaList$ = this.ventaService
      .setKeyVenta(this.cliente.key).snapshotChanges().map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalProductoPage');
  }

}
