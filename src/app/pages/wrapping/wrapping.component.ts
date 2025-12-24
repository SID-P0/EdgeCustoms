import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wrapping',
  imports: [RouterLink],
  templateUrl: './wrapping.component.html',
  styleUrl: './wrapping.component.css'
})
export class WrappingComponent implements OnInit {
  @ViewChild('serviceVideo') serviceVideo!: ElementRef<HTMLVideoElement>;

  defaultVideo = '/assets/compressed/matte-compressed.mp4';
  currentVideo = this.defaultVideo;

  /**
    * videoMap: { [key: string]: string | undefined } = {
    *    'gloss': '/assets/compressed/gloss-video.mp4',  // Add path here
    *    'matte': undefined,  // Falls back to default
    *    'custom': undefined  // Falls back to default
    * };
   */
  // Map card IDs to their specific video paths
  // Add video paths here when available, leave undefined to use default
  videoMap: { [key: string]: string | undefined } = {
    'gloss': '/assets/compressed/gloss-compressed.mp4',  // Add path when video is available
    'matte': '/assets/compressed/matte-compressed.mp4',  // Add path when video is available
    'custom': undefined  // Add path when video is available
  };

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  scrollToVideo(cardId?: string): void {
    // If a card ID is provided and has a specific video, switch to it
    if (cardId && this.videoMap[cardId]) {
      this.currentVideo = this.videoMap[cardId]!;
      // Need to reload the video element after changing source
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
