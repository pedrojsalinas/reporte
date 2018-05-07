import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Producto} from '../../models/producto/producto.model';
import {ProductoListService} from '../../services/producto/producto-list.service'
import {Observable} from 'rxjs/Observable';
import {ProductoPage} from '../producto/producto'


@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
	 	producto :Producto={
	    nombre:'',
	    descripcion: '',
	    pc: null,
	    pv: null
	  };
	productoList$: Observable<Producto[]>;
  private result: any[];
  private searchItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productoService: ProductoListService) {

  	 this.productoList$ = this.productoService
      .getProductoList().snapshotChanges().map(changes =>{
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
       this.productoList$.subscribe(data=>{
           this.searchItems= data;
           this.result= data;
       //console.log(this.result);
       })
       //this.initializeItems();
  }
  initializeItems() {
    this.searchItems = this.result;

  }


  ionViewDidLoad() {
  }
  addProductoPage(){
  	this.navCtrl.push(ProductoPage);
  }

getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    
 if (val && val.trim() !== '') {
      this.searchItems = this.searchItems.filter(function(producto) {
        return (producto.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
}
    // if the value is an empty string don't filter the items
    /*if (val && val.trim() != '') {
      this.searchItems = this.searchItems.filter((producto) => {
        return (producto.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }


    if (val && val.trim() !== '') {
      this.searchItems = this.searchItems.filter(function(producto) {
        return producto.nombre.toLowerCase().includes(val.toLowerCase());
      });
}*/

  }


}
