import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

import {Pago} from './../../models/pago/pago.model';
import {Venta} from './../../models/venta/venta.model';
@Injectable()

export class PagoListService {
	
	private PagoListRef ;
	private VentaObjRef ;
	public idPro;

	constructor(private db: AngularFireDatabase) {}
	pago:Pago;

	guardarPago(pago: Pago,key:string){
          this.VentaObjRef = this.db.object<Venta>('ventas/'+pago.id_cliente+'/'+key).snapshotChanges().map(res => {
                    return res.payload.val();
                });

            this.VentaObjRef.subscribe(data => {
				this.PagoListRef = this.db.list<Pago>('pagos/'+pago.id_cliente+'/'+key);
				this.pago={fecha:pago.fecha,monto:pago.monto};
				return this.PagoListRef.push(pago);
            });
       
	}
	getPagoList(id_cliente,id_venta){
		this.PagoListRef = this.db.list<Pago>('pagos/'+id_cliente+'/'+id_venta);
		return this.PagoListRef;
	}
}


