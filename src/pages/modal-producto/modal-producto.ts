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
  public product: any;
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


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private ventaService: VentaListService,
    public viewCtrl: ViewController) {
    this.cliente = this.navParams.get('cliente');
         this.ventaList$ = this.ventaService
      .setKeyVenta(this.cliente.key).snapshotChanges().map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
      let idProducto: any;
      this.ventaList$.subscribe(res=>{
        res.forEach(data=>{
          idProducto =data.id_producto;
            this.productoList$ =this.ventaService
            .getProductos(idProducto).snapshotChanges().map(res => {
                    return res.payload.val();
                });

            this.productoList$.subscribe(data => {
              this.product = data;
                  this.nombreProducto = this.product.nombre;

            });
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
