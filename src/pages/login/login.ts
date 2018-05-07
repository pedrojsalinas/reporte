  import { Component } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {Usuario} from '../../models/usuario/usuario.model';
import { HomePage } from '../home/home';
import {ToastService} from './../../services/toast/toast.service';
import { AuthService } from '../../services/auth/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	//usuario = {} as Usuario;
	loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toast: ToastService,public fb: FormBuilder,private auth: AuthService) {
  	this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
});
  }

  ionViewDidLoad() {
  }

  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.toast.show(`${error.message}`)
			);
}

}
