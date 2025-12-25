import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { RouterLink } from '@angular/router';

interface HeroSlide {
  image: string;
  taglines: { text: string; color: 'green' | 'white' }[];
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('mechanicVideo') mechanicVideo!: ElementRef<HTMLVideoElement>;
  
  // Video loading state
  isVideoLoading = true;

  // Hero carousel
  heroSlides: HeroSlide[] = [
    {
      image: 'mechanic-coding-car.png',
      taglines: [
        { text: 'DIAGNOSE.', color: 'green' },
        { text: 'CONFIGURE.', color: 'white' },
        { text: 'UNLOCK.', color: 'green' }
      ]
    },
    {
      image: 'ceramic-coating-detail.png',
      taglines: [
        { text: 'SHIELD.', color: 'green' },
        { text: 'SHINE.', color: 'white' },
        { text: 'SECURE.', color: 'green' }
      ]
    },
    {
      image: 'carousel-ppf.png',
      taglines: [
        { text: 'INVISIBLE.', color: 'green' },
        { text: 'ARMOR.', color: 'white' },
        { text: 'ALWAYS', color: 'green' }
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
        { text: 'REFINED.', color: 'green' },
        { text: 'RESTORE.', color: 'white' },
        { text: 'RADIANT.', color: 'green' }
      ]
    },
  ];
  currentSlideIndex = 0;
  private slideInterval: any;
  private uiService = inject(UiService);

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngAfterViewInit(): void {
    if (this.mechanicVideo && this.mechanicVideo.nativeElement) {
      this.mechanicVideo.nativeElement.muted = true;
      this.mechanicVideo.nativeElement.play().catch(err => {
        console.warn('Video autoplay failed:', err);
      });
    }
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  startSlideshow(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlideshow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
  }

  openServicesMenu(): void {
    this.uiService.triggerOpenServices();
  }

  // Video loading event handlers
  onVideoLoaded(): void {
    this.isVideoLoading = false;
  }

  onVideoWaiting(): void {
    this.isVideoLoading = true;
  }

  onVideoPlaying(): void {
    this.isVideoLoading = false;
  }
}
