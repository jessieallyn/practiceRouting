import { BuiltinType } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { Hike } from '../hike.model';

import { HikingService } from '../hiking.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
  pastHikes: Hike[];
  index: number;

  constructor(private hikingService: HikingService) { }

  ngOnInit(): void {
    this.pastHikes = this.hikingService.getPastHikes();
  }


}
