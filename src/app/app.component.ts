import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ClientesPage } from '../pages/clientes/clientes';
import { PagoPage } from '../pages/pago/pago';
import { ReportesPage } from '../pages/reportes/reportes';
import { ProductosPage } from '../pages/productos/productos';
import { AgregarVentaPage } from '../pages/agregar-venta/agregar-venta';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth/auth.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  pages;
  private menu: MenuController;
 
  @ViewChild(Nav) nav: Nav;
  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private auth: AuthService,
    menu: MenuController) {
    this.menu = menu;
    this.platform = platform;
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Clientes', component: ClientesPage, icon: 'contact' },
      { title: 'Productos', component: ProductosPage, icon: 'basket' },
      { title: 'Pago', component: PagoPage, icon: 'cash' },
      { title: 'Venta', component: AgregarVentaPage, icon: 'pricetag' },
      { title: 'Reportes', component: ReportesPage, icon: 'list-box' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.auth.afAuth.authState
    .subscribe(
      user => {
        if (user) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
      },
      () => {
        this.rootPage = LoginPage;
      }
    );
  }
  logout() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(HomePage);
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
