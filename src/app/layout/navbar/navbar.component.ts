import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navbar', { static: false }) navbar!: ElementRef;
  @ViewChild('titleNav', { static: false }) titleNav!: ElementRef;


  constructor(private renderer: Renderer2, private elmRef: ElementRef) {

  }

  ngAfterViewInit(): void {
    
    var last_known_scroll_position = 0;
    var ticking = false;
    
    window.addEventListener('scroll', (e) => {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.doSomething(last_known_scroll_position);
          ticking = false;
        });
      }
      ticking = true;
    });
    
  }
  
  doSomething(scroll_pos: any): void {
    // Hacer algo con la posición del scroll
    if (scroll_pos === 0) {
      this.renderer.removeClass(this.navbar.nativeElement, 'navbar-scroll-button');
      this.renderer.addClass(this.navbar.nativeElement, 'navbar-scroll-top');
      this.renderer.setStyle(this.titleNav.nativeElement, 'color', '#212529', 1);
    } else if (scroll_pos > 1) {
      this.renderer.removeClass(this.navbar.nativeElement, 'navbar-scroll-top');
      this.renderer.addClass(this.navbar.nativeElement, 'navbar-scroll-button');
      this.renderer.setStyle(this.titleNav.nativeElement, 'color', '#ffffff', 1);
    }
  }

}
