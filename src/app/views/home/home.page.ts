import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { UtilityService } from 'src/app/services/utility.service';
import { ApiService } from 'src/app/services/api.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private ut: UtilityService, private rest: ApiService, private navCtrl: NavController, public router: Router) { }

  ngOnInit() {
  }

  scanMovieQr(){
 
    
    
    this.barcodeScanner.scan().then(async (barcodeData) => {
      console.log('Barcode data', barcodeData);
      this.router.navigate(['movieslist'], { state: { movietitle: barcodeData.text } });   
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
