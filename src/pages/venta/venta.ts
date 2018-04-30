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
  id_cliente:'',
	fecha_compra: '',
	tipo: '',
  precio:null}
  producto:Producto={
      nombre:'',
      descripcion: '',
      pc: null,
      pv: null
  }
  //private idProducto: string;
  //private nombreProducto: string;
  ventaList$: Observable<Venta[]>;
  productoList$: Observable<Producto[]>;
    product: any;

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
              this.productoList$ =this.ventaService
            .getProductos(data.id_producto).snapshotChanges().map(res => {
                    return res.payload.val();
                });

            this.productoList$.subscribe(data => {
              this.product = data;
           
                  //this.nombreProducto = this.product.nombre;
                  //console.log(this.nombreProducto);

                                  /*for (var i = 0; i < data.length; ++i) {
                  // code...
                  //this.nombreProducto[i] = this.product.nombre;
                  console.log(this.nombreProducto[i]+i);
                     data.forEach(producto=>{
                console.log(producto.nombre);
              })
                }*/


            });

        })
      })

}
  ionViewWillLoad() {
    this.cliente = this.navParams.get('cliente');
  }

}
