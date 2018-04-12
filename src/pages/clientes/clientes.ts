import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Cliente } from '../../models/cliente/cliente.model';
import {ClienteListService} from '../../services/cliente/cliente-list.service';

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
	cliente: Cliente ={
		nombre:'',
		apellido: '',
		cedula: null,
		telefono: null,
		direccion: '',

	}
	  constructor(public navCtrl: NavController,
	  			public navParams: NavParams,
	  			public clienteService: ClienteListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
  }

		btnAgregar(cliente:Cliente){
		//this.fdb.list("/myItems/").push(this.myInput);
		this.clienteService.addCliente(cliente);
	}

}
