import { Component, OnInit } from '@angular/core';
import { periodicEelement } from 'src/app/menu/interface/periodicElement';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  elements: periodicEelement[]= [
    {imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار' ,date: '1400/12/01' ,email:'maggi45@gmail.com' ,lastActivity:'امروز - 10:23'},
    {imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار' ,date: '1400/12/01' ,email:'maggi45@gmail.com' ,lastActivity:'امروز - 10:23'},
    {imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار' ,date: '1400/12/01' ,email:'maggi45@gmail.com' ,lastActivity:'امروز - 10:23'},
    {imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار' ,date: '1400/12/01' ,email:'maggi45@gmail.com' ,lastActivity:'امروز - 10:23'},
    {imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار' ,date: '1400/12/01' ,email:'maggi45@gmail.com' ,lastActivity:'امروز - 10:23'},
    {imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار' ,date: '1400/12/01' ,email:'maggi45@gmail.com' ,lastActivity:'امروز - 10:23'},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  dataSource = new MatTableDataSource<periodicEelement>(this.elements);
}
