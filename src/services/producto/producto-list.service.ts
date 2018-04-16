import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

import {Producto} from './../../models/producto/producto.model';
@Injectable()

export class ProductoListService {
	
	private ProductoListRef = this.db.list<Producto>('productos', ref=>ref.orderByChild('nombre'));

	constructor(private db: AngularFireDatabase) {}

	getProductoList(){
		return this.ProductoListRef;
	}
	addProducto(producto:Producto){
		return this.ProductoListRef.push(producto);
	}
	removeProducto(producto:Producto){
		return this.ProductoListRef.remove(producto.key);
	}
	editProducto(producto:Producto){
		return this.ProductoListRef.update(producto.key,producto);
	}
}

