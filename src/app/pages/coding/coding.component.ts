import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coding',
  imports: [RouterLink],
  templateUrl: './coding.component.html',
  styleUrl: './coding.component.css'
})
export class CodingComponent {
  @ViewChild('serviceVideo') serviceVideo!: ElementRef<HTMLVideoElement>;

  defaultVideo = '/assets/compressed/scanningcoding-compressed.mp4';
  currentVideo = this.defaultVideo;

  // Map card IDs to their specific video paths
  videoMap: { [key: string]: string | undefined } = {
    'diagnostic': undefined,
    'errorcode': undefined,
    'feature': undefined,
    'module': undefined
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
