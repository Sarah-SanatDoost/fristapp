import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMenuComponent } from './display-mode/card-menu/card-menu.component';
import { ListComponent } from './display-mode/list/list.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '' ,component: MenuComponent },
  {path: 'list', component: ListComponent},
  {path: 'card', component: CardMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
