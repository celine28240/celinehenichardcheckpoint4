import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists: string[];

  display: boolean = false;
  modalsrc = '';

  constructor() {


    this.artists = [
     './assets/artists/artist1.jpg',
     './assets/artists/artist2.jpg',
     './assets/artists/artist3.jpg',
     './assets/artists/artist4.jpg',
     './assets/artists/artist5.jpg',
     './assets/artists/artist6.jpg',
     './assets/artists/artist7.jpg',
     './assets/artists/artist8.jpg',
     './assets/artists/artist9.jpg',
     './assets/artists/artist10.jpg',
     './assets/artists/artist11.jpg',
     './assets/artists/artist12.jpg',
     './assets/artists/artist13.jpg',
     './assets/artists/artist14.jpg',
     './assets/artists/artist15.jpg',
     './assets/artists/artist16.jpg',
     './assets/artists/artist17.jpg',
     './assets/artists/artist18.jpg',
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
