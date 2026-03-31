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
    { name: 'Saim Kazi', position: 'Founder', image: 'https://saimfsd.github.io/tgs-website/images/496510240_576862804971005_7353621515092664104_n_576862801637672%20-%20Praful%20Kharpuriye.jpg' },
    { name: 'Praful', position: 'Co-Founder', image: 'https://saimfsd.github.io/tgs-website/images/IMG_20260311_205714994_HDR%20-%20Sujal%20Hirade.jpg' },
    { name: 'Sujal', position: 'Manager', image: 'https://picsum.photos/300/300?1' },
    { name: 'Mahesh Bhakre', position: 'Research & Analytics', image: 'https://picsum.photos/300/300?2' },
    { name: 'Ammar Pathan', position: 'Strategy & Communication Partner', image: 'https://picsum.photos/300/300?3' },
    { name: 'Vaishali Dewase', position: 'Web Developer & Team Executor', image: 'https://picsum.photos/300/300?4' },
    { name: 'Divya Sharma', position: 'Client Relationship Manager', image: 'https://picsum.photos/300/300?5' },
    { name: 'Samiksha Verma', position: 'Client Research Specialist', image: 'https://picsum.photos/300/300?6' }
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
