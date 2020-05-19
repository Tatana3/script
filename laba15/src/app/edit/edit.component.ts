import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formEdit: FormGroup;
  disabled=false;
  id;
  person:any;

  constructor(
    public router:Router,
    public activeRouter:ActivatedRoute,
    public http:HttpService

  ) {
    this.activeRouter.params.subscribe(param =>{
      this.id=param.id
    })
   }//.params - получает ссылку/подписывается(меняется id, меняется)

  async ngOnInit(){
    this.getPerson(this.id).then(()=>{
      console.log(this.person)
      this.formEdit = new FormGroup({
        firstName: new FormControl({value: this.person.firstName, disabled: this.disabled}, [Validators.required,Validators.pattern("^[А-Яа-яЁё]+$")]),//контролирует поле-FC, disabled-отключение поля(f-работает, t-нет)
        lastName: new FormControl({value: this.person.lastName, disabled: this.disabled}, [Validators.required,Validators.pattern("^[А-Яа-яЁё]+$")]),
        phone: new FormControl({value: this.person.phone, disabled: this.disabled}, [Validators.required])
      })
    })
  }

  async getPerson(id){
  try{
    this.person = await this.http.getPersonById(id)
  }
  catch(e){
    console.log(e);
  }
    
  }

  async onEdit(){
    await this.http.putPersons(this.id, this.formEdit.value);
    this.router.navigate(["view"])// на домашнюю
  }

}
