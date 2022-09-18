import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from '../services/breakpoints/breakpoints.service';

@Component({
  selector: 'app-mobile-user',
  templateUrl: './mobile-user.component.html',
  styleUrls: ['./mobile-user.component.css']
})
export class MobileUserComponent implements OnInit {

  constructor(public breakpoints: BreakpointsService) { }

  ngOnInit(): void {
  }

}
