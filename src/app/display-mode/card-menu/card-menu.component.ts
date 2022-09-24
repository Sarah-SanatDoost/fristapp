import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { periodicEelement } from 'src/app/menu/interface/periodicElement';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { CardCheckboxSelectedService } from 'src/app/services/card-checkbox-selected.service';


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

  elements: periodicEelement[] = [
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: true, id: 10256, roles: ['مدیر', 'کاربر'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'شهرود اشتری', active: true, id: 10257, roles: ['کاربر'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10258, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10259, roles: ['مسئول انبار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10260, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10261, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
  ]

  roleTitle = '';
  roleStyle = ''

  constructor(public checkboxSelectedService :CardCheckboxSelectedService) { }


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

  public onChecked(e: boolean ) {
    this.checked = e

    if(this.checked ){
      for(let i=0 ; i<this.elements.length ; i++){
        this.checkboxSelectedService.checkboxSelected.push(this.elements[i].id)
      }
    }
    else{
      this.checkboxSelectedService.checkboxSelected=[]
    }
  }

  public onSelected(e: any, id: number) {
    let i = this.checkboxSelectedService.checkboxSelected.indexOf(id)


    if (!this.checkboxSelectedService.checkboxSelected.includes(id)) {
      this.checkboxSelectedService.checkboxSelected.push(id)
    }
    else {
      this.checkboxSelectedService.checkboxSelected.splice(i, 1)
    }
    // console.log(this.checkboxSelected)
  }
}
 






  // public isAllSelected(){
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

