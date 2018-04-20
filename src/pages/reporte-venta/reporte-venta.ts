import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cliente} from '../../models/cliente/cliente.model';
import {Venta} from '../../models/venta/venta.model';

@IonicPage()
@Component({
  selector: 'page-reporte-venta',
  templateUrl: 'reporte-venta.html',
})
export class ReporteVentaPage {
	cliente: Cliente;
	venta: Venta;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(this.navParams.get('cliente'));
  	console.log(this.navParams.get('venta'));
  	this.cliente = this.navParams.get('cliente');
  	this.venta = this.navParams.get('venta');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReporteVentaPage');
  }

}
