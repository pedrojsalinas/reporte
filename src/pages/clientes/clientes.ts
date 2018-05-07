import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

//import {Cliente } from '../../models/cliente/cliente.model';
import {ClienteListService} from '../../services/cliente/cliente-list.service';
import {ToastService} from './../../services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
	private cliente : FormGroup;
	/*cliente: Cliente ={
		nombre:'',
		apellido: '',
		cedula: null,
		telefono: null,
		direccion: '',

	}*/
	  constructor(public navCtrl: NavController,
	  			public navParams: NavParams,
	  			public clienteService: ClienteListService,
	  			public toastService: ToastService,
	  			private formBuilder: FormBuilder) {
	  	    this.cliente = this.formBuilder.group({
			      nombre: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
			      apellido: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
			      cedula: ['', Validators.required],
			      telefono: [''],
			      direccion: [''],
			    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
  }
    agregarCliente(){
    console.log(this.cliente.value)
	this.clienteService.addCliente(this.cliente.value);
    this.cliente.reset();
	this.toastService.show(`Cliente Agregado`);
  }

		/*btnAgregar(cliente:Cliente){
		this.cliente.reset();
	}*/

}
