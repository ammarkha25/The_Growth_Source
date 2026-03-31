import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  projectCountDisplay = 0;
  clientCountDisplay = 0;
  industriesCountDisplay = 0;
  growthCountDisplay = 0;

  private counterTimers: any[] = [];

  ngOnInit() {
    // Trigger counter animation after a short delay
    setTimeout(() => {
      this.animateCounters();
    }, 800);

    // Refresh AOS for this page
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }

  ngOnDestroy() {
    // Clear all timers when component is destroyed
    this.counterTimers.forEach(timer => clearInterval(timer));
  }

  animateCounters() {
    const stats = [
      { property: 'projectCountDisplay', target: 500, suffix: '+' },
      { property: 'clientCountDisplay', target: 200, suffix: '+' },
      { property: 'industriesCountDisplay', target: 10, suffix: '+' },
      { property: 'growthCountDisplay', target: 187, suffix: '%' }
    ];

    stats.forEach(stat => {
      let count = 0;
      const increment = Math.ceil(stat.target / 60);
      const timer = setInterval(() => {
        count += increment;
        if (count >= stat.target) {
          count = stat.target;
          clearInterval(timer);
        }
        (this as any)[stat.property] = count + stat.suffix;
      }, 30);
      
      this.counterTimers.push(timer);
    });
  }

  scrollToServices() {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
