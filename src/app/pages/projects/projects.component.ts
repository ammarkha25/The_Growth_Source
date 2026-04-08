import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory: string = 'All';
  categories: string[] = [];

  ngOnInit(): void {
    this.projects = PROJECTS;
    this.filteredProjects = this.projects;
    this.extractCategories();
    window.scrollTo(0, 0);
  }

  extractCategories(): void {
    const unique = [...new Set(this.projects.map(p => p.category))];
    this.categories = ['All', ...unique];
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.category === category);
    }
  }

  getProjectUrl(id: string): string {
    return `/projects/${id}`;
  }
}
