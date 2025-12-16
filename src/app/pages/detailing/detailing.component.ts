import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detailing',
  imports: [RouterLink],
  templateUrl: './detailing.component.html',
  styleUrl: './detailing.component.css'
})
export class DetailingComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
