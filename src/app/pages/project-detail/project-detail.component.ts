import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PROJECTS, Project } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;
  projectId: string | null = null;
  relatedProjects: Project[] = [];
  isNotFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
      this.loadProject();
    });
  }

  loadProject(): void {
    if (!this.projectId) {
      this.isNotFound = true;
      return;
    }

    this.project = PROJECTS.find(p => p.id === this.projectId) || null;

    if (!this.project) {
      this.isNotFound = true;
      return;
    }

    // Get related projects (same category, different project)
    this.relatedProjects = PROJECTS.filter(
      p => p.category === this.project?.category && p.id !== this.project?.id
    ).slice(0, 3);
  }

  getProjectUrl(id: string): string {
    return `/projects/${id}`;
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }

  redirectHome(): void {
    this.router.navigate(['/']);
  }
}
