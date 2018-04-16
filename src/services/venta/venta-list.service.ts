import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

import {Venta} from './../../models/venta/venta.model';
@Injectable()

export class VentaListService {
	
	private VentaListRef = this.db.list<Venta>('ventas');

	constructor(private db: AngularFireDatabase) {}

	getVentaList(){
		return this.VentaListRef;
	}
	addVenta(venta:Venta){
		return this.VentaListRef.push(venta);
	}
	removeVenta(venta:Venta){
		return this.VentaListRef.remove(venta.key);
	}
}

