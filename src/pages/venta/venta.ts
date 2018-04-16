import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Venta } from '../../models/venta/venta.model';
//import {VentaListService} from '../../services/venta/venta-list.service';

/**venta
 * Generated class for the VentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venta',
  templateUrl: 'venta.html',
})
export class VentaPage {
	venta: Venta={
	id_cliente: '',
	id_producto: '',
	fecha_venta: '',
	tipo_pago: '',
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentaPage');
  }

}
