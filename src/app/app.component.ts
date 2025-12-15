import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EdgeCustoms';
  isMobileMenuOpen = false;
  isServicesExpanded = false;
  expandedService: string | null = null;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isServicesExpanded = false;
      this.expandedService = null;
    }
  }

  toggleServices(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isServicesExpanded = !this.isServicesExpanded;
    if (!this.isServicesExpanded) {
      this.expandedService = null;
    }
  }

  toggleServiceSubmenu(service: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.expandedService = this.expandedService === service ? null : service;
  }
}
