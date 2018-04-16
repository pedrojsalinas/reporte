import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

import {Cliente} from './../../models/cliente/cliente.model';
@Injectable()

export class ClienteListService {
	
	private clienteListRef = this.db.list<Cliente>('clientes');

	constructor(private db: AngularFireDatabase) {}

	getClienteList(){
		return this.clienteListRef;
	}
	addCliente(cliente:Cliente){
		return this.clienteListRef.push(cliente);
	}
	removeCliente(cliente:Cliente){
		return this.clienteListRef.remove(cliente.key);
	}
}

