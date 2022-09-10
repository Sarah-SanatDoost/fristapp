import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CardMenuComponent } from 'src/app/display-mode/card-menu/card-menu.component';
// import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { periodicEelement } from 'src/app/menu/interface/periodicElement';

const elements: periodicEelement[] = [
  { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
  { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
  { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
  { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
  { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
  { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, role: 'حسابدار', date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
]

@Component({
  selector: 'app-card-tool-bar',
  templateUrl: './card-tool-bar.component.html',
  styleUrls: ['./card-tool-bar.component.css']
})


export class CardToolBarComponent implements OnInit {

  @Input() IsCard: boolean = true;
  @Input() IsList: boolean = false;
  @Output() isAllCheckboxSelected = new EventEmitter();
  @Input() isChecked: boolean = false;
  @Output() btnClick = new EventEmitter()

  dataSource = new MatTableDataSource<periodicEelement>(elements);
  selection = new SelectionModel<periodicEelement>(true, []);

  constructor() { }


  public onList() {
    this.btnClick.emit();
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows
  }


  ngOnInit(): void {
  }

  public onCheckboxClicked(e: any) {
    this.isChecked = e.checked;
    console.log(this.isChecked);
    this.isAllCheckboxSelected.emit(this.isChecked);
  }

}
