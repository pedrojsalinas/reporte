import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';


import {Venta} from './../../models/venta/venta.model';
import {Producto} from './../../models/producto/producto.model';
@Injectable()

export class VentaListService {
	
	private VentaListRef;
	private ProductoListRef;

	constructor(private db: AngularFireDatabase) {}
	producto:Producto;

	setKeyVenta(key){
		this.VentaListRef =this.db.list<Venta>('ventas/'+key+'');
		return this.VentaListRef;
	}
	getProductos(key){
		this.ProductoListRef = this.db.object<Producto>('productos/'+key+'');
		return this.ProductoListRef;
	}

	addVenta(venta: Venta){
		this.ProductoListRef = this.db.list<Venta>('ventas/'+venta.id_cliente);
		return this.ProductoListRef.push(venta);
	}
}

