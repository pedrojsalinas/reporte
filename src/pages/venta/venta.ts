import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Venta } from '../../models/venta/venta.model';
import {Cliente} from '../../models/cliente/cliente.model';
import {Producto} from '../../models/producto/producto.model';
import {VentaListService} from '../../services/venta/venta-list.service';
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-venta',
  templateUrl: 'venta.html',
})
export class VentaPage {
  cliente:Cliente;
	venta: Venta={
	id_producto: '',
	fecha_compra: '',
	estado: ''}
  producto:Producto={
      nombre:'',
      descripcion: '',
      pc: null,
      pv: null
  }

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
      this.ventaList$.subscribe(res=>{
        res.forEach(data=>{
       this.productoList$ =this.ventaService.getProductos(data.id_producto).snapshotChanges().map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      })
          //data.id_producto
      });
      //this.ventaService.getProductos(this.venta.id_producto).then

  })
}
  ionViewWillLoad() {
    this.cliente = this.navParams.get('cliente');
  }

}
