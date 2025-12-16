import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ppf',
  imports: [RouterLink],
  templateUrl: './ppf.component.html',
  styleUrl: './ppf.component.css'
})
export class PpfComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
