import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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

  public nombreProducto: string;
	venta: Venta={
	id_producto: '',
	fecha_compra: '',
	estado: ''}
	cliente:any;
    producto: Producto ={
    nombre:'',
    descripcion: '',
    pc: null,
    pv: null,

  }


	  ventaList$: Observable<Venta[]>;
	  productoList$: Observable<Producto[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private ventaService: VentaListService,public viewCtrl: ViewController) {
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
          this.nombreProducto = data.id_producto;
          console.log(data.estado);

         
        })
      });

    this.productoList$ =this.ventaService
    .getProductos("-L9w2OXw3mJhkDqUP2cu").snapshotChanges()
    .map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });

        this.productoList$.subscribe(res=>{
        
          //this.nombreProducto = data.nombre;
          console.log();
          res.forEach(data=>{
            data.nombre
          })
       
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalProductoPage');
  }
  cerrar(){
      this.viewCtrl.dismiss();
  }
    itemClicked(venta){
      this.viewCtrl.dismiss(venta);
    }

}
