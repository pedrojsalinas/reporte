import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

import {Venta} from './../../models/venta/venta.model';
import {Producto} from './../../models/producto/producto.model';
@Injectable()

export class VentaListService {
	
	private VentaListRef;
	private ProductoListRef;

	constructor(private db: AngularFireDatabase) {}

/*
	getVentaList(){
		return this.VentaListRef;
	}
	addVenta(venta:Venta){
		return this.VentaListRef.push(venta);
	}
	removeVenta(venta:Venta){
		return this.VentaListRef.remove(venta.key);
	}
*/
	setKeyVenta(key){
		this.VentaListRef =this.db.list<Venta>('ventas/'+key+'');
		return this.VentaListRef;
	}
	getProductos(key){
		this.ProductoListRef = this.db.list<Producto>('productos/'+key+'');
		return this.ProductoListRef;
	}
}

