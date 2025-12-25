import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ppf',
  imports: [RouterLink, CommonModule],
  templateUrl: './ppf.component.html',
  styleUrl: './ppf.component.css'
})
export class PpfComponent implements OnInit {
  @ViewChild('serviceVideo') serviceVideo!: ElementRef<HTMLVideoElement>;

  defaultVideo = '/assets/compressed/ppfProt-compressed.mp4';
  currentVideo = this.defaultVideo;
  isVideoLoading = true;

  // Map card IDs to their specific video paths
  videoMap: { [key: string]: string | undefined } = {
    'color': undefined,
    'matte': undefined
  };

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

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

    // Scroll to service title
    const serviceHero = document.querySelector('.service-hero');
    if (serviceHero) {
      serviceHero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

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
