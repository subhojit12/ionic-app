import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public alertController: AlertController, private router:Router) {}

  ngOnInit() {}
  username=""
  password=""
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      subHeader: 'please Enter the username/password',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  onLogin(){
    if(this.username==this.password){
      this.router.navigate(['/dashboard'])
    }else{
      this.presentAlert()
      this.username="";
      this.password="";
    }
   
  }
 

}
