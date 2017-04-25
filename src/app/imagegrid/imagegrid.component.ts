import { Component, OnInit } from '@angular/core';
import { LightboxModule } from 'primeng/primeng';

@Component({
  selector: 'lightbox',
  templateUrl: './imagegrid.component.html',
  styleUrls: ['./imagegrid.component.css']
})
export class ImagegridComponent implements OnInit {
  images: any[];

  constructor() {
    this.images = [];
    this.images.push({ source: 'assets/img/img-21-01.jpg', thumbnail: 'assets/img/img-21-01.jpg', title: 'Sopranos 1' });
    this.images.push({ source: 'assets/img/img-11-03.jpg', thumbnail: 'assets/img/img-11-03.jpg', title: 'Sopranos 2' });
    this.images.push({ source: 'assets/img/img-11-04.jpg', thumbnail: 'assets/img/img-11-04.jpg', title: 'Sopranos 3' });
    this.images.push({ source: 'assets/img/img-21-04.jpg', thumbnail: 'assets/img/img-21-04.jpg', title: 'Sopranos 4' });
    this.images.push({ source: 'assets/img/img-11-05.jpg', thumbnail: 'assets/img/img-11-05.jpg', title: 'Sopranos 5' });
    this.images.push({ source: 'assets/img/img-11-02.jpg', thumbnail: 'assets/img/img-11-02.jpg', title: 'Sopranos 6' });
    this.images.push({ source: 'assets/img/logo-bg.jpg', thumbnail: 'assets/img/logo-bg.jpg', title: 'Sopranos 7' });
    this.images.push({ source: 'assets/img/img-11-01.jpg', thumbnail: 'assets/img/img-11-01.jpg', title: 'Sopranos 8' });
    this.images.push({ source: 'assets/img/img-11-06.jpg', thumbnail: 'assets/img/img-11-06.jpg', title: 'Sopranos 9' });
    this.images.push({ source: 'assets/img/img-21-02.jpg', thumbnail: 'assets/img/img-21-02.jpg', title: 'Sopranos 10' });
    this.images.push({ source: 'assets/img/img-11-07.jpg', thumbnail: 'assets/img/img-11-07.jpg', title: 'Sopranos 11' });
    this.images.push({ source: 'assets/img/img-11-08.jpg', thumbnail: 'assets/img/img-11-08.jpg', title: 'Sopranos 12' });
    this.images.push({ source: 'assets/img/img-21-03.jpg', thumbnail: 'assets/img/img-21-03.jpg', title: 'Sopranos 13' });
  }

  ngOnInit() {
    console.log(this.images);
  }

}
