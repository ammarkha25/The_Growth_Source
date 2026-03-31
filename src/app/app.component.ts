import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TGS - The Growth Source';

  ngOnInit() {
    // Initialize AOS (Animate On Scroll)
    this.initAOS();
    
    // Log initialization
    console.log('%c✅ TGS Premium Website Loaded Successfully\nModern • Responsive • Fully Animated', 'color:#F5B400; font-family:monospace; font-size:13px');
  }

  initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 900,
        once: true,
        offset: 100
      });
    }
  }
}
