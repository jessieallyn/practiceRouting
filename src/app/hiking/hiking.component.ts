import { Component, OnInit } from '@angular/core';
import { HikingService } from './hiking.service';

@Component({
  selector: 'app-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.css'],
  providers: [HikingService]
})
export class HikingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
