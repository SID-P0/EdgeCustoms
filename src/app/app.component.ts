import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface HeroSlide {
  image: string;
  taglines: { text: string; color: 'green' | 'white' }[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'EdgeCustoms';
  isMobileMenuOpen = false;
  isServicesExpanded = false;
  expandedService: string | null = null;

  // Hero carousel
  heroSlides: HeroSlide[] = [
    {
      image: 'mechanic-hero.png',
      taglines: [
        { text: 'BUILD.', color: 'green' },
        { text: 'DRIVE.', color: 'white' },
        { text: 'REPEAT.', color: 'green' }
      ]
    },
    {
      image: 'carousel-ppf.png',
      taglines: [
        { text: 'PROTECT.', color: 'green' },
        { text: 'PRESERVE.', color: 'white' },
        { text: 'PERFECT.', color: 'green' }
      ]
    },
    {
      image: 'carousel-vinyl.png',
      taglines: [
        { text: 'WRAP.', color: 'green' },
        { text: 'TRANSFORM.', color: 'white' },
        { text: 'STAND OUT.', color: 'green' }
      ]
    },
    {
      image: 'carousel-detailing.png',
      taglines: [
        { text: 'DETAIL.', color: 'green' },
        { text: 'SHINE.', color: 'white' },
        { text: 'IMPRESS.', color: 'green' }
      ]
    }
  ];
  currentSlideIndex = 0;
  private slideInterval: any;

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

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  startSlideshow(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopSlideshow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    // Reset interval when manually changing slides
    this.stopSlideshow();
    this.startSlideshow();
  }

  openServicesMenu(): void {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Wait for scroll to complete, then open services menu
    setTimeout(() => {
      this.isServicesExpanded = true;
      // On mobile, also open the mobile menu
      if (window.innerWidth <= 900) {
        this.isMobileMenuOpen = true;
      }
    }, 500);
  }
}
