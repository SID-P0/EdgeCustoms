import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sunfilms',
  imports: [RouterLink],
  templateUrl: './sunfilms.component.html',
  styleUrl: './sunfilms.component.css'
})
export class SunfilmsComponent {
  @ViewChild('serviceVideo') serviceVideo!: ElementRef<HTMLVideoElement>;

  defaultVideo = '/assets/compressed/sunfilms-compressed.mp4';
  currentVideo = this.defaultVideo;

  // Map card IDs to their specific video paths
  videoMap: { [key: string]: string | undefined } = {
    'uv': undefined,
    'heat': undefined,
    'privacy': undefined
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
