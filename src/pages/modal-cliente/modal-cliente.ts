import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {Cliente} from '../../models/cliente/cliente.model';
import {ClienteListService} from '../../services/cliente/cliente-list.service';
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-modal-cliente',
  templateUrl: 'modal-cliente.html',
})
export class ModalClientePage {
	cliente: Cliente={
		nombre: '',
		apellido: '',
		cedula: null,
		telefono: null,
		direccion: ''
	}
	clienteList$: Observable<Cliente[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private clienteService: ClienteListService,public viewCtrl: ViewController) {
  	  	  	 this.clienteList$ = this.clienteService
      .getClienteList().snapshotChanges().map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalClientePage');
  }

  	itemClicked(cliente){
	  	this.viewCtrl.dismiss(cliente);
  	}

}
