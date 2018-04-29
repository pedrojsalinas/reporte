import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagoPage } from '../pages/pago/pago';
import { ReportePage } from '../pages/reporte/reporte';
import { ReportesPage } from '../pages/reportes/reportes';
import { ProductoPage } from '../pages/producto/producto';
import { ProductosPage } from '../pages/productos/productos';
import { ClientesPage } from '../pages/clientes/clientes';
import { ModalClientePage } from '../pages/modal-cliente/modal-cliente';
import { ModalProductoPage } from '../pages/modal-producto/modal-producto';
import { ModalProductoListPage } from '../pages/modal-producto-list/modal-producto-list';
import { AgregarVentaPage } from '../pages/agregar-venta/agregar-venta';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//servicios
import {ClienteListService} from '../services/cliente/cliente-list.service';
import {ProductoListService} from '../services/producto/producto-list.service';
import {VentaListService} from '../services/venta/venta-list.service';
import {PagoListService} from '../services/pago/pago-list.service';


 var config ={
     apiKey: "AIzaSyASrOWamjiL6p4TfjIIqNOquwP-_Zstyfo",
    authDomain: "awaken-7fea1.firebaseapp.com",
    databaseURL: "https://awaken-7fea1.firebaseio.com",
    projectId: "awaken-7fea1",
    storageBucket: "awaken-7fea1.appspot.com",
    messagingSenderId: "1006455625633"

  };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PagoPage,
    ClientesPage,
    ReportePage,
    ReportesPage,
    ProductoPage,
    ProductosPage,
    ModalClientePage,
    ModalProductoPage,
    ModalProductoListPage,
    AgregarVentaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagoPage,
    ClientesPage,
    ReportePage,
    ReportesPage,
    ProductoPage,
    ProductosPage,
    ModalClientePage,
    ModalProductoPage,
    ModalProductoListPage,
    AgregarVentaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteListService,
    ProductoListService,
    VentaListService,
    PagoListService
  ]
})
export class AppModule {}
