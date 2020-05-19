import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path: "view",component:ViewComponent},
  {path: "add",component:AddComponent},
  {path: 'view/edit/:id', component: EditComponent},//: параметр может меняться
  {path: "**",redirectTo:"/view"}//если неизвестная ссылка-перенаправляем на начальную
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
