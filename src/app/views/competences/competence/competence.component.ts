import { Component, Input, OnInit } from '@angular/core';
import { Competence } from '../competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css'],
})
export class CompetenceComponent implements OnInit {
  @Input()
  activeTab: Competence | null = null;

  constructor() {}

  ngOnInit() {}
}
