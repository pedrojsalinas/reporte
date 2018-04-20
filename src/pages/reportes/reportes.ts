import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cliente} from '../../models/cliente/cliente.model';
import {ClienteListService} from '../../services/cliente/cliente-list.service';
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-reportes',
  templateUrl: 'reportes.html',
})
export class ReportesPage {
	cliente: Cliente={
		nombre: '',
		apellido: '',
		cedula: null,
		telefono: null,
		direccion: ''
	}
	clienteList$: Observable<Cliente[]>;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private clienteService: ClienteListService) {
  	  	 this.clienteList$ = this.clienteService
      .getClienteList().snapshotChanges().map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
  }

	ionViewDidLoad() {
	}

}
