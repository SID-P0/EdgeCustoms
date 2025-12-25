import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wrapping',
  imports: [RouterLink, CommonModule],
  templateUrl: './wrapping.component.html',
  styleUrl: './wrapping.component.css'
})
export class WrappingComponent implements OnInit {
  @ViewChild('serviceVideo') serviceVideo!: ElementRef<HTMLVideoElement>;

  defaultVideo = '/assets/compressed/matte-compressed.mp4';
  currentVideo = this.defaultVideo;
  isVideoLoading = true;

  videoMap: { [key: string]: string | undefined } = {
    'gloss': '/assets/compressed/gloss-compressed.mp4',
    'matte': '/assets/compressed/matte-compressed.mp4',
    'custom': undefined
  };

  ngOnInit(): void { window.scrollTo({ top: 0, behavior: 'instant' }); }

  scrollToVideo(cardId?: string): void {
    if (cardId && this.videoMap[cardId]) {
      this.currentVideo = this.videoMap[cardId]!;
      this.isVideoLoading = true;
      setTimeout(() => {
        if (this.serviceVideo?.nativeElement) {
          this.serviceVideo.nativeElement.load();
          this.serviceVideo.nativeElement.play();
        }
      }, 0);
    }
    const serviceHero = document.querySelector('.service-hero');
    if (serviceHero) serviceHero.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onVideoLoaded(): void { this.isVideoLoading = false; }
  onVideoWaiting(): void { this.isVideoLoading = true; }
  onVideoPlaying(): void { this.isVideoLoading = false; }
}

