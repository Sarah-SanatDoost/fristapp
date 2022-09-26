import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/side-nav.service';

@Component({
  selector: 'app-add-user-sidebar',
  templateUrl: './add-user-sidebar.component.html',
  styleUrls: ['./add-user-sidebar.component.css']
})
export class AddUserSidebarComponent implements OnInit {

  constructor(public sidenav : SideNavService) { }

  ngOnInit(): void {
  }

}
