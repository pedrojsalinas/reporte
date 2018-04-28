import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {ModalClientePage} from '../../pages/modal-cliente/modal-cliente';
import {ModalProductoPage} from '../../pages/modal-producto/modal-producto';
import {Cliente} from '../../models/cliente/cliente.model';
import {VentaListService} from '../../services/venta/venta-list.service';
import {PagoListService} from '../../services/pago/pago-list.service';
import {Observable} from 'rxjs/Observable';
import {Producto } from '../../models/producto/producto.model';
import {Pago } from '../../models/pago/pago.model';

@IonicPage()
@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html',
})
export class PagoPage {
  public isCliente: boolean;
  public isProducto: boolean;
  public idCliente: string;
	public idProducto: string;
	public nombreCliente: string;
	public apellidoCliente: string;
  public cedulaCliente: string;
  public nombreProducto: string;
	public precioProducto: number;
    public product: any;
  productoList$: Observable<Producto[]>;

	cliente: Cliente;
  pago:Pago={
    id_cliente:'',
    id_producto:'',
    fecha:'',
    monto: null
  };
  myDate: string = new Date().toISOString();
  monto;


  constructor(public navCtrl: NavController, public navParams: NavParams,private ventaService: VentaListService,private pagoService: PagoListService,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }
   presentClienteModal() {
   let profileModal = this.modalCtrl.create(ModalClientePage);
   profileModal.present();

   profileModal.onDidDismiss(cliente => {
      if (cliente) {
        	this.isCliente=true;
          this.idCliente= cliente.key;
        	this.nombreCliente= cliente.nombre;
        	this.apellidoCliente= cliente.apellido;
        	this.cedulaCliente= cliente.cedula;
        	this.cliente = cliente;
        }  
    });
	 }
	 enableCliente(){
	 	this.isCliente=false;
	 }
   enableProucto(){
     this.isProducto=false;
   }
	 presentProductoModal(){
		let productModal = this.modalCtrl.create(ModalProductoPage,{cliente:this.cliente});
		productModal.present();

    productModal.onDidDismiss(venta=>{
      this.idProducto=venta.id_producto;
      this.isProducto=true;
      this.precioProducto= venta.precio;


            this.productoList$ =this.ventaService
            .getProductos(this.idProducto).snapshotChanges().map(res => {
                    return res.payload.val();
                });

            this.productoList$.subscribe(data => {
              this.product = data;
                  this.nombreProducto = this.product.nombre;

            });
          });
	}
  btnGuardar(pago:Pago){
    pago.fecha=this.myDate;
    pago.id_producto=this.idProducto;
    pago.id_cliente=this.idCliente;
    pago.monto=this.monto;
    console.log(pago);
    this.pagoService.guardarPago(pago);
  }

}
