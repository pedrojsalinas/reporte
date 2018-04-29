import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

import {Pago} from './../../models/pago/pago.model';
@Injectable()

export class PagoListService {
	
	private VentaListRef ;

	constructor(private db: AngularFireDatabase) {}
	pago:Pago;

	guardarPago(pago: Pago){
		this.VentaListRef = this.db.list<Pago>('pagos/'+pago.id_cliente+'/'+pago.id_producto);
		this.pago={fecha:pago.fecha,monto:pago.monto};
		return this.VentaListRef.push(pago);
	}
}

