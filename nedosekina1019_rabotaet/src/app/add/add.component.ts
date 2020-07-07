import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  disabled: false;

  constructor(
    public http:HttpService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl({value:"", disabled: this.disabled}, [Validators.required,Validators.pattern("^[A-Za-zА-Яа-яЁё]")]),
      artic: new FormControl({value: "", disabled: this.disabled}, [Validators.required,Validators.pattern("^[0-9]{2}-[0-9]{4}")]),
      price: new FormControl({value: "", disabled: this.disabled}, [Validators.required,Validators.pattern("^[0-9]{,7}")]),
      manufact: new FormControl({value: "", disabled: this.disabled}, [Validators.required]),
      type: new FormControl({value: "", disabled: this.disabled}, [Validators.required]),
      poids: new FormControl({value: "", disabled: this.disabled}, [Validators.required]),
      kolich: new FormControl({value: "", disabled: this.disabled}, [Validators.required])
    })
  }

  async onAdd(){
    await this.http.postProducts(this.addForm.value);
    this.router.navigate(["spisok"])
  }

}
