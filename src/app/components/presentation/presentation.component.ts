import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  height: string = '100vh'

  images: CarrouselImages[] = [
    {
      image: '../../../assets/city.jpg',
      active: true,
      height: this.height
    },
    // {
    //   image: '../../../assets/coffe.jpg',
    //   active: true,
    //   height: this.height
    // },
    // {
    //   image: '../../../assets/bosque.jpg',
    //   active: false,
    //   height: this.height
    // },
  ]

  constructor() { }

  ngOnInit(): void {

  }

}


export interface CarrouselImages {
  image: string;
  active: boolean;
  height: string
}