import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formAdd: FormGroup;
  disabled=false;

  constructor(
    public http:HttpService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      firstName: new FormControl({value: "", disabled: this.disabled}, [Validators.required,Validators.pattern("^[А-Яа-яЁё]+$")]),//контролирует поле-FC, disabled-отключение поля(f-работает, t-нет)
      lastName: new FormControl({value: "", disabled: this.disabled}, [Validators.required,Validators.pattern("^[А-Яа-яЁё]+$")]),
      phone: new FormControl({value: "", disabled: this.disabled}, [Validators.required])
    })
  }

  async onAdd(){
    console.log(this.formAdd.value.firstName);
    await this.http.postPerson(this.formAdd.value);
    this.router.navigate(["view"])// на домашнюю
  }

}

