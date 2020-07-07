import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpisokComponent } from './spisok/spisok.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path: "spisok", component: SpisokComponent},
  {path: "view", component: ViewComponent},
  {path: "add", component: AddComponent},
  {path: 'spisok/edit/:id', component: EditComponent},
  {path: "**",redirectTo: "view"},//возврат, если путь неизвестный
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
