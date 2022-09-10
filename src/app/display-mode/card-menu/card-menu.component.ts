import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { periodicEelement } from 'src/app/menu/interface/periodicElement';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']


})
export class CardMenuComponent implements OnInit {

  @Input() IsCard: boolean = true;
  @Input() IsList: boolean = false;
  checked?: boolean;
  @Output() btnClick = new EventEmitter()

  elements: periodicEelement[] = [
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
  ]
  isAllCheckboxSelected: boolean = false;
  constructor() { }


  public onList() {
    this.btnClick.emit();
  }

  ngOnInit(): void {
  }
  dataSource = new MatTableDataSource<periodicEelement>(this.elements);

  public onChecked(e:boolean) {
    this.checked = e;
  }
}
