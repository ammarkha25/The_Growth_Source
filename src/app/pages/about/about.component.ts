import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  team = [
    { name: 'Saim Kazi', position: 'Founder', image: 'images/sahim_kazi.jpeg' },
    { name: 'Praful', position: 'Co-Founder', image: 'images/praful_kharpuriye.jpeg' },
    { name: 'Sujal', position: 'Manager', image: 'images/sujal_hirade.jpeg' },
    { name: 'Ammar Pathan', position: 'Strategy & Communication Partner', image: 'images/ammar_khan.jpeg' },
    { name: 'Mahesh Bhakre', position: 'Research & Analytics', image: 'images/mahesh_bhakre.jpeg' },
    { name: 'Vaishali Dewase', position: 'Web Developer & Team Executor', image: 'images/vaishali_dewase.jpeg' },
    { name: 'Divya Sharma', position: 'Client Relationship Manager', image: 'images/divya_sharma.jpeg' },
    { name: 'Samiksha Verma', position: 'Client Research Specialist', image: 'images/samiksha_verma.jpeg' }
  ];

  ngOnInit() {
    // Refresh AOS for this page
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }

  ngOnDestroy() {
    // Cleanup
  }
}
