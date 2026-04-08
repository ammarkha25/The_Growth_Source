import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { SERVICES_DATA, Service } from '../../data/services.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;
  relatedServices: Service[] = [];
  serviceId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceId = params['id'];
      this.loadService();
    });
  }

  loadService() {
    const foundService = SERVICES_DATA.find(s => s.id === this.serviceId);
    
    if (foundService) {
      this.service = foundService;
      // Get related services (all except current)
      this.relatedServices = SERVICES_DATA
        .filter(s => s.id !== this.serviceId)
        .slice(0, 3);
      window.scrollTo(0, 0);
    } else {
      // Redirect to services page if service not found
      this.router.navigate(['/services']);
    }
  }

  navigateToService(serviceId: string) {
    this.router.navigate(['/services', serviceId]);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
