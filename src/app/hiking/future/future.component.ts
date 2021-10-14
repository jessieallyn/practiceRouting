import { Component, Input, OnInit } from '@angular/core';
import { HikingComponent } from '../hiking.component';

import { Hike } from '../hike.model';
import { HikingService } from '../hiking.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {
  futureHikes: Hike[];

  constructor(private hikingService: HikingService) { }

  ngOnInit(): void {
    this.futureHikes=this.hikingService.getFutureHikes();
  }



}
