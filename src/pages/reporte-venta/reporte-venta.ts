import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cliente} from '../../models/cliente/cliente.model';
import {Venta} from '../../models/venta/venta.model';
import {Pago} from '../../models/pago/pago.model';
import {Producto} from '../../models/producto/producto.model';
import {VentaListService} from '../../services/venta/venta-list.service';
import {PagoListService} from '../../services/pago/pago-list.service';
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-reporte-venta',
  templateUrl: 'reporte-venta.html',
})
export class ReporteVentaPage {
     nomProducto: string;
     monto:number;
     priceTotal:number;
     pendiente:number;
   product: any;
	cliente: Cliente;
	venta: Venta;
      pagoList$: Observable<Pago[]>;
          productoList$: Observable<Producto>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private ventaService:VentaListService,private pagoService:PagoListService) {

  	this.cliente = this.navParams.get('cliente');
  	this.venta = this.navParams.get('venta');

                this.productoList$ =this.ventaService
            .getProductos(this.venta.id_producto).snapshotChanges().map(res => {
                    return res.payload.val();
                });

            this.productoList$.subscribe(data => {
              this.product = data;
                  this.nomProducto = this.product.nombre;

            });

                 this.pagoList$ = this.pagoService
      .getPagoList(this.cliente.key,this.venta.key).snapshotChanges().map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
      this.pagoList$.subscribe(res=>{
        this.priceTotal = 0;
        this.pendiente = 0;
        res.forEach(data=>{
          this.priceTotal += Number(data.monto);
          this.pendiente =  Number(this.venta.precio) - this.priceTotal ;
          console.log(this.pendiente);
        });
      });


         /* })
     this.ventaList$ = this.ventaService
      .setKeyVenta(this.cliente.key).snapshotChanges().map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
      this.venta.
            let idProducto: any;
      this.ventaList$.subscribe(res=>{
        res.forEach(data=>{
          idProducto =data.key;

      });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReporteVentaPage');
  }

}
