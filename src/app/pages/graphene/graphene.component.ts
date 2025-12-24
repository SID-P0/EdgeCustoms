import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-graphene',
  imports: [RouterLink],
  templateUrl: './graphene.component.html',
  styleUrl: './graphene.component.css'
})
export class GrapheneComponent {
  @ViewChild('serviceVideo') serviceVideo!: ElementRef<HTMLVideoElement>;

  defaultVideo = '/assets/compressed/graphene-compressed.mp4';
  currentVideo = this.defaultVideo;

  // Map card IDs to their specific video paths
  videoMap: { [key: string]: string | undefined } = {
    'exterior': undefined,
    'glass': undefined,
    'wheel': undefined,
    'caliper': undefined,
    'trim': undefined,
    'lights': undefined,
    'interior': undefined
  };

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  scrollToVideo(cardId?: string): void {
    if (cardId && this.videoMap[cardId]) {
      this.currentVideo = this.videoMap[cardId]!;
      setTimeout(() => {
        if (this.serviceVideo?.nativeElement) {
          this.serviceVideo.nativeElement.load();
          this.serviceVideo.nativeElement.play();
        }
      }, 0);
    }

    // Scroll to service title
    const serviceHero = document.querySelector('.service-hero');
    if (serviceHero) {
      serviceHero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
