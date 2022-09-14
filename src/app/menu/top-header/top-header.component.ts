import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from 'src/app/services/breakpoints/breakpoints.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor(public breakpoints: BreakpointsService) { }

  ngOnInit(): void {

  }
}
