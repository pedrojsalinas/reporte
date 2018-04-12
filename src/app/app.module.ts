import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientePage } from '../pages/cliente/cliente';
import { ClientesPage } from '../pages/clientes/clientes';
import { PagoPage } from '../pages/pago/pago';
import { ReportePage } from '../pages/reporte/reporte';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//servicios
import {ClienteListService} from '../services/cliente/cliente-list.service';


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
    ClientePage,
    ClientesPage,
    PagoPage,
    ReportePage
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
    ClientePage,
    ClientesPage,
    PagoPage,
    ReportePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteListService
  ]
})
export class AppModule {}
