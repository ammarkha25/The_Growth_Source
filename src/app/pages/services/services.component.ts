import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SERVICES_DATA, Service } from '../../data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.services = SERVICES_DATA;
  }

  navigateToService(serviceId: string) {
    this.router.navigate(['/services', serviceId]);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
