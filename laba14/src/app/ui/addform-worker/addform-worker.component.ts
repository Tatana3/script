import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
 
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;
  disabled=false;
  @Input() workers: MyWorker[] = [];
  @Output() addWorker = new EventEmitter<MyWorker>();
  
  
  formAdd: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formAdd = new FormGroup( {
      name: new FormControl({value: "", disabled: this.disabled}, [Validators.required,Validators.pattern("^[А-Яа-яЁё]+$")]),//контролирует поле-FC, disabled-отключение поля(f-работает, t-нет)  
      surname: new FormControl({value: "", disabled: this.disabled},  [Validators.required,Validators.pattern("^[А-Яа-яЁё]+$")]),
      phone: new FormControl({value: "", disabled: this.disabled}, [Validators.required])
    })
  }

  onAddWorker() {
    this.addWorker.emit({
    name: this.formAdd.value.name,
    surname: this.formAdd.value.surname,
    phone: this.formAdd.value.phone,
    type: this.type,
    });
    console.log();
   }
}
