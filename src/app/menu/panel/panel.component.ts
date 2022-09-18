import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from 'src/app/services/breakpoints/breakpoints.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(public breakpoints: BreakpointsService) { }

  ngOnInit(): void {
  }

}
