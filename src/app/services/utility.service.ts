import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private currentLoading = null;
  constructor(private loadingController: LoadingController, private alertController: AlertController) { }


  async present(message: string = 'Please wait...', duration: number = null) {
    // Dismiss previously created loading
    if (this.currentLoading != null) {
      this.currentLoading.dismiss();
    }
    this.currentLoading = await this.loadingController.create({
      duration: duration,
      message: message 
    });
    return await this.currentLoading.present();
  }

  async dismiss() {
    if (this.currentLoading != null) {
      await this.loadingController.dismiss();
      this.currentLoading = null;
    }
    return;
  }

  async presentAlert(header:string = 'Alert', subHeader: string = null, message: string = null) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
