import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {ModalClientePage} from '../../pages/modal-cliente/modal-cliente';
import {ModalProductoPage} from '../../pages/modal-producto/modal-producto';
import {Cliente} from '../../models/cliente/cliente.model';
@IonicPage()
@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html',
})
export class PagoPage {
	public isCliente: boolean;
	public nombreCliente: string;
	public apellidoCliente: string;
	public cedulaCliente: string;
	cliente: Cliente;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }
   presentClienteModal() {
   let profileModal = this.modalCtrl.create(ModalClientePage);
   profileModal.present();

   profileModal.onDidDismiss(cliente => {
      if (cliente) {
        	this.isCliente=true;
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
	 presentProductoModal(){
		let productModal = this.modalCtrl.create(ModalProductoPage,{cliente:this.cliente});
		productModal.present();
	}

}
