import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 
image: any; 

options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

  constructor(public navCtrl: NavController, private camera: Camera, private socialSharing: SocialSharing) {

  }


// Check if sharing via email is supported
socialTapped(){
	this.socialSharing.shareViaInstagram('my first camera apps', this.image).then(() => {
  // Sharing via email is possible
}).catch(() => {	
  // Sharing via email is not possible
});
}

cameraTapped(){
	this.camera.getPicture(this.options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.image = base64Image;
}, (err) => {
 // Handle error
});
}
}

