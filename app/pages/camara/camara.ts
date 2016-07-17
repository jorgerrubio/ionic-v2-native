import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/camara/camara.html',
})
export class CamaraPage {

  image: string;
  constructor(private nav: NavController) {

  }

  getPicture(sourceType){
    let options = {
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      correctOrientation: true,
      saveToPhotoAlbum: false,
      sourceType: (sourceType == 'picture') ? Camera.PictureSourceType.PHOTOLIBRARY : Camera.PictureSourceType.CAMERA
    }
    Camera.getPicture(options).then((imageData) => {
      this.image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
    });
  }

}
