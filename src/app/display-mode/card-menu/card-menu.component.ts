import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { periodicEelement } from 'src/app/menu/interface/periodicElement';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']


})
export class CardMenuComponent implements OnInit {

  @Input() IsCard: boolean = true;
  @Input() IsList: boolean = false;
  @Input() checked: boolean = false;
  @Output() btnClick = new EventEmitter();
  // @Input() allSelect = new  EventEmitter()



  elements: periodicEelement[] = [
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, roles: ['مدیر' , 'کاربر'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, roles: ['کاربر'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, roles: ['مسئول انبار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', id: 100256, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
  ]
  // roleTitle :string[] = ['کاربر','مدیر']

  roleTitle = '';
  roleStyle = '';


  constructor() { }


  public onList() {
    this.btnClick.emit();
  }
  public setRoleTitle(roleTitle: string) {
    // console.log(roleTitle);
    if (roleTitle === 'مدیر') {
      this.roleStyle = 'manager';
    }
    else if (roleTitle === 'حسابدار') {
      this.roleStyle = 'accountant';
    }
    else if (roleTitle === 'کاربر') {
      this.roleStyle = 'user';
    }
    else if (roleTitle === 'مسئول انبار') {
      this.roleStyle = 'storekeeper'
    }  
  }
  ngOnInit(): void {
  }
  dataSource = new MatTableDataSource<periodicEelement>(this.elements);
  selection = new SelectionModel<periodicEelement>(true, []);

  public onChecked(e: boolean) {
    this.checked = e;
  }

  // public isAllSelected(){
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }
}
