import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gallery: string[];

  display: boolean = false;
  modalsrc = '';

  constructor() {


    this.gallery = [
     './assets/galleryPictures/images.jpeg',
     './assets/galleryPictures/images2.jpeg',
     './assets/galleryPictures/images3.jpeg',
     './assets/galleryPictures/images4.jpeg',
     './assets/galleryPictures/images5.jpeg',
     './assets/galleryPictures/images6.jpeg',
     './assets/galleryPictures/images7.jpeg',
     './assets/galleryPictures/images8.jpeg',
     './assets/galleryPictures/index.jpeg',
    ];
  }

  onSelect(event: Event ): void {
    const img: HTMLImageElement = event.target as HTMLImageElement;
    this.modalsrc = img.src;
    this.toggleModal();
  }

  toggleModal(): void {
    const modalcontainer: HTMLElement = document.getElementById('myModal');
    this.display = !this.display;
 
    if ( this.display ) {
      modalcontainer.style.display = 'block';
    } else {modalcontainer.style.display = 'none'; }
  }

  ngOnInit() {
  }
}
