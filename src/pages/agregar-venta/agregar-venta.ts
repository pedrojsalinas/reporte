import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController } from 'ionic-angular';
import {ModalClientePage} from '../../pages/modal-cliente/modal-cliente';
import {ModalProductoListPage} from '../../pages/modal-producto-list/modal-producto-list';
import {Cliente} from '../../models/cliente/cliente.model';
import {VentaListService} from '../../services/venta/venta-list.service';
import {Producto } from '../../models/producto/producto.model';
import {Venta } from '../../models/venta/venta.model';
import {ToastService} from '../../services/toast/toast.service';



@IonicPage()
@Component({
  selector: 'page-agregar-venta',
  templateUrl: 'agregar-venta.html',
})
export class AgregarVentaPage {
  public isCliente: boolean;
  public isProducto: boolean;
  public idCliente: string;
	public idProducto: string;
	public nombreCliente: string;
	public apellidoCliente: string;
  public cedulaCliente: string;
  public nombreProducto: string;
	public precioProducto: number;

	cliente: Cliente;
  producto:Producto;
  venta:Venta={
	id_producto: '',
	id_cliente: '',
	fecha_compra: '',
	tipo: '',
	precio: null
  };
  myDate: string = new Date().toISOString();
  monto;
  tipo;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private ventaService: VentaListService,
    public modalCtrl: ModalController,
    private toastService: ToastService,
    public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarVentaPage');
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
   this.enableProucto();
	 }
   enableProucto(){
     this.isProducto=false;
     this.monto= null;
     this.tipo=null;
   }

	presentProductoModal(){
	   let profileModal = this.modalCtrl.create(ModalProductoListPage);
	   profileModal.present();	
      profileModal.onDidDismiss(producto => {
  	      this.idProducto=producto.key;
		      this.isProducto=true;
		      this.precioProducto= producto.pv;
		      this.monto= producto.pv;
		      this.nombreProducto= producto.nombre;
    });
	}
	 btnGuardar(venta:Venta){

     if(this.tipo==null){
       this.doAlert();
       console.log('sasasa');
     }else{
     venta.id_producto=this.idProducto;
      venta.id_cliente=this.idCliente;
      venta.fecha_compra=this.myDate;
      venta.precio=this.monto;
      venta.tipo=this.tipo;
      this.ventaService.addVenta(venta);
      this.toastService.show('Venta Agregada Correctamente');
      this.enableCliente();
      this.enableProucto();
     }

  }
    doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alerta!',
      subTitle: 'Seleccione una forma de pago.',
      buttons: ['Ok']
    });

    alert.present();
}

}
