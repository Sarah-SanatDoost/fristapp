import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from 'src/app/services/breakpoints/breakpoints.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(public breakpoints: BreakpointsService) { }

  ngOnInit(): void {
  }

}
