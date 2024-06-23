import { Component, OnInit } from '@angular/core';
import { TimelineService } from './timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  events: any[] = [];

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {
    this.timelineService.getExperiences().subscribe((data) => {
      this.events = data;
    });
  }
}
