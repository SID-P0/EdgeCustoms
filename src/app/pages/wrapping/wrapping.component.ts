import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wrapping',
  imports: [RouterLink],
  templateUrl: './wrapping.component.html',
  styleUrl: './wrapping.component.css'
})
export class WrappingComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
